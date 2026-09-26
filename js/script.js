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
    //estilo del logo 
    const logoText = document.getElementById("logo-text");

    if (logoText) {
        setTimeout(() => {
            logoText.classList.add("logo-fade");
    
            setTimeout(() => {
                logoText.textContent = "MR";
                logoText.classList.remove("logo-fade");
            }, 250);
    
        }, 2000);
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

    const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 0;

    const scrollPosition =
        window.scrollY + navbarHeight + 40;

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            currentSection = section.id;
        }
    });


    /* Si llegamos al final de la página,
       siempre activamos Contacto */
    const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

    if (reachedBottom) {
        currentSection = "contact";
    }


    navItems.forEach(link => {

        const target =
            link.getAttribute("href")?.replace("#", "");

        link.classList.toggle(
            "active",
            target === currentSection
        );
    });
}

window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateActiveNav
);

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
        }, 450);
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
    /* =========================
       CYBER GIRL
    ========================= */
    const cyberGirl = document.getElementById("cyber-girl");

if (cyberGirl && window.matchMedia("(pointer: fine)").matches) {

    /* =========================
       FRAMES
    ========================= */

    const createFrames = (folder, prefix, total) =>
        Array.from(
            { length: total },
            (_, index) =>
                `assets/cyber-girl/${folder}/${prefix}-${String(index + 1).padStart(2, "0")}.png`
        );

    const animations = {
        walk: createFrames("walk", "walk", 11),
        shoot: createFrames("shoot", "shoot", 55),
        crash: createFrames("crash", "crash", 42),
        return: createFrames("return", "return", 80)
    };


    /* =========================
       CONFIGURACIÓN
    ========================= */

    const WALK_FRAME_TIME_MIN = 45;   // scroll rápido
    const WALK_FRAME_TIME_MAX = 130;  // scroll lento
    const SHOOT_START = 0.20;
    const SHOOT_END = 0.40;
    const CRASH_FRAME_TIME = 80;
    const RETURN_FRAME_TIME = 90;

    const SHOOT_TRIGGER = 0.20;
    const RETURN_TRIGGER = 0.50;

    const START_X = -40;
    const RIGHT_MARGIN = 120;

    let girlX = START_X;

    let state = "idle";
    let walkFrame = 0;

    let walkTimer = null;
    let sequenceTimer = null;
    let scrollStopTimer = null;
    let exitTimer = null;

    let lastScrollY = window.scrollY;
    let scrollDirection = "down";
    let isScrolling = false;

    let scrollSpeed = 0;
    let lastWalkFrameTime = 0;

    let hasShot = false;
    let reachedBottom = false;
    let returnStarted = false;


    /* =========================
       PRECARGA
    ========================= */

    function preloadFrames(frames) {
        frames.forEach(src => {
            const image = new Image();
            image.src = src;
        });
    }

    Object.values(animations).forEach(preloadFrames);


    /* =========================
       UTILIDADES
    ========================= */

    function getScrollProgress() {

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (maxScroll <= 0) return 0;

        return Math.min(
            Math.max(window.scrollY / maxScroll, 0),
            1
        );
    }


    function setGirlPosition(x) {

        girlX = x;

        cyberGirl.style.transform =
            `translateX(${girlX}px)`;
    }


    function getRightLimit() {

        return Math.max(
            START_X,
            window.innerWidth - RIGHT_MARGIN
        );
    }


    function clearWalk() {

    if (walkTimer) {
        cancelAnimationFrame(walkTimer);
        walkTimer = null;
    }
}


    function clearSequence() {

        if (sequenceTimer) {
            clearInterval(sequenceTimer);
            sequenceTimer = null;
        }
    }


    function clearScrollStop() {

        if (scrollStopTimer) {
            clearTimeout(scrollStopTimer);
            scrollStopTimer = null;
        }
    }


    /* =========================
       POSICIÓN DE CAMINATA
    ========================= */

    function updateWalkPosition() {

        if (
            state === "shooting" ||
            state === "crashing" ||
            state === "seated" ||
            state === "returning" ||
            state === "exiting" ||
            state === "hidden"
        ) {
            return;
        }

        const progress = getScrollProgress();
        const rightLimit = getRightLimit();

        /*
         * Antes del disparo:
         * 0% → 20%
         *
         * Después del disparo:
         * 20% → 100%
         *
         * En ambos casos usamos el progreso real,
         * pero nunca actualizamos mientras dispara.
         */
        const x =
            START_X +
            (rightLimit - START_X) * progress;

        setGirlPosition(x);
    }


    /* =========================
       WALK
    ========================= */
    function startWalk() {

    if (
        state === "shooting" ||
        state === "crashing" ||
        state === "seated" ||
        state === "returning" ||
        state === "exiting" ||
        state === "hidden"
    ) {
        return;
    }

    state = "walking";

    if (walkTimer) return;

    lastWalkFrameTime = performance.now();

    function animateWalk(time) {

        if (
            !isScrolling ||
            state !== "walking"
        ) {
            walkTimer = null;
            return;
        }

        /*
         * Cuanto más rápido scrolleamos,
         * menos tiempo dejamos entre frames.
         */
        const speedFactor =
            Math.min(scrollSpeed / 80, 1);

        const frameTime =
            WALK_FRAME_TIME_MAX -
            (
                WALK_FRAME_TIME_MAX -
                WALK_FRAME_TIME_MIN
            ) * speedFactor;

        if (
            time - lastWalkFrameTime >= frameTime
        ) {

            walkFrame =
                (walkFrame + 1) %
                animations.walk.length;

            cyberGirl.src =
                animations.walk[walkFrame];

            lastWalkFrameTime = time;
        }

        walkTimer =
            requestAnimationFrame(animateWalk);
    }

    walkTimer =
        requestAnimationFrame(animateWalk);
}


    function stopWalk() {

        clearWalk();

        if (state === "walking") {
            state = "idle";
        }
    }


    /* =========================
       SHOOT — UNA SOLA VEZ
       AL 20%
    ========================= */

   function updateShootFromScroll(progress) {

    if (
        reachedBottom ||
        hasShot
    ) {
        return;
    }

    /*
     * Todavía no llegó al disparo.
     */
    if (progress < SHOOT_START) {
        return;
    }

    /*
     * Entramos en la secuencia SHOOT.
     */
    if (progress < SHOOT_END) {

        stopWalk();

        state = "shooting";

        /*
         * Convertimos:
         *
         * 20% scroll = frame 0
         * 40% scroll = frame 54
         */
        const shootProgress =
            (progress - SHOOT_START) /
            (SHOOT_END - SHOOT_START);

        const frame =
            Math.min(
                Math.floor(
                    shootProgress *
                    animations.shoot.length
                ),
                animations.shoot.length - 1
            );

        cyberGirl.src =
            animations.shoot[frame];

        return;
    }

    /*
     * Ya recorrió TODO shoot.
     */
    if (!hasShot) {

        hasShot = true;
        state = "idle";

        cyberGirl.src =
            animations.walk[walkFrame];
    }
}


    /* =========================
       CRASH
    ========================= */

    function startCrash() {

        if (reachedBottom) return;

        reachedBottom = true;
        isScrolling = false;

        clearScrollStop();
        stopWalk();
        clearSequence();

        state = "crashing";

        let frame = 0;

        /*
         * girlX queda congelado.
         * El movimiento del choque está
         * dentro de los propios frames.
         */
        cyberGirl.src =
            animations.crash[0];

        sequenceTimer = setInterval(() => {

            frame++;

            if (frame >= animations.crash.length) {

                clearSequence();

                state = "seated";

                cyberGirl.src =
                    animations.crash[
                        animations.crash.length - 1
                    ];

                return;
            }

            cyberGirl.src =
                animations.crash[frame];

        }, CRASH_FRAME_TIME);
    }


    /* =========================
       RETURN
    ========================= */

    function startReturn() {

        if (
            !reachedBottom ||
            state !== "seated" ||
            returnStarted
        ) {
            return;
        }

        returnStarted = true;

        clearWalk();
        clearSequence();
        clearScrollStop();

        state = "returning";

        let frame = 0;

        const returnStartX = girlX;

        /*
         * Según nuestro video,
         * aproximadamente acá empieza
         * la parte de correr.
         */
        const RUN_START_FRAME = 50;

        cyberGirl.src =
            animations.return[0];

        sequenceTimer = setInterval(() => {

            frame++;

            if (frame >= animations.return.length) {

                clearSequence();
                runOffScreen();
                return;
            }

            cyberGirl.src =
                animations.return[frame];


            /*
             * Hasta RUN_START_FRAME:
             * sentada → se levanta →
             * se sacude → gira.
             *
             * girlX NO cambia.
             */
            if (frame >= RUN_START_FRAME) {

                const totalRunFrames =
                    animations.return.length -
                    RUN_START_FRAME;

                const runProgress =
                    (frame - RUN_START_FRAME) /
                    totalRunFrames;

                const targetX =
                    -window.innerWidth * 0.35;

                const x =
                    returnStartX +
                    (targetX - returnStartX) *
                    runProgress;

                setGirlPosition(x);
            }

        }, RETURN_FRAME_TIME);
    }


    /* =========================
       SALIDA IZQUIERDA
    ========================= */

    function runOffScreen() {

        state = "exiting";

        if (exitTimer) {
            clearInterval(exitTimer);
        }

        exitTimer = setInterval(() => {

            girlX -= 10;

            setGirlPosition(girlX);

            const girlWidth =
                cyberGirl.getBoundingClientRect().width;

            if (girlX < -girlWidth) {

                clearInterval(exitTimer);
                exitTimer = null;

                state = "hidden";

                cyberGirl.style.display =
                    "none";
            }

        }, 30);
    }


    /* =========================
       RESET
    ========================= */

    function resetCyberGirl() {

        clearWalk();
        clearSequence();
        clearScrollStop();

        if (exitTimer) {
            clearInterval(exitTimer);
            exitTimer = null;
        }

        hasShot = false;
        reachedBottom = false;
        returnStarted = false;

        isScrolling = false;

        state = "idle";
        walkFrame = 0;

        girlX = START_X;

        cyberGirl.style.display =
            "block";

        cyberGirl.src =
            animations.walk[0];

        setGirlPosition(START_X);
    }


    /* =========================
       SCROLL
    ========================= */

    window.addEventListener(
        "scroll",
        () => {

            const currentScrollY =
                window.scrollY;
            const scrollDelta =
                Math.abs(currentScrollY - lastScrollY);
            
            scrollSpeed =
                scrollSpeed * 0.65 +
                scrollDelta * 0.35;

            if (currentScrollY > lastScrollY) {
                scrollDirection = "down";
            } else if (currentScrollY < lastScrollY) {
                scrollDirection = "up";
            }

            lastScrollY =
                currentScrollY;

            const progress =
                getScrollProgress();


            /* =========================
               BAJANDO
            ========================= */

            if (
                scrollDirection === "down" &&
                !reachedBottom
            ) {

                isScrolling = true;

                clearScrollStop();

                /*
                 * 1. Llegó al fondo.
                 * Crash tiene prioridad.
                 */
                if (progress >= 0.995) {

                    startCrash();
                    return;
                }


                /*
                 * 2. Al cruzar 20%:
                 * SHOOT una sola vez.
                 */
                if (
                    progress >= SHOOT_TRIGGER &&
                    !hasShot
                ) {

                    startShoot();
                    return;
                }


                /*
                 * 3. Caminata normal.
                 *
                 * Mientras shoot está activo,
                 * NO tocamos girlX.
                 */
                if (state !== "shooting") {

                    updateWalkPosition();
                    startWalk();
                }


                /*
                 * Si pasan 120 ms sin nuevos
                 * eventos de scroll, congelamos
                 * los pies.
                 */
                scrollStopTimer =
                    setTimeout(() => {

                        isScrolling = false;

                        if (
                            state === "walking"
                        ) {
                            stopWalk();
                        }

                    }, 120);
            }


            /* =========================
               SUBIENDO DESPUÉS DEL CRASH
            ========================= */

            if (
                scrollDirection === "up" &&
                reachedBottom
            ) {

                isScrolling = false;

                clearScrollStop();
                stopWalk();

                /*
                 * Permanece sentada hasta
                 * cruzar el 50%.
                 */
                if (
                    progress <= RETURN_TRIGGER &&
                    state === "seated"
                ) {
                    startReturn();
                }
            }


            /* =========================
               RESET EN EL TOP
            ========================= */

            if (
                progress <= 0.01 &&
                state === "hidden"
            ) {
                resetCyberGirl();
            }

        },
        { passive: true }
    );


    /* =========================
       RESIZE
    ========================= */

    window.addEventListener(
        "resize",
        () => {

            if (
                !reachedBottom &&
                state !== "shooting" &&
                state !== "hidden"
            ) {
                updateWalkPosition();
            }

        }
    );


    /* =========================
       INICIO
    ========================= */

    cyberGirl.src =
        animations.walk[0];

    setGirlPosition(START_X);
}
});
