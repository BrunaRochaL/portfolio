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

const skillList = [
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
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <SiAdonisjs />, name: "AdonisJS" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiDjango />, name: "Django" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiAmazonaws />, name: "AWS" },
  { icon: <SiMicrosoftazure />, name: "Azure" },
  { icon: <SiDatadog />, name: "Datadog" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiBitbucket />, name: "Bitbucket" },
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
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {r.experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl border border-white/5 bg-secondary px-10 py-6 transition-colors hover:border-accent/40 lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
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
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {r.education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl border border-white/5 bg-secondary px-10 py-6 transition-colors hover:border-accent/40 lg:items-start"
                      >
                        {item.duration && (
                          <span className="text-accent">{item.duration}</span>
                        )}
                        <h3
                          className="min-h-[60px] max-w-[260px] text-center text-lg lg:text-left"
                          style={{ lineHeight: "1.45rem" }}
                        >
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
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
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group flex h-[130px] w-full items-center justify-center rounded-xl border border-white/5 bg-secondary transition-colors hover:border-accent/40">
                            <div className="text-5xl text-white/80 transition-colors duration-300 group-hover:text-accent">
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
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-metal">{r.about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {r.about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {r.about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center gap-4 xl:justify-start"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-lg">{item.fieldValue}</span>
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
