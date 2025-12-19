import { ReactNode } from "react";
import { AlertTriangle, Info, CheckCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface HighlightBlockProps {
  type: "attention" | "rule" | "observation" | "recommendation";
  title?: string;
  children: ReactNode;
}

const icons = {
  attention: AlertTriangle,
  rule: Info,
  observation: CheckCircle,
  recommendation: Lightbulb,
};

const styles = {
  attention: "highlight-attention",
  rule: "highlight-rule",
  observation: "highlight-observation",
  recommendation: "highlight-recommendation",
};

const titles = {
  attention: "Atenção",
  rule: "Regra",
  observation: "Observação",
  recommendation: "Recomendação",
};

const iconColors = {
  attention: "text-amber-600",
  rule: "text-primary",
  observation: "text-slate-500",
  recommendation: "text-emerald-600",
};

export function HighlightBlock({ type, title, children }: HighlightBlockProps) {
  const Icon = icons[type];
  const displayTitle = title || titles[type];

  return (
    <div className={cn(styles[type], "my-4 animate-fade-in")}>
      <div className="flex items-start gap-3">
        <Icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", iconColors[type])} />
        <div>
          <h4 className="font-semibold mb-1">{displayTitle}</h4>
          <div className="text-sm text-foreground/80">{children}</div>
        </div>
      </div>
    </div>
  );
}
