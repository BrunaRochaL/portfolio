"use client";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiVite,
  SiVitest,
  SiNodedotjs,
  SiNestjs,
  SiAdonisjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazonaws,
  SiMicrosoftazure,
  SiDatadog,
  SiGit,
  SiBitbucket,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const skillGroups = [
  {
    key: "frontend",
    skills: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiSass />, name: "SCSS" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiVitest />, name: "Vitest" },
    ],
  },
  {
    key: "backend",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <SiAdonisjs />, name: "AdonisJS" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiFlask />, name: "Flask" },
    ],
  },
  {
    key: "data",
    skills: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
    ],
  },
  {
    key: "devops",
    skills: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiAmazonaws />, name: "AWS" },
      { icon: <SiMicrosoftazure />, name: "Azure" },
      { icon: <SiDatadog />, name: "Datadog" },
    ],
  },
  {
    key: "tools",
    skills: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiBitbucket />, name: "Bitbucket" },
    ],
  },
];

const Resume = () => {
  const { t } = useLanguage();
  const r = t.resume;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
      className="flex min-h-[70vh] items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">{r.tabs.experience}</TabsTrigger>
            <TabsTrigger value="education">{r.tabs.education}</TabsTrigger>
            <TabsTrigger value="skills">{r.tabs.skills}</TabsTrigger>
            <TabsTrigger value="about">{r.tabs.about}</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-metal">{r.experience.title}</h3>
                <p className="mx-auto max-w-[700px] text-white/60 xl:mx-0">
                  {r.experience.description}
                </p>
                <ScrollArea className="h-[460px] pr-4">
                  <ul className="flex flex-col gap-6 text-left">
                    {r.experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="rounded-xl border border-white/5 bg-secondary p-6 transition-colors hover:border-accent/40 xl:p-7"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-xl font-semibold">{item.position}</h3>
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                            {item.duration}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        {item.bullets && (
                          <ul className="mt-4 flex flex-col gap-2">
                            {item.bullets.map((bullet, bIndex) => (
                              <li
                                key={bIndex}
                                className="flex gap-3 text-sm leading-relaxed text-white/70"
                              >
                                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent/70"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-metal">{r.education.title}</h3>
                <p className="mx-auto max-w-[900px] text-white/60 xl:mx-0">
                  {r.education.description}
                </p>
                <ScrollArea className="h-[460px] pr-4">
                  <ul className="grid grid-cols-1 gap-6 text-left lg:grid-cols-2">
                    {r.education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col rounded-xl border border-white/5 bg-secondary p-6 transition-colors hover:border-accent/40 xl:p-7"
                      >
                        {item.duration && (
                          <span className="w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                            {item.duration}
                          </span>
                        )}
                        <h4 className="mt-3 text-lg font-semibold leading-snug">
                          {item.degree}
                        </h4>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                        {item.bullets && (
                          <ul className="mt-4 flex flex-col gap-2">
                            {item.bullets.map((bullet, bIndex) => (
                              <li
                                key={bIndex}
                                className="flex gap-3 text-sm leading-relaxed text-white/70"
                              >
                                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent/70"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="mb-20 flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-metal">{r.skills.title}</h3>
                  <p className="mx-auto max-w-[700px] text-white/60 xl:mx-0">
                    {r.skills.description}
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  {skillGroups.map((group) => (
                    <div key={group.key}>
                      <h4 className="mb-4 text-xs uppercase tracking-[2px] text-accent">
                        {r.skills.categories?.[group.key] ?? group.key}
                      </h4>
                      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 xl:gap-5">
                        {group.skills.map((skill, index) => (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="group flex h-[96px] w-full items-center justify-center rounded-xl border border-white/5 bg-secondary transition-colors hover:border-accent/40">
                                  <div className="text-4xl text-white/80 transition-colors duration-300 group-hover:text-accent">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-metal">{r.about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {r.about.description}
                </p>
                <ul className="mx-auto grid max-w-[680px] grid-cols-1 gap-4 sm:grid-cols-2 xl:mx-0">
                  {r.about.info.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-xl border border-white/5 bg-secondary px-5 py-4 text-left transition-colors hover:border-accent/40"
                    >
                      <p className="text-xs uppercase tracking-[1px] text-white/40">
                        {item.fieldName}
                      </p>
                      <p className="mt-1 text-white/90">{item.fieldValue}</p>
                    </li>
                  ))}
                </ul>

                {/* languages */}
                <div className="mt-4">
                  <h4 className="mb-6 text-2xl font-bold text-metal">{r.languages.title}</h4>
                  <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-4 sm:grid-cols-3 xl:mx-0">
                    {r.languages.items.map((lang, index) => (
                      <li
                        key={index}
                        className="rounded-xl border border-white/5 bg-secondary px-4 py-4 text-center"
                      >
                        <p className="text-lg">{lang.name}</p>
                        <span className="text-sm text-accent">{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
