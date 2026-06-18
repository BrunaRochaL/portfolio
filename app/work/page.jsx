"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const projects = [
  {
    num: "01",
    category: "Portfólio",
    stack: [{ name: "Next.js" }, { name: "React" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }, { name: "i18n" }, { name: "SEO" }],
    image: "/assets/work/portfolio.svg",
    github: "https://github.com/BrunaRochaL/portfolio",
  },
  {
    num: "02",
    category: "Preveni",
    stack: [{ name: "React.js" }, { name: "Bootstrap" }, { name: "Node.js" }, { name: "MySQL" }, { name: "Azure" }],
    image: "/assets/work/preveni.png",
    live: "https://painel.preveni.com.br/",
  },
  {
    num: "03",
    category: "Plataforma de Gestão",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Vite" }, { name: "Redux" }, { name: "Tailwind CSS" }],
    image: "/assets/work/platform.svg",
  },
  {
    num: "04",
    category: "DataShield",
    stack: [{ name: "Figma" }, { name: "JavaScript" }, { name: "Node.js" }, { name: "OpenAI" }, { name: "HTML5" }],
    image: "/assets/work/datashield.png",
    live: "https://www.figma.com/proto/NpUyAW1jghwoV7cpLPiW9j/ProjetoDataShield?page-id=0%3A1&node-id=1-2&viewport=-79%2C403%2C0.03&t=s8r3MzrJNjXQ64cW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    github: "https://github.com/BrunaRochaL/ProjetoDataShield",
  },
  {
    num: "05",
    category: "Landing Page Responsiva",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "Bootstrap" }],
    image: "/assets/work/projeto1.png",
    live: "https://brunarochal.github.io/TheBrooklynBrothers/",
    github: "https://github.com/BrunaRochaL/TheBrooklynBrothers",
  },
  {
    num: "06",
    category: "API de Comissões",
    stack: [{ name: "Python" }, { name: "Flask" }, { name: "Pandas" }, { name: "Pytest" }, { name: "SQLite" }],
    image: "/assets/work/aawz.svg",
    live: "https://documenter.getpostman.com/view/30268092/2sA3e1A9t2",
    github: "https://github.com/BrunaRochaL/desafio-tecnico-aawz",
  },
  {
    num: "07",
    category: "Cafeteria Java",
    stack: [{ name: "Figma" }, { name: "UI/UX" }],
    image: "/assets/work/java.png",
    live: "https://www.figma.com/proto/rCrXcuDn1aN2DYfjmf9gBP/Projeto---Cafeteria-Java?page-id=0%3A1&node-id=1-297&viewport=694%2C-2160%2C0.55&t=ISohyu9JCVIvbCY9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A297",
    github: "#",
  },
  {
    num: "08",
    category: "API de Notificações",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "Telegram Bot API" }, { name: "Vercel" }, { name: "CORS" }],
    image: "/assets/work/visit-notifier.svg",
    live: "https://visit-notifier-api.vercel.app",
    github: "https://github.com/BrunaRochaL/visit-notifier-api",
  },
];

const Work = () => {
  const { t, locale } = useLanguage();
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
      className="flex min-h-[70vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <h2 className="h2 mb-8 text-center text-metal xl:text-left">{t.work.heading}</h2>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl font-extrabold leading-none text-outline text-transparent">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                {t.work.titles[project.num]}
              </h2>
              {/* description */}
              <p key={`${locale}-${project.num}`} className="text-white/60">
                {t.work.descriptions[project.num]}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/10"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-accent/10">
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.work.live}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && project.github !== "#" && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-accent/10">
                          <BsGithub className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t.work.github}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-secondary">
                    <div className="absolute inset-0 z-10 bg-black/10"></div>
                    <div className="relative h-full w-full">
                      <Image
                        src={item.image}
                        fill
                        className={
                          item.image.endsWith(".svg")
                            ? "object-contain p-2"
                            : "object-cover"
                        }
                        alt={item.category}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
