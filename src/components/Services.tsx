import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Droplets, Battery, Shield, Zap, Settings } from "lucide-react";

const services = [
  { icon: Wrench, title: "General Repairs", description: "Comprehensive diagnostics and repairs for chassis, suspension, slide-outs, and onboard systems." },
  { icon: Droplets, title: "Plumbing Services", description: "Fresh water, gray/black tanks, pumps, winterization, leak detection, and valve replacements." },
  { icon: Battery, title: "Electrical Systems", description: "12V & 120V troubleshooting, battery banks, inverters, shore power issues, and lighting." },
  { icon: Shield, title: "Preventive Care", description: "Scheduled inspections, lubrication, roof checks, and sealant renewals to prevent costly failures." },
  { icon: Zap, title: "Emergency Support", description: "24/7 mobile response for no-starts, power loss, system failures, and critical breakdowns." },
  { icon: Settings, title: "System Upgrades", description: "Solar, lithium battery upgrades, Wi-Fi/Starlink setups, smart controls, and comfort add-ons." },
];

type ServiceType = (typeof services)[number];

const ServiceCard = ({ service, index }: { service: ServiceType; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="min-w-0"
    >
      {/* ================= MOBILE STRUCTURE ================= */}
      <div className="md:hidden">
        <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/70 backdrop-blur-xl p-4 shadow-lg">
          
          <div className="flex gap-4">
            {/* Icon rail */}
            <div className="flex flex-col items-center">
              <div className="rounded-xl bg-gradient-to-tr from-sky-400 via-emerald-400 to-amber-300 p-2">
                <service.icon className="size-5 text-slate-950" />
              </div>
              <div className="mt-2 h-full w-px bg-gradient-to-b from-sky-400/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-outfit font-semibold text-slate-50 text-base mb-1">
                {service.title}
              </h3>

              <p className="text-sm text-slate-300/90 leading-relaxed mb-3">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-700/70">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  On-site service
                </div>

                <span className="text-[8px] px-2 py-1 rounded-full bg-sky-500/15 text-sky-200 border border-sky-500/40">
                  RV & Motorhomes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP CARD (UNCHANGED) ================= */}
      <div className="hidden md:block">
        <div
          className="
            relative h-full rounded-2xl border border-slate-700/80 bg-slate-900/70 backdrop-blur-xl
            p-[clamp(8px,2vw,24px)] overflow-hidden
            shadow-[0_18px_45px_rgba(0,0,0,0.7)]
            transition-all duration-450
            group-hover:-translate-y-1
            group-hover:shadow-[0_22px_70px_rgba(56,189,248,0.45)]
          "
        >
          {/* hover glow */}
          <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/12 via-emerald-400/8 to-transparent" />

          {/* Icon + title */}
          <div className="relative mb-[clamp(8px,1.6vw,18px)] flex flex-col items-start gap-[clamp(8px,1.6vw,14px)]">
            <div className="inline-flex items-center justify-center rounded-2xl bg-slate-900/80 border border-sky-500/28 p-[clamp(6px,1.4vw,12px)]">
              <div className="relative rounded-2xl flex items-center justify-center w-[clamp(36px,7.5vw,56px)] h-[clamp(36px,7.5vw,56px)] bg-gradient-to-tr from-sky-400 via-emerald-400 to-amber-300">
                <service.icon className="relative z-10 size-6" />
              </div>
            </div>

            <h3 className="font-outfit font-semibold text-slate-50 text-[clamp(12px,2.4vw,18px)] leading-tight">
              {service.title}
            </h3>
          </div>

          <p className="text-slate-300/90 text-[clamp(11px,2.2vw,15px)] leading-relaxed mb-4">
            {service.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-slate-700/80">
            <div className="flex items-center gap-2 text-[clamp(10px,1.8vw,12px)] uppercase tracking-[0.18em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              On-site service
            </div>

            <span className="text-[clamp(10px,1.8vw,12px)] px-2 py-1 rounded-full bg-sky-500/15 text-sky-200 border border-sky-500/40">
              RV & Motorhomes
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};



const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-14 md:pt-12 md:pb-28 bg-slate-950 overflow-x-hidden border-t border-slate-800"
    >
      {/* bg layers */}
      {/*<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950" />*/}
      {/*<div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,#e2e8f033_1px,transparent_0)] [background-size:20px_20px]" />*/}

      <div className="relative container mx-auto px-3 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 mb-4 backdrop-blur-xl shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[clamp(12px,2.2vw,14px)] font-semibold tracking-[0.18em] uppercase text-slate-200">
              Mobile RV & Truck Services
            </span>
          </div>

          <h2 className="font-outfit text-[clamp(20px,5.4vw,40px)] font-semibold text-slate-50 mb-3">
            Services designed for life on the road.
          </h2>

          <p className="text-[clamp(12px,2.4vw,16px)] text-slate-300/90 font-bold max-w-3xl mx-auto">
            From emergency breakdowns to long-haul maintenance, we bring a fully
            equipped service bay straight to your campsite, storage lot, or driveway.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 flex items-center justify-center gap-3 text-[clamp(11px,2vw,14px)] text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-24 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300" />
              </div>
              <span>Coverage: power • plumbing • chassis • comfort</span>
            </div>
          </motion.div>
        </motion.div>

        {/* grid - KEEP desktop composition on mobile: 3 columns everywhere */}
        <div className="relative">
          <div className="pointer-events-none hidden lg:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[clamp(8px,1.8vw,18px)]">
  {services.map((service, index) => (
    <ServiceCard key={service.title} service={service} index={index} />
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default Services;
