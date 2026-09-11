const translations = {
    es: {
        about_title: "Sobre Mí",
        about_text: "Desarrolladora Full Stack especializada en arquitectura backend, optimización de procesos operativos e integración de soluciones basadas en datos. Experimentada en la creación de herramientas de automatización personalizadas (RPA), APIs RESTful y gestión de bases de datos relacionales y no relacionales.",
        skills_title: "Habilidades Técnicas",
        skills_subtitle: "Tecnologías con las que trabajo",
        projects_title: "Proyectos Destacados",
        proj1_desc: "Aplicación de gestión de tareas con arquitectura RESTful, manejo de estado global y diseño responsivo.",
        proj2_desc: "Backend escalable para Urban Vibes con autenticación segura JWT y persistencia de datos.",
        proj3_desc: "Automatización de flujos operativos (RPA) mediante control visual e integración de eventos del sistema.",
        view_project: "Ver Proyecto",
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
        project_metric: "mejora en eficiencia operativa",
        project_progress: "En desarrollo",
        proj4_desc: "Análisis de la dinámica productiva de hidrocarburos en la Cuenca Cuyana.",
        contact_title: "Contacto",
        contact_heading: "¿Construimos algo juntos?",
        contact_text: "Estoy abierta a nuevas oportunidades, proyectos y colaboraciones relacionadas con desarrollo web, automatización y datos.",
        contact_cv: "Ver currículum",
    },
    en: {
        about_title: "About Me",
        about_text: "Full Stack Developer specialized in backend architecture, operational process optimization, and data-driven solutions integration. Experienced in building custom automation tools (RPA), RESTful APIs, and managing relational and non-relational databases.",
        skills_title: "Technical Skills",
        skills_subtitle: "Technologies I work with",
        projects_title: "Featured Projects",
        proj1_desc: "Task management application featuring RESTful architecture, global state management, and responsive design.",
        proj2_desc: "Scalable backend for Urban Vibes with secure JWT authentication and data persistence.",
        proj3_desc: "Operational workflow automation (RPA) using visual control and system event integration.",
        view_project: "View Project",
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
        project_metric: "improvement in operational efficiency",
        project_progress: "In development",
        proj4_desc: "Analysis of hydrocarbon production dynamics in the Cuyo Basin.",
        contact_title: "Contact",
        contact_heading: "Let's build something together.",
        contact_text: "I'm open to new opportunities, projects and collaborations related to web development, automation and data.",
        contact_cv: "View résumé",
    }
};

let currentLang = localStorage.getItem('preferred_lang') || 'es';

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const langText = document.getElementById('lang-text');
    langText.textContent = lang === 'es' ? 'English' : 'Español';
    
    localStorage.setItem('preferred_lang', lang);
    currentLang = lang;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(nextLang);
});

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});
const copyEmail = document.getElementById("copyEmail");

if (copyEmail) {
    copyEmail.addEventListener("click", async () => {
        const email = "mranaldi44@gmail.com";

        try {
            await navigator.clipboard.writeText(email);

            const value = copyEmail.querySelector(".contact-value");
            const originalText = value.textContent;

            value.textContent = "¡Email copiado!";

            setTimeout(() => {
                value.textContent = originalText;
            }, 1500);

        } catch (error) {
            console.error("No se pudo copiar el email:", error);
        }
    });
}
