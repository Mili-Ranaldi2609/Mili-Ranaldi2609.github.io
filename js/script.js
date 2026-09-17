const translations = {
    es: {
        nav_about: "Sobre mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_experience: "Experiencia",
        nav_education: "Educación",
        nav_contact: "Contacto",
        
        about_title: "Sobre Mí",
        about_text: "Desarrolladora Full Stack especializada en arquitectura backend, optimización de procesos operativos e integración de soluciones basadas en datos. Experimentada en la creación de herramientas de automatización personalizadas (RPA), APIs RESTful y gestión de bases de datos relacionales y no relacionales.",

        skills_title: "Habilidades Técnicas",
        skills_subtitle: "Tecnologías con las que trabajo",

        projects_title: "Proyectos Destacados",
        proj1_desc: "Aplicación de gestión de tareas con arquitectura RESTful, manejo de estado global y diseño responsivo.",
        proj2_desc: "Backend escalable para Urban Vibes con autenticación segura JWT y persistencia de datos.",
        proj3_desc: "Automatización de flujos operativos (RPA) mediante control visual e integración de eventos del sistema.",
        proj4_desc: "Análisis de la dinámica productiva de hidrocarburos en la Cuenca Cuyana.",
        view_project: "Ver Proyecto",
        project_metric: "mejora en eficiencia operativa",
        project_progress: "En desarrollo",

        exp_title: "Experiencia Profesional",
        exp1_role: "Pasante de Inteligencia & Desarrollo",
        exp_task1: "Desarrollo de una plataforma web centralizada para mejorar la trazabilidad y eficiencia de procesos.",
        exp_task2: "Automatización de flujos operativos mediante AutoHotkey v2, reconocimiento visual y manejo de eventos.",
        exp_task3: "Implementación de validaciones y manejo de errores para aumentar la confiabilidad de las automatizaciones.",
        exp_task4: "Trabajo colaborativo dentro de un equipo Agile de cinco integrantes.",

        edu_title: "Educación",
        edu1_title: "Tecnicatura Universitaria en Programación",
        edu2_status: "Cursado en progreso",
        edu_degree: "TECNICATURA",
        edu_specialization: "ESPECIALIZACIÓN",
        edu_subtitle: "Formación académica",
        badge_ongoing: "En Curso",

        hero_role: "Full Stack Developer · Automation · Data Science",
        hero_description: "Desarrollo soluciones web, automatizaciones e integraciones orientadas a resolver problemas reales y optimizar procesos.",
        hero_projects: "Ver proyectos",

        about_education: "Técnica Universitaria en Programación · UTN",

        contact_title: "Contacto",
        contact_heading: "¿Construimos algo juntos?",
        contact_text: "Estoy abierta a nuevas oportunidades, proyectos y colaboraciones relacionadas con desarrollo web, automatización y datos.",
        contact_cv: "Ver currículum",
        footer_center: "Desarrollado con HTML · CSS · JavaScript",
    },

    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_contact: "Contact",
        
        about_title: "About Me",
        about_text: "Full Stack Developer specialized in backend architecture, operational process optimization, and data-driven solutions integration. Experienced in building custom automation tools (RPA), RESTful APIs, and managing relational and non-relational databases.",

        skills_title: "Technical Skills",
        skills_subtitle: "Technologies I work with",

        projects_title: "Featured Projects",
        proj1_desc: "Task management application featuring RESTful architecture, global state management, and responsive design.",
        proj2_desc: "Scalable backend for Urban Vibes with secure JWT authentication and data persistence.",
        proj3_desc: "Operational workflow automation (RPA) using visual control and system event integration.",
        proj4_desc: "Analysis of hydrocarbon production dynamics in the Cuyo Basin.",
        view_project: "View Project",
        project_metric: "improvement in operational efficiency",
        project_progress: "In development",

        exp_title: "Professional Experience",
        exp1_role: "Intelligence & Development Intern",
        exp_task1: "Developed a centralized web platform to improve process traceability and operational efficiency.",
        exp_task2: "Automated operational workflows using AutoHotkey v2, visual recognition and event handling.",
        exp_task3: "Implemented validations and error handling to improve automation reliability.",
        exp_task4: "Collaborated within a five-member Agile team.",

        edu_title: "Education",
        edu1_title: "Higher Technical Degree in Programming",
        edu2_status: "Ongoing specialization",
        edu_degree: "DEGREE",
        edu_specialization: "SPECIALIZATION",
        edu_subtitle: "Academic background",
        badge_ongoing: "In Progress",

        hero_role: "Full Stack Developer · Automation · Data Science",
        hero_description: "I build web solutions, automations, and integrations focused on solving real problems and optimizing processes.",
        hero_projects: "View projects",

        about_education: "Higher Technical Degree in Programming · UTN",

        contact_title: "Contact",
        contact_heading: "Let's build something together.",
        contact_text: "I'm open to new opportunities, projects and collaborations related to web development, automation and data.",
        contact_cv: "View résumé",
        footer_center: "Built with HTML · CSS · JavaScript",
    }
};


