import { ReactNode } from "react";

type AuroraPanelProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export default function AuroraPanel({ title, subtitle, children }: AuroraPanelProps) {
  return (
    <section className="ac-aurora">
      <div className="ac-aurora-glow" aria-hidden="true" />
      <div className="ac-aurora-content">
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
