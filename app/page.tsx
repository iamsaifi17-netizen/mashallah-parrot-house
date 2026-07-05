import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Truck, Stethoscope, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatherDivider } from "@/components/FeatherDivider";
import { Reveal } from "@/components/Reveal";
import { ParrotCard } from "@/components/ParrotCard";
import { StarRating } from "@/components/StarRating";
import { BirdImage } from "@/components/BirdImage";
import { parrots, categories, reviews, blogPosts } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function HomePage() {
  const featured = parrots.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-deep via-forest to-charcoal">
        <div className="absolute inset-0 bg-feather-texture" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-32">
          <Reveal>
            <span className="mb-5 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-light">
              Karachi&apos;s Premium Parrot House
            </span>
            <h1 className="font-display text-4xl leading-tight text-beige md:text-6xl">
              Bring Home a Bird{" "}
              <span className="italic text-gold-light">Raised with Care</span>
            </h1>
            <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-beige/75 md:text-lg">
              From playful budgies to majestic macaws, every bird at MashAllah
              Parrot House is hand-raised, health-checked, and matched to the
              right home — not just sold.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/shop" variant="gold">
                Browse Parrots <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={whatsappLink("Assalam-o-Alaikum, I'd like to know more about your parrots.")}
                variant="outline"
                className="border-beige/40 text-beige hover:bg-beige hover:text-charcoal"
                target="_blank"
              >
                Chat on WhatsApp
              </Button>
            </div>
            <div className="mt-10 flex gap-8 text-beige/80">
              <div>
                <p className="font-display text-2xl text-gold-light">6+</p>
                <p className="text-xs uppercase tracking-wide">Species Available</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold-light">500+</p>
                <p className="text-xs uppercase tracking-wide">Happy Homes</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold-light">100%</p>
                <p className="text-xs uppercase tracking-wide">Health Checked</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-square w-full max-w-md animate-float">
              <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[3rem] border border-gold/30 shadow-premium">
                <Image
                  src="/images/owners/muhammad-imran.jpg"
                  alt="MashAllah Parrot House — owner with macaws and cockatoos"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Shop by Species"
            title="Featured Categories"
            description="Six carefully bred species, each raised for temperament as much as beauty."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                href={`/shop?category=${c.slug}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <BirdImage
                  src={c.image}
                  alt={c.name}
                  label={c.name}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="font-display text-lg text-beige">{c.name}</h3>
                  <p className="hidden text-xs text-beige/70 md:block">{c.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FeatherDivider tone="gold" />

      {/* FEATURED PARROTS */}
      <section className="bg-beige-dark/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Ready for a New Home"
                title="Featured Parrots"
                description="A hand-picked selection currently available at MashAllah Parrot House."
              />
              <Button href="/shop" variant="outline">
                View All Parrots
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ParrotCard parrot={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Trusted by Bird Lovers Across Pakistan"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Stethoscope,
              title: "Health Guaranteed",
              text: "Every bird is vet-checked and vaccinated before it leaves our care.",
            },
            {
              icon: ShieldCheck,
              title: "Ethical Breeding",
              text: "No overcrowding, no shortcuts — birds raised the right way.",
            },
            {
              icon: Truck,
              title: "Nationwide Delivery",
              text: "Safe, climate-considerate delivery to major cities across Pakistan.",
            },
            {
              icon: HeartHandshake,
              title: "Lifetime Support",
              text: "Feeding and care guidance long after your bird comes home.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-charcoal/5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-deep/10 text-emerald-deep">
                  <f.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg text-charcoal">{f.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FeatherDivider flip tone="emerald" />

      {/* MEET THE OWNERS */}
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The People Behind the House"
              title="Meet the Owners"
              light
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {[
              {
                name: "Atta ur Rehman",
                role: "Co-Founder",
                image: "/images/owners/atta-ur-rehman.jpg",
                bio: "With years of hands-on experience raising and handling parrots, Atta leads bird selection and welfare, ensuring every bird meets our health and temperament standards before sale.",
              },
              {
                name: "Muhammad Imran",
                role: "Co-Founder",
                image: "/images/owners/muhammad-imran.jpg",
                bio: "Imran manages customer relationships and day-to-day operations, personally guiding first-time bird owners through choosing and caring for their new companion.",
              },
            ].map((owner, i) => (
              <Reveal key={owner.name} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-5 rounded-2xl bg-charcoal-light/50 p-8 text-center ring-1 ring-gold/10 sm:flex-row sm:text-left">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-gold/50">
                    <Image src={owner.image} alt={owner.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-beige">{owner.name}</h3>
                    <p className="mb-2 text-xs uppercase tracking-wide text-gold-light">{owner.role}</p>
                    <p className="text-sm leading-relaxed text-beige/70">{owner.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Customer Love"
            title="What Bird Owners Say"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5">
                <StarRating rating={r.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-charcoal/10 pt-4">
                  <p className="font-display text-sm text-charcoal">{r.name}</p>
                  <p className="text-xs text-charcoal/50">{r.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FeatherDivider tone="gold" />

      {/* BIRD CARE PREVIEW */}
      <section className="bg-beige-dark/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Bird Care Blog"
                title="Care Guides for Every Owner"
                description="Practical, vet-informed advice on feeding, training, and keeping your parrot healthy."
              />
              <Button href="/blog" variant="outline">
                Read All Guides
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5 transition-transform hover:-translate-y-1"
                >
                  <span className="text-xs uppercase tracking-wide text-gold-dark">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-charcoal group-hover:text-emerald-deep">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/60">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-charcoal/40">{post.readTime}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="A Glimpse Inside" title="Gallery" align="center" />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {["African Grey", "Macaw", "Owners at Work", "Happy Customer"].map((label, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <BirdImage src={`/images/gallery/preview-${i + 1}.jpg`} alt={label} label={label} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-gradient-to-r from-emerald-deep to-forest py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl text-beige md:text-3xl">
              Get New Arrivals &amp; Care Tips First
            </h2>
            <p className="mt-3 text-sm text-beige/70">
              Join our list for new bird arrivals, seasonal offers, and bird
              care tips. No spam, ever.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-beige/30 bg-transparent px-5 py-3 text-sm text-beige placeholder:text-beige/50 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button type="submit" variant="gold" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
