const translations = {
    es: {
        subtitle: "Full Stack & Data Engineer | Node.js, Java Spring Boot, React & RPA",
        about_title: "Sobre Mí",
        about_text: "Desarrolladora Full Stack especializada en arquitectura backend, optimización de procesos operativos e integración de soluciones basadas en datos. Experimentada en la creación de herramientas de automatización personalizadas (RPA), APIs RESTful y gestión de bases de datos relacionales y no relacionales.",
        skills_title: "Habilidades Técnicas",
        projects_title: "Proyectos Destacados",
        proj1_desc: "Aplicación de gestión de tareas con arquitectura RESTful, manejo de estado global y diseño responsivo.",
        proj2_desc: "Backend escalable para Urban Vibes con autenticación segura JWT y persistencia de datos.",
        proj3_desc: "Automatización de flujos operativos (RPA) mediante control visual e integración de eventos del sistema.",
        exp_title: "Experiencia Laboral",
        exp1_role: "Pasante de Inteligencia & Desarrollo",
        exp1_desc: "Desarrollo de plataforma web centralizada y automatización de flujos de trabajo (RPA) mediante AutoHotkey v2, reduciendo errores manuales a través de reconocimiento de imágenes y manejo de eventos.",
        edu_title: "Educación",
        edu1_title: "Tecnicatura Universitaria en Programación",
        edu2_status: "Cursado en progreso",
        badge_ongoing: "En Curso",
        contact_title: "Contacto y Perfiles"
    },
    en: {
        subtitle: "Full Stack & Data Engineer | Node.js, Java Spring Boot, React & RPA",
        about_title: "About Me",
        about_text: "Full Stack Developer specialized in backend architecture, operational process optimization, and data-driven solutions integration. Experienced in building custom automation tools (RPA), RESTful APIs, and managing relational and non-relational databases.",
        skills_title: "Technical Skills",
        projects_title: "Featured Projects",
        proj1_desc: "Task management application featuring RESTful architecture, global state management, and responsive design.",
        proj2_desc: "Scalable backend for Urban Vibes with secure JWT authentication and data persistence.",
        proj3_desc: "Operational workflow automation (RPA) using visual control and system event integration.",
        exp_title: "Work Experience",
        exp1_role: "Intelligence & Development Intern",
        exp1_desc: "Built a centralized web platform and automated workflows (RPA) using AutoHotkey v2, reducing manual errors through image recognition and event handling.",
        edu_title: "Education",
        edu1_title: "Higher Technical Degree in Programming",
        edu2_status: "Ongoing specialization",
        badge_ongoing: "In Progress",
        contact_title: "Contact & Profiles"
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

    // Actualiza el texto del botón al idioma opuesto
    const langText = document.getElementById('lang-text');
    langText.textContent = lang === 'es' ? 'English' : 'Español';
    
    // Guarda la preferencia
    localStorage.setItem('preferred_lang', lang);
    currentLang = lang;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    const nextLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(nextLang);
});

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});
