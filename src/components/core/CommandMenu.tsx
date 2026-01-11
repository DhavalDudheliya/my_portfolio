"use client";

import {
  BookOpen,
  Briefcase,
  Code,
  FileText,
  FolderGit2,
  GitBranch,
  Home,
  Mail,
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
import { useThemeToggle } from "@/hooks/use-theme-toggle";

import { ThemeToggleButton } from "./ThemeSwitch";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface CommandAction {
  category: "Navigation" | "Settings";
  label: string;
  value: string;
  icon: React.ReactNode;
  action: () => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useTransitionRouter();
  const { toggleTheme } = useThemeToggle();
  const [search, setSearch] = React.useState("");

  const commands: CommandAction[] = React.useMemo(
    () => [
      {
        category: "Navigation",
        label: "Home",
        value: "home",
        icon: <Home className="h-3 w-3" />,
        action: () => router.push("/"),
      },
      {
        category: "Navigation",
        label: "Projects",
        value: "projects",
        icon: <FolderGit2 className="h-3 w-3" />,
        action: () => router.push("/projects"),
      },
      {
        category: "Navigation",
        label: "Blog",
        value: "blog",
        icon: <BookOpen className="h-3 w-3" />,
        action: () => router.push("/blog"),
      },
      {
        category: "Navigation",
        label: "Resume",
        value: "resume",
        icon: <FileText className="h-3 w-3" />,
        action: () => router.push("/resume"),
      },
      {
        category: "Navigation",
        label: "About",
        value: "about",
        icon: <User className="h-3 w-3" />,
        action: () => router.push("/#about"),
      },
      {
        category: "Navigation",
        label: "Experience",
        value: "experience",
        icon: <Briefcase className="h-3 w-3" />,
        action: () => router.push("/#experience"),
      },
      {
        category: "Navigation",
        label: "Skills",
        value: "skills",
        icon: <Code className="h-3 w-3" />,
        action: () => router.push("/#skills"),
      },
      {
        category: "Navigation",
        label: "Contributions",
        value: "contributions",
        icon: <GitBranch className="h-3 w-3" />,
        action: () => router.push("/#contributions"),
      },
      {
        category: "Navigation",
        label: "Contact",
        value: "contact",
        icon: <Mail className="h-3 w-3" />,
        action: () => router.push("/#contacts"),
      },
      {
        category: "Settings",
        label: "Toggle Theme",
        value: "theme",
        icon: (
          <>
            <ThemeToggleButton />
          </>
        ),
        action: () => toggleTheme(),
      },
    ],
    [router, toggleTheme],
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
    (commandAction: () => void) => {
      onOpenChange(false);
      commandAction();
    },
    [onOpenChange],
  );

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(search.toLowerCase()),
  );

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

  const categories: ("Navigation" | "Settings")[] = ["Navigation", "Settings"];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandDialogPopup>
        <Command>
          <CommandInput
            placeholder="Type a command or search..."
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
                    <CommandGroupLabel>{category}</CommandGroupLabel>
                    {categoryCommands.map((command) => (
                      <CommandItem
                        key={command.value}
                        value={command.value}
                        className="cursor-pointer"
                        onSelect={() => runCommand(command.action)}
                        onClick={() => runCommand(command.action)}
                      >
                        <div className="mr-2 flex h-4 w-4 items-center justify-center">
                          {command.icon}
                        </div>
                        {command.label}
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
