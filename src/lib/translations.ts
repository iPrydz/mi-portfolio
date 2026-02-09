export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      games: "Games",
      miniatures: "Miniatures",
      contact: "Contact"
    },
    cv: {
      name: "Alejandro Moñiz Mesa",
      role: "IT Technician - SysAdmin",
      location: "Barcelona, Spain",
      aboutTitle: "About Me",
      aboutText1: "I began my career as a Level 1 to Level 3 IT support technician and computer configurator. I have now progressed to the position of applications and systems administrator, managing users, applications, and GxP systems.",
      aboutText2: "I also develop low-code applications and scripts in PowerShell, C#, and Python. As a hobby, I am a video game programmer and owner of a video game company. I am passionate about computers and tend to learn new concepts quickly.",
      experienceTitle: "Experience",
      educationTitle: "Education",
      skillsTitle: "Skills",
      languagesTitle: "Languages",
      present: "Present",
      
      exp1Company: "Laboratories Reig Jofré S.A.",
      exp1Role: "IT Technician - SysAdmin",
      exp1Period: "July 2023 - Present",
      exp1Desc: "eQMS application administration (Qumas and Trackwise), general SQL Server administration, GxP software administration, user and permission management in AD, virtual machine administration in VMWare, backup management in Commvault, PowerShell/C#/Python development.",
      
      exp2Company: "Galenicum Health S.L.U.",
      exp2Role: "IT Technician - SysAdmin",
      exp2Period: "June 2020 - July 2023",
      exp2Desc: "Windows Server administration, AD administration, Google Workspace expert, eQMS (Quality Forward) application administration, GxP software administration, low-code development, and scripting.",
      
      exp3Company: "TaleSoft Studio SCP",
      exp3Role: "Partner, Videogames Developer",
      exp3Period: "June 2017 - Present",
      exp3Desc: "Administrator and budget management, level design, AI programming with C#, image and video editing, Community Manager.",
      
      skills: [
        "PowerShell, C#, Python Development",
        "eQMS Administration (Qumas, Trackwise)",
        "SQL Server & Database Management",
        "Active Directory & VMWare",
        "Google Cloud Platform (GCP)",
        "Unity Game Development",
        "Quick learner and problem-solving"
      ],
      
      languages: [
        "Spanish & Catalan (Native)",
        "English (Full Professional)",
        "French (A2)"
      ]
    },
    projects: {
      title: "My Projects",
      subtitle: "A collection of my game development projects",
      backToHome: "← Back to Home",
      viewDetails: "View Details",
      viewOnStore: "View on Google Play",
      downloadGame: "Download Game",
      viewOnGGJ: "View on Global Game Jam",
      technologies: "Technologies",
      category: "Category",
      status: "Status",
      
      categories: {
        all: "All",
        published: "Published Games",
        gamejam: "Game Jam",
        student: "Student Projects"
      },
      
      projectsList: [
        {
          id: "tap-souls",
          title: "Tap Souls",
          shortDesc: "Idle clicker RPG combining Souls-like gameplay with incremental mechanics. Published by TaleSoft Studio.",
          longDesc: "An innovative idle clicker game that merges the challenging Dark Souls aesthetic with addictive incremental gameplay. Players progress through battles, upgrade equipment, and face challenging bosses in this mobile RPG experience.",
          category: "published",
          technologies: ["Unity", "C#", "iOS", "Android", "Incremental RPG"],
          status: "Published",
          year: "2017-Present",
          link: "https://play.google.com/store/apps/details?id=com.TaleSoftStudio.TapSouls",
          image: "/images/projects/tap_souls.png"
        },
        {
          id: "battle-souls",
          title: "Battle Souls",
          shortDesc: "Turn-based tactical RPG with stunning visuals and strategic combat. Published by TaleSoft Studio.",
          longDesc: "A strategic turn-based RPG featuring epic character designs, tactical positioning, and team-building mechanics. Players praised its impressive graphics and engaging combat system.",
          category: "published",
          technologies: ["Unity", "C#", "iOS", "Android", "Tactical RPG"],
          status: "Published",
          year: "2017-Present",
          link: "https://play.google.com/store/apps/details?id=com.TaleSoftStudio.BattleSouls",
          image: "/images/projects/battle_souls.png"
        },
        {
          id: "bubblelonia",
          title: "Bubblelonia",
          shortDesc: "Global Game Jam 2025 entry with the theme 'Bubble'. Latest game jam project showcasing creative game design under time constraints.",
          longDesc: "Developed during Global Game Jam 2025 with the theme 'Bubble'. Part of the world's largest game creation event where 35,371 participants across 97 countries created 12,098 games in 48 hours.",
          category: "gamejam",
          technologies: ["Game Jam", "Rapid Prototyping", "Unity", "GGJ"],
          status: "Game Jam Entry",
          year: "2025",
          link: "https://globalgamejam.org/games/2025/bubbelonia-3",
          image: "/images/projects/bubblelonia.jpg"
        },
        {
          id: "fearless",
          title: "Fearless",
          shortDesc: "Final course project developed at EMAID (Escola Municipal d'Art i Disseny). A complete game showcasing learned skills in game development.",
          longDesc: "Comprehensive game project developed as the culmination of video game development studies at EMAID. This project demonstrates proficiency in game design, programming, and production.",
          category: "student",
          technologies: ["Unity", "C#", "Level Design", "Game Production"],
          status: "Completed",
          year: "2014-2016",
          link: "https://mega.nz/file/XUQyzRyC#sr1CjrDASd-LYUv-ePxmZSKAimCztZu2Y1JVEJj_y3k",
          image: "/images/projects/fearless.png"
        },
        {
          id: "mirror-hotel",
          title: "Mirror Hotel",
          shortDesc: "Global Game Jam 2015 entry. Created in 48 hours during the world's largest game creation event.",
          longDesc: "Developed during Global Game Jam 2015 with the theme 'What do we do now?'. Part of an event where 28,837 participants in 78 countries created 5,438 games in one weekend.",
          category: "gamejam",
          technologies: ["Unity", "C#", "Level Design", "Game Production", "GGJ"],
          status: "Game Jam Entry",
          year: "2015",
          link: "https://globalgamejam.org/2015/games/mirror-hotel",
          image: "/images/projects/mirror_hotel.jpg"
        },
        {
          id: "hitodama",
          title: "Hitodama",
          shortDesc: "Global Game Jam 2016 entry with the theme 'Ritual'. Created collaboratively in 48 hours.",
          longDesc: "Game jam project developed for Global Game Jam 2016 under the theme 'Ritual'. Part of a worldwide event with over 36,164 participants across 93 countries creating nearly 6,800 games.",
          category: "gamejam",
          technologies: ["Unity", "C#", "Level Design", "Game Production", "GGJ"],
          status: "Game Jam Entry",
          year: "2016",
          link: "https://globalgamejam.org/2016/games/hitodama",
          image: "/images/projects/hitodama.jpg"
        }
      ]
    },
    miniatures: {
      title: "3D Printing Miniatures",
      subtitle: "Custom & Pre-Made Miniatures",
      location: "Based in Barcelona, Spain 🇪🇸",
      designOwnTitle: "Design Your Own Miniature",
      designOwnSubtitle: "Create a unique miniature using Hero Forge and I'll print it for you",
      step1Title: "Design Your Character",
      step1Desc: "Use Hero Forge to create your custom miniature with thousands of customization options",
      step2Title: "Export & Send STL Files",
      step2Desc: "Download your STL files and send them to me via email or contact form",
      step2Note: "Make sure to download the STL files (not screenshots or other formats)",
      step2Tip: "Hero Forge provides both supported and unsupported STL versions - I recommend sending both",
      step3Title: "I'll Print & Ship It",
      step3Desc: "I'll print your miniature with high-quality resin, clean it, prime it, and ship it to you ready to paint",
      heroForgeButton: "Design on Hero Forge",
      preMadeTitle: "Use Pre-Made Miniature",
      preMadeDesc: "Prefer a pre-designed miniature? Choose from thousands of ready-to-print models",
      preMadeRecommendation: "I recommend these creators for high-quality STL files:",
      preMadeLinks: {
        fleshOfGods: "Flesh of Gods - Epic fantasy characters",
        lootStudios: "Loot Studios - Monthly miniature packs",
        bestiarumGames: "Bestiarum Games - Creatures & monsters"
      },
      pricingTitle: "Pricing",
      pricingSubtitle: "Transparent pricing based on size and complexity",
      miniaturesSizeTitle: "Miniatures (by size)",
      price4_5cm: "4-5cm (Small) - €5",
      price5_5_5cm: "5-5.5cm (Medium) - €6",
      priceLarger: "Larger sizes - Ask for quote",
      basesTitle: "Bases",
      priceSimpleBase: "Simple base (32mm) - Free",
      priceDetailedBase: "Detailed/custom base - +€2",
      includedTitle: "What's included",
      includedClean: "Cleaned and cured resin print",
      includedPrimer: "Primed with gray primer (ready to paint)",
      noCommitment: "Prices are estimates - no commitment required until we discuss your specific miniature",
      specsTitle: "Technical Specifications",
      maxSize: "Max build volume",
      maxSizeValue: "16.5cm (H) x 8cm (W) x 8cm (D)",
      readyToStart: "Ready to get started?",
      readyToStartDesc: "Send me your STL files and let's bring your miniature to life!",
      contactButton: "Contact Form"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      games: "Juegos",
      miniatures: "Miniaturas",
      contact: "Contacto"
    },
    cv: {
      name: "Alejandro Moñiz Mesa",
      role: "Técnico IT - SysAdmin",
      location: "Barcelona, España",
      aboutTitle: "Sobre Mí",
      aboutText1: "Comencé mi carrera como técnico de soporte IT de nivel 1 a 3. He ido progresando hasta la posición actual de administrador de aplicaciones y sistemas, gestionando usuarios, aplicaciones y sistemas GxP.",
      aboutText2: "También desarrollo aplicaciones low-code y scripts en PowerShell, C# y Python. Como hobby, soy programador de videojuegos y propietario de una empresa de videojuegos. Me apasionan los ordenadores y tiendo a aprender nuevos conceptos rápidamente.",
      experienceTitle: "Experiencia",
      educationTitle: "Educación",
      skillsTitle: "Habilidades",
      languagesTitle: "Idiomas",
      present: "Actualidad",
      
      exp1Company: "Laboratorios Reig Jofré S.A.",
      exp1Role: "Técnico IT - SysAdmin",
      exp1Period: "Julio 2023 - Actualidad",
      exp1Desc: "Administración de aplicaciones eQMS (Qumas y Trackwise), administración general de SQL Server, administración de software GxP, gestión de usuarios y permisos en AD, administración de máquinas virtuales en VMWare, gestión de backups en Commvault, desarrollo PowerShell/C#/Python.",
      
      exp2Company: "Galenicum Health S.L.U.",
      exp2Role: "Técnico IT - SysAdmin",
      exp2Period: "Junio 2020 - Julio 2023",
      exp2Desc: "Administración de Windows Server, administración de AD, experto en Google Workspace, administración de aplicaciones eQMS (Quality Forward), administración de software GxP, desarrollo low-code y scripts.",
      
      exp3Company: "TaleSoft Studio SCP",
      exp3Role: "Socio, Desarrollador de Videojuegos",
      exp3Period: "Junio 2017 - Actualidad",
      exp3Desc: "Administrador y gestión de presupuestos, diseño de niveles, programación IA con C#, edición de imagen y vídeo, Community Manager.",
      
      skills: [
        "Desarrollo PowerShell, C#, Python",
        "Administración eQMS (Qumas, Trackwise)",
        "SQL Server y Gestión BD",
        "Active Directory y VMWare",
        "Google Cloud Platform (GCP)",
        "Desarrollo de Juegos Unity",
        "Aprendizaje rápido y resolución problemas"
      ],
      
      languages: [
        "Español y Catalán (Nativo)",
        "Inglés (Profesional completo)",
        "Francés (A2)"
      ]
    },
    projects: {
      title: "Mis Proyectos",
      subtitle: "Una colección de mis proyectos de desarrollo de videojuegos",
      backToHome: "← Volver al inicio",
      viewDetails: "Ver Detalles",
      viewOnStore: "Ver en Google Play",
      downloadGame: "Descargar Juego",
      viewOnGGJ: "Ver en Global Game Jam",
      technologies: "Tecnologías",
      category: "Categoría",
      status: "Estado",
      
      categories: {
        all: "Todos",
        published: "Juegos Publicados",
        gamejam: "Game Jam",
        student: "Proyectos Estudiantiles"
      },
      
      projectsList: [
        {
          id: "tap-souls",
          title: "Tap Souls",
          shortDesc: "RPG idle clicker que combina jugabilidad tipo Souls con mecánicas incrementales. Publicado por TaleSoft Studio.",
          longDesc: "Un innovador juego idle clicker que fusiona la estética desafiante de Dark Souls con una jugabilidad incremental adictiva. Los jugadores progresan a través de batallas, mejoran equipamiento y enfrentan jefes desafiantes en esta experiencia RPG móvil.",
          category: "published",
          technologies: ["Unity", "C#", "iOS", "Android", "RPG Incremental"],
          status: "Publicado",
          year: "2017-Presente",
          link: "https://play.google.com/store/apps/details?id=com.TaleSoftStudio.TapSouls",
          image: "/images/projects/tap_souls.png"
        },
        {
          id: "battle-souls",
          title: "Battle Souls",
          shortDesc: "RPG táctico por turnos con visuales impresionantes y combate estratégico. Publicado por TaleSoft Studio.",
          longDesc: "Un RPG estratégico por turnos con diseños de personajes épicos, posicionamiento táctico y mecánicas de construcción de equipo. Los jugadores elogiaron sus gráficos impresionantes y sistema de combate envolvente.",
          category: "published",
          technologies: ["Unity", "C#", "iOS", "Android", "RPG Táctico"],
          status: "Publicado",
          year: "2017-Presente",
          link: "https://play.google.com/store/apps/details?id=com.TaleSoftStudio.BattleSouls",
          image: "/images/projects/battle_souls.png"
        },
        {
          id: "bubblelonia",
          title: "Bubblelonia",
          shortDesc: "Videojuego creado para la Global Game Jam 2025 con el tema 'Bubble'. Creado colaborativamente en 48 horas.",
          longDesc: "Desarrollado durante Global Game Jam 2025 con el tema 'Bubble'. Parte del evento de creación de juegos más grande del mundo donde 35,371 participantes en 97 países crearon 12,098 juegos en 48 horas.",
          category: "gamejam",
          technologies: ["Unity", "C#", "Diseño de Niveles", "Producción de Juegos", "GGJ"],
          status: "Entrada Game Jam",
          year: "2025",
          link: "https://globalgamejam.org/games/2025/bubbelonia-3",
          image: "/images/projects/bubblelonia.jpg"
        },
        {
          id: "fearless",
          title: "Fearless",
          shortDesc: "Proyecto final de curso desarrollado en EMAID (Escola Municipal d'Art i Disseny). Un juego completo que demuestra las habilidades aprendidas.",
          longDesc: "Proyecto integral de juego desarrollado como culminación de los estudios de desarrollo de videojuegos en EMAID. Este proyecto demuestra competencia en diseño de juegos, programación y producción.",
          category: "student",
          technologies: ["Unity", "C#", "Diseño de Niveles", "Producción de Juegos"],
          status: "Completado",
          year: "2014-2016",
          link: "https://mega.nz/file/XUQyzRyC#sr1CjrDASd-LYUv-ePxmZSKAimCztZu2Y1JVEJj_y3k",
          image: "/images/projects/fearless.png"
        },
        {
          id: "mirror-hotel",
          title: "Mirror Hotel",
          shortDesc: "Videojuego creado para la Global Game Jam 2015. Creado colaborativamente en 48 horas.",
          longDesc: "Desarrollado durante Global Game Jam 2015 con el tema '¿Qué hacemos ahora?'. Parte de un evento donde 28,837 participantes en 78 países crearon 5,438 juegos en un fin de semana.",
          category: "gamejam",
          technologies: ["Unity", "C#", "Diseño de Niveles", "Producción de Juegos", "GGJ"],
          status: "Entrada Game Jam",
          year: "2015",
          link: "https://globalgamejam.org/2015/games/mirror-hotel",
          image: "/images/projects/mirror_hotel.jpg"
        },
        {
          id: "hitodama",
          title: "Hitodama",
          shortDesc: "Videojuego creado para la Global Game Jam 2016 con el tema 'Ritual'. Creado colaborativamente en 48 horas.",
          longDesc: "Proyecto de game jam desarrollado para Global Game Jam 2016 bajo el tema 'Ritual'. Parte de un evento mundial con más de 36,164 participantes en 93 países creando casi 6,800 juegos.",
          category: "gamejam",
          technologies: ["Unity", "C#", "Diseño de Niveles", "Producción de Juegos", "GGJ"],
          status: "Entrada Game Jam",
          year: "2016",
          link: "https://globalgamejam.org/2016/games/hitodama",
          image: "/images/projects/hitodama.jpg"
        }
      ]
    },
    miniatures: {
      title: "Impresión 3D de Miniaturas",
      subtitle: "Miniaturas Personalizadas y Prediseñadas",
      location: "Basado en Barcelona, España 🇪🇸",
      designOwnTitle: "Diseña Tu Propia Miniatura",
      designOwnSubtitle: "Crea una miniatura única usando Hero Forge y yo la imprimo para ti",
      step1Title: "Diseña Tu Personaje",
      step1Desc: "Usa Hero Forge para crear tu miniatura personalizada con miles de opciones de personalización",
      step2Title: "Exporta y Envía Archivos STL",
      step2Desc: "Descarga tus archivos STL y envíamelos por email o formulario de contacto",
      step2Note: "Asegúrate de descargar los archivos STL (no capturas de pantalla u otros formatos)",
      step2Tip: "Hero Forge proporciona versiones STL con y sin soportes - recomiendo enviar ambas",
      step3Title: "Yo la Imprimo y Envío",
      step3Desc: "Imprimiré tu miniatura con resina de alta calidad, la limpiaré, aplicaré imprimación y te la enviaré lista para pintar",
      heroForgeButton: "Diseñar en Hero Forge",
      preMadeTitle: "Usar Miniatura Prediseñada",
      preMadeDesc: "¿Prefieres una miniatura prediseñada? Elige entre miles de modelos listos para imprimir",
      preMadeRecommendation: "Recomiendo estos creadores para archivos STL de alta calidad:",
      preMadeLinks: {
        fleshOfGods: "Flesh of Gods - Personajes de fantasía épica",
        lootStudios: "Loot Studios - Packs mensuales de miniaturas",
        bestiarumGames: "Bestiarum Games - Criaturas y monstruos"
      },
      pricingTitle: "Precios",
      pricingSubtitle: "Precios transparentes basados en tamaño y complejidad",
      miniaturesSizeTitle: "Miniaturas (por tamaño)",
      price4_5cm: "4-5cm (Pequeña) - 5€",
      price5_5_5cm: "5-5.5cm (Mediana) - 6€",
      priceLarger: "Tamaños mayores - Solicita presupuesto",
      basesTitle: "Bases",
      priceSimpleBase: "Base simple (32mm) - Gratis",
      priceDetailedBase: "Base detallada/personalizada - +2€",
      includedTitle: "Qué incluye",
      includedClean: "Impresión en resina limpia y curada",
      includedPrimer: "Imprimada con imprimación gris (lista para pintar)",
      noCommitment: "Los precios son estimados - sin compromiso hasta que discutamos tu miniatura específica",
      specsTitle: "Especificaciones Técnicas",
      maxSize: "Volumen máximo de impresión",
      maxSizeValue: "16.5cm (H) x 8cm (W) x 8cm (D)",
      readyToStart: "¿Listo para empezar?",
      readyToStartDesc: "¡Envíame tus archivos STL y demos vida a tu miniatura!",
      contactButton: "Formulario de Contacto"
    }
  }
};

export type Language = 'en' | 'es';

export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: string;
  technologies: string[];
  status: string;
  year: string;
  link: string;
  image: string;
}