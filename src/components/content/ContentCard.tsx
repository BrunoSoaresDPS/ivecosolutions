import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function ContentCard({ title, children, className, icon }: ContentCardProps) {
  return (
    <div className={cn("iveco-card p-6 animate-fade-in", className)}>
      {title && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-primary">{icon}</div>}
          <h3 className="subsection-title mb-0">{title}</h3>
        </div>
      )}
      <div className="text-foreground/80">{children}</div>
    </div>
  );
}
