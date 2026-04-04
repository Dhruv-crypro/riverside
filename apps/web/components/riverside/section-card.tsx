import { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function SectionCard({ title, subtitle, children }: SectionCardProps) {
  return (
    <section className="rs-card">
      <div className="rs-card-head">
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
