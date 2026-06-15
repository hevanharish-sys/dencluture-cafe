import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  MapPin, Phone, Clock, Instagram, Facebook, MessageCircle,
  Navigation, Coffee, Users, Leaf, Utensils, Heart, Sparkles,
  Star, X, ChevronLeft, ChevronRight, ArrowRight, Menu,
} from "lucide-react";

import exteriorNight from "@/assets/cafe/exterior-night.png";
import exteriorDayClose from "@/assets/cafe/exterior-day-close.png";
import exteriorDayWide from "@/assets/cafe/exterior-day-wide.png";
import foodSpread from "@/assets/cafe/food-spread.png";
import foodFork from "@/assets/cafe/food-fork.png";
import foodPasta from "@/assets/cafe/food-pasta.png";
import foodNachos from "@/assets/cafe/food-nachos.png";
import foodCorn from "@/assets/cafe/food-corn.png";
import interiorLights from "@/assets/cafe/interior-lights.png";
import logo from "@/assets/cafe/logo.png";

const exterior_night = exteriorNight;
const exterior_day_close = exteriorDayClose;
const exterior_day_wide = exteriorDayWide;
const food_spread = foodSpread;
const food_fork = foodFork;
const food_pasta = foodPasta;
const food_nachos = foodNachos;
const food_corn = foodCorn;
const interior_lights = interiorLights;

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

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
] as const;

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:pt-5">
        <div
          className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 transition-all duration-500 ${
            scrolled
              ? "rounded-2xl border border-border/90 bg-ink/88 px-4 py-2.5 shadow-[0_20px_60px_-28px_oklch(0_0_0/0.95)] backdrop-blur-2xl sm:px-5"
              : "rounded-none border border-transparent bg-transparent px-0 py-0"
          }`}
        >
          <a
            href="#top"
            className="relative z-10 flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <Logo className={`transition-all duration-500 ${scrolled ? "h-8 sm:h-9" : "h-9 sm:h-10 md:h-11"}`} />
          </a>

          <nav
            className={`hidden items-center rounded-full border px-1.5 py-1 lg:flex ${
              scrolled ? "border-border/70 bg-background/35" : "border-foreground/10 bg-ink/25 backdrop-blur-md"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-[13px] text-foreground/72 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-px h-px origin-center scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex h-10 items-center gap-2 rounded-full px-3.5 text-xs text-foreground/75 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">{PHONE}</span>
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-foreground/15 px-4 text-[11px] tracking-[0.16em] uppercase text-foreground/88 transition-all hover:border-gold/40 hover:text-gold"
            >
              <Navigation className="h-3.5 w-3.5" />
              Directions
            </a>
            <a
              href="#visit"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-gold px-5 text-[11px] tracking-[0.16em] uppercase text-primary-foreground transition-all hover:bg-gold-soft hover:shadow-[0_12px_32px_-14px_oklch(0.8_0.13_82/0.7)]"
            >
              Visit Us
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all lg:hidden ${
              open
                ? "border-gold/40 bg-gold/10 text-gold"
                : scrolled
                  ? "border-border/80 bg-background/40 text-foreground backdrop-blur-sm"
                  : "border-foreground/15 bg-ink/30 text-foreground backdrop-blur-sm"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-md lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100vw,22rem)] flex-col border-l border-border bg-ink/98 shadow-[-24px_0_80px_-20px_oklch(0_0_0/0.9)] backdrop-blur-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border/80 px-5 py-4">
                <Logo className="h-8" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/80"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-6">
                <p className="mb-5 text-[10px] tracking-[0.3em] uppercase text-gold/80">Explore</p>
                <div className="space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.04 + index * 0.05 }}
                      className="group flex items-center gap-4 rounded-sm border border-transparent px-2 py-3.5 transition-colors hover:border-border/60 hover:bg-background/40"
                    >
                      <span className="font-display text-sm tabular-nums text-gold/55">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl text-foreground transition-colors group-hover:text-gold">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </nav>

              <div className="space-y-4 border-t border-border/80 px-5 py-5">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <p className="text-foreground/90">Open daily · 9:00 AM – 12:00 AM</p>
                    <p className="mt-1 text-xs">Saravanampatti, Coimbatore</p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <a
                    href="#visit"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs tracking-[0.16em] uppercase text-primary-foreground"
                  >
                    Visit Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-xs tracking-[0.16em] uppercase text-foreground"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Den Culture Café"
      loading="eager"
      decoding="async"
      className={`w-auto shrink-0 object-contain mix-blend-screen ${className}`}
    />
  );
}

