export const LOCALES = ["pt", "en", "es"];

export const LOCALE_LABELS = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export const translations = {
  pt: {
    nav: {
      home: "Início",
      services: "Atuação",
      resume: "Currículo",
      work: "Projetos",
      contact: "Contato",
      hire: "Contato",
    },
    home: {
      role: "Engenheira de Software Full Stack",
      greeting: "Olá, eu sou",
      name: "Bruna Rocha",
      description:
        "Engenheira de software full stack com forte atuação em front-end, especializada em React, Next.js, TypeScript e no ecossistema JavaScript. Formada em Análise e Desenvolvimento de Sistemas, tenho experiência em back-end com Node.js, Python e Django, além de bancos de dados relacionais e não relacionais. Prezo por qualidade com testes automatizados e por deploy em nuvem (AWS e Azure), com interesse em arquiteturas de microsserviços, melhoria contínua de UI/UX e documentação técnica.",
      downloadCv: "Baixar CV",
      highlightsTitle: "Principais tecnologias",
      highlights: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Vitest", "AWS", "Azure"],
    },
    landing: {
      scroll: "Role para explorar",
      aboutTag: "Sobre mim",
      servicesTag: "O que eu faço",
      workTag: "Portfólio",
      seeServices: "Ver serviços",
      seeWork: "Ver projetos",
      seeResume: "Ver currículo",
      contactTitle: "Vamos construir algo juntos?",
      contactSubtitle:
        "Estou aberta a trocar ideias sobre tecnologia, arquitetura de software e novas abordagens no desenvolvimento web.",
      contactButton: "Entrar em contato",
    },
    stats: [
      { text: "Anos de experiência" },
      { text: "Tecnologias dominadas" },
      { text: "Idiomas (PT · EN · ES)" },
    ],
    services: {
      heading: "Áreas de atuação",
      subheading:
        "Onde atuo no ciclo de desenvolvimento, do design da interface ao deploy em produção.",
      items: [
        {
          title: "Front-End",
          description:
            "Interfaces dinâmicas e responsivas com React, TypeScript e Tailwind CSS. Componentes reutilizáveis, gestão de estado com Redux e Context API, integração com APIs REST e testes com Vitest.",
        },
        {
          title: "Back-End",
          description:
            "APIs robustas com Node.js, NestJS, AdonisJS, Python e Django. Bancos relacionais e não relacionais (PostgreSQL, MySQL, MongoDB, Redis), autenticação e dados em tempo real.",
        },
        {
          title: "UI/UX Design",
          description:
            "Designs intuitivos validados no Figma, baseados em princípios de usabilidade e avaliação heurística, com foco em padronização visual e melhoria contínua da experiência.",
        },
        {
          title: "DevOps & Cloud",
          description:
            "Containerização com Docker, deploy na AWS e Azure, pipelines de CI/CD e observabilidade com Datadog. Apoio à migração de monolitos para microsserviços.",
        },
      ],
    },
    resume: {
      tabs: {
        experience: "Experiência",
        education: "Formação",
        skills: "Habilidades",
        about: "Sobre mim",
      },
      experience: {
        title: "Experiência profissional",
        description:
          "Mais de 3 anos construindo produtos full stack, do front-end ao back-end, com foco em qualidade de código, testes e colaboração em equipe.",
        items: [
          {
            company: "AdviceHealth — Florianópolis, SC",
            position: "Engenheira de Software Pleno",
            duration: "2025 - Atualmente",
            bullets: [
              "Desenvolvo interfaces em React e TypeScript com Redux e Context API, aplicando Tailwind CSS, Vite e princípios SOLID.",
              "Implemento integrações com IA para automatizar fluxos e enriquecer funcionalidades do produto.",
              "Atuo na migração de grandes clientes para a plataforma, assegurando integridade dos dados e continuidade do serviço.",
              "Implemento melhorias e virtualização em tabelas de grande volume de dados, ganhando performance e usabilidade.",
              "Atuo em arquitetura de microsserviços e na observabilidade da plataforma com Datadog.",
              "Garanto qualidade com testes em Vitest e code reviews, fortalecendo a cultura de testes do time.",
            ],
          },
          {
            company: "Preveni — Florianópolis, SC",
            position: "Engenheira de Software Júnior",
            duration: "2023 - 2025",
            bullets: [
              "Atuei no full stack de uma plataforma de IoT: front-end em React.js e back-end em Node.js (AdonisJS) com MySQL.",
              "Entreguei novas funcionalidades, corrigi bugs e monitorei a estabilidade da plataforma em produção.",
              "Melhorei a experiência do usuário (UI/UX) de forma contínua, trabalhando em metodologia ágil.",
            ],
          },
          {
            company: "Freelancer — Florianópolis, SC",
            position: "Engenheira de Software Júnior",
            duration: "2023",
            bullets: [
              "Desenvolvi interfaces em React e TypeScript com Redux e Context API, estilizadas com Tailwind CSS e SCSS.",
              "Prototipei e implementei novas telas de produto, do conceito à entrega.",
              "Construí serviços de back-end com NestJS e MongoDB, com foco em qualidade e usabilidade.",
            ],
          },
        ],
      },
      education: {
        title: "Formação acadêmica",
        description:
          "Base sólida em desenvolvimento de software, com projetos voltados a apoiar comunidades de Florianópolis.",
        items: [
          {
            institution: "Faculdade Cesusc — Florianópolis, SC",
            degree: "Análise e Desenvolvimento de Sistemas (melhor média do curso)",
            duration: "2023 - 2025",
            bullets: [
              "Projeto comunitário Rolê da Mariquinha, voltado a apoiar comunidades de Florianópolis.",
            ],
          },
          {
            institution: "Universidade de São Paulo (USP)",
            degree: "MBA em Engenharia de Software",
            duration: "2025 - Atualmente",
          },
        ],
      },
      skills: {
        title: "Habilidades",
        description:
          "Tecnologias que utilizo no dia a dia para construir e manter sistemas web completos.",
        categories: {
          frontend: "Front-end",
          backend: "Back-end",
          data: "Dados",
          devops: "DevOps & Cloud",
          tools: "Ferramentas",
        },
      },
      about: {
        title: "Sobre mim",
        description:
          "Engenheira de software full stack com forte atuação em front-end e paixão por UI/UX. Gosto de transformar problemas complexos em interfaces simples e acessíveis, unindo rigor técnico ao cuidado com cada detalhe de design. Formei-me em Análise e Desenvolvimento de Sistemas com a melhor média do curso e mantenho interesse contínuo por arquiteturas modernas, qualidade de código e documentação técnica.",
        info: [
          { fieldName: "Nome", fieldValue: "Bruna Rocha Lourenço" },
          { fieldName: "Experiência", fieldValue: "3+ anos" },
          { fieldName: "Destaque", fieldValue: "Melhor média do curso (ADS)" },
          { fieldName: "Nacionalidade", fieldValue: "Brasileira" },
          { fieldName: "Idiomas", fieldValue: "Português, Inglês, Espanhol" },
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          { name: "Português", level: "Nativo" },
          { name: "Inglês", level: "B2 - C1" },
          { name: "Espanhol", level: "B1" },
        ],
      },
    },
    work: {
      heading: "Projetos selecionados",
      live: "Ver projeto",
      github: "Repositório no GitHub",
      titles: {
        "01": "Portfólio",
        "02": "Preveni",
        "03": "Plataforma de Gestão",
        "04": "DataShield",
        "05": "Landing Page de Produto",
        "06": "API de Comissões",
        "07": "Cafeteria Java",
      },
      descriptions: {
        "01":
          "Este portfólio, construído com Next.js 14 (App Router) e React. Estilização com Tailwind CSS, animações com Framer Motion e suporte a três idiomas (PT/EN/ES) com i18n próprio. Inclui otimização de SEO (metadata e Open Graph), componentes reutilizáveis e foco em performance e acessibilidade.",
        "02":
          "Plataforma de IoT em produção: front-end em React.js e back-end em Node.js (AdonisJS) com MySQL. Atuação em novas features, correção de bugs, monitoramento e melhorias de UI/UX em metodologia ágil.",
        "03":
          "Plataforma web de gestão construída em React e TypeScript, com Vite e gerenciamento de estado via Redux e Context API. Dashboard com agendamento, indicadores e componentes reutilizáveis, seguindo princípios SOLID e boas práticas de testes.",
        "04":
          "Extensão do Chrome que usa a API da OpenAI para detectar sites fraudulentos e e-mails de phishing, alertando o usuário em tempo real. Conceito e protótipo de produto voltado à segurança digital.",
        "05":
          "Projeto de front-end desenvolvido a partir de um design no Adobe XD. Landing page responsiva com HTML5, CSS3 e JavaScript, fiel ao layout original e focada em performance e semântica.",
        "06":
          "API RESTful construída em Python e Flask para gestão de vendedores e cálculo de comissões a partir de arquivos CSV. Utiliza Pandas para manipulação de dados, testes automatizados em Pytest, persistência em SQLite e documentação completa via Postman.",
        "07":
          "Protótipo de UI/UX no Figma para a Cafeteria Java, baseado nas heurísticas de Nielsen, com fluxo de pedidos intuitivo e identidade visual consistente.",
      },
    },
    contact: {
      title: "Vamos conversar",
      description:
        "Adoro trocar ideias sobre tecnologia, arquitetura e produto. Deixe sua mensagem abaixo e respondo assim que possível.",
      firstName: "Nome",
      lastName: "Sobrenome",
      email: "E-mail",
      phone: "Telefone",
      selectService: "Selecione um assunto",
      serviceLabel: "Assunto",
      services: {
        frontend: "Oportunidade / vaga",
        backend: "Tecnologia & arquitetura",
        fullstack: "Colaboração em projeto",
        general: "Apenas um olá",
      },
      message: "Escreva sua mensagem aqui.",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada! Em breve entrarei em contato.",
      error: "Algo deu errado. Tente novamente ou me chame pelo e-mail.",
      info: {
        phoneBr: "Telefone (Brasil)",
        whatsapp: "WhatsApp",
        email: "E-mail",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      tagline: "Engenheira de Software Full Stack",
      madeWith: "Feito com Next.js, Tailwind CSS e Framer Motion.",
      rights: "Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Expertise",
      resume: "Resume",
      work: "Projects",
      contact: "Contact",
      hire: "Contact",
    },
    home: {
      role: "Full Stack Software Engineer",
      greeting: "Hi, I'm",
      name: "Bruna Rocha",
      description:
        "Full stack software engineer with strong front-end expertise, specialized in React, Next.js, TypeScript and the JavaScript ecosystem. With a degree in Systems Analysis and Development, I have back-end experience with Node.js, Python and Django, as well as relational and non-relational databases. I care about quality through automated testing and cloud deployment (AWS and Azure), with an interest in microservices architectures, continuous UI/UX improvement and technical documentation.",
      downloadCv: "Download CV",
      highlightsTitle: "Core technologies",
      highlights: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Vitest", "AWS", "Azure"],
    },
    landing: {
      scroll: "Scroll to explore",
      aboutTag: "About me",
      servicesTag: "What I do",
      workTag: "Portfolio",
      seeServices: "View services",
      seeWork: "View projects",
      seeResume: "View resume",
      contactTitle: "Let's build something together?",
      contactSubtitle:
        "I am open to exchanging ideas about technology, software architecture, and new approaches in web development.",
      contactButton: "Get in touch",
    },
    stats: [
      { text: "Years of experience" },
      { text: "Technologies mastered" },
      { text: "Languages (PT · EN · ES)" },
    ],
    services: {
      heading: "What I do",
      subheading: "Where I work across the development cycle, from interface design to production deployment.",
      items: [
        {
          title: "Front-End",
          description:
            "Dynamic, responsive interfaces with React, TypeScript and Tailwind CSS. Reusable components, state management with Redux and Context API, REST API integration and testing with Vitest.",
        },
        {
          title: "Back-End",
          description:
            "Robust APIs with Node.js, NestJS, AdonisJS, Python and Django. Relational and non-relational databases (PostgreSQL, MySQL, MongoDB, Redis), authentication and real-time data.",
        },
        {
          title: "UI/UX Design",
          description:
            "Intuitive designs validated in Figma, based on usability principles and heuristic evaluation, focused on visual standardization and continuous experience improvement.",
        },
        {
          title: "DevOps & Cloud",
          description:
            "Containerization with Docker, deployment on AWS and Azure, CI/CD pipelines and observability with Datadog. Supporting the migration from monoliths to microservices.",
        },
      ],
    },
    resume: {
      tabs: {
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        about: "About me",
      },
      experience: {
        title: "Professional experience",
        description:
          "Over 3 years building full stack products, from front-end to back-end, focused on code quality, testing and team collaboration.",
        items: [
          {
            company: "AdviceHealth — Florianópolis, SC",
            position: "Mid-level Software Engineer",
            duration: "2025 - Present",
            bullets: [
              "Build interfaces in React and TypeScript with Redux and Context API, using Tailwind CSS, Vite and SOLID principles.",
              "Implement AI integrations to automate flows and enrich product features.",
              "Support the migration of large clients to the platform, ensuring data integrity and service continuity.",
              "Deliver improvements and virtualization for large-data tables, boosting performance and usability.",
              "Work on microservices architecture and on platform observability with Datadog.",
              "Safeguard quality through Vitest tests and code reviews, strengthening the team's testing culture.",
            ],
          },
          {
            company: "Preveni — Florianópolis, SC",
            position: "Junior Software Engineer",
            duration: "2023 - 2025",
            bullets: [
              "Worked across the full stack of an IoT platform: front-end in React.js and back-end in Node.js (AdonisJS) with MySQL.",
              "Shipped new features, fixed bugs and monitored the platform's stability in production.",
              "Continuously improved the user experience (UI/UX) while working in an agile workflow.",
            ],
          },
          {
            company: "Freelancer — Florianópolis, SC",
            position: "Junior Software Engineer",
            duration: "2023",
            bullets: [
              "Developed interfaces in React and TypeScript with Redux and Context API, styled with Tailwind CSS and SCSS.",
              "Prototyped and implemented new product screens, from concept to delivery.",
              "Built back-end services with NestJS and MongoDB, focused on quality and usability.",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        description:
          "Solid foundation in software development, with projects aimed at supporting communities in Florianópolis.",
        items: [
          {
            institution: "Cesusc College — Florianópolis, SC",
            degree: "Systems Analysis and Development (top of the class)",
            duration: "2023 - 2025",
            bullets: [
              "Rolê da Mariquinha community project, aimed at supporting communities in Florianópolis.",
            ],
          },
          {
            institution: "University of São Paulo (USP)",
            degree: "MBA in Software Engineering",
            duration: "2025 - Present",
          },
        ],
      },
      skills: {
        title: "Skills",
        description:
          "Technologies I use daily to build and maintain complete web systems.",
        categories: {
          frontend: "Front-end",
          backend: "Back-end",
          data: "Data",
          devops: "DevOps & Cloud",
          tools: "Tools",
        },
      },
      about: {
        title: "About me",
        description:
          "Full stack software engineer with strong front-end expertise and a passion for UI/UX. I enjoy turning complex problems into simple, accessible interfaces, pairing technical rigor with care for every design detail. I graduated in Systems Analysis and Development with the highest GPA in my class, and I keep an ongoing interest in modern architectures, code quality and technical documentation.",
        info: [
          { fieldName: "Name", fieldValue: "Bruna Rocha Lourenço" },
          { fieldName: "Experience", fieldValue: "3+ years" },
          { fieldName: "Honor", fieldValue: "Top of the class (ADS)" },
          { fieldName: "Nationality", fieldValue: "Brazilian" },
          { fieldName: "Languages", fieldValue: "Portuguese, English, Spanish" },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Portuguese", level: "Native" },
          { name: "English", level: "B2 - C1" },
          { name: "Spanish", level: "B1" },
        ],
      },
    },
    work: {
      heading: "Selected projects",
      live: "View project",
      github: "GitHub repository",
      titles: {
        "01": "Portfolio",
        "02": "Preveni",
        "03": "Management Platform",
        "04": "DataShield",
        "05": "Product Landing Page",
        "06": "Commissions API",
        "07": "Cafeteria Java",
      },
      descriptions: {
        "01":
          "This portfolio, built with Next.js 14 (App Router) and React. Styled with Tailwind CSS, animated with Framer Motion and available in three languages (PT/EN/ES) via a custom i18n setup. Includes SEO optimization (metadata and Open Graph), reusable components and a focus on performance and accessibility.",
        "02":
          "Production IoT platform: front-end in React.js and back-end in Node.js (AdonisJS) with MySQL. Worked on new features, bug fixing, monitoring and UI/UX improvements within an agile workflow.",
        "03":
          "Web management platform built with React and TypeScript, using Vite and state management with Redux and Context API. Dashboard with scheduling, metrics and reusable components, following SOLID principles and testing best practices.",
        "04":
          "Chrome extension that uses the OpenAI API to detect fraudulent websites and phishing emails, alerting users in real time. Product concept and prototype focused on digital safety.",
        "05":
          "Front-end project developed from an Adobe XD design. Responsive landing page built with HTML5, CSS3 and JavaScript, faithful to the original layout and focused on performance and semantics.",
        "06":
          "RESTful API built with Python and Flask for managing sellers and calculating commissions from CSV files. The project uses Pandas for data manipulation, automated testing with Pytest, SQLite database, and comprehensive Postman documentation.",
        "07":
          "UI/UX prototype in Figma for Cafeteria Java, based on Nielsen's heuristics, with an intuitive ordering flow and consistent visual identity.",
      },
    },
    contact: {
      title: "Let's connect",
      description:
        "I love exchanging ideas about technology, architecture and product. Leave a message below and I'll get back to you as soon as I can.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      selectService: "Select a subject",
      serviceLabel: "Subject",
      services: {
        frontend: "Opportunity / role",
        backend: "Tech & architecture",
        fullstack: "Project collaboration",
        general: "Just saying hi",
      },
      message: "Type your message here.",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again or reach me by email.",
      info: {
        phoneBr: "Phone (Brazil)",
        whatsapp: "WhatsApp",
        email: "Email",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      tagline: "Full Stack Software Engineer",
      madeWith: "Built with Next.js, Tailwind CSS and Framer Motion.",
      rights: "All rights reserved.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Especialidades",
      resume: "Currículum",
      work: "Proyectos",
      contact: "Contacto",
      hire: "Contacto",
    },
    home: {
      role: "Ingeniera de Software Full Stack",
      greeting: "Hola, soy",
      name: "Bruna Rocha",
      description:
        "Ingeniera de software full stack con sólida experiencia en front-end, especializada en React, Next.js, TypeScript y el ecosistema JavaScript. Graduada en Análisis y Desarrollo de Sistemas, tengo experiencia en back-end con Node.js, Python y Django, además de bases de datos relacionales y no relacionales. Cuido la calidad con pruebas automatizadas y el despliegue en la nube (AWS y Azure), con interés en arquitecturas de microservicios, mejora continua de UI/UX y documentación técnica.",
      downloadCv: "Descargar CV",
      highlightsTitle: "Tecnologías principales",
      highlights: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Vitest", "AWS", "Azure"],
    },
    landing: {
      scroll: "Desplázate para explorar",
      aboutTag: "Sobre mí",
      servicesTag: "Lo que hago",
      workTag: "Portafolio",
      seeServices: "Ver servicios",
      seeWork: "Ver proyectos",
      seeResume: "Ver currículum",
      contactTitle: "¿Construimos algo juntos?",
      contactSubtitle:
        "Estoy abierta a intercambiar ideas sobre tecnología, arquitectura de software y nuevos enfoques en el desarrollo web.",
      contactButton: "Ponerse en contacto",
    },
    stats: [
      { text: "Años de experiencia" },
      { text: "Tecnologías dominadas" },
      { text: "Idiomas (PT · EN · ES)" },
    ],
    services: {
      heading: "Áreas de especialización",
      subheading:
        "Dónde actúo en el ciclo de desarrollo, del diseño de la interfaz al despliegue en producción.",
      items: [
        {
          title: "Front-End",
          description:
            "Interfaces dinámicas y responsivas con React, TypeScript y Tailwind CSS. Componentes reutilizables, gestión de estado con Redux y Context API, integración con APIs REST y pruebas con Vitest.",
        },
        {
          title: "Back-End",
          description:
            "APIs robustas con Node.js, NestJS, AdonisJS, Python y Django. Bases de datos relacionales y no relacionales (PostgreSQL, MySQL, MongoDB, Redis), autenticación y datos en tiempo real.",
        },
        {
          title: "UI/UX Design",
          description:
            "Diseños intuitivos validados en Figma, basados en principios de usabilidad y evaluación heurística, con foco en la estandarización visual y la mejora continua de la experiencia.",
        },
        {
          title: "DevOps & Cloud",
          description:
            "Contenedores con Docker, despliegue en AWS y Azure, pipelines de CI/CD y observabilidad con Datadog. Apoyo a la migración de monolitos a microservicios.",
        },
      ],
    },
    resume: {
      tabs: {
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades",
        about: "Sobre mí",
      },
      experience: {
        title: "Experiencia profesional",
        description:
          "Más de 3 años construyendo productos full stack, del front-end al back-end, con foco en calidad de código, pruebas y colaboración en equipo.",
        items: [
          {
            company: "AdviceHealth — Florianópolis, SC",
            position: "Ingeniera de Software Semi-Senior",
            duration: "2025 - Actualidad",
            bullets: [
              "Desarrollo interfaces en React y TypeScript con Redux y Context API, aplicando Tailwind CSS, Vite y principios SOLID.",
              "Implemento integraciones con IA para automatizar flujos y enriquecer funcionalidades del producto.",
              "Participo en la migración de grandes clientes a la plataforma, asegurando la integridad de los datos y la continuidad del servicio.",
              "Implemento mejoras y virtualización en tablas de gran volumen de datos, mejorando rendimiento y usabilidad.",
              "Trabajo en arquitectura de microservicios y en la observabilidad de la plataforma con Datadog.",
              "Aseguro la calidad con pruebas en Vitest y code reviews, fortaleciendo la cultura de pruebas del equipo.",
            ],
          },
          {
            company: "Preveni — Florianópolis, SC",
            position: "Ingeniera de Software Junior",
            duration: "2023 - 2025",
            bullets: [
              "Trabajé en el full stack de una plataforma de IoT: front-end en React.js y back-end en Node.js (AdonisJS) con MySQL.",
              "Entregué nuevas funcionalidades, corregí bugs y monitoreé la estabilidad de la plataforma en producción.",
              "Mejoré de forma continua la experiencia de usuario (UI/UX), trabajando en metodología ágil.",
            ],
          },
          {
            company: "Freelancer — Florianópolis, SC",
            position: "Ingeniera de Software Junior",
            duration: "2023",
            bullets: [
              "Desarrollé interfaces en React y TypeScript con Redux y Context API, estilizadas con Tailwind CSS y SCSS.",
              "Prototipé e implementé nuevas pantallas de producto, del concepto a la entrega.",
              "Construí servicios de back-end con NestJS y MongoDB, con foco en calidad y usabilidad.",
            ],
          },
        ],
      },
      education: {
        title: "Educación",
        description:
          "Base sólida en desarrollo de software, con proyectos orientados a apoyar comunidades de Florianópolis.",
        items: [
          {
            institution: "Faculdade Cesusc — Florianópolis, SC",
            degree: "Análisis y Desarrollo de Sistemas (mejor promedio del curso)",
            duration: "2023 - 2025",
            bullets: [
              "Proyecto comunitario Rolê da Mariquinha, orientado a apoyar comunidades de Florianópolis.",
            ],
          },
          {
            institution: "Universidad de São Paulo (USP)",
            degree: "MBA en Ingeniería de Software",
            duration: "2025 - Actualidad",
          },
        ],
      },
      skills: {
        title: "Habilidades",
        description:
          "Tecnologías que uso a diario para construir y mantener sistemas web completos.",
        categories: {
          frontend: "Front-end",
          backend: "Back-end",
          data: "Datos",
          devops: "DevOps & Cloud",
          tools: "Herramientas",
        },
      },
      about: {
        title: "Sobre mí",
        description:
          "Ingeniera de software full stack con sólida experiencia en front-end y pasión por UI/UX. Me gusta transformar problemas complejos en interfaces simples y accesibles, uniendo rigor técnico con cuidado por cada detalle de diseño. Me gradué en Análisis y Desarrollo de Sistemas con el mejor promedio del curso y mantengo un interés continuo por las arquitecturas modernas, la calidad de código y la documentación técnica.",
        info: [
          { fieldName: "Nombre", fieldValue: "Bruna Rocha Lourenço" },
          { fieldName: "Experiencia", fieldValue: "3+ años" },
          { fieldName: "Reconocimiento", fieldValue: "Mejor promedio del curso (ADS)" },
          { fieldName: "Nacionalidad", fieldValue: "Brasileña" },
          { fieldName: "Idiomas", fieldValue: "Portugués, Inglés, Español" },
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          { name: "Portugués", level: "Nativo" },
          { name: "Inglés", level: "B2 - C1" },
          { name: "Español", level: "B1" },
        ],
      },
    },
    work: {
      heading: "Proyectos seleccionados",
      live: "Ver proyecto",
      github: "Repositorio en GitHub",
      titles: {
        "01": "Portafolio",
        "02": "Preveni",
        "03": "Plataforma de Gestión",
        "04": "DataShield",
        "05": "Landing Page de Producto",
        "06": "API de Comisiones",
        "07": "Cafetería Java",
      },
      descriptions: {
        "01":
          "Este portafolio, construido con Next.js 14 (App Router) y React. Estilizado con Tailwind CSS, animado con Framer Motion y disponible en tres idiomas (PT/EN/ES) mediante un i18n propio. Incluye optimización de SEO (metadata y Open Graph), componentes reutilizables y foco en rendimiento y accesibilidad.",
        "02":
          "Plataforma de IoT en producción: front-end en React.js y back-end en Node.js (AdonisJS) con MySQL. Trabajo en nuevas features, corrección de bugs, monitoreo y mejoras de UI/UX en metodología ágil.",
        "03":
          "Plataforma web de gestión construida con React y TypeScript, con Vite y gestión de estado mediante Redux y Context API. Dashboard con agenda, indicadores y componentes reutilizables, siguiendo principios SOLID y buenas prácticas de pruebas.",
        "04":
          "Extensión de Chrome que usa la API de OpenAI para detectar sitios fraudulentos y correos de phishing, alertando al usuario en tiempo real. Concepto y prototipo de producto orientado a la seguridad digital.",
        "05":
          "Proyecto de front-end desarrollado a partir de un diseño en Adobe XD. Landing page responsiva con HTML5, CSS3 y JavaScript, fiel al diseño original y enfocada en rendimiento y semántica.",
        "06":
          "API RESTful construida con Python y Flask para gestión de vendedores y cálculo de comisiones a partir de archivos CSV. El proyecto utiliza Pandas para manipulación de datos, pruebas automatizadas en Pytest, base de datos SQLite y documentación completa en Postman.",
        "07":
          "Prototipo de UI/UX en Figma para Cafeteria Java, basado en las heurísticas de Nielsen, con un flujo de pedidos intuitivo e identidad visual consistente.",
      },
    },
    contact: {
      title: "Conversemos",
      description:
        "Me encanta intercambiar ideas sobre tecnología, arquitectura y producto. Deja tu mensaje abajo y te responderé lo antes posible.",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo",
      phone: "Teléfono",
      selectService: "Selecciona un asunto",
      serviceLabel: "Asunto",
      services: {
        frontend: "Oportunidad / vacante",
        backend: "Tecnología y arquitectura",
        fullstack: "Colaboración en proyecto",
        general: "Solo un saludo",
      },
      message: "Escribe tu mensaje aquí.",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Pronto me pondré en contacto.",
      error: "Algo salió mal. Inténtalo de nuevo o escríbeme por correo.",
      info: {
        phoneBr: "Teléfono (Brasil)",
        whatsapp: "WhatsApp",
        email: "Correo",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      tagline: "Ingeniera de Software Full Stack",
      madeWith: "Hecho con Next.js, Tailwind CSS y Framer Motion.",
      rights: "Todos los derechos reservados.",
    },
  },
};
