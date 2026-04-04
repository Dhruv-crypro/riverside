import Link from "next/link";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import "./globals.css";

function getMetadataBase() {
  try {
    return new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000");
  } catch {
    return new URL("http://localhost:3000");
  }
}

export const metadata = {
  metadataBase: getMetadataBase(),
  title: "Riverside Clone",
  description: "Premium black-and-gold Riverside-style recording UI with studio, editor, library, and pricing pages.",
  openGraph: {
    title: "Riverside Clone",
    description: "Record, edit, and publish in a premium creator-first interface.",
    url: "/",
    siteName: "Riverside Clone"
  },
  twitter: {
    card: "summary_large_image",
    title: "Riverside Clone",
    description: "Premium black-and-gold recording workflow UI."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <div className="shell">
            <header className="top-nav">
              <div className="container nav-inner">
                <Link href="/" className="brand">
                  Riverside
                </Link>
                <div className="cta-row">
                  <Link href="/dashboard" className="btn ghost">Dashboard</Link>
                  <Link href="/studio" className="btn ghost">Studio</Link>
                  <Link href="/recordings" className="btn ghost">Recordings</Link>
                  <Link href="/pricing" className="btn ghost">Pricing</Link>
                  <SignedOut>
                    <SignInButton>
                      <button className="btn ghost">Sign In</button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="btn primary">Get Started</button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </header>
            {children}
            <footer className="site-footer">
              <div className="container footer-inner">
                <span>© {new Date().getFullYear()} Riverside Clone</span>
                <div className="cta-row">
                  <Link href="/pricing">Pricing</Link>
                  <Link href="/dashboard">Dashboard</Link>
                </div>
              </div>
            </footer>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
