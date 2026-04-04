import { ReactNode } from "react";

type BentoItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <div className="ac-bento">
      {items.map((item) => (
        <article className="ac-bento-item" key={item.title}>
          <div className="ac-bento-icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
