"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaAmazon,
  FaGithub,
  FaGit,
  FaPython,
  FaFlask,
  FaDocker,
  FaUbuntu,
  FaLinux,
  FaWindows,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "Sobre",
  description:
    "Me chamo Bruna Rocha, Desenvolvedora de Software júnior e apaixonada pela área de tecnologia. Sou estudante de Análise e Desenvolvimento de Sistemas e estou sempre buscando desafios para crescer profissionalmente.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Bruna Rocha",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileira",
    },
    {
      fieldName: "Idade",
      fieldValue: "23 anos",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(+55) 53 984798240",
    },
    {
      fieldName: "Experiência",
      fieldValue: "2+ anos",
    },

    {
      fieldName: "Email",
      fieldValue: "brunarochadev@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Inglês (avançado)",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiências profissionais",
  description:
    "Possuo ampla experiência em desenvolvimento de software, abrangendo tanto front-end quanto back-end, com habilidades em análise, resolução de problemas complexos e colaboração em equipe.",
  items: [
    {
      company: "Preveni",
      position: "Software Developer",
      duration: "2023 - Atualmente",
    },
    {
      company: "Projeto voluntário",
      position: "Rolê da Mariquinha",
      duration: "2023",
    },
    {
      company: "GEBRAS",
      position: "Gestão de energia",
      duration: "04/2022 - 12/2022",
    },
    {
      company: "Fabio Vianna Agronegóciosa",
      position: "Desenhista Projetista",
      duration: "2020 - 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Escolaridade",
  description:
    "Estudante de Análise e Desenvolvimento de Sistemas na UNICESUSC em Florianópolis/SC, onde adquiri uma sólida base em diversas áreas do desenvolvimento de software.",
  items: [
    {
      institution: "UNICESUSC",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "01/2023 - 12/2024",
    },
    {
      institution: "Curso online - Udemy",
      degree: "Formação Node.js",
    },
    {
      institution: "Curso Online - Alura",
      degree: "HTML5, CSS3 e Javascript (Formulários e Tabelas)",
    },
    {
      institution: "Curso Online - Alura",
      degree: "HTML5, CSS3 e Javascript (Criação de página)",
    },
    {
      institution: "Curso Online - Alura",
      degree: "HTML5, CSS3 e Javascript (Posicionamento e navegação)",
    },
    {
      institution: "Curso Online - Alura",
      degree: "Formação Python",
    },
    {
      institution: "Bradesco Escola Virtual",
      degree: "LGPD",
    },
    {
      institution: "Bradesco Escola Virtual",
      degree: "Segurança da Informação",
    },
  ],
};

// skills data
const skills = {
  title: "Habilidades",
  description:
    "Possuo conhecimentos em Python, JavaScript, Node.js, HTML, CSS, React.js, bancos de Dados relacionais e não-relacionais, API RESTful e Express, o que me capacita a criar e manter sistemas web completos e mantê-los em operação.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaFlask />,
      name: "Flask",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <FaAmazon />,
      name: "AWS",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <FaWindows />,
      name: "Windows",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Escolaridade</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left"
                            style={{ lineHeight: "1.45rem" }}
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] mb-20">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
