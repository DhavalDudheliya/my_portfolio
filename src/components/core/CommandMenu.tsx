"use client";

import {
  BookOpen,
  Briefcase,
  Code,
  Copy,
  Download,
  ExternalLink,
  FileText,
  FolderGit2,
  GitBranch,
  Github,
  Home,
  Linkedin,
  Mail,
  Moon,
  Sparkles,
  Terminal,
  User,
} from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import * as React from "react";

import {
  Command,
  CommandDialog,
  CommandDialogPopup,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { PROJECTS } from "@/config/Projects";
import { resumeConfig } from "@/config/Resume";
import { seoConfig } from "@/config/seo.config";
import { useThemeToggle } from "@/hooks/use-theme-toggle";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type CommandCategory =
  | "Navigation"
  | "Projects"
  | "Quick Actions"
  | "Settings"
  | "Hidden";

interface CommandAction {
  category: CommandCategory;
  label: string;
  value: string;
  description?: string;
  keywords?: string[];
  badge?: string;
  hidden?: boolean;
  icon: React.ReactNode;
  action: () => void | Promise<void>;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useTransitionRouter();
  const { toggleTheme } = useThemeToggle();
  const [search, setSearch] = React.useState("");

  const openExternal = React.useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const copyText = React.useCallback(async (text: string) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }, []);

  const commands: CommandAction[] = React.useMemo(
    () => [
      {
        category: "Navigation",
        label: "Home",
        value: "home hero dhaval",
        description: "Back to the opening profile section.",
        icon: <Home className="h-3 w-3" />,
        action: () => router.push("/"),
      },
      {
        category: "Navigation",
        label: "Projects",
        value: "projects work case studies",
        description: "Browse all featured engineering work.",
        icon: <FolderGit2 className="h-3 w-3" />,
        action: () => router.push("/projects"),
      },
      {
        category: "Navigation",
        label: "Blog",
        value: "blog writing articles",
        description: "Read technical notes and long-form posts.",
        icon: <BookOpen className="h-3 w-3" />,
        action: () => router.push("/blog"),
      },
      {
        category: "Navigation",
        label: "Resume",
        value: "resume cv profile",
        description: "Open the resume page.",
        icon: <FileText className="h-3 w-3" />,
        action: () => router.push("/resume"),
      },
      {
        category: "Navigation",
        label: "About",
        value: "about bio software engineer",
        description: "Jump to the short professional summary.",
        icon: <User className="h-3 w-3" />,
        action: () => router.push("/#about"),
      },
      {
        category: "Navigation",
        label: "Experience",
        value: "experience work history companies",
        description: "Jump to role history and responsibilities.",
        icon: <Briefcase className="h-3 w-3" />,
        action: () => router.push("/#experience"),
      },
      {
        category: "Navigation",
        label: "Skills",
        value: "skills technologies stack tools",
        description: "Jump to the technology stack.",
        icon: <Code className="h-3 w-3" />,
        action: () => router.push("/#skills"),
      },
      {
        category: "Navigation",
        label: "Contributions",
        value: "contributions github activity graph",
        description: "Jump to GitHub activity.",
        icon: <GitBranch className="h-3 w-3" />,
        action: () => router.push("/#contributions"),
      },
      {
        category: "Navigation",
        label: "Contact",
        value: "contact email message hire",
        description: "Jump to contact options and message form.",
        icon: <Mail className="h-3 w-3" />,
        action: () => router.push("/#contacts"),
      },
      ...PROJECTS.map((project) => ({
        category: "Projects" as const,
        label: project.title,
        value: `${project.title} ${project.slug} ${project.technologies.join(" ")} ${project.status}`,
        description: project.description,
        keywords: project.technologies,
        badge: project.status,
        icon:
          project.status === "Building" ? (
            <Sparkles className="h-3 w-3" />
          ) : (
            <FolderGit2 className="h-3 w-3" />
          ),
        action: () => router.push(`/projects/${project.slug}`),
      })),
      {
        category: "Quick Actions",
        label: "Download Resume",
        value: "download resume cv pdf",
        description: "Download the latest resume file.",
        icon: <Download className="h-3 w-3" />,
        action: () => openExternal(resumeConfig.downloadUrl),
      },
      {
        category: "Quick Actions",
        label: "Copy Email",
        value: "copy email contact mail",
        description: seoConfig.author.email,
        icon: <Copy className="h-3 w-3" />,
        action: () => copyText(seoConfig.author.email),
      },
      {
        category: "Quick Actions",
        label: "Email Me",
        value: "email mail contact message",
        description: "Start a message in your mail client.",
        icon: <Mail className="h-3 w-3" />,
        action: () => {
          window.location.href = `mailto:${seoConfig.author.email}`;
        },
      },
      {
        category: "Quick Actions",
        label: "Open GitHub",
        value: "github code repositories source",
        description: "Open Dhaval's GitHub profile.",
        icon: <Github className="h-3 w-3" />,
        action: () => openExternal(seoConfig.socialLinks[0]),
      },
      {
        category: "Quick Actions",
        label: "Open LinkedIn",
        value: "linkedin social profile professional",
        description: "Open Dhaval's LinkedIn profile.",
        icon: <Linkedin className="h-3 w-3" />,
        action: () => openExternal(seoConfig.socialLinks[1]),
      },
      {
        category: "Settings",
        label: "Toggle Theme",
        value: "theme dark light mode",
        description: "Switch between light and dark mode.",
        icon: (
          <>
            <Moon className="h-3 w-3" />
          </>
        ),
        action: () => toggleTheme(),
      },
      {
        category: "Hidden",
        label: "whoami",
        value: "whoami dhaval software engineer",
        description: "Copy a compact professional intro.",
        hidden: true,
        icon: <Terminal className="h-3 w-3" />,
        action: () =>
          copyText(
            "Dhaval Dudheliya - Software Engineer building production-grade web apps with Next.js, React, Node.js, TypeScript, and AI integrations.",
          ),
      },
    ],
    [copyText, openExternal, router, toggleTheme],
  );

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange, open]);

  const runCommand = React.useCallback(
    (commandAction: () => void | Promise<void>) => {
      onOpenChange(false);
      void commandAction();
    },
    [onOpenChange],
  );

  const normalizedSearch = search.trim().toLowerCase();

  const filteredCommands = commands.filter((command) => {
    if (command.hidden && normalizedSearch.length === 0) {
      return false;
    }

    const searchableText = [
      command.label,
      command.value,
      command.description,
      command.badge,
      ...(command.keywords ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  const groupedCommands = filteredCommands.reduce(
    (acc, command) => {
      if (!acc[command.category]) {
        acc[command.category] = [];
      }
      acc[command.category].push(command);
      return acc;
    },
    {} as Record<string, CommandAction[]>,
  );

  const categories: CommandCategory[] = [
    "Navigation",
    "Projects",
    "Quick Actions",
    "Settings",
    "Hidden",
  ];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandDialogPopup>
        <Command>
          <CommandInput
            placeholder="Search pages, projects, tech, or actions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CommandList>
            {filteredCommands.length === 0 && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            {categories.map((category, index) => {
              const categoryCommands = groupedCommands[category];
              if (!categoryCommands || categoryCommands.length === 0)
                return null;

              return (
                <React.Fragment key={category}>
                  {index > 0 && <CommandSeparator />}
                  <CommandGroup>
                    <CommandGroupLabel>
                      {category === "Hidden" ? "Developer" : category}
                    </CommandGroupLabel>
                    {categoryCommands.map((command) => (
                      <CommandItem
                        key={command.value}
                        value={command.value}
                        className="cursor-pointer gap-3"
                        onSelect={() => runCommand(command.action)}
                        onClick={() => runCommand(command.action)}
                      >
                        <div className="bg-muted text-muted-foreground flex h-7 w-7 shrink-0 items-center justify-center rounded-md">
                          {command.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate font-medium">
                              {command.label}
                            </span>
                            {command.badge && (
                              <span className="border-border text-muted-foreground shrink-0 rounded border px-1.5 py-0.5 text-[10px] leading-none">
                                {command.badge}
                              </span>
                            )}
                          </div>
                          {command.description && (
                            <p className="text-muted-foreground line-clamp-1 text-xs">
                              {command.description}
                            </p>
                          )}
                        </div>
                        {command.category === "Quick Actions" && (
                          <ExternalLink className="text-muted-foreground h-3.5 w-3.5 shrink-0" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </React.Fragment>
              );
            })}
          </CommandList>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