let currentLang = localStorage.getItem("preferred_lang") || "es";


function updateLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const langText = document.getElementById("lang-text");

    if (langText) {
        langText.textContent = lang === "es" ? "English" : "Español";
    }

    localStorage.setItem("preferred_lang", lang);
    currentLang = lang;
}


document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       IDIOMA
    ========================= */

    updateLanguage(currentLang);

    const langToggle = document.getElementById("lang-toggle");

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const nextLang = currentLang === "es" ? "en" : "es";
            updateLanguage(nextLang);
        });
    }


    /* =========================
       COPIAR EMAIL
    ========================= */

    const copyEmail = document.getElementById("copyEmail");

    if (copyEmail) {
        copyEmail.addEventListener("click", async () => {
            const email = "mranaldi44@gmail.com";
            const value = copyEmail.querySelector(".contact-value");

            if (!value) return;

            const originalText = value.textContent;

            try {
                await navigator.clipboard.writeText(email);

                value.textContent =
                    currentLang === "es"
                        ? "¡Email copiado!"
                        : "Email copied!";

                setTimeout(() => {
                    value.textContent = originalText;
                }, 1500);

            } catch (error) {
                console.error("No se pudo copiar el email:", error);
            }
        });
    }


    /* =========================
       MENÚ MOBILE
    ========================= */

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        const menuIcon = menuToggle.querySelector("i");

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars", !isOpen);
                menuIcon.classList.toggle("fa-xmark", isOpen);
            }

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");

                if (menuIcon) {
                    menuIcon.classList.remove("fa-xmark");
                    menuIcon.classList.add("fa-bars");
                }

                menuToggle.setAttribute("aria-label", "Abrir menú");
            });
        });
    }
    /* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});
    /* =========================
   SCROLL PROGRESS
========================= */

const progressBar = document.getElementById("scroll-progress-bar");

function updateScrollProgress() {
    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    progressBar.style.width =
        `${Math.min(scrollPercentage, 100)}%`;
}

window.addEventListener("scroll", updateScrollProgress);

updateScrollProgress();
/* =========================
   NAVBAR ACTIVE SECTION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();
    /* =========================
   BACK TO TOP
========================= */

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    function toggleBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    window.addEventListener("scroll", toggleBackToTop);

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    toggleBackToTop();
}
    /* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".custom-cursor");

if (
    cursor &&
    window.matchMedia("(pointer: fine)").matches
) {

    let lastX = 0;
    let lastY = 0;

    let lastTrailTime = 0;

    document.addEventListener("mousemove", event => {

        const x = event.clientX;
        const y = event.clientY;
    
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    
        cursor.style.transform =
            "translate(-20%, -50%)";
    
    
        /* =========================
           ESTELA
        ========================= */
    
        const now = performance.now();
    
        const distance = Math.hypot(
            x - lastX,
            y - lastY
        );
    
        if (
            distance > 6 &&
            now - lastTrailTime > 35
        ) {
    
            createTrail(x, y);
    
            lastTrailTime = now;
        }
    
        lastX = x;
        lastY = y;
});

    /* =========================
       CREAR ESTELA
    ========================= */

    function createTrail(x, y) {

        const trail = document.createElement("div");
    
        trail.classList.add("cursor-trail");
    
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
    
        trail.style.transform =
            "translate(-50%, -50%)";
    
        document.body.appendChild(trail);
    
        setTimeout(() => {
            trail.remove();
        }, 350);
}

    /* =========================
       HOVER
    ========================= */

    const interactiveElements =
        document.querySelectorAll(
            "a, button, .contact-item"
        );

    interactiveElements.forEach(element => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover");
        });

    });


    /* =========================
       CLICK
    ========================= */

    document.addEventListener("mousedown", () => {
        cursor.classList.add("cursor-click");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("cursor-click");
    });
}
});
