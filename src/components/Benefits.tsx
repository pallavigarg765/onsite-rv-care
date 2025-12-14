import { motion, useInView } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { MapPin, Clock, Award, DollarSign } from "lucide-react";
import serviceImage from "@/assets/service-detail.jpg";
import benefitsBg from "@/assets/RVimage2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: MapPin,
    title: "We Come to You",
    description:
      "No towing, no waiting rooms. We bring a fully equipped mobile shop directly to your campsite, storage, or driveway.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Evenings, weekends, and trip-day emergencies — we work around your travel plans, not the other way around.",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description:
      "Technicians experienced with Class A, B, C, fifth wheels, travel trailers, and luxury motor coaches.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Upfront estimates, clear labor rates, and part costs — no surprise fees when the work is complete.",
  },
];

type BenefitType = (typeof benefits)[number];

const Benefits = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgTextureRef = useRef<HTMLDivElement | null>(null);
  const topBlobRef = useRef<HTMLDivElement | null>(null);
  const bottomBlobRef = useRef<HTMLDivElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-150px" });

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Background image parallax
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Soft parallax for the texture
      if (bgTextureRef.current) {
        gsap.to(bgTextureRef.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (topBlobRef.current) {
        gsap.to(topBlobRef.current, {
          y: -50,
          x: 24,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (bottomBlobRef.current) {
        gsap.to(bottomBlobRef.current, {
          y: 50,
          x: -24,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-16 overflow-hidden text-slate-50 bg-slate-950 px-4"
      id="why-us"
    >
      {/* Background image - behind everything */}
      <div
        ref={bgImageRef}
        className="pointer-events-none absolute inset-0 -z-40 overflow-hidden hidden lg:block "
      >
        <img
          src={benefitsBg}
          alt="Background for why choose us section"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.18] will-change-transform"
        />
        {/* slight darken directly on image so overlay blends nicely */}
        <div className="absolute inset-0 bg-black/18" />
      </div>

      {/* STRONG MAIN OVERLAY (covers entire section) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-slate-950/60" />

      {/* BOTTOM VIGNETTE (extra darkness at bottom) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 z-12">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/98 to-transparent" />
      </div>

      {/* Texture + decorative blobs (keep behind overlay or move above if desired) */}
      <div
        ref={bgTextureRef}
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#64748b55_1px,transparent_0)] [background-size:22px_22px]"
      />
      <div
        ref={topBlobRef}
        className="pointer-events-none absolute -top-32 -left-8 -z-20 w-52 h-52 rounded-full bg-sky-500/20 blur-3xl"
      />
      <div
        ref={bottomBlobRef}
        className="pointer-events-none absolute -bottom-36 right-0 -z-20 w-64 h-64 rounded-full bg-emerald-400/18 blur-3xl"
      />

      {/* CONTENT — above overlay */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-20"
          >
            {/* Glow ring behind card (visual only) */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/26 via-emerald-400/20 to-transparent blur-3xl" />

            <motion.div
              className="relative rounded-[1.5rem] border border-slate-800/72 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black overflow-hidden shadow-[0_12px_40px_rgba(15,23,42,0.7)]"
              animate={inView ? { y: [0, -6, 0] } : { y: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
                <img
                  src={serviceImage}
                  alt="Professional RV technician performing maintenance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/34 to-transparent" />

                {/* Top-left tag */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.55, delay: 0.16 }}
                  className="absolute top-3 left-3 flex flex-wrap gap-2"
                >
                  <span className="rounded-full bg-black/78 border border-slate-600 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-100">
                    <span className="text-amber-300">On</span>Site RV CARE
                  </span>
                  <span className="rounded-full bg-emerald-400 text-slate-950 px-3 py-1 text-[10px] font-semibold">
                    Technician dispatched
                  </span>
                </motion.div>

                {/* Response time – bottom left */}
                <motion.div
                  className="absolute bottom-3 left-3 bg-black/85 border border-slate-700 rounded-2xl px-3 py-2 shadow-md backdrop-blur-lg w-[72%] max-w-[200px] sm:w-auto sm:max-w-[190px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.55, delay: 0.28 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">
                    Response time
                  </p>
                  <p className="text-sm sm:text-lg font-outfit font-semibold text-slate-50">
                    <span className="bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-transparent">
                      Under 60 min
                    </span>
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Average for emergency calls in service areas.
                  </p>
                </motion.div>

                {/* RV rating – top right */}
                <motion.div
                  className="absolute right-3 top-16 sm:top-4 bg-black/85 border border-sky-500/60 rounded-2xl px-3 py-2 shadow-md backdrop-blur-lg w-[72%] max-w-[200px] sm:w-auto sm:max-w-[190px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.55, delay: 0.4 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">
                    RV owners rated
                  </p>
                  <p className="text-sm sm:text-lg font-outfit font-semibold text-slate-50">
                    4.9<span className="text-xs text-slate-400">/5.0</span>
                  </p>
                  <p className="text-[10px] text-emerald-300 mt-1">
                    Based on service follow-up surveys.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-20"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="inline-flex items-center gap-2 rounded-full bg-black/58 border border-slate-700 px-3 py-1 mb-3 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-200">
                Why RV owners choose us
              </span>
            </motion.div>

            <motion.h2
              className="font-outfit text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-50 mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              More than repairs. It&apos;s peace of mind on every mile.
            </motion.h2>

            <motion.p
              className="text-sm sm:text-sm md:text-base text-slate-300 mb-4 max-w-lg font-medium italic"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              Your RV is your home, office, and adventure base. We treat it that way,
              combining certified expertise, honest communication, and mobile convenience
              so you can stay focused on the journey ahead.
            </motion.p>

            {/* Vertical glow line + benefits list */}
            <div className="relative flex gap-4">
              {/* Timeline / glow line (only on md+) */}
              <div className="relative hidden md:flex flex-col items-center pt-1">
                <div className="h-2 w-2 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-300 shadow-[0_0_10px_rgba(56,189,248,0.45)] mb-1" />
                <div className="w-px flex-1 bg-gradient-to-b from-sky-300/70 via-slate-700/70 to-transparent" />
              </div>

              <div className="space-y-4 md:space-y-5">
                {benefits.map((benefit: BenefitType, index) => (
                  <BenefitItem
                    key={benefit.title}
                    benefit={benefit}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({
  benefit,
  index,
  inView,
}: {
  benefit: BenefitType;
  index: number;
  inView: boolean;
}) => {
  const Icon = benefit.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
      transition={{ duration: 0.45, delay: 0.2 + index * 0.08, ease: "easeOut" }}
      className="group flex gap-3 md:gap-4 items-start"
    >
      <div className="flex-shrink-0">
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-2xl blur-md opacity-40 bg-gradient-to-tr from-sky-400 via-emerald-300 to-amber-300"
            animate={inView ? { opacity: [0.2, 0.5, 0.2] } : { opacity: 0.15 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-slate-900/95 border border-slate-700 flex items-center justify-center group-hover:border-sky-400/70 transition-colors duration-300">
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-sky-300 group-hover:text-emerald-300 transition-colors duration-300" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-outfit text-base md:text-lg font-semibold text-slate-50 mb-1">
          {benefit.title}
        </h3>
        <p className="text-sm md:text-sm text-slate-300 italic">{benefit.description}</p>
      </div>
    </motion.div>
  );
};

export default Benefits;