/* ---------------- HERO ---------------- */
const HERO_STATS = [
  { icon: Star, label: "4.8 on Google", accent: true },
  { icon: Clock, label: "9 AM – 12 AM daily" },
  { icon: MapPin, label: "Saravanampatti" },
  { icon: Leaf, label: "Outdoor courtyard" },
] as const;

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={exterior_night}
          alt="Den Culture Café at night with warm string lights"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/50 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,oklch(0.8_0.13_82/0.16),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_88%,oklch(0.8_0.13_82/0.08),transparent_32%)]" />
      </div>

      <div className="relative z-10 container-x flex min-h-[100svh] flex-col justify-center pb-28 pt-28 sm:pb-32 sm:pt-32 md:pb-36">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } } }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-10 bg-gold/70" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-gold/90 sm:text-[11px]">
                Premium café · Coimbatore
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="display-1 max-w-[11ch] text-balance text-left">
              Where Coffee <span className="italic text-gold">Meets</span> Culture
            </motion.h1>

            <motion.p variants={fadeUp} className="lead mt-5 max-w-lg text-left text-pretty sm:mt-6">
              An open-air sanctuary for handcrafted coffee, honest plates, and evenings lit by string lights and good conversation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
            >
              <a
                href="#visit"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-all hover:bg-gold-soft hover:shadow-[0_18px_48px_-16px_oklch(0.8_0.13_82/0.75)]"
              >
                Plan Your Visit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-foreground/20 bg-foreground/[0.03] px-7 py-3.5 text-xs tracking-[0.18em] uppercase text-foreground backdrop-blur-sm transition-all hover:border-gold/45 hover:text-gold"
              >
                <Navigation className="h-4 w-4" />
                Directions
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:max-w-xl sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
            >
              {HERO_STATS.map(({ icon: Icon, label, accent }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border/80 bg-ink/45 px-3 py-3 backdrop-blur-md sm:px-3.5"
                >
                  <Icon
                    className={`mb-2 h-4 w-4 ${accent ? "fill-gold text-gold" : "text-gold"}`}
                    strokeWidth={1.5}
                  />
                  <p className="text-[11px] leading-snug text-foreground/82 sm:text-xs">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:col-span-6 lg:block xl:col-span-7"
          >
            <HeroVisual />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 lg:hidden"
        >
          <HeroVisual compact />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-foreground/55 transition-colors hover:text-gold sm:bottom-8"
      >
        <span>Discover more</span>
        <motion.span
          animate={{ y: [0, 6, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 bg-ink/35 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-gold/80" />
        </motion.span>
      </motion.a>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function HeroVisual({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
          <img src={interior_lights} alt="Courtyard string lights" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-border/70 bg-ink/80 px-3 py-2 backdrop-blur-md">
            <p className="text-[10px] tracking-[0.22em] uppercase text-gold/85">Courtyard nights</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border">
            <img src={food_spread} alt="Fresh food spread" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          </div>
          <div className="rounded-xl border border-border bg-ink/55 p-4 backdrop-blur-md">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-2 font-display text-lg text-foreground">Guest favourite</p>
            <p className="mt-1 text-xs text-muted-foreground">Highly rated on Google</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-[min(78vh,42rem)] max-w-[36rem] xl:max-w-none">
      <div className="absolute left-0 top-8 z-10 w-[58%] overflow-hidden rounded-2xl border border-border shadow-[0_30px_80px_-30px_oklch(0_0_0/0.95)]">
        <div className="absolute left-0 top-0 z-10 h-12 w-12 border-l border-t border-gold/50" />
        <div className="absolute bottom-0 right-0 z-10 h-12 w-12 border-b border-r border-gold/50" />
        <div className="aspect-[4/5]">
          <img
            src={interior_lights}
            alt="String lights over Den Culture courtyard"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/15" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border/80 bg-ink/82 px-4 py-3 backdrop-blur-md">
          <p className="text-[10px] tracking-[0.26em] uppercase text-gold/85">Evening atmosphere</p>
          <p className="mt-1 font-display text-xl text-foreground">Courtyard under the lights</p>
        </div>
      </div>

      <div className="absolute right-0 top-0 z-20 w-[46%] overflow-hidden rounded-2xl border border-border shadow-[0_24px_70px_-28px_oklch(0_0_0/0.9)]">
        <div className="aspect-[3/4]">
          <img src={food_spread} alt="Fresh food at Den Culture" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-6 right-[8%] z-30 w-[52%] rounded-2xl border border-gold/25 bg-ink/90 p-5 backdrop-blur-xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-gold/85">Open daily</p>
            <p className="mt-1 font-display text-2xl text-foreground">9:00 AM – 12:00 AM</p>
          </div>
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10">
            <Clock className="h-4 w-4 text-gold" strokeWidth={1.5} />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-border/80 pt-4">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Loved by guests on Google</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[12%] top-0 z-0 hidden h-24 w-24 rounded-full border border-gold/15 bg-gold/[0.04] blur-2xl xl:block"
      />
    </div>
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
    <div className="inline-flex items-center gap-3 eyebrow text-gold mb-6">
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
          <h2 className="display-2 text-balance">
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
const EXPERIENCE_FEATURES = [
  {
    icon: Leaf,
    title: "Premium Outdoor Seating",
    desc: "Open-air courtyard with timber tables under a sky of string lights.",
    tag: "The place",
    image: exterior_day_wide,
  },
  {
    icon: Heart,
    title: "Relaxed Atmosphere",
    desc: "Designed for unhurried conversation, slow evenings, and easy mornings.",
    tag: "The mood",
    image: interior_lights,
  },
  {
    icon: Coffee,
    title: "Handcrafted Beverages",
    desc: "From single-origin pours to signature blends, made with intention.",
    tag: "The pour",
    image: food_spread,
  },
  {
    icon: Utensils,
    title: "Freshly Prepared Food",
    desc: "Honest plates, made-to-order, served the way good food should be.",
    tag: "The plate",
    image: food_pasta,
  },
  {
    icon: Users,
    title: "Family Friendly",
    desc: "A welcoming space that feels like home, for every generation.",
    tag: "The people",
    image: exterior_day_close,
  },
  {
    icon: Sparkles,
    title: "Made For Meetups",
    desc: "Whether it is two friends or twenty — there is a table waiting.",
    tag: "The vibe",
    image: exterior_night,
  },
] as const;

function ExperienceMobileSlide({
  feature,
  index,
}: {
  feature: (typeof EXPERIENCE_FEATURES)[number];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="w-[min(92vw,22rem)] shrink-0 snap-center sm:w-[24rem]"
      data-experience-slide
      id={`experience-slide-${index}`}
    >
      <div className="overflow-hidden rounded-sm border border-border bg-background shadow-[0_20px_60px_-28px_oklch(0_0_0/0.8)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={feature.image} alt={feature.title} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/20" />
          <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-ink/75 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-gold backdrop-blur-sm">
            {feature.tag}
          </span>
        </div>

        <div className="relative border-t border-border p-5">
          <span className="absolute inset-x-0 top-0 h-px bg-gold/50" />
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10">
              <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
            </div>
            <div className="min-w-0">
              <h3 className="display-3 mb-2 text-balance text-xl">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ExperienceSelectorCard({
  feature,
  index,
  active,
  onSelect,
}: {
  feature: (typeof EXPERIENCE_FEATURES)[number];
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  const Icon = feature.icon;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full text-left transition-all duration-500"
    >
      <div
        className={`relative overflow-hidden rounded-sm border p-5 transition-all duration-500 sm:p-6 ${
          active
            ? "border-gold/50 bg-background shadow-[0_20px_50px_-24px_oklch(0.8_0.13_82/0.45)]"
            : "border-border bg-background/70 hover:border-gold/25"
        }`}
      >
        <span
          className={`absolute inset-x-0 top-0 h-px origin-left bg-gold transition-transform duration-500 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
        <span className="text-[10px] tracking-[0.24em] uppercase text-gold/75">{feature.tag}</span>
        <div className="mt-4 flex items-start gap-4">
          <div
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
              active ? "border-gold/55 bg-gold/12" : "border-gold/30 bg-gold/8"
            }`}
          >
            <Icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
          </div>
          <div className="min-w-0">
            <h3 className="display-3 mb-2 text-balance">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function ExperienceMobileCarousel() {
  const [active, setActive] = useState(0);

  const syncActiveFromScroll = (container: HTMLDivElement) => {
    const slides = Array.from(container.querySelectorAll<HTMLElement>("[data-experience-slide]"));
    if (!slides.length) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(center - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActive(closest);
  };

  const scrollToSlide = (index: number) => {
    document.getElementById(`experience-slide-${index}`)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(index);
  };

  return (
    <div className="lg:hidden">
      <div
        onScroll={(event) => syncActiveFromScroll(event.currentTarget)}
        className="-mx-[clamp(1rem,3vw,2.5rem)] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1rem,3vw,2.5rem)] pb-2 no-scrollbar"
      >
        {EXPERIENCE_FEATURES.map((feature, i) => (
          <ExperienceMobileSlide key={feature.title} feature={feature} index={i} />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {EXPERIENCE_FEATURES.map((feature, i) => (
          <button
            key={feature.title}
            type="button"
            onClick={() => scrollToSlide(i)}
            aria-label={`Show ${feature.title}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === i ? "w-7 bg-gold" : "w-2 bg-border hover:bg-gold/40"
            }`}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        Swipe to explore each experience
      </p>
    </div>
  );
}

function Experience() {
  const [active, setActive] = useState(0);
  const current = EXPERIENCE_FEATURES[active];

  return (
    <section id="experience" className="relative overflow-hidden border-y border-border bg-card/40 py-20 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,oklch(0.8_0.13_82/0.07),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,oklch(0.8_0.13_82/0.05),transparent_38%)]" />

      <div className="container-x relative">
        <Eyebrow>The Den Experience</Eyebrow>

        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h2 className="display-2 text-balance">
              Every detail, <span className="italic text-gold">considered.</span>
            </h2>
            <div className="mt-5 gold-divider w-20 sm:w-24" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-md text-sm text-muted-foreground sm:text-base"
          >
            <span className="lg:hidden">Swipe through each experience — photo and details, one at a time.</span>
            <span className="hidden lg:inline">
              Tap a highlight below to explore what makes Den Culture feel different — from courtyard evenings to
              handcrafted plates.
            </span>
          </motion.p>
        </div>

        <ExperienceMobileCarousel />

        {/* Desktop: hero showcase + grid */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-sm border border-border shadow-[0_24px_80px_-35px_oklch(0_0_0/0.85)]"
          >
            <div className="absolute left-0 top-0 z-20 h-14 w-14 border-l border-t border-gold/45" />
            <div className="absolute bottom-0 right-0 z-20 h-14 w-14 border-b border-r border-gold/45" />

            <div className="relative aspect-[21/9]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />

              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="absolute inset-x-0 bottom-0 z-10 p-8"
              >
                <span className="text-[10px] tracking-[0.28em] uppercase text-gold/90">{current.tag}</span>
                <h3 className="mt-2 font-display text-4xl text-foreground">{current.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground/80">{current.desc}</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-3 gap-5">
            {EXPERIENCE_FEATURES.map((feature, i) => (
              <div key={feature.title} onMouseEnter={() => setActive(i)}>
                <ExperienceSelectorCard
                  feature={feature}
                  index={i}
                  active={active === i}
                  onSelect={() => setActive(i)}
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 lg:justify-start"
        >
          {["Open-air courtyard", "Handcrafted coffee", "Night ambience", "Family friendly"].map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
              className="rounded-full border border-border px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-muted-foreground"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
const GALLERY_ITEMS = [
  {
    src: exterior_night,
    alt: "Den Culture lit up at night",
    category: "Evenings",
    layout: "col-span-2 row-span-2 min-h-[18rem] sm:min-h-[22rem] md:min-h-0",
  },
  {
    src: food_spread,
    alt: "Signature food spread",
    category: "Food",
    layout: "col-span-1 row-span-1 min-h-[10rem] sm:min-h-[11rem]",
  },
  {
    src: interior_lights,
    alt: "String lights over courtyard tables",
    category: "Ambience",
    layout: "col-span-1 row-span-1 min-h-[10rem] sm:min-h-[11rem]",
  },
  {
    src: exterior_day_wide,
    alt: "Wide view of outdoor seating",
    category: "Courtyard",
    layout: "col-span-2 row-span-1 min-h-[11rem] sm:min-h-[12rem]",
  },
  {
    src: food_pasta,
    alt: "Creamy pasta plate",
    category: "Food",
    layout: "col-span-1 row-span-1 min-h-[10rem]",
  },
  {
    src: exterior_day_close,
    alt: "Den Culture entrance",
    category: "Space",
    layout: "col-span-1 row-span-1 min-h-[10rem]",
  },
  {
    src: food_fork,
    alt: "Loaded fries close-up",
    category: "Food",
    layout: "col-span-1 row-span-1 min-h-[10rem]",
  },
  {
    src: food_nachos,
    alt: "Cheesy nachos with salsa",
    category: "Food",
    layout: "col-span-1 row-span-1 min-h-[10rem]",
  },
  {
    src: food_corn,
    alt: "Spiced corn bowl",
    category: "Food",
    layout: "col-span-2 md:col-span-2 row-span-1 min-h-[11rem] sm:min-h-[12rem]",
  },
] as const;

function GalleryLightbox({
  active,
  onClose,
  onNext,
  onPrev,
}: {
  active: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const item = GALLERY_ITEMS[active];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 p-2 text-foreground/70 transition-colors hover:text-gold sm:top-5 sm:right-5"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        className="absolute left-3 z-10 p-3 text-foreground/70 transition-colors hover:text-gold md:left-8"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        className="absolute right-3 z-10 p-3 text-foreground/70 transition-colors hover:text-gold md:right-8"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <motion.div
        key={active}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[72vh] w-auto max-w-full rounded-sm border border-border object-contain shadow-[0_30px_90px_-30px_oklch(0_0_0/0.85)]"
        />
        <div className="mt-4 px-1">
          <span className="text-[10px] tracking-[0.28em] uppercase text-gold">{item.category}</span>
          <p className="mt-1 text-sm text-foreground/90 sm:text-base">{item.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? 0 : (i + 1) % GALLERY_ITEMS.length));
  const prev = () => setActive((i) => (i === null ? 0 : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length));

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
    <section id="gallery" className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.8_0.13_82/0.06),transparent_42%)]" />

      <div className="container-x relative">
        <Eyebrow>Gallery</Eyebrow>

        <div className="mb-8 flex flex-col gap-6 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="display-2 text-balance">
              Moments at <span className="italic text-gold">the Den.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Courtyard nights, shared plates, and the little details that make every visit feel like yours.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 auto-rows-fr md:grid-cols-4 md:gap-4 lg:gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.button
              key={item.alt}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-sm border border-border bg-card/20 text-left ${item.layout}`}
            >
              {i === 0 ? (
                <>
                  <span className="absolute left-0 top-0 z-20 h-10 w-10 border-l border-t border-gold/45 sm:h-12 sm:w-12" />
                  <span className="absolute bottom-0 right-0 z-20 h-10 w-10 border-b border-r border-gold/45 sm:h-12 sm:w-12" />
                </>
              ) : null}

              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/20 opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

              <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-4 sm:p-5">
                <div>
                  <span className="inline-flex rounded-full border border-gold/25 bg-ink/50 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-gold/90 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <p className="mt-2 line-clamp-2 text-sm text-foreground/90 sm:translate-y-2 sm:opacity-0 sm:transition-all sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 md:text-base">
                    {item.alt}
                  </p>
                  <div className="mt-3 hidden items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-gold/80 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:flex">
                    <span className="h-px w-6 bg-gold/60" />
                    View full
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-center text-[11px] tracking-[0.22em] uppercase text-muted-foreground sm:mt-8"
        >
          Tap any frame to open the gallery
        </motion.p>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <GalleryLightbox active={active} onClose={close} onNext={next} onPrev={prev} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- ATMOSPHERE ---------------- */
const ATMOSPHERE_FEATURES = [
  { icon: Leaf, label: "Open-air courtyard", detail: "Dine under the sky" },
  { icon: Heart, label: "Warm timber", detail: "Tables made to linger" },
  { icon: Sparkles, label: "String lights", detail: "Glow after sunset" },
  { icon: Users, label: "Community nights", detail: "Music & meetups" },
] as const;

function StringLightRow({ count = 14 }: { count?: number }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-gold/70 shadow-[0_0_10px_oklch(0.8_0.13_82/0.65)] sm:h-2 sm:w-2"
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.14, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Atmosphere() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.8_0.13_82/0.07),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,oklch(0.8_0.13_82/0.05),transparent_40%)]" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12"
        >
          <StringLightRow />
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7"
          >
            <div className="group relative overflow-hidden rounded-sm border border-border shadow-[0_30px_90px_-35px_oklch(0_0_0/0.85)]">
              <div className="absolute left-0 top-0 z-10 h-14 w-14 border-l border-t border-gold/45 transition-colors duration-500 group-hover:border-gold/70 sm:h-16 sm:w-16" />
              <div className="absolute bottom-0 right-0 z-10 h-14 w-14 border-b border-r border-gold/45 transition-colors duration-500 group-hover:border-gold/70 sm:h-16 sm:w-16" />

              <div className="relative aspect-[5/6] sm:aspect-[4/5] lg:aspect-[5/6]">
                <motion.img
                  src={interior_lights}
                  alt="String lights glowing over Den Culture's courtyard"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-xs"
              >
                <div className="rounded-sm border border-border/80 bg-ink/85 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-gold/90">Evening mood</p>
                  <p className="mt-1 font-display text-lg text-foreground/95 sm:text-xl">
                    Quietly cinematic after dark
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute top-4 right-4 z-20 sm:top-5 sm:right-5"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/80 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-gold backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60 opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                  </span>
                  Live nights
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 lg:-ml-10 xl:-ml-14"
          >
            <div className="rounded-sm border border-border bg-background/90 p-6 backdrop-blur-sm sm:p-8 md:p-10 lg:shadow-[0_24px_80px_-30px_oklch(0_0_0/0.75)]">
              <Eyebrow>Atmosphere</Eyebrow>
              <h2 className="display-2 text-balance">
                Crafted to <span className="italic text-gold">linger</span> over.
              </h2>
              <div className="mt-5 gold-divider w-20 sm:mt-6 sm:w-24" />

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:space-y-5 sm:text-base md:text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                >
                  As the sun fades and the courtyard glows, Den Culture becomes something quietly cinematic. Bulbs sway
                  on a breeze. Plates clink softly. Conversations stretch long.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  This is a space made for the in-between hours — the pause between work and home, the laugh between old
                  friends, the first chapter of new ones.
                </motion.p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                {ATMOSPHERE_FEATURES.map(({ icon: Icon, label, detail }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="group rounded-sm border border-border bg-card/40 p-4 transition-colors duration-300 hover:border-gold/35 sm:p-5"
                  >
                    <Icon
                      className="mb-3 h-5 w-5 text-gold transition-transform duration-500 group-hover:-translate-y-0.5"
                      strokeWidth={1.25}
                    />
                    <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/90">{label}</p>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
type GoogleReview = {
  id: string;
  name: string;
  text: string;
  stars: number;
  time: string;
};

const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "sabareeswaran",
    name: "Sabareeswaran M",
    text: "Just visited Den Culture — this newly opened cafe in Saravanampatti opposite KCT college. Fresh, modern, and welcoming ambiance with comfortable seating, screening, and a relaxing atmosphere.",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "akshitha",
    name: "Akshitha Ammu",
    text: "The service was super nice and the food was amazing. The night-time ambience was incredible — a must-try spot!",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "meena",
    name: "Meena Kumari",
    text: "Great ambiance, delicious food, and friendly staff. Highly recommended!",
    stars: 5,
    time: "2 days ago",
  },
  {
    id: "dhina",
    name: "DHINA R",
    text: "Loved the ambience and overall vibe of this cafe. A perfect spot for couples and families to relax and enjoy quality time together!",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "bhavani",
    name: "Bhavani M",
    text: "The food was too good and the ambience was very nice. The service was excellent too — overall a nice and cozy place to hang out with friends and loved ones.",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "dharragesh",
    name: "Dharragesh V",
    text: "Best cafe in Saravanampatti!",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "kaleeswaran",
    name: "Kaleeswaran Maheswaran",
    text: "Nice shop — great place for coffee, tea, and snacks. Opens late and you can have fun with friends. Music at night is a vibe!",
    stars: 5,
    time: "1 day ago",
  },
  {
    id: "ayshwarya",
    name: "Ayshwarya K",
    text: "The ambience was amazing and the food tastes so good.",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "aadhi",
    name: "Aadhi Velan",
    text: "Very good ambiance and nice taste — must-try spot!",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "vignesh",
    name: "Vigneshwaran",
    text: "Place is kind of charming. Food and service both excellent.",
    stars: 5,
    time: "6 days ago",
  },
  {
    id: "sekar",
    name: "கே சேகர்",
    text: "Worth every penny. Food and service were top-notch.",
    stars: 5,
    time: "6 days ago",
  },
  {
    id: "rashmika",
    name: "Rashmika M",
    text: "Tea is a must try here — budget friendly and delicious.",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "rithu",
    name: "Rithu",
    text: "Budget friendly and great value for the quality you get.",
    stars: 5,
    time: "1 week ago",
  },
  {
    id: "sharanjaya",
    name: "Sharanjaya",
    text: "Pleasant atmosphere and a relaxed place to unwind.",
    stars: 5,
    time: "6 days ago",
  },
  {
    id: "navin",
    name: "Navin G",
    text: "Excellent food and service — everything was a perfect 5.",
    stars: 5,
    time: "3 days ago",
  },
  {
    id: "tharun",
    name: "Tharun",
    text: "Outstanding food and service. Will definitely come back.",
    stars: 5,
    time: "2 days ago",
  },
  {
    id: "karthikeyan",
    name: "Karthikeyan",
    text: "Food and service both rated 5 from us — highly satisfied.",
    stars: 5,
    time: "3 days ago",
  },
  {
    id: "aravindakshan",
    name: "Aravindakshan Suthahar",
    text: "Food and service were both excellent. Great experience overall.",
    stars: 5,
    time: "1 day ago",
  },
];

function ReviewCard({ review, className = "" }: { review: GoogleReview; className?: string }) {
  return (
    <article
      className={`group relative flex h-full min-h-[200px] flex-col rounded-sm border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_20px_50px_-24px_oklch(0.8_0.13_82/0.45)] sm:min-h-[220px] sm:p-6 md:min-h-[240px] md:p-8 ${className}`}
    >
      <div className="absolute top-5 right-5 font-display text-5xl leading-none text-gold/15 transition-colors duration-500 group-hover:text-gold/25 select-none sm:top-6 sm:right-6 sm:text-6xl">
        "
      </div>
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: review.stars }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold sm:h-4 sm:w-4" />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground/90 font-light sm:text-base md:text-[1.05rem]">
        {review.text}
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-border/70 pt-5">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 text-xs font-medium text-gold sm:h-10 sm:w-10 sm:text-sm">
          {review.name.trim()[0]}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-medium">{review.name}</div>
          <div className="text-xs text-muted-foreground">{review.time} · Google Review</div>
        </div>
      </div>
    </article>
  );
}

function ReviewMarquee({
  reviews,
  reverse = false,
  className = "",
}: {
  reviews: GoogleReview[];
  reverse?: boolean;
  className?: string;
}) {
  const loop = [...reviews, ...reviews];
  const [duration, setDuration] = useState(reverse ? 34 : 40);
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const width = window.innerWidth;
      const base = reverse ? 34 : 40;

      if (width < 640) setDuration(base * 0.78);
      else if (width < 1024) setDuration(base * 0.9);
      else setDuration(base);

      setMotionEnabled(!reducedMotion.matches);
    };

    update();
    window.addEventListener("resize", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      window.removeEventListener("resize", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, [reverse]);

  return (
    <div
      className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] ${className}`}
    >
      <motion.div
        className="flex w-max gap-3 py-1 sm:gap-4 md:gap-5"
        animate={
          motionEnabled
            ? { x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }
            : { x: reverse ? "-25%" : "-25%" }
        }
        transition={
          motionEnabled
            ? { duration, repeat: Infinity, ease: "linear" }
            : { duration: 0 }
        }
      >
        {loop.map((review, i) => (
          <ReviewCard
            key={`${review.id}-${i}`}
            review={review}
            className="w-[min(84vw,16.75rem)] shrink-0 sm:w-[18.5rem] md:w-[20rem] lg:w-[22rem] xl:w-[23rem]"
          />
        ))}
      </motion.div>
    </div>
  );
}

function Reviews() {
  const rowA = GOOGLE_REVIEWS.filter((_, i) => i % 2 === 0);
  const rowB = GOOGLE_REVIEWS.filter((_, i) => i % 2 === 1);

  return (
    <section id="reviews" className="relative overflow-hidden border-y border-border bg-card/40 py-20 sm:py-24 md:py-32">
      <div className="container-x">
        <Eyebrow>Google Reviews</Eyebrow>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="display-2 text-balance">
              Words from our <span className="italic text-gold">guests.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Real reviews from visitors at Den Culture Café on Google Maps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex w-full flex-col gap-3 rounded-sm border border-gold/25 bg-background/70 px-5 py-4 backdrop-blur-sm sm:w-fit"
          >
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-display text-2xl text-gold">5.0</span>
            </div>
            <span className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
              {GOOGLE_REVIEWS.length}+ recent Google reviews
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="space-y-3 sm:space-y-4 md:space-y-5"
      >
        <ReviewMarquee reviews={rowA} />
        <ReviewMarquee reviews={rowB} reverse />
      </motion.div>
    </section>
  );
}

/* ---------------- VISIT ---------------- */
const VISIT_DETAILS = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Den Culture Café", "Saravanampatti, Coimbatore", "Opposite KCT College", "Tamil Nadu, India"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Monday – Sunday", "9:00 AM – 12:00 AM"],
    note: "Open every day",
  },
  {
    icon: Phone,
    title: "Contact",
    lines: [PHONE],
    href: `tel:${PHONE.replace(/\s/g, "")}`,
  },
] as const;

function VisitInfoCard({
  item,
  index,
}: {
  item: (typeof VISIT_DETAILS)[number];
  index: number;
}) {
  const Icon = item.icon;
  const content = (
    <>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-sm border border-gold/35 bg-gold/8 transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold/12">
          <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
        </div>
        {"note" in item && item.note ? (
          <span className="rounded-full border border-gold/25 px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-gold/90">
            {item.note}
          </span>
        ) : null}
      </div>
      <div className="text-[11px] tracking-[0.25em] uppercase text-gold/80 mb-2">{item.title}</div>
      <div className="space-y-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {item.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-sm border border-border bg-background/80 p-5 backdrop-blur-sm transition-colors duration-500 hover:border-gold/35 sm:p-6"
    >
      {"href" in item && item.href ? (
        <a href={item.href} className="block transition-colors hover:text-gold">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.8_0.13_82/0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,oklch(0.8_0.13_82/0.05),transparent_40%)]" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="display-2 text-balance">
            Come <span className="italic text-gold">find</span> us.
          </h2>
          <p className="mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
            Drop in for coffee, food, and evening vibes — right in the heart of Saravanampatti.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {VISIT_DETAILS.map((item, i) => (
              <VisitInfoCard key={item.title} item={item} index={i} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            >
              <a
                href={MAPS}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_12px_40px_-16px_oklch(0.8_0.13_82/0.65)]"
              >
                <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Directions
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/25 px-6 py-3.5 text-sm tracking-wider uppercase text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {["Outdoor seating", "Dine in", "Budget friendly"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="group relative overflow-hidden rounded-sm border border-border bg-card/40 shadow-[0_24px_80px_-30px_oklch(0_0_0/0.8)] transition-all duration-500 hover:border-gold/30">
              <div className="absolute left-0 top-0 z-10 h-16 w-16 border-l border-t border-gold/40 transition-colors duration-500 group-hover:border-gold/70" />
              <div className="absolute bottom-0 right-0 z-10 h-16 w-16 border-b border-r border-gold/40 transition-colors duration-500 group-hover:border-gold/70" />

              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10]">
                <iframe
                  src={MAPS_EMBED}
                  title="Map to Den Culture Café"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale contrast-110 brightness-90"
                  style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.3) contrast(0.9)" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/15" />
              </div>

              <div className="absolute left-4 top-4 z-20 max-w-[calc(100%-2rem)] rounded-sm border border-border/80 bg-ink/90 px-4 py-3 backdrop-blur-md sm:left-5 sm:top-5">
                <p className="text-[10px] tracking-[0.24em] uppercase text-gold/90">Den Culture Café</p>
                <p className="mt-1 text-sm text-foreground/90">Saravanampatti · Opposite KCT College</p>
              </div>

              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-sm border border-gold/25 bg-ink/90 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:right-5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gold">5.0</span>
                <span className="text-xs text-muted-foreground">Google</span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 text-center text-[11px] tracking-[0.18em] uppercase text-muted-foreground lg:text-left"
            >
              Tap directions or open the map in Google Maps
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
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
const FOOTER_LINKS = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["Visit", "#visit"],
] as const;

const FOOTER_SOCIAL = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${WHATSAPP}` },
] as const;

const footerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink">
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 h-[2px] w-16 rounded-full bg-gold/80 blur-[1px] sm:w-20"
        animate={{ x: ["-4rem", "100vw"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
      />

      <div className="container-x py-14 sm:py-16 md:py-20">
        <motion.div
          variants={footerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-8"
        >
          <motion.div variants={footerItem} className="sm:col-span-2 md:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="h-14 sm:h-16 md:h-[4.5rem]" />
            </motion.div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground sm:mt-6">
              Den Culture Café is a modern destination in Saravanampatti, Coimbatore, designed for meaningful conversations, memorable experiences, and a welcoming community atmosphere.
            </p>

            <div className="mt-5 flex gap-3 sm:mt-6">
              {FOOTER_SOCIAL.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href ?? "#"}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={footerItem} className="md:col-span-2">
            <FooterTitle>Explore</FooterTitle>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {FOOTER_LINKS.map(([label, href], i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.12 + i * 0.05 }}
                >
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={footerItem} className="md:col-span-3">
            <FooterTitle>Contact</FooterTitle>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {ADDRESS}
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {PHONE}
              </li>
              <li>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold transition-all hover:gap-2.5 hover:underline"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Get Directions
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={footerItem} className="md:col-span-3">
            <FooterTitle>Hours</FooterTitle>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                ["Mon – Fri", "09:00 – 00:00"],
                ["Saturday", "09:00 – 00:00"],
                ["Sunday", "09:00 – 00:00"],
              ].map(([day, time], i) => (
                <motion.li
                  key={day}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="flex justify-between gap-4"
                >
                  <span>{day}</span>
                  <span className="text-foreground/80">{time}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 text-center text-xs text-muted-foreground sm:mt-14 sm:pt-8 md:flex-row md:text-left"
        >
          <p>© 2026 Den Culture Café. All trademarks, logos, and brand assets belong to their respective owners.</p>
          <p>
            Crafted by{" "}
            <motion.span
              className="inline-block text-gold"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
            >
              H2T Technologies
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="group mb-5">
      <div className="text-[11px] tracking-[0.3em] uppercase text-gold">{children}</div>
      <motion.span
        className="mt-2 block h-px w-8 bg-gold/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
    </div>
  );
}
