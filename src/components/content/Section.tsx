import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-12 scroll-mt-32">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
