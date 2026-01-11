import { AlertCircle, Info, Lightbulb, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children?: ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  { icon: typeof Info; className: string; defaultTitle: string }
> = {
  info: {
    icon: Info,
    className: "border-info bg-info/10 text-info-foreground",
    defaultTitle: "Note",
  },
  warning: {
    icon: TriangleAlert,
    className: "border-warning bg-warning/10 text-warning-foreground",
    defaultTitle: "Warning",
  },
  tip: {
    icon: Lightbulb,
    className: "border-success bg-success/10 text-success-foreground",
    defaultTitle: "Tip",
  },
  danger: {
    icon: AlertCircle,
    className:
      "border-destructive bg-destructive/10 text-destructive-foreground",
    defaultTitle: "Danger",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border-l-4 p-4",
        config.className,
      )}
    >
      <Icon className="mt-0.5 size-5 shrink-0" />
      <div className="flex-1">
        {title && (
          <p className="mb-1 font-semibold">{title || config.defaultTitle}</p>
        )}
        <div className="text-sm [&>p]:mt-0">{children}</div>
      </div>
    </div>
  );
}
