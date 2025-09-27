export default {
  hero: {
    description: {
      before: "Desarrollador",
      highlight: "Full-Stack",
      after: ". Construyo interfaces limpias y APIs sencillas y mantenibles",
    },
    download: "Descargar CV",
    alt: {
      photo: "Foto de Albert Salom",
      download: "Icono de descarga",
      github: "Perfil de GitHub",
      linkedin: "Perfil de LinkedIn",
      email: "Enviar correo",
    },
  },
  about: {
    title: "Sobre mí",
    description: `Soy graduado en Informática y camino hacia el desarrollo full-stack.
    Disfruto creando <strong>interfaces claras</strong> y estoy consolidando mi base
    de backend con <strong>buenas prácticas</strong> (simplicidad, validación y pruebas).
    Este porfolio recoge algunos proyectos donde aplico esa forma de trabajar.`,
  },
  projects: {
    title: "Proyectos",
    developmentText: "En desarrollo",
    projectsInfo: {
      mallorkcultura: {
        title: "Mallorkcultura",
        url: "https://github.com/alberba/MallorkCultura",
        development: false,
        imageUrl: "/projects/mallorkcultura.webp",
        description: `Una plataforma para descubrir y planificar actividades culturales en Mallorca. 
        Desarrollada con HTML, CSS y Javascript durante el transcurso de la carrera 
        universitaria.`,
      },
      fileConverter: {
        title: "File Converter",
        url: "https://file-converter-alberba.vercel.app/",
        development: true,
        imageUrl: "/projects/fileconverter.webp",
        description: `Una aplicación web para convertir archivos entre diferentes formatos.
        Desarrollada con React, TypeScript y TailwindCSS. Actualmente solo permite imágenes.`,
      },
      fluxComfyUI: {
        title: "Flux ComfyUI UI",
        url: "https://github.com/alberba/astro-flux-comfyui",
        development: false,
        imageUrl: "/projects/fluxcomfyui.webp",
        description: `Una plataforma para poder gestionar flujos de trabajo de comfyui con una interfaz
        sencilla y moderna. Proyecto realizado con Astro, TailwindCSS y Typescript para el
        desarrollo del TFG. Página web no funcional.`,
      },
    },
  },
  contact: {
    github: "Perfil de GitHub",
    linkedin: "Perfil de LinkedIn",
    email: "Enviar correo",
  },
};
