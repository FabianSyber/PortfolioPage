// Make loadComponent available globally
window.loadComponent = async function(id, path) {
    try {
        const response = await fetch(path);
        const html = await response.text();
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with id "${id}" not found. Skipping component "${id}".`);
            return;
        }
        element.innerHTML = html;
        
        // Trigger component-specific initialization after loading
        switch(id) {
            case 'home-carousel':
                if (typeof window.initializeCarousel === 'function') {
                    window.initializeCarousel();
                }
                if (typeof window.initializeTyping === 'function') {
                    window.initializeTyping();
                }
                break;
            case 'projects':
                if (typeof window.initializeProjects === 'function') {
                    window.initializeProjects();
                }
                break;
            case 'skills':
                if (typeof window.initializeSkills === 'function') {
                    window.initializeSkills();
                }
                break;
            case 'experiences':
                if (typeof window.initializeExperiences === 'function') {
                    window.initializeExperiences();
                }
                break;
            case 'about':
                if (typeof window.initializeAbout === 'function') {
                    window.initializeAbout();
                }
                break;
            case 'post':
                if (typeof window.initializePost === 'function') {
                    window.initializePost();
                }
                break;
        }
    } catch (error) {
        console.error(`Error loading component ${id}:`, error);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Load HTML components
    const components = {
        'head': '/components/head.html',
        'navbar': '/components/navbar.html',
        'home-carousel': '/components/home.html',
        'about': '/components/about.html',
        'projects': '/components/projects.html',
        'experiences': '/components/experiences.html',
        'skills': '/components/skills.html',
        'footer': '/components/footer.html'
    };

    // Load all components
    Object.entries(components).forEach(([id, path]) => {
        loadComponent(id, path);
    });
});