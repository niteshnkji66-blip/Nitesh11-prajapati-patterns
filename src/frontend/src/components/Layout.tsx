import { Link, useLocation } from "@tanstack/react-router";
import { BookOpen, Menu, TrendingUp, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/patterns", label: "Pattern Library" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className="sticky top-0 z-40 bg-card border-b border-border shadow-subtle"
      data-ocid="nav"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="nav-logo"
        >
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center shrink-0 group-hover:bg-primary/90 transition-colors duration-200">
            <TrendingUp className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm text-foreground tracking-tight">
              Candlestick Patterns
            </span>
            <span className="text-[10px] text-muted-foreground font-body tracking-wide uppercase">
              by NK Prajapati
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-ocid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-ocid="nav-mobile-toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                data-ocid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4 text-primary/70" />
            <span>
              Educational candlestick reference by{" "}
              <span className="font-semibold text-foreground">
                NK Prajapati
              </span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
            ⚠️ Educational purposes only. Not financial advice. Always consult a
            qualified professional before making trading decisions.
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>
            © {year}. Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
          <span>All patterns for educational reference only</span>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
