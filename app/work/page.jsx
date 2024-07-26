"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

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

const projects = [
  {
    num: "01",
    category: "The Brooklyn Brothers",
    title: "project 1",
    description:
      "Projeto realizado em um desafio técnico de Frontend onde recebi o design da página via Adobe XD. Utilizei HTML5, CSS3 e JavaScript para implementar uma Landing Page responsiva, assegurando a precisão no layout e a aderência ao design original.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/projeto1.png",
    live: "https://brunarochal.github.io/TheBrooklynBrothers/",
    github: "https://github.com/BrunaRochaL/TheBrooklynBrothers",
  },
  {
    num: "02",
    category: "Preveni",
    title: "project 3",
    description:
      "Trabalho para a Preveni, focando no front-end com ReactJS, JavaScript, HTML e CSS, e  back-end com Node.js (AdonisJS) e MySQL para manipulação de dados de IoT. Também participo do monitoramento e manutenção da plataforma, faço correção de bugs, criação de features e implementação de metodologias ágeis.",
    stack: [
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Node.js" },
      { name: "MySQL" },
      { name: "Azure" },
    ],
    image: "/assets/work/preveni.png",
    live: "https://painel.preveni.com.br/",
  },
  {
    num: "03",
    category: "Cafeteria Java",
    title: "project 3",
    description:
      "Protótipo para a aplicação Cafeteria Java desenvolvido no Figma, baseado nos princípios de usabilidade e heurísticas de Nielsen. Este projeto foi criado com uma interface intuitiva para a gestão de pedidos de uma cafeteria, garantindo uma ótima experiência.",
    stack: [{ name: "Figma" }, { name: "UI/UX" }],
    image: "/assets/work/java.png",
    live: "https://www.figma.com/proto/rCrXcuDn1aN2DYfjmf9gBP/Projeto---Cafeteria-Java?page-id=0%3A1&node-id=1-297&viewport=694%2C-2160%2C0.55&t=ISohyu9JCVIvbCY9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A297",
    github: "#",
  },
  {
    num: "04",
    category: "DataShield",
    title: "project 4",
    description:
      "Extensão do Google Chrome que utiliza a API da OpenAI para detectar sites fraudulentos e emails de phishing. O projeto visa aumentar a segurança dos usuários ao navegar na internet, identificando e alertando sobre possíveis ameaças em tempo real. A demonstração do funcionamento está prototipada, mostrando como a extensão analisa dados e fornece alertas claros e imediatos aos usuários.",
    stack: [
      { name: "Figma" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "OpenAI" },
      { name: "HTML5" },
    ],
    image: "/assets/work/datashield.png",
    live: "https://www.figma.com/proto/NpUyAW1jghwoV7cpLPiW9j/ProjetoDataShield?page-id=0%3A1&node-id=1-2&viewport=-79%2C403%2C0.03&t=s8r3MzrJNjXQ64cW-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    github: "https://github.com/BrunaRochaL/ProjetoDataShield",
  },
  {
    num: "05",
    category: "Projeto Colosseum",
    title: "project 5",
    description:
      "Colosseum é um projeto acadêmico desenvolvido para atender a proposta de utilizar HTML, CSS e Bootstrap de forma simples e eficaz. O objetivo era criar uma aplicação prática que oferecesse um produto funcional e visualmente atrativo para apresentação de imóveis. Este projeto demonstra a aplicação prática dos conhecimentos adquiridos em sala de aula, proporcionando uma experiência de usuário clara e intuitiva.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Bootstrap" }],
    image: "/assets/work/colosseum.png",
    live: "https://brunarochal.github.io/ProjetoColosseum/",
    github: "https://github.com/BrunaRochaL/ProjetoColosseum",
  },
  {
    num: "06",
    category: "Pousada SolMar",
    title: "project 6",
    description:
      "Projeto acadêmica de aplicação web que consiste em uma landing page utilizando HTML, CSS e JavaScript. O projeto implementa um CRUD (Create, Read, Update, Delete) para gerenciar dados.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "Bootstrap" },
    ],
    image: "/assets/work/fullstack.png",
    live: "https://brunarochal.github.io/ProjetoFullStack/",
    github: "https://github.com/BrunaRochaL/ProjetoFullStack",
  },
  {
    num: "07",
    category: "Gerenciamento de dados",
    title: "project 7",
    description:
      "Projeto em Python para gerenciar dados de vendedores e calcular comissões com base nas vendas, incluindo potencial desenvolvimento de API e integração com banco de dados.",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "Pandas" },
      { name: "Pytest" },
      { name: "SQLite" },
      { name: "AWS" },
    ],
    image: "/assets/work/python.png",
    github: "https://github.com/BrunaRochaL/desafio-tecnico-aawz",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github && project.github !== "#" && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
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
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
