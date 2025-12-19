import { Check } from "lucide-react";

interface FeatureListProps {
  items: string[];
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Check className="h-5 w-5 text-iveco-success flex-shrink-0 mt-0.5" />
          <span className="text-foreground/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}
