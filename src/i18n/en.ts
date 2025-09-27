export default {
  hero: {
    description: {
      before: "",
      highlight: "Full-Stack",
      after:
        " Developer. I build clean interfaces and simple, maintainable APIs",
    },
    download: "Download CV",
    alt: {
      photo: "Photo of Albert Salom",
      download: "Download icon",
      github: "Github profile",
      linkedin: "LinkedIn profile",
      email: "Send email",
    },
  },
  about: {
    title: "About me",
    description: `I hold a degree in Computer Science and am building my career in full-stack development.
    I enjoy designing <strong>clean</strong>, <strong>intuitive</strong> interfaces while reinforcing my backend 
    skills through <strong>best practices</strong>: simplicity, validation, and testing.
    This portfolio highlights projects that reflect this approach.`,
  },
  projects: {
    title: "Projects",
    developmentText: "In development",
    projectsInfo: {
      mallorkcultura: {
        title: "Mallorkcultura",
        url: "https://github.com/alberba/MallorkCultura",
        development: false,
        imageUrl: "/projects/mallorkcultura.webp",
        description: `A platform to discover and plan cultural activities in Mallorca. 
        Built with HTML, CSS, and JavaScript during my university studies.`,
      },
      fileConverter: {
        title: "File Converter",
        url: "https://file-converter-alberba.vercel.app/",
        development: true,
        imageUrl: "/projects/fileconverter.webp",
        description: `A web application for converting files beetween different formats.
        Built with React, TypeScript and TailwindCSS. Currently only supports images.`,
      },
      fluxComfyUI: {
        title: "Flux ComfyUI UI",
        url: "https://github.com/alberba/astro-flux-comfyui",
        development: false,
        imageUrl: "/projects/fluxcomfyui.webp",
        description: `A platform to manage ComfyUI workflows through a clean and modern interface. 
        Built with Astro, TailwindCSS, and TypeScript as part of my Final Degree Project (TFG). 
        Non-functional demo website.`,
      },
    },
  },
  contact: {
    github: "Github profile",
    linkedin: "LinkedIn profile",
    email: "Send email",
  },
};
