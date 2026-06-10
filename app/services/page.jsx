"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const Services = () => {
  const { t } = useLanguage();
  const services = t.services.items;

  return (
    <section className="flex min-h-[70vh] flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="mb-12 text-center xl:text-left"
        >
          <h2 className="h2 mb-4 text-metal">{t.services.heading}</h2>
          <p className="mx-auto max-w-[640px] text-white/60 xl:mx-0">
            {t.services.subheading}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.4, ease: "easeOut" } }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => {
            const num = String(index + 1).padStart(2, "0");
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col justify-center gap-6 rounded-2xl border border-white/5 bg-secondary/40 p-8 transition-colors hover:border-accent/30"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-5xl font-extrabold text-metal transition-all duration-500">
                    {num}
                  </div>

                </div>
                <h2 className="text-[36px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="w-full border-b border-white/10"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
