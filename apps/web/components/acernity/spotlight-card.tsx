"use client";

import { ReactNode } from "react";

type SpotlightCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function SpotlightCard({ title, description, icon }: SpotlightCardProps) {
  return (
    <article className="ac-card">
      <div className="ac-glow" aria-hidden="true" />
      <div className="ac-content">
        <div className="ac-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
