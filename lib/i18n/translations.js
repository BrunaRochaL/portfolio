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
      services: "Serviços",
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
        "Engenheira de software full stack com forte atuação em front-end, especializada em React, TypeScript e no ecossistema JavaScript. Tenho experiência em back-end com Node.js, Python e Django, além de bancos de dados relacionais e não relacionais. Trabalho com Docker, AWS, Azure e observabilidade com Datadog, sempre interessada em arquiteturas de microsserviços, melhoria contínua de UI/UX e documentação técnica.",
      downloadCv: "Baixar CV",
      highlightsTitle: "Principais tecnologias",
      highlights: ["React", "TypeScript", "Node.js", "Python", "Docker", "AWS"],
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
      { text: "Projetos concluídos" },
      { text: "Tecnologias dominadas" },
      { text: "Commits no GitHub" },
    ],
    services: {
      heading: "Meus serviços",
      subheading:
        "Soluções completas, do design da interface ao deploy em produção.",
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
          "Mais de 2 anos construindo produtos full stack, do front-end ao back-end, com foco em qualidade de código, testes e colaboração em equipe.",
        items: [
          {
            company: "AdviceHealth — Florianópolis, SC",
            position: "Engenheira de Software Pleno",
            duration: "2025 - Atualmente",
          },
          {
            company: "Preveni — Florianópolis, SC",
            position: "Engenheira de Software Júnior",
            duration: "2023 - 2025",
          },
          {
            company: "Freelancer — Florianópolis, SC",
            position: "Engenheira de Software Júnior",
            duration: "2023",
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
            degree: "Análise e Desenvolvimento de Sistemas (com honras)",
            duration: "2023 - 2025",
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
      },
      about: {
        title: "Sobre mim",
        description:
          "Engenheira de software full stack de 25 anos, com paixão por front-end e UI/UX. Tenho como premissa tornar a experiência do usuário acessível e intuitiva, aliando rigor técnico à liberdade criativa em cada detalhe de desenvolvimento e design. Possuo forte interesse em arquiteturas modernas e documentação técnica.",
        info: [
          { fieldName: "Nome", fieldValue: "Bruna Rocha Lourenço" },
          { fieldName: "Idade", fieldValue: "25 anos" },
          { fieldName: "Experiência", fieldValue: "3+ anos" },
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
      descriptions: {
        "01":
          "Desafio técnico de Front-End a partir de um design no Adobe XD. Landing page responsiva com HTML5, CSS3 e JavaScript, fiel ao layout original.",
        "02":
          "Front-end em ReactJS e back-end em Node.js (AdonisJS) com MySQL para dados de IoT. Atuação em features, correção de bugs, monitoramento e metodologias ágeis.",
        "03":
          "Protótipo no Figma para a Cafeteria Java, baseado nas heurísticas de Nielsen, com interface intuitiva para gestão de pedidos.",
        "04":
          "Extensão do Chrome que usa a API da OpenAI para detectar sites fraudulentos e e-mails de phishing, alertando os usuários em tempo real.",
        "05":
          "Projeto acadêmico com HTML, CSS e Bootstrap para apresentação de imóveis, com foco em uma experiência clara e atrativa.",
        "06":
          "Landing page com CRUD em HTML, CSS e JavaScript para gerenciamento de dados de uma pousada.",
        "07":
          "Aplicação Python para gerenciar dados de vendedores e calcular comissões, com potencial de API e integração com banco de dados.",
      },
    },
    contact: {
      title: "Vamos trabalhar juntas",
      description:
        "Ficarei feliz em ajudar com qualquer projeto ou dúvida. Preencha o formulário abaixo para iniciarmos uma conversa.",
      firstName: "Nome",
      lastName: "Sobrenome",
      email: "E-mail",
      phone: "Telefone",
      selectService: "Selecione um serviço",
      serviceLabel: "Serviços",
      services: {
        frontend: "Front-End",
        backend: "Back-End",
        fullstack: "Full Stack",
        general: "Dúvidas gerais",
      },
      message: "Escreva sua mensagem aqui.",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada! Em breve entrarei em contato.",
      error: "Algo deu errado. Tente novamente ou me chame pelo e-mail.",
      info: {
        phoneBr: "Telefone (Brasil)",
        phonePt: "Telefone (Portugal)",
        email: "E-mail",
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
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
        "Full stack software engineer with strong front-end expertise, specialized in React, TypeScript and the JavaScript ecosystem. Experienced in back-end development with Node.js, Python and Django, as well as relational and non-relational databases. I work with Docker, AWS, Azure and observability with Datadog, always interested in microservices architectures, continuous UI/UX improvement and technical documentation.",
      downloadCv: "Download CV",
      highlightsTitle: "Core technologies",
      highlights: ["React", "TypeScript", "Node.js", "Python", "Docker", "AWS"],
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
      { text: "Completed projects" },
      { text: "Technologies mastered" },
      { text: "GitHub commits" },
    ],
    services: {
      heading: "My services",
      subheading: "End-to-end solutions, from interface design to production deploy.",
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
          "Over 2 years building full stack products, from front-end to back-end, focused on code quality, testing and team collaboration.",
        items: [
          {
            company: "AdviceHealth — Florianópolis, SC",
            position: "Mid-level Software Engineer",
            duration: "2025 - Present",
          },
          {
            company: "Preveni — Florianópolis, SC",
            position: "Junior Software Engineer",
            duration: "2023 - 2025",
          },
          {
            company: "Freelancer — Florianópolis, SC",
            position: "Junior Software Engineer",
            duration: "2023",
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
            degree: "Systems Analysis and Development (with honors)",
            duration: "2023 - 2025",
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
      },
      about: {
        title: "About me",
        description:
          "25-year-old full stack software engineer with a passion for front-end and UI/UX. I am committed to making the user experience accessible and intuitive, combining technical rigor with creative freedom in every detail of development and design. I also have a strong interest in modern architectures and technical documentation.",
        info: [
          { fieldName: "Name", fieldValue: "Bruna Rocha Lourenço" },
          { fieldName: "Age", fieldValue: "25 years old" },
          { fieldName: "Experience", fieldValue: "3+ years" },
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
      descriptions: {
        "01":
          "Front-end technical challenge from an Adobe XD design. Responsive landing page with HTML5, CSS3 and JavaScript, faithful to the original layout.",
        "02":
          "Front-end in ReactJS and back-end in Node.js (AdonisJS) with MySQL for IoT data. Worked on features, bug fixing, monitoring and agile methodologies.",
        "03":
          "Figma prototype for Cafeteria Java, based on Nielsen's heuristics, with an intuitive interface for order management.",
        "04":
          "Chrome extension that uses the OpenAI API to detect fraudulent websites and phishing emails, alerting users in real time.",
        "05":
          "Academic project with HTML, CSS and Bootstrap for real estate showcasing, focused on a clear and attractive experience.",
        "06":
          "Landing page with CRUD in HTML, CSS and JavaScript to manage data for an inn.",
        "07":
          "Python application to manage sellers' data and calculate commissions, with potential API and database integration.",
      },
    },
    contact: {
      title: "Let's work together",
      description:
        "I'd be happy to help with any project or question. Fill out the form below so we can start a conversation.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      selectService: "Select a service",
      serviceLabel: "Services",
      services: {
        frontend: "Front-End",
        backend: "Back-End",
        fullstack: "Full Stack",
        general: "General questions",
      },
      message: "Type your message here.",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again or reach me by email.",
      info: {
        phoneBr: "Phone (Brazil)",
        phonePt: "Phone (Portugal)",
        email: "Email",
      },
    },
  },

  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
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
        "Ingeniera de software full stack con sólida experiencia en front-end, especializada en React, TypeScript y el ecosistema JavaScript. Con experiencia en back-end con Node.js, Python y Django, además de bases de datos relacionales y no relacionales. Trabajo con Docker, AWS, Azure y observabilidad con Datadog, siempre interesada en arquitecturas de microservicios, mejora continua de UI/UX y documentación técnica.",
      downloadCv: "Descargar CV",
      highlightsTitle: "Tecnologías principales",
      highlights: ["React", "TypeScript", "Node.js", "Python", "Docker", "AWS"],
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
      { text: "Proyectos completados" },
      { text: "Tecnologías dominadas" },
      { text: "Commits en GitHub" },
    ],
    services: {
      heading: "Mis servicios",
      subheading:
        "Soluciones completas, desde el diseño de la interfaz hasta el despliegue en producción.",
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
          "Más de 2 años construyendo productos full stack, del front-end al back-end, con foco en calidad de código, pruebas y colaboración en equipo.",
        items: [
          {
            company: "AdviceHealth — Florianópolis, SC",
            position: "Ingeniera de Software Semi-Senior",
            duration: "2025 - Actualidad",
          },
          {
            company: "Preveni — Florianópolis, SC",
            position: "Ingeniera de Software Junior",
            duration: "2023 - 2025",
          },
          {
            company: "Freelancer — Florianópolis, SC",
            position: "Ingeniera de Software Junior",
            duration: "2023",
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
            degree: "Análisis y Desarrollo de Sistemas (con honores)",
            duration: "2023 - 2025",
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
      },
      about: {
        title: "Sobre mí",
        description:
          "Ingeniera de software full stack de 25 años, con pasión por el front-end y UI/UX. Tengo la premisa de hacer que la experiencia del usuario sea accesible e intuitiva, combinando rigor técnico con libertad creativa en cada detalle del desarrollo y diseño. También tengo un fuerte interés en arquitecturas modernas y documentación técnica.",
        info: [
          { fieldName: "Nombre", fieldValue: "Bruna Rocha Lourenço" },
          { fieldName: "Edad", fieldValue: "25 años" },
          { fieldName: "Experiencia", fieldValue: "3+ años" },
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
      descriptions: {
        "01":
          "Desafío técnico de front-end a partir de un diseño en Adobe XD. Landing page responsiva con HTML5, CSS3 y JavaScript, fiel al diseño original.",
        "02":
          "Front-end en ReactJS y back-end en Node.js (AdonisJS) con MySQL para datos de IoT. Trabajo en features, corrección de bugs, monitoreo y metodologías ágiles.",
        "03":
          "Prototipo en Figma para Cafeteria Java, basado en las heurísticas de Nielsen, con una interfaz intuitiva para la gestión de pedidos.",
        "04":
          "Extensión de Chrome que usa la API de OpenAI para detectar sitios fraudulentos y correos de phishing, alertando a los usuarios en tiempo real.",
        "05":
          "Proyecto académico con HTML, CSS y Bootstrap para mostrar inmuebles, con foco en una experiencia clara y atractiva.",
        "06":
          "Landing page con CRUD en HTML, CSS y JavaScript para gestionar datos de una posada.",
        "07":
          "Aplicación en Python para gestionar datos de vendedores y calcular comisiones, con potencial de API e integración con base de datos.",
      },
    },
    contact: {
      title: "Trabajemos juntas",
      description:
        "Estaré encantada de ayudar con cualquier proyecto o duda. Completa el formulario para que podamos iniciar una conversación.",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo",
      phone: "Teléfono",
      selectService: "Selecciona un servicio",
      serviceLabel: "Servicios",
      services: {
        frontend: "Front-End",
        backend: "Back-End",
        fullstack: "Full Stack",
        general: "Consultas generales",
      },
      message: "Escribe tu mensaje aquí.",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Pronto me pondré en contacto.",
      error: "Algo salió mal. Inténtalo de nuevo o escríbeme por correo.",
      info: {
        phoneBr: "Teléfono (Brasil)",
        phonePt: "Teléfono (Portugal)",
        email: "Correo",
      },
    },
  },
};
