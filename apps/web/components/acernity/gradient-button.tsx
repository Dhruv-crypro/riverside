import Link from "next/link";
import { ReactNode } from "react";

type GradientButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "dark";
};

export default function GradientButton({ href, children, variant = "gold" }: GradientButtonProps) {
  return (
    <Link href={href} className={`ac-btn ${variant === "gold" ? "ac-btn-gold" : "ac-btn-dark"}`}>
      {children}
    </Link>
  );
}
