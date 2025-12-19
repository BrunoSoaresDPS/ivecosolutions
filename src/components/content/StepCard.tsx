interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="iveco-card p-5 flex gap-4 animate-fade-in">
      <div className="w-12 h-12 rounded-full iveco-gradient flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground font-bold text-lg">{number}</span>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
