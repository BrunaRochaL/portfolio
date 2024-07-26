"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Front-End",
    description:
      "Desenvolvimento de interfaces de usuário dinâmicas e responsivas utilizando React.js, JavaScript, Html5, Css3, EJS e Bootstrap. Criação de componentes reutilizáveis, gestão de estado com Redux e integração com APIs RESTful, além de estilização eficiente com Bootstrap.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Criação de designs intuitivos para aplicações web e móveis utilizando ferramentas como Figma para validar a experiência do usuário. Baseado nos princípios de usabilidade e avaliação heurística, assegurando uma experiência de usuário eficiente e agradável.",
    href: "",
  },
  {
    num: "03",
    title: "Back-End",
    description:
      "Implementação de servidores e APIs robustas com Node.js, Express.js e Flask. Integração de bancos de dados relacionais e não relacionais, autenticação de usuários e manipulação de dados em tempo real. Gerenciamento de código com Git e GitHub, e deploy automatizado utilizando AWS.",
    href: "",
  },
  {
    num: "04",
    title: "Full-Stack",
    description:
      "Utização de combinações de tecnologias de front-end (React.js, Next.js, JavaScript, EJS, Bootstrap) e back-end (Node.js, Adonis.js, Express.js, Sequelize, Flask). Integração com bancos de dados relacionais (MySQL, PostgreSQL) e não relacionais (MongoDB). Gerenciamento de código e deploy automatizado.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
