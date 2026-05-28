"use client";

import { Palette, RotateCcw, UserRound } from "lucide-react";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ThemeMode = "Light" | "Dark";

type DemoContextValue = {
  count: number;
  revision: number;
  theme: ThemeMode;
  user: string;
  changeTheme: () => void;
  incrementCount: () => void;
  resetDemo: () => void;
  updateUser: () => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

const users = ["Aarav", "Dev", "Kabir", "Vihaan"];

function useDemoContext() {
  const context = useContext(DemoContext);

  if (!context) {
    throw new Error(
      "ContextRerenderVisualizer must be used inside DemoProvider",
    );
  }

  return context;
}

function DemoProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("Light");
  const [userIndex, setUserIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [revision, setRevision] = useState(0);

  const markContextUpdate = useCallback(() => {
    setRevision((currentRevision) => currentRevision + 1);
  }, []);

  const changeTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "Light" ? "Dark" : "Light"));
    markContextUpdate();
  }, [markContextUpdate]);

  const updateUser = useCallback(() => {
    setUserIndex((currentIndex) => (currentIndex + 1) % users.length);
    markContextUpdate();
  }, [markContextUpdate]);

  const incrementCount = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
    markContextUpdate();
  }, [markContextUpdate]);

  const resetDemo = useCallback(() => {
    setTheme("Light");
    setUserIndex(0);
    setCount(0);
    setRevision(0);
  }, []);

  const value = useMemo(
    () => ({
      count,
      revision,
      theme,
      user: users[userIndex],
      changeTheme,
      incrementCount,
      resetDemo,
      updateUser,
    }),
    [
      changeTheme,
      count,
      incrementCount,
      resetDemo,
      revision,
      theme,
      updateUser,
      userIndex,
    ],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

type DemoCardProps = {
  accentClassName: string;
  description: string;
  label: string;
  value: string;
};

function RenderDemoCard({
  accentClassName,
  description,
  label,
  value,
}: DemoCardProps) {
  const { revision } = useDemoContext();

  return (
    <Card
      key={revision}
      className={cn(
        "min-h-[190px] gap-4 overflow-hidden rounded-lg py-0",
        revision > 0 && "animate-[context-flash_700ms_ease-out]",
      )}
    >
      <CardHeader className="gap-3 border-b px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base">{label}</CardTitle>
            <p className="text-muted-foreground mt-1 text-sm leading-5">
              {description}
            </p>
          </div>
          <Badge variant="warning" className="h-auto py-1 text-xs">
            {revision} re-renders
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-5">
        <div
          className={cn(
            "rounded-lg border px-4 py-5 text-center text-2xl font-semibold",
            accentClassName,
          )}
        >
          {value}
        </div>
      </CardContent>
    </Card>
  );
}

function ThemeCard() {
  const { theme } = useDemoContext();

  return (
    <RenderDemoCard
      accentClassName="border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-100"
      description="Only reads theme"
      label="ThemeCard"
      value={theme}
    />
  );
}

function UserCard() {
  const { user } = useDemoContext();

  return (
    <RenderDemoCard
      accentClassName="border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-100"
      description="Only reads user"
      label="UserCard"
      value={user}
    />
  );
}

function CounterCard() {
  const { count } = useDemoContext();

  return (
    <RenderDemoCard
      accentClassName="border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100"
      description="Only reads count"
      label="CounterCard"
      value={String(count)}
    />
  );
}

function DemoControls() {
  const {
    changeTheme,
    incrementCount,
    resetDemo,
    updateUser,
    count,
    theme,
    user,
  } = useDemoContext();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button onClick={changeTheme} size="sm">
        <Palette />
        Change Theme
      </Button>
      <Button onClick={updateUser} size="sm" variant="secondary">
        <UserRound />
        Update User
      </Button>
      <Button onClick={incrementCount} size="sm" variant="outline">
        + Increment
      </Button>
      <Button
        aria-label="Reset demo"
        onClick={resetDemo}
        size="icon-sm"
        variant="ghost"
      >
        <RotateCcw />
      </Button>
      <div className="text-muted-foreground ml-auto text-sm">
        Context value: {theme} / {user} / {count}
      </div>
    </div>
  );
}

export function ContextRerenderVisualizer() {
  return (
    <DemoProvider>
      <section className="not-prose bg-muted/20 my-8 rounded-xl border p-4 shadow-sm sm:p-5">
        <div className="mb-4">
          <h3 className="text-foreground text-lg font-semibold">
            Context API Live Demo: Re-render Visualizer
          </h3>
          <p className="text-muted-foreground mt-1 text-sm leading-6">
            Click any action and all three consumers flash because the shared
            provider value changed.
          </p>
        </div>
        <DemoControls />
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          <ThemeCard />
          <UserCard />
          <CounterCard />
        </div>
      </section>
      <style jsx global>{`
        @keyframes context-flash {
          0% {
            border-color: rgb(245 158 11 / 0.95);
            box-shadow: 0 0 0 3px rgb(245 158 11 / 0.26);
            transform: translateY(-2px);
          }
          100% {
            border-color: var(--border);
            box-shadow: none;
            transform: translateY(0);
          }
        }
      `}</style>
    </DemoProvider>
  );
}
