import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bird Care Blog",
  description: "Feeding tips, training advice, and health guidance for parrot owners.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Learn"
          title="Bird Care Blog"
          description="Practical, vet-informed guidance for every stage of parrot ownership."
          align="center"
        />
      </Reveal>
      <div className="mt-12 space-y-6">
        {blogPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between gap-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5 transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center"
            >
              <div>
                <span className="text-xs uppercase tracking-wide text-gold-dark">{post.category} · {post.readTime}</span>
                <h2 className="mt-1 font-display text-xl text-charcoal group-hover:text-emerald-deep">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-charcoal/60">{post.excerpt}</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-emerald-deep transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
