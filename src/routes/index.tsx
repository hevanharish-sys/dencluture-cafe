import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MapPin, Phone, Clock, Instagram, Facebook, MessageCircle,
  Navigation, Coffee, Users, Leaf, Utensils, Heart, Sparkles,
  Star, X, ChevronLeft, ChevronRight, ArrowRight,
} from "lucide-react";

import img1 from "@/assets/cafe/image.asset.json";
import img2 from "@/assets/cafe/image-2.asset.json";
import img3 from "@/assets/cafe/image-3.asset.json";
import img4 from "@/assets/cafe/image-4.asset.json";
import img5 from "@/assets/cafe/image-5.asset.json";
import img6 from "@/assets/cafe/image-6.asset.json";
import img7 from "@/assets/cafe/image-7.asset.json";
import img8 from "@/assets/cafe/image-8.asset.json";
import img9 from "@/assets/cafe/image-9.asset.json";
import logoAsset from "@/assets/cafe/logo.asset.json";

const exterior_night = img1.url;   // night exterior w/ string lights & sign
const exterior_day_close = img2.url; // day exterior closeup
const exterior_day_wide = img3.url;  // day exterior wide
const food_spread = img4.url;
const food_fork = img5.url;
const food_pasta = img6.url;
const food_nachos = img7.url;
const food_corn = img8.url;
const interior_lights = img9.url; // string lights & tables

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Den Culture Café — Where Coffee Meets Culture" },
      { name: "description", content: "A premium café & culture space in Saravanampatti, Coimbatore. Outdoor seating, handcrafted beverages, freshly prepared food." },
      { property: "og:title", content: "Den Culture Café — Where Coffee Meets Culture" },
      { property: "og:description", content: "A destination designed for conversations, comfort, coffee, and community." },
      { property: "og:image", content: exterior_night },
      { name: "twitter:image", content: exterior_night },
    ],
  }),
  component: Page,
});

