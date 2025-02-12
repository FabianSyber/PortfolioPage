window.initializeProjects = function() {
    const projectContainer = document.getElementById('project-cards');
    if (!projectContainer) return;

    // Render projects first
    renderProjects();

    // Initialize filters after content is loaded
    imagesLoaded(projectContainer, function() {
        initializeFilters();
    });
};

const projects = [
  {
    title: "SpeckLCA",
    summary: "A opensource web-based LCA tool for architects and designers to make early phase LCA calculations for buildings.",
    image: "/images/specklca/a.png",
    date: "Ongoing, 2024",
    link: "/posts/specklca/",
    categories: ["Coding", "Design"]
  },
  {
    title: "ReFab",
    summary: "Project where we were investigating how we can use recycled glasswool in a new way to create new optimized acoustic panels.",
    image: "/images/refab/a.png",
    date: "January 15, 2025",
    link: "/posts/refab/index.html",
    categories: ["Design", "Digital Fabrication"]
  },
  {
    title: "LINK EP",
    summary: "Grasshopper and Rhino framework for early phase design work in Rhino and Grasshopper with a focus on parametric design and data driven design.",
    image: "/images/linkep/g.png",
    date: "Ongoing, 2023",
    link: "/posts/linkep/",
    categories: ["Coding", "Architecture"]
  },
  {
    title: "Augmented Architect",
    summary: "Native Rhino and Grasshopper plugin made in C# for early phase design work and sketching.",
    image: "/images/augmentedarchitect/a.jpg",
    date: "Ongoing, 2022",
    link: "/posts/augmentedarchitect/",
    categories: ["Coding", "Architecture"]
  },
  {
    title: "Lierstranda",
    summary: "Project for a new urban development in Lierstranda outside of Drammen Norway with over 1 200 000 sqm of mixed use buildings.",
    image: "/images/lierstranda/a.jpg",
    date: "December 18, 2022",
    link: "/posts/lierstranda/",
    categories: ["Architecture"]
  },
  {
    title: "Hammarkullen",
    summary: "Competition in Gothenburg for a new plaza, with a focus on the local community and the history of the area.",
    image: "/images/hammarkullen/a.png",
    date: "June 20, 2021",
    link: "/posts/hammarkullen/",
    categories: ["Architecture"]
  },
  {
      title: "Deep Architecture",
      summary: "Master thesis project where I explored machine learning and neural networks and how they can be used in an architectural framework.",
      image: "/images/deeparch/q.png",
      date: "June 8, 2020",
      link: "/posts/deeparch/",
      categories: ["Architecture", "Coding"]
  },
  {
    title: "Frankie",
    summary: "Group work of three people focused on amalgamations of three different raw materials and later building a 1:1 size pavillion consisting of the materials.",
    image: "/images/frankie/a-0.jpg",
    date: "Decemeber 10, 2018",
    link: "/posts/frankie/",
    categories: ["Architecture", "Digital Fabrication"]
  }
];

const archive = [
    {
        title: "Lamp and Furniture Design",
        summary: "Hobby project making laser cut and 3d printed lamps.",
        image: "/images/lamps/a.png",
        date: "Hobby",
        link: "/posts/lamps/",
        categories: ["Design", "Digital Fabrication"]
    },
]

function renderProjects() {
    const projectContainer = document.getElementById('project-cards');
    if (!projectContainer) {
        console.error('Project cards container not found');
        return;
    }
    projectContainer.innerHTML = projects.map(createProjectCard).join('');
}

function initializeFilters() {
    const filterContainer = document.getElementById('project-filter-buttons');
    if (!filterContainer) {
        console.error('Filter buttons container not found');
{
        console.error('Filter buttons container not found');
return;}

}

    // Get unique categories and sort them
    const categories = [...new Set(projects.flatMap(p => p.categories))].sort();
    
    // Create filter buttons
    createFilterButtons(categories);

    try {
        const filterizr = new Filterizr('.filtr-container', {
            layout: 'sameWidth',
            gridItemsSelector: '.filtr-item',
            gutterPixels: 20,
            spinner: {
                enabled: true
            }
        });

        // Set initial active state
        const allButton = document.querySelector('#project-filter-buttons .btn');
        if (allButton) allButton.classList.add('active');

        // Add click handlers
        document.querySelectorAll('#project-filter-buttons .btn').forEach(button => {
            button.addEventListener('click', () => {
                // Update active state
                document.querySelector('#project-filter-buttons .btn.active')?.classList.remove('active');
                button.classList.add('active');
            });
        });
    } catch (error) {
        console.error('Error initializing Filterizr:', error);
    }
}

function createFilterButtons(categories) {
    const filterContainer = document.getElementById('project-filter-buttons');
    if (!filterContainer) return;

    let buttonsHtml = `
        <button type="button" class="btn btn-dark" data-filter="all">All</button>
    `;
    
    categories.forEach(category => {
        const categoryId = category.toLowerCase().replace(/\s+/g, '-');
        buttonsHtml += `
            <button type="button" class="btn btn-dark" data-filter="${categoryId}">
                ${category}
            </button>
        `;
    });
    
    filterContainer.innerHTML = buttonsHtml;
}

function createProjectCard(project) {
    const filterString = project.categories.map(cat => cat.toLowerCase().replace(/\s+/g, '-')).join(',');
    
    return `
        <div class="filtr-item col-12 col-md-6 col-lg-4 mb-4" 
             data-category="${filterString}">
            <a href="${project.link}" class="post-card-link">
                <div class="card h-100">
                    <div class="card-head">
                        <img class="card-img-top" src="${project.image}" alt="${project.title}"/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text post-summary">${project.summary}</p>
                    </div>
                    <div class="card-footer">
                        <span class="float-left">${project.date}</span>
                        <a href="${project.link}" class="float-right btn btn-outline-info btn-sm">Read</a>
                    </div>
                </div>
            </a>
        </div>
    `;
}

function initializeAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.filtr-item').forEach(item => {
        observer.observe(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    window.initializeProjects();
});