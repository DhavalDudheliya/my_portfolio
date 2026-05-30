"use client";

import { List } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  content: string;
}

interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

interface IndicatorStyle {
  height: number;
  top: number;
}

function stripMarkdown(value: string) {
  return value
    .replace(/\{#[^}]+\}/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[`*_~[\]]/g, "")
    .trim();
}

function slugify(value: string, counts: Map<string, number>) {
  const baseSlug =
    stripMarkdown(value)
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section";

  const count = counts.get(baseSlug) ?? 0;
  counts.set(baseSlug, count + 1);

  return count === 0 ? baseSlug : `${baseSlug}-${count}`;
}

function getHeadings(content: string): TocItem[] {
  const counts = new Map<string, number>();
  const headings: TocItem[] = [];
  let inCodeBlock = false;

  for (const line of content.split("\n")) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) continue;

    const title = stripMarkdown(match[2]);
    if (!title) continue;

    headings.push({
      id: slugify(title, counts),
      title,
      level: match[1].length as 2 | 3,
    });
  }

  return headings;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const parsedItems = useMemo(() => getHeadings(content), [content]);
  const [items, setItems] = useState(parsedItems);
  const [visibleIds, setVisibleIds] = useState<string[]>(
    parsedItems[0] ? [parsedItems[0].id] : [],
  );
  const [indicator, setIndicator] = useState<IndicatorStyle>({
    height: 0,
    top: 0,
  });
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<string, HTMLAnchorElement>());

  useEffect(() => {
    let frameId = 0;
    const renderedHeadings = Array.from(
      document.querySelectorAll<HTMLElement>("article h2[id], article h3[id]"),
    );

    if (renderedHeadings.length === 0) {
      return undefined;
    }

    const resolvedItems = parsedItems.map((item, index) => {
      const renderedHeading = renderedHeadings[index];
      const renderedLevel = Number(renderedHeading?.tagName.slice(1));

      if (renderedHeading && renderedLevel === item.level) {
        return {
          ...item,
          id: renderedHeading.id,
        };
      }

      return item;
    });

    frameId = requestAnimationFrame(() => {
      setItems(resolvedItems);
      setVisibleIds(resolvedItems[0] ? [resolvedItems[0].id] : []);
    });

    return () => cancelAnimationFrame(frameId);
  }, [parsedItems]);

  useEffect(() => {
    if (!items.length) return;

    let frameId = 0;
    const listElement = listRef.current;

    function getVisibleHeadingIds() {
      const viewportTop = 96;
      const viewportBottom = window.innerHeight - 96;
      const headingRects = items
        .map((item) => ({
          ...item,
          rect: document.getElementById(item.id)?.getBoundingClientRect(),
        }))
        .filter(
          (item): item is TocItem & { rect: DOMRect } =>
            item.rect !== undefined,
        );

      const idsInView = headingRects
        .filter(
          ({ rect }) => rect.top >= viewportTop && rect.top <= viewportBottom,
        )
        .map(({ id }) => id);

      if (idsInView.length > 0) return idsInView;

      const currentHeading =
        headingRects.findLast(({ rect }) => rect.top <= viewportTop) ??
        headingRects[0];

      return currentHeading ? [currentHeading.id] : [];
    }

    function updateIndicator(ids: string[]) {
      const list = listRef.current;
      const firstItem = itemRefs.current.get(ids[0]);
      const lastItem = itemRefs.current.get(ids[ids.length - 1]);
      if (!list || !firstItem || !lastItem) return;

      const firstRect = firstItem.getBoundingClientRect();
      const lastRect = lastItem.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();

      setIndicator({
        height: lastRect.bottom - firstRect.top,
        top: firstRect.top - listRect.top,
      });
    }

    function updateVisibleRange() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const ids = getVisibleHeadingIds();
        setVisibleIds(ids);
        updateIndicator(ids);
      });
    }

    updateVisibleRange();
    window.addEventListener("scroll", updateVisibleRange, { passive: true });
    window.addEventListener("resize", updateVisibleRange);
    listElement?.addEventListener("scroll", updateVisibleRange, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateVisibleRange);
      window.removeEventListener("resize", updateVisibleRange);
      listElement?.removeEventListener("scroll", updateVisibleRange);
    };
  }, [items]);

  function handleTocClick(id: string) {
    const heading = document.getElementById(id);
    if (!heading) return;

    heading.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
    setVisibleIds([id]);
  }

  if (items.length === 0) return null;

  return (
    <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-hidden">
      <div className="mb-5 flex items-center gap-2 text-[0.72rem] font-bold tracking-widest text-slate-500 uppercase dark:text-slate-400">
        <List className="text-primary size-4" aria-hidden="true" />
        <span>IN THIS ARTICLE</span>
      </div>

      <nav aria-label="Table of contents" className="relative">
        <span
          className="absolute top-1 bottom-1 left-0 w-px bg-slate-200 dark:bg-white/15"
          aria-hidden="true"
        />
        <span
          className="bg-primary absolute left-0 z-10 w-[2px] rounded-full transition-[height,transform] duration-300 ease-out"
          style={{
            height: `${indicator.height}px`,
            transform: `translateY(${indicator.top}px)`,
          }}
          aria-hidden="true"
        />

        <div
          ref={listRef}
          className="hover:[&::-webkit-scrollbar-thumb]:bg-primary/50 max-h-[calc(100vh-11rem)] overflow-y-auto py-1 pr-2 pl-4 [scrollbar-color:transparent_transparent] [scrollbar-width:thin] hover:[scrollbar-color:var(--primary)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-button]:hidden [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar-track]:bg-transparent"
        >
          <ol className="space-y-0.5">
            {items.map((item) => {
              const isActive = visibleIds.includes(item.id);

              return (
                <li key={item.id}>
                  <a
                    ref={(node) => {
                      if (node) {
                        itemRefs.current.set(item.id, node);
                      } else {
                        itemRefs.current.delete(item.id);
                      }
                    }}
                    href={`#${item.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleTocClick(item.id);
                    }}
                    className={cn(
                      "block rounded-sm py-1.5 text-sm leading-5 transition-colors duration-200",
                      item.level === 3 && "pl-4 text-[0.82rem]",
                      isActive
                        ? "font-semibold text-slate-950 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </div>
  );
}
