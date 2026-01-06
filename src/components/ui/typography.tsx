import { cn } from "@/lib/utils";

export function ProseMono({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "prose prose-sm dark:prose-invert max-w-none prose-ul:list-disc prose-ol:list-decimal",
                className
            )}
        >
            {children}
        </div>
    );
}
