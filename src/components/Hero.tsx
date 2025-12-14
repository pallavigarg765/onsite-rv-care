import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Wrench } from "lucide-react";
import heroImage from "@/assets/header-bg-new.png";
import heroImageSmall from "@/assets/header-bg.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="RV service professional working on motorhome at night"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/30 to-sky-900/20" />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex-1 container mx-auto max-w-7xl px-3 md:px-4 lg:px-8 pt-8 pb-10 lg:pb-16">

          {/* Brand Heading (UNCHANGED) */}
          <a href="tel:+14079003199">
            <motion.h1
              className="
                font-outfit font-bold mb-6
                text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                leading-tight max-w-fit mx-auto
              "
            >
              <span className="
                bg-white/5 text-white border border-white/20
                px-6 py-2 sm:px-8 sm:py-1
                rounded-2xl inline-block
                shadow-[0_18px_60px_rgba(56,189,248,0.45)]
              ">
                <span className="text-amber-300">On</span>Site{" "}
                <span className="text-amber-300">RV</span> Care
              </span>
            </motion.h1>
          </a>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start md:items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative text-center md:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-3 mt-4 md:mt-8 backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-[8px] sm:text-xs font-medium tracking-[0.14em] text-sky-100">
                  24/7 <span className="text-amber-300">On</span>Site RV & MOTORHOME CARE
                </span>
              </div>

              {/* Accent line (mobile only) */}
              <div className="md:hidden mx-auto mb-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

              {/* Heading */}
              <h2 className="font-outfit text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-50 leading-tight mb-4">
                <span className="text-amber-300">On</span>Site{" "}
                <span className="text-amber-300">RV</span> Care that keeps{" "}
                <span className="text-amber-300">you</span> rolling.
              </h2>

              {/* Subtext */}
              <p className="font-inter text-sm sm:text-base md:text-lg text-slate-200/90 max-w-xl mx-auto md:mx-0 mb-6 font-bold">
                Emergency breakdowns, power issues, and routine maintenance for
                motorhomes, trailers, and trucks — handled OnSite so you never
                have to leave the campsite.
              </p>

              {/* Soft separator dots (mobile only) */}
              {/* <div className="md:hidden flex justify-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
              </div> */}

              {/* CTA container (visual frame only) */}
              <div className="relative mb-6">
                <div className="md:hidden absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/20 via-emerald-400/20 to-transparent blur-xl" />

                <div className="relative flex sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                  <a href="tel:+14079003199" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto group bg-sky-500 hover:bg-sky-400 text-white text-[14px] md:text-base px-1 md:px-8 py-0 md:py-4 rounded-2xl shadow-[0_18px_60px_rgba(56,189,248,0.45)] font-semibold hover:shadow-[0_22px_70px_rgba(56,189,248,0.6)] transition-all duration-300 hover:-translate-y-0.5 flex items-center  justify-center h-9 md:h-11 gap-0 md:gap-2"
                    >
                      Book OnSite Service
                      <ArrowRight className="ml-0 md:ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>

                  <a href="tel:+14079003199" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto border border-slate-100/40 bg-white text-slate-900 text-[14px] md:text-base font-semibold hover:bg-slate-50 hover:text-slate-900 hover:-translate-y-0.5 px-1 md:px-8 py-0 md:py-4 rounded-2xl backdrop-blur-md flex items-center justify-center h-9 md:h-11 gap-2"
                    >
                      <Phone className="size-2 md:size-4" />
                      Call Now
                    </Button>

                    {/* <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border border-slate-100/40 bg-white text-slate-900 hover:bg-slate-50 hover:text-slate-900 text-[8px] md:text-base px-1 md:px-8 py-0 md:py-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center h-7 md:h-11 gap-0 md:gap-2"
                  >
                    <Phone className="mr-2 size-1 md:size-4" />
                    Call Now
                  </Button> */}
                  </a>
                </div>
              </div>

              {/* Mini stats */}
              <motion.div
                className="flex flex-wrap justify-start gap-[10%] sm:gap-[10%] text-slate-200/80 text-xs sm:text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <div className="flex items-center gap-1 md:gap-3 w-[45%]">
                  <div className="p-2 md:p-2 rounded-lg bg-white/5 border border-white/10">
                    <Clock className="size-4 md:size-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50 text-[10px] md:text-sm">
                      Under 60 min*
                    </p>
                    <p className="text-[10px] md:text-sm text-slate-300/80">
                      Average emergency response time
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 md:gap-3 w-[45%]">
                  <div className="p-2 md:p-2 rounded-lg bg-white/5 border border-white/10">
                    <Wrench className="size-4 md:size-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50 text-[10px] md:text-sm">
                      500+ RVs
                    </p>
                    <p className="text-[10px] md:text-sm text-slate-300/80">
                      Serviced across entire state of Florida
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT CARD — UNCHANGED CONTENT */}
            <motion.div
              className="relative w-full flex flex-col items-center lg:items-end gap-4 mt-4 md:mt-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Edge highlight (mobile only) */}
              <div className="md:hidden absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/20 via-emerald-400/20 to-transparent blur-2xl" />

              <motion.div
                className="relative w-full max-w-xl lg:max-w-none mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-2xl p-2 sm:p-3 shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] h-[280px] sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[460px]">
                  <img
                    src={heroImageSmall}
                    alt="Mobile RV technician working OnSite"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* TOP LABELS */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between sm:justify-start md:gap-2">
                    <span className="rounded-full bg-slate-950/75 text-[8px] sm:text-xs text-slate-50 px-3 py-1.5 border border-white/10">
                      Mobile RV Technician
                    </span>
                    <span className="rounded-full bg-emerald-500/80 text-[8px] sm:text-xs text-slate-950 px-3 py-1.5 font-semibold">
                      OnSite Now
                    </span>
                  </div>

                  {/* BOTTOM INFO STRIP */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-3 rounded-2xl bg-slate-950/85 px-3 py-2 border border-white/10 backdrop-blur-xl">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-400 flex items-center justify-center">
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
                      </div>
                      <div>
                        <p className="text-[8px] sm:text-[11px] uppercase tracking-[0.12em] text-slate-400">
                          Live service snapshot
                        </p>
                        <p className="text-[10px] sm:text-base font-semibold text-slate-50">
                          Power system diagnostics in progress
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CUSTOMER RATING */}
              <motion.div
                className="rounded-2xl bg-slate-950/90 border border-sky-400/40 px-3 md:px-4 py-2 md:py-3.5 backdrop-blur-xl shadow-xl md:absolute md:-bottom-7 md:right-10 relative mx-auto md:mx-0"
              >
                <p className="text-[8px] md:text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                  Customer rating
                </p>
                <p className="text-[10px] md:text-sm font-semibold text-slate-50">
                  4.9/5.0 average from RV owners
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator – DESKTOP ONLY */}
        <div className="hidden md:flex flex-col items-center gap-3 text-slate-300/80 mb-8">
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll to explore services
          </span>
          <div className="w-7 h-12 border-2 border-slate-300/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-slate-100 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