const ADDRESS = "Saravanampatti, Coimbatore, Tamil Nadu";
const PHONE = "+91 00000 00000";
const WHATSAPP = "910000000000";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Den Culture Cafe Saravanampatti Coimbatore")}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent("Den Culture Cafe Saravanampatti Coimbatore")}&output=embed`;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Gallery />
      <Atmosphere />
      <Reviews />
      <Visit />
      <Disclaimer />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#gallery", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#visit", label: "Visit" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "bg-ink/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center min-w-0">
          <Logo className="h-10 md:h-12 w-auto shrink-0" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</a>
          ))}
          <a href={MAPS} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground transition-colors rounded-sm">
            Get Directions
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-foreground transition-transform ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`h-px bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-ink/95 backdrop-blur-md border-t border-border"
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/90 hover:text-gold py-1">{l.label}</a>
              ))}
              <a href={MAPS} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 border border-gold/60 text-gold rounded-sm">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Den Culture Café logo"
      className={`object-contain ${className}`}
    />
  );
}


/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={exterior_night} alt="Den Culture Café at night with warm string lights" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      </div>

      <motion.div
        initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 container-x text-center py-32"
      >
        <motion.div variants={fadeUp} className="mx-auto mb-8 flex flex-col items-center gap-4">
          <Logo className="h-24 md:h-28 w-auto" />
        </motion.div>

        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.3em] uppercase text-gold/90 mb-6">
          <span className="h-px w-8 bg-gold/60" />
          <MapPin className="h-3.5 w-3.5" />
          Saravanampatti · Coimbatore
          <span className="h-px w-8 bg-gold/60" />
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-balance leading-[1.05]">
          Where Coffee <span className="italic text-gold">Meets</span> Culture
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-xl mx-auto text-base md:text-lg text-muted-foreground text-balance">
          A destination designed for conversations, comfort, coffee, and community.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#visit" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-primary-foreground hover:bg-gold-soft transition-colors rounded-sm text-sm tracking-wider uppercase">
            Visit Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-foreground/30 text-foreground hover:border-gold hover:text-gold transition-colors rounded-sm text-sm tracking-wider uppercase">
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/70"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </motion.div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function Section({ id, eyebrow, children, className = "" }: { id?: string; eyebrow?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container-x">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {children}
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
      <span className="h-px w-8 bg-gold/60" /> {children}
    </div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About Den Culture">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          className="lg:col-span-6"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-balance">
            More Than <span className="italic text-gold">Just</span> A Café
          </h2>
          <div className="mt-6 gold-divider w-24" />
          <div className="mt-8 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Den Culture is a modern industrial sanctuary tucked into the heart of Saravanampatti — a place where the
              warmth of community meets the calm of considered design.
            </p>
            <p>
              Under a canopy of glowing string lights, our open-air courtyard invites you to slow down. To linger over
              handcrafted coffee. To share freshly prepared plates with people who matter.
            </p>
            <p>
              From quiet mornings to lively evenings, every detail — from the steel framework to the warm timber tabletops —
              has been shaped around one belief: great spaces create great moments.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat n="Community" />
            <Stat n="Comfort" />
            <Stat n="Craft" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ImageCard src={exterior_day_wide} alt="Den Culture outdoor courtyard" className="aspect-[3/4]" />
              <ImageCard src={food_corn} alt="Freshly prepared corn dish" className="aspect-square" />
            </div>
            <div className="space-y-4 pt-12">
              <ImageCard src={interior_lights} alt="Warm string lights over the courtyard" className="aspect-square" />
              <ImageCard src={exterior_day_close} alt="Den Culture entrance with outdoor tables" className="aspect-[3/4]" />
            </div>
          </div>
          <div className="absolute -top-6 -right-6 hidden md:block">
            <Sparkles className="h-10 w-10 text-gold/60" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Stat({ n }: { n: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-gold text-2xl md:text-3xl">·</div>
      <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{n}</div>
    </div>
  );
}

function ImageCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm border border-border ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
    </div>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const features = [
    { icon: Leaf, title: "Premium Outdoor Seating", desc: "Open-air courtyard with timber tables under a sky of string lights." },
    { icon: Heart, title: "Relaxed Atmosphere", desc: "Designed for unhurried conversation, slow evenings, easy mornings." },
    { icon: Coffee, title: "Handcrafted Beverages", desc: "From single-origin pours to signature blends, made with intention." },
    { icon: Utensils, title: "Freshly Prepared Food", desc: "Honest plates, made-to-order, served the way good food should be." },
    { icon: Users, title: "Family Friendly", desc: "A welcoming space that feels like home, for every generation." },
    { icon: Sparkles, title: "Made For Meetups", desc: "Whether it's two friends or twenty — there's a table waiting." },
  ];
  return (
    <Section id="experience" eyebrow="The Den Experience" className="bg-card/40 border-y border-border">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-balance max-w-2xl">
          Every detail, <span className="italic text-gold">considered.</span>
        </h2>
        <p className="text-muted-foreground max-w-md">
          The Den experience is shaped by the people, the plates, and the place — woven into one.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group bg-background p-8 md:p-10 hover:bg-card transition-colors"
          >
            <f.icon className="h-7 w-7 text-gold mb-6 transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.25} />
            <h3 className="font-display text-2xl mb-3">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- GALLERY ---------------- */
const galleryImgs = [
  { src: exterior_night, alt: "Den Culture lit up at night" },
  { src: food_spread, alt: "Signature food spread" },
  { src: interior_lights, alt: "String lights over courtyard tables" },
  { src: exterior_day_wide, alt: "Wide view of outdoor seating" },
  { src: food_pasta, alt: "Creamy pasta plate" },
  { src: exterior_day_close, alt: "Den Culture entrance" },
  { src: food_fork, alt: "Loaded fries close-up" },
  { src: food_nachos, alt: "Cheesy nachos with salsa" },
  { src: food_corn, alt: "Spiced corn bowl" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? 0 : (i + 1) % galleryImgs.length));
  const prev = () => setActive((i) => (i === null ? 0 : (i - 1 + galleryImgs.length) % galleryImgs.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="gallery" eyebrow="Gallery">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-balance">
          Moments at <span className="italic text-gold">the Den.</span>
        </h2>
        <p className="text-muted-foreground max-w-md">Tap any image to view full size.</p>
      </div>

      {/* Desktop masonry */}
      <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-5">
        {galleryImgs.map((g, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden rounded-sm border border-border ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
          >
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
          </motion.button>
        ))}
      </div>

      {/* Mobile swipe */}
      <div className="md:hidden -mx-5">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-5 pb-4 scrollbar-none">
          {galleryImgs.map((g, i) => (
            <button key={i} onClick={() => setActive(i)} className="shrink-0 snap-center w-[82%] aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
          >
            <button className="absolute top-5 right-5 text-foreground/70 hover:text-gold p-2" onClick={close} aria-label="Close"><X className="h-6 w-6" /></button>
            <button className="absolute left-3 md:left-8 text-foreground/70 hover:text-gold p-3" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"><ChevronLeft className="h-7 w-7" /></button>
            <button className="absolute right-3 md:right-8 text-foreground/70 hover:text-gold p-3" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"><ChevronRight className="h-7 w-7" /></button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              src={galleryImgs[active].src}
              alt={galleryImgs[active].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] object-contain rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ---------------- ATMOSPHERE ---------------- */
function Atmosphere() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border order-2 lg:order-1"
        >
          <img src={interior_lights} alt="String lights glowing over Den Culture's courtyard" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </motion.div>
        <div className="order-1 lg:order-2">
          <Eyebrow>Atmosphere</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-balance"
          >
            Crafted to <span className="italic text-gold">linger</span> over.
          </motion.h2>
          <div className="mt-6 gold-divider w-24" />
          <div className="mt-8 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              As the sun fades and the courtyard glows, Den Culture becomes something quietly cinematic. Bulbs sway on a
              breeze. Plates clink softly. Conversations stretch long.
            </p>
            <p>
              This is a space made for the in-between hours — the pause between work and home, the laugh between old
              friends, the first chapter of new ones.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Open-air courtyard", "Warm timber", "Industrial steel", "Glowing string lights"].map((t) => (
              <span key={t} className="text-xs uppercase tracking-[0.2em] px-4 py-2 border border-border rounded-full text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function Reviews() {
  const items = [
    { name: "Aravind R.", text: "The ambience at night is unreal. String lights, great coffee, even better company. Easily my new favourite spot in Coimbatore.", stars: 5 },
    { name: "Priya S.", text: "Loved the outdoor seating and the warm vibe. The pasta and loaded fries were genuinely delicious. Felt like a little escape.", stars: 5 },
    { name: "Karthik M.", text: "Den Culture nails the details — design, food, service. Came for coffee, stayed for hours.", stars: 5 },
    { name: "Meera V.", text: "Perfect place for catching up with friends. Calm, well-designed, and the staff are lovely. Will be back.", stars: 5 },
  ];
  return (
    <Section id="reviews" eyebrow="Guest Reviews" className="bg-card/40 border-y border-border">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-balance">
          Words from our <span className="italic text-gold">guests.</span>
        </h2>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
          <span>Rated by our community</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative p-8 md:p-10 bg-background border border-border rounded-sm hover:border-gold/40 transition-colors"
          >
            <div className="absolute top-6 right-6 font-display text-6xl text-gold/15 leading-none select-none">"</div>
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
            </div>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-light">{r.text}</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold/10 border border-gold/30 grid place-items-center text-gold text-sm font-medium">
                {r.name[0]}
              </div>
              <div>
                <div className="text-sm font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">Visited Den Culture</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- VISIT ---------------- */
function Visit() {
  return (
    <Section id="visit" eyebrow="Visit Us">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-balance">
            Come <span className="italic text-gold">find</span> us.
          </h2>
          <div className="mt-6 gold-divider w-24" />

          <div className="mt-10 space-y-7">
            <InfoRow icon={MapPin} title="Address">
              Den Culture Café<br />Saravanampatti, Coimbatore<br />Tamil Nadu, India
            </InfoRow>
            <InfoRow icon={Clock} title="Hours">
              Mon – Sun · 11:00 AM – 11:00 PM
            </InfoRow>
            <InfoRow icon={Phone} title="Contact">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">{PHONE}</a>
            </InfoRow>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary-foreground hover:bg-gold-soft transition-colors rounded-sm text-sm tracking-wider uppercase">
              <Navigation className="h-4 w-4" /> Directions
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 text-foreground hover:border-gold hover:text-gold transition-colors rounded-sm text-sm tracking-wider uppercase">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm border border-border">
          <iframe
            src={MAPS_EMBED}
            title="Map to Den Culture Café"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale contrast-110 brightness-90"
            style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.3) contrast(0.9)" }}
          />
        </div>
      </div>
    </Section>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 h-11 w-11 rounded-sm border border-gold/40 bg-gold/5 grid place-items-center">
        <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] tracking-[0.25em] uppercase text-gold/80 mb-1">{title}</div>
        <div className="text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- DISCLAIMER ---------------- */
function Disclaimer() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto p-8 md:p-12 border border-gold/25 rounded-sm bg-card/60 backdrop-blur"
        >
          <div className="absolute -top-3 left-8 px-3 bg-background text-[10px] tracking-[0.35em] uppercase text-gold">
            Disclaimer
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            This website is an independent design and development concept created solely for portfolio, demonstration, and showcase purposes by <span className="text-foreground">H2T Technologies</span>. It is not the official website of Den Culture Café and is not affiliated with, endorsed by, or operated by Den Culture Café. All logos, images, trademarks, brand names, and business information belong to their respective owners and are used only for demonstration purposes.
          </p>
          <p className="mt-5 text-sm md:text-base text-foreground/80 leading-relaxed">
            For official information, reservations, and enquiries, please contact Den Culture Café through their official channels.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <div>
                <div className="font-display text-xl tracking-wider">DEN CULTURE</div>
                <div className="text-[10px] tracking-[0.25em] text-gold/80 uppercase">Café</div>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Den Culture Café is a modern destination in Saravanampatti, Coimbatore, designed for meaningful conversations, memorable experiences, and a welcoming community atmosphere.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Ic, i) => (
                <a key={i} href="#" className="h-10 w-10 grid place-items-center border border-border rounded-full hover:border-gold hover:text-gold transition-colors text-muted-foreground">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <FooterTitle>Explore</FooterTitle>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[["About","#about"],["Experience","#experience"],["Gallery","#gallery"],["Reviews","#reviews"],["Visit","#visit"]].map(([l,h]) => (
                <li key={h}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <FooterTitle>Contact</FooterTitle>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />{ADDRESS}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />{PHONE}</li>
              <li><a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-gold hover:underline"><Navigation className="h-3.5 w-3.5" /> Get Directions</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <FooterTitle>Hours</FooterTitle>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mon – Fri</span><span>11:00 – 23:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>11:00 – 23:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>11:00 – 23:00</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <p>© 2026 Den Culture Café. All trademarks, logos, and brand assets belong to their respective owners.</p>
          <p>Crafted by <span className="text-gold">H2T Technologies</span></p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">{children}</div>;
}
