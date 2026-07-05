import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 md:px-8">
      <Reveal>
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-emerald-deep hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Bird Care Blog
        </Link>
        <span className="mt-6 block text-xs uppercase tracking-wide text-gold-dark">
          {post.category} · {post.readTime}
        </span>
        <h1 className="mt-2 font-display text-3xl text-charcoal md:text-4xl">{post.title}</h1>
        <div className="mt-8 space-y-5">
          {post.body.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-charcoal/75">
              {para}
            </p>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
