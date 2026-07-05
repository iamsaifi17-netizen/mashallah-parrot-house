"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search, Bird } from "lucide-react";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Bird Care Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-charcoal">
            <Bird className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-display text-lg text-beige md:text-xl">
            MashAllah <span className="text-gold-light">Parrot House</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-sm text-beige/80 transition-colors hover:text-gold-light"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <form
          onSubmit={handleSearch}
          className="hidden max-w-xs flex-1 items-center rounded-full border border-beige/20 bg-charcoal-light px-4 py-2 md:flex"
        >
          <Search className="h-4 w-4 text-beige/50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search parrots..."
            className="w-full bg-transparent px-2 text-sm text-beige placeholder:text-beige/40 focus:outline-none"
          />
        </form>

        <Button href="/shop" variant="gold" className="hidden md:inline-flex">
          Shop Now
        </Button>

        <button
          className="text-beige lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-charcoal px-4 pb-6 pt-4 lg:hidden">
          <form onSubmit={handleSearch} className="mb-4 flex items-center rounded-full border border-beige/20 bg-charcoal-light px-4 py-2">
            <Search className="h-4 w-4 text-beige/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search parrots..."
              className="w-full bg-transparent px-2 text-sm text-beige placeholder:text-beige/40 focus:outline-none"
            />
          </form>
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-base text-beige/90"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
