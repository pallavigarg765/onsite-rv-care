import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative  bg-slate-950 overflow-hidden"
    >
      {/* Background gradient + texture */}
      {/*<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950" />*/}
      {/*<div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,#e2e8f033_1px,transparent_0)] [background-size:20px_20px]" />*/}
      {/* <div className="pointer-events-none absolute -top-32 right-0 w-72 h-72 rounded-full bg-sky-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 w-80 h-80 rounded-full bg-emerald-400/20 blur-3xl" /> */}

      <div className="relative container mx-auto px-4 lg:px-8 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-outfit font-semibold text-slate-50">
              <span className="text-amber-300">On</span>Site{" "}
                <span className="text-amber-300">RV</span> Care
            </h3>
            <p className="text-sm md:text-base text-slate-300/90">
              Professional mobile motorhome & truck services that come to you —
              diagnostics, repairs, and upgrades without leaving your spot.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                24/7 Emergency Support
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                Mobile RV & Truck
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-outfit font-semibold text-slate-50 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm md:text-base text-slate-300/90">
              {["General Repairs", "Plumbing", "Electrical Systems", "Preventive Maintenance"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-sky-300 transition-colors duration-200"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base md:text-lg font-outfit font-semibold text-slate-50 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm md:text-base text-slate-300/90">
              <li className="cursor-pointer hover:text-sky-300 transition-colors duration-200">
                About Us
              </li>
              <li className="cursor-pointer hover:text-sky-300 transition-colors duration-200">
                Contact
              </li>
              <li className="cursor-pointer hover:text-sky-300 transition-colors duration-200">
                Careers
              </li>
              <li className="cursor-pointer hover:text-sky-300 transition-colors duration-200">
                Reviews
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-outfit font-semibold text-slate-50 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm md:text-base text-slate-300/90">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">
                  <Phone className="w-4 h-4 text-sky-300" />
                </span>
                <span>(140) 790-03199</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">
                  <Mail className="w-4 h-4 text-sky-300" />
                </span>
                <span>floridacoachspecialist@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">
                  <MapPin className="w-4 h-4 text-sky-300" />
                </span>
                <span>Serving the entire state of florida</span>
              </li>
              <li className="text-xs text-slate-400">
                Licensed • Insured • Certified RV Technicians
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 pt-6 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} On-Site RV Care. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button className="hover:text-sky-300 transition-colors duration-200">
              Privacy Policy
            </button>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <button className="hover:text-sky-300 transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
