import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const contactRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Main card: animate on enter (use fromTo + immediateRender:false so it doesn't hide before trigger)
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            duration: 0.7,
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      }

      // Contact cards stagger in on enter
      if (contactRefs.current && contactRefs.current.length) {
        gsap.fromTo(
          contactRefs.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            ease: "power3.out",
            duration: 0.6,
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      }

      // CTA button “pop” when it hits viewport
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { scale: 0.96, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "elastic.out(1, 0.7)",
            duration: 1,
            immediateRender: false,
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contacts = [
    { icon: Phone, title: "Call Us", info: "(140) 790-03199" },
    { icon: Mail, title: "Email Us", info: "floridacoachspecialist@gmail.com" },
    { icon: MapPin, title: "Service Area", info: "Serving the entire state of florida" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-6 md:py-16 overflow-x-hidden bg-slate-950"
    >

      {/* center glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-56 w-56 md:h-96 md:w-96 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8">
        <div
          ref={cardRef}
          className="
            relative mx-auto rounded-[2.4rem] border border-slate-800/60
            bg-gradient-to-br from-slate-900/96 to-slate-950/100 backdrop-blur-2xl
            px-[clamp(16px,3.5vw,56px)] py-[clamp(18px,3.6vw,64px)]
            sm:px-[clamp(20px,4vw,72px)] sm:py-[clamp(22px,4.2vw,80px)]
            overflow-visible
            max-w-[1100px]
          "
        >
          {/* inner glow border */}
          <div className="pointer-events-none absolute inset-px rounded-[2.3rem] bg-gradient-to-tr from-sky-500/20 via-emerald-400/14 to-transparent opacity-80" />

          {/* Header */}
          <div className="relative text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-4 py-1.5 mb-4 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[clamp(10px,2vw,13px)] font-semibold tracking-[0.18em] text-slate-300">
                <span className="text-amber-300">On</span>Site RV & TRUCK SERVICE
              </span>
            </div>

            <h2 className="font-outfit text-[clamp(20px,4.8vw,44px)] font-semibold text-slate-50 mb-3">
              Ready to get back on the road?
            </h2>

            <p className="text-[clamp(12px,2.2vw,18px)] text-slate-300/90 max-w-2xl mx-auto">
              Tell us where you’re parked, and we’ll bring the shop to you —
              diagnostics, repair, and maintenance without ever leaving your spot.
            </p>
          </div>

          {/* Contact blocks: force the same desktop columns on mobile (3 columns) but shrink content */}
          <div className="relative max-w-4xl mx-auto mb-8">
            {/* center divider for large screens */}
            <div className="pointer-events-none hidden md:block absolute inset-y-4 left-1/2 w-px bg-gradient-to-b from-transparent via-slate-600/60 to-transparent" />

            <div className="grid grid-cols-3 gap-[clamp(8px,2vw,18px)] min-w-0">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={contact.title}
                    ref={(el) => {
                      if (el) contactRefs.current[index] = el as HTMLDivElement;
                    }}
                    className="min-w-0"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="
                        h-full bg-slate-900/85 border border-slate-700/80 rounded-2xl
                        px-[clamp(10px,2vw,18px)] py-[clamp(12px,2.2vw,18px)]
                        text-center hover:border-sky-400/80 hover:bg-slate-900/95
                        backdrop-blur-xl transition-all duration-300 min-w-0
                      "
                    >
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.03 }}
                        transition={{ duration: 0.25 }}
                        className="mx-auto mb-3 w-[clamp(44px,8.5vw,64px)] h-[clamp(44px,8.5vw,64px)] rounded-2xl bg-gradient-to-tr from-sky-500 via-emerald-400 to-amber-300 flex items-center justify-center shadow-[0_0_35px_rgba(56,189,248,0.6)]"
                      >
                        <Icon className="w-[clamp(18px,3.4vw,28px)] h-[clamp(18px,3.4vw,28px)] text-slate-950" />
                      </motion.div>

                      <h3 className="font-outfit text-[clamp(13px,2.2vw,18px)] font-semibold text-slate-50 mb-1.5">
                        {contact.title}
                      </h3>
                      <p className="text-[clamp(8px,2vw,8px)] md:text-[clamp(12px,2.2vw,16px)] text-slate-300/90 break-words whitespace-normal">
                        {contact.info}
                      </p>

                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative flex flex-col items-center gap-4 w-full">
            <a
              href="tel:+14079003199"
              className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
            >
              <Button
                ref={buttonRef}
                size="lg"
                className="
                  w-full group bg-sky-500 hover:bg-sky-400 text-slate-950
                  text-[clamp(14px,2.4vw,22px)]
                  px-[clamp(10px,3vw,28px)] py-[clamp(10px,2.6vw,20px)]
                  rounded-2xl shadow-[0_18px_70px_rgba(56,189,248,0.55)]
                  hover:shadow-[0_22px_90px_rgba(56,189,248,0.8)]
                  transition-all duration-300 flex items-center justify-center gap-3
                "
                aria-label="Schedule On-Site Service"
              >
                Schedule On-Site Service
                <span
                  className="
                    inline-flex items-center justify-center rounded-full bg-slate-950/20
                    h-[clamp(20px,3.4vw,36px)] w-[clamp(36px,6.6vw,44px)]
                  "
                >
                  <Phone className="w-[clamp(14px,2.6vw,20px)] h-[clamp(14px,2.6vw,20px)]" />
                </span>
              </Button>
            </a>

            <p className="text-[clamp(10px,1.8vw,12px)] text-slate-500 text-center max-w-xl">
              No obligation. We confirm availability, pricing, and ETA before dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
