export const translations = {
  nav: {
    home: "Home",
    projects: "Projects",
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
    subtitle: "A collection of my projects",
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
      games: "Games",
      gamejam: "Game Jam",
    },

    projectsList: [
      {
        id: "tap-souls",
        title: "Tap Souls",
        shortDesc: "Idle clicker RPG combining Souls-like gameplay with incremental mechanics. Published by TaleSoft Studio.",
        longDesc: "An innovative idle clicker game that merges the challenging Dark Souls aesthetic with addictive incremental gameplay. Players progress through battles, upgrade equipment, and face challenging bosses in this mobile RPG experience.",
        category: "games",
        technologies: ["Unity", "C#", "iOS", "Android", "Incremental RPG"],
        status: "Finished",
        year: "2017",
        link: "https://play.google.com/store/apps/details?id=com.TaleSoftStudio.TapSouls",
        image: "/images/projects/tap_souls.png"
      },
      {
        id: "battle-souls",
        title: "Battle Souls",
        shortDesc: "Turn-based tactical RPG with stunning visuals and strategic combat. Published by TaleSoft Studio.",
        longDesc: "A strategic turn-based RPG featuring epic character designs, tactical positioning, and team-building mechanics. Players praised its impressive graphics and engaging combat system.",
        category: "games",
        technologies: ["Unity", "C#", "iOS", "Android", "Tactical RPG"],
        status: "Finished",
        year: "2018",
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
        status: "Finished",
        year: "2025",
        link: "https://globalgamejam.org/games/2025/bubbelonia-3",
        image: "/images/projects/bubblelonia.jpg"
      },
      {
        id: "fearless",
        title: "Fearless",
        shortDesc: "Final course project developed at EMAID (Escola Municipal d'Art i Disseny). A complete game showcasing learned skills in game development.",
        longDesc: "Comprehensive game project developed as the culmination of video game development studies at EMAID. This project demonstrates proficiency in game design, programming, and production.",
        category: "games",
        technologies: ["Unity", "C#", "Level Design", "Game Production"],
        status: "Finished",
        year: "2016",
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
        status: "Finished",
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
        status: "Finished",
        year: "2016",
        link: "https://globalgamejam.org/2016/games/hitodama",
        image: "/images/projects/hitodama.jpg"
      }
    ]
  },
  miniatures: {
    title: "3D Miniature Printing",
    subtitle: "Custom miniature printing service in Spain",

    // Location
    location: "Service available in Spain. Contact me to review shipping costs for other locations.",

    // Technical specs
    specsTitle: "Technical Specifications",
    maxSize: "Maximum print size",
    maxSizeValue: "200 x 218 x 123 mm (height x width x depth)",

    // Design your own section
    designOwnTitle: "Design Your Own Miniature",
    designOwnSubtitle: "Create a custom miniature using Hero Forge",

    step1Title: "Step 1: Design",
    step1Desc: "Create an account on Hero Forge and design your miniature.",

    step2Title: "Step 2: Purchase",
    step2Desc: "Buy the miniature (STL file) and download it.",
    step2Note: "Look for the 'STL Download' option. After purchase, it takes a few minutes to generate the miniature. You'll receive an email when it's ready.",
    step2Tip: "You can choose 'Separate Base' to get separate files for the character model and the base.",

    step3Title: "Step 3: Send Files",
    step3Desc: "Send me the STL files via WhatsApp or email to hello@amoniz.dev",

    // Pre-made miniatures section
    preMadeTitle: "Use a Pre-Made Miniature",
    preMadeDesc: "If you already have an STL file or similar, send it directly via WhatsApp or email to hello@amoniz.dev",
    preMadeRecommendation: "I recommend looking for miniatures made by professionals, for example:",
    preMadeLinks: {
      fleshOfGods: "Flesh of Gods",
      lootStudios: "Loot Studios",
      bestiarumGames: "Bestiarum Games"
    },

    // CTA buttons
    heroForgeButton: "Go to Hero Forge",
    contactButton: "Contact Me",

    // Pricing section
    pricingTitle: "Pricing",
    pricingSubtitle: "Transparent and competitive prices",
    miniaturesSizeTitle: "Miniatures",
    price4_5cm: "4.5cm: 4€",
    price5_5_5cm: "5-5.5cm: 6€",
    priceLarger: "Larger miniatures: Contact for pricing",
    basesTitle: "Bases",
    priceSimpleBase: "Simple base: 2€",
    priceDetailedBase: "Detailed or larger base: 4-6€",
    includedTitle: "What's included",
    includedClean: "Delivered clean, cured, and support-free",
    includedPrimer: "Can be primed in black or dark gray",
    noCommitment: "Any questions? Feel free to ask without any commitment.",

    // Future gallery placeholder
    galleryComingSoon: "Gallery coming soon"
  }
};

export type Translations = typeof translations;

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