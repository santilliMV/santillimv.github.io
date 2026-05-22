// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Santiago Muñoz Villate",
  title: "Santiago Muñoz Villate",
  description: "Portfolio and blog of Santiago Muñoz Villate",
  
  // Navigation
  navigation: {
    home: "Principal",
    posts: "Evidencias",
    contact: "Contacto",
  },
  
  // Hero Section
  hero: {
    prefix: "Soy",
    name: "Santiago Muñoz Villate",
    intro: "Estudiante de Ingeniería de sistemas. Apasionado por aprender y construir soluciones con código.",
    avatar: "/image/WhatsApp%20Image%202026-02-13%20at%209.25.30%20PM.jpeg",
    buttons: {
      viewPosts: "Ver evidencias",
      contactMe: "Contactarme",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com" },
      { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/santilliMV" },
    ],
  },
  
  // About Section
  about: {
    title: "Sobre mí",
    text: "Soy estudiante de la universidad El Bosque apasionado por la programación y la resolución de problemas, enfocado en fortalecer mis habilidades en desarrollo de software y algoritmos. Me caracterizo por el aprendizaje constante, la disciplina académica y el interés por crear soluciones tecnológicas eficientes.",
  },
  
  // Contact Page
  contact: {
    title: "Formas de contacto",
    subtitle: "Aca puedes ver mis formas de contacto, no dudes en escribirme!",
    info: {
      email: {
        label: "Email",
        value: "santiagomunozv123@gmail.com",
        link: "mailto:santiagomunozv123@gmail.com",
      },
      phone: {
        label: "Telefono",
        value: "+57 3142980438",
        link: "tel:+573142980438",
      },
      location: {
        label: "Location",
        value: "Bogota",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg" },
        { name: "Facebook", icon: "/svg/facebook.svg" },
        { name: "GitHub", icon: "/svg/github.svg" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026 Santiago Muñoz Villate. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },
  
  // Posts Page
  posts: {
    title: "Publicaciones",
    subtitle: "Explora los artículos y trabajos publicados",
    searchPlaceholder: "Buscar publicaciones...",
  },
  
};


