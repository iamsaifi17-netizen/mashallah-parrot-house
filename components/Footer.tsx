import Link from "next/link";
import { Bird, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { categories } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal text-beige">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-charcoal">
              <Bird className="h-5 w-5" />
            </span>
            <span className="font-display text-lg">MashAllah Parrot House</span>
          </div>
          <p className="max-w-xs text-sm text-beige/60">
            Karachi&apos;s trusted home for ethically raised parrots — from
            budgies to majestic macaws.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-beige/20 text-beige/70 transition-colors hover:border-gold hover:text-gold-light"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base text-gold-light">Quick Links</h3>
          <ul className="space-y-2 text-sm text-beige/70">
            <li><Link href="/shop" className="hover:text-gold-light">Shop</Link></li>
            <li><Link href="/about" className="hover:text-gold-light">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-gold-light">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-gold-light">Bird Care Blog</Link></li>
            <li><Link href="/faq" className="hover:text-gold-light">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base text-gold-light">Bird Categories</h3>
          <ul className="space-y-2 text-sm text-beige/70">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/shop?category=${c.slug}`} className="hover:text-gold-light">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-base text-gold-light">Contact</h3>
          <ul className="space-y-3 text-sm text-beige/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold-light" /> {BUSINESS.city}</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-gold-light" /> {BUSINESS.phoneDisplay}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-gold-light" /> {BUSINESS.email}</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0 text-gold-light" /> {BUSINESS.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-beige/10 px-4 py-6 text-center text-xs text-beige/50 md:px-8">
        © {new Date().getFullYear()} MashAllah Parrot House. All rights reserved. Owned by Atta ur Rehman &amp; Muhammad Imran.
      </div>
    </footer>
  );
}
