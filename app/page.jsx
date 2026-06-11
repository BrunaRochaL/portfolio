"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { BsArrowDownRight } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Sparkles from "@/components/Sparkles";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const featuredProjects = [
  { num: "01", category: "Portfólio", image: "/assets/work/portfolio.svg" },
  { num: "02", category: "Preveni", image: "/assets/work/preveni.png" },
  { num: "03", category: "Plataforma de Gestão", image: "/assets/work/platform.svg" },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const SectionTag = ({ children }) => (
  <span className="mb-3 inline-block text-xs uppercase tracking-[3px] text-accent">
    {children}
  </span>
);

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative">
        <Sparkles />
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between gap-8 pt-8 xl:flex-row xl:pb-16 xl:pt-12">
            {/* text */}
            <div className="order-2 animate-fade-up text-center xl:order-none xl:text-left">
              <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
                {t.home.role}
              </span>
              <h1 className="h1 mb-6 mt-6">
                {t.home.greeting}
                <br />
                <span className="text-metal">{t.home.name}</span>
              </h1>
              <p className="mb-6 max-w-[560px] text-white/70">
                {t.home.description}
              </p>
              {/* tech highlights */}
              <div className="mb-9">
                <span className="mb-3 block text-xs uppercase tracking-[2px] text-white/40">
                  {t.home.highlightsTitle}
                </span>
                <motion.ul
                  className="flex flex-wrap justify-center gap-2 xl:justify-start"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
                  }}
                >
                  {t.home.highlights.map((tech, index) => (
                    <motion.li
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              {/* btn and socials */}
              <div className="flex flex-col items-center gap-8 xl:flex-row">
                <a
                  href="/Bruna_Rocha_CV.pdf"
                  download
                  className="btn-y2k flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[1px] text-white transition-all duration-300"
                >
                  <span>{t.home.downloadCv}</span>
                  <FiDownload className="text-xl" />
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-10 h-10 border border-accent/40 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-gradient hover:text-primary hover:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 mb-8 xl:order-none xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />

        {/* scroll cue */}
        <div className="mt-6 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-[2px]">{t.landing.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiOutlineChevronDown className="text-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <motion.section {...reveal} className="container mx-auto py-24">
        <div className="grid items-center gap-12 xl:grid-cols-2">
          <div>
            <SectionTag>{t.landing.aboutTag}</SectionTag>
            <h2 className="h2 mb-6 text-metal">{t.resume.about.title}</h2>
            <p className="mb-8 max-w-[560px] text-white/70">
              {t.resume.about.description}
            </p>
            <Link href="/resume">
              <Button variant="y2k" className="gap-2">
                {t.landing.seeResume}
                <FiArrowRight />
              </Button>
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {t.resume.about.info.slice(0, 6).map((item, index) => (
              <li
                key={index}
                className="rounded-xl border border-white/5 bg-secondary/60 p-4"
              >
                <p className="text-xs uppercase tracking-[1px] text-white/40">
                  {item.fieldName}
                </p>
                <p className="mt-1 text-sm text-white/90">{item.fieldValue}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* ===== SERVICES PREVIEW ===== */}
      <motion.section {...reveal} className="container mx-auto py-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionTag>{t.landing.servicesTag}</SectionTag>
            <h2 className="h2 text-metal">{t.services.heading}</h2>
          </div>
          <Link href="/services">
            <Button variant="y2k" className="gap-2">
              {t.landing.seeServices}
              <FiArrowRight />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-secondary/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_30px_-12px_rgba(183,156,255,0.5)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold text-outline text-transparent transition-all group-hover:text-outline-hover">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-2xl font-bold transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <p className="line-clamp-3 text-sm text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ===== FEATURED WORK ===== */}
      <motion.section {...reveal} className="container mx-auto py-24">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionTag>{t.landing.workTag}</SectionTag>
            <h2 className="h2 text-metal">{t.work.heading}</h2>
          </div>
          <Link href="/work">
            <Button variant="y2k" className="gap-2">
              {t.landing.seeWork}
              <FiArrowRight />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => {
            const isSvg = project.image.endsWith(".svg");
            return (
              <Link
                key={project.num}
                href="/work"
                className="group relative block h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-secondary/40 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_30px_-8px_rgba(183,156,255,0.5)]"
              >
                <Image
                  src={project.image}
                  fill
                  alt={project.category}
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    isSvg ? "object-contain p-1" : "object-cover"
                  }`}
                />
                {!isSvg && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{project.category}</h3>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-accent-gradient group-hover:text-primary">
                          <FiArrowUpRight />
                        </span>
                      </div>
                    </div>
                  </>
                )}
                {isSvg && (
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-accent-gradient group-hover:text-primary">
                    <FiArrowUpRight />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </motion.section>

      {/* ===== CONTACT CTA ===== */}
      <motion.section {...reveal} className="container mx-auto py-24">
        <div className="glow-accent relative overflow-hidden rounded-3xl border border-white/10 bg-secondary/60 p-12 text-center">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent2/20 blur-3xl" />
          <div className="relative">
            <h2 className="h2 mb-4 text-metal" style={{ lineHeight: "1.3" }}>{t.landing.contactTitle}</h2>
            <p className="mx-auto mb-8 max-w-[520px] text-white/70">
              {t.landing.contactSubtitle}
            </p>
            <Link href="/contact">
              <Button variant="y2k" size="lg" className="gap-2">
                {t.landing.contactButton}
                <FiArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
