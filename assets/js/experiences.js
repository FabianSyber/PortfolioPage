window.initializeExperiences = function() {
    renderExperiences();
    initializeAnimations();
};

const experiences = [
  {
    title: "Computational design Lead",
    organization: "LINK Arkitektur",
    orgLink: "https://linkarkitektur.se/",
    date: "mar 2021 - present",
    location: "Stockholm",
    description: "Architectural firm in Stockholm with a focus on urbanism, sustainability and computational design.",
    responsibilities: [
      "Leading the computational design team in Stockholm.",
      "Developing tools for early phase design work in Rhino and Grasshopper.",
      "Web development for internal tools and external tools using Speckle.",
      "Developing workflows for data driven design in Rhino and Grasshopper."
    ]
  },
  {
    title: null,
    organization: "Chalmers university of technology",
    orgLink: "https://www.chalmers.se/",
    date: "sep 2018 - Jun 2020",
    location: "Gothenburg",
    description: "Master degree in Architecture and Urban design",
    positions: [
      {
        title: "Student",
        period: "Sep 2018 - Jun 2020",
        responsibilities: [
          "Focus on how digitalization of Architecture will impact the architectural practice and the urban fabric.",
          "Physical fabrication of digital models in both prototype and 1:1 scales.",
          "Discourse on how hard and soft data structures can inform and shape Architecture and urban planning."
        ]
      },
      {
        title: "Teaching assistant",
        period: "sep 2018 - jun 2020",
        responsibilities: [
          "Assistant in courses on parametric tools and 3D-modelling.",
          "Lab assistant on fabrication of digital models with focus on 3D-printing and CNC milling.",
          "Lectures on Rhino and Grasshopper."
        ]
      }
    ]
  },
  {
    title: "Intern architect",
    organization: "PS Arkitektur",
    orgLink: "https://reformark.se/",
    date: "aug 2017 - jun 2018",
    location: "Stockholm",
    description: "Architectural firm focused on interior architecture, now merged with reformark.",
    responsibilities: [
      "Interior architecture with a focus on office design and workplace development.",
      "Villas and smaller housing projects in both early and late design phases.",
      "Inhouse responsible for CAD and IT-systems."
    ]
  },
  {
    title: "Intern architect",
    organization: "Axeloth",
    orgLink: "https://axeloth.se/",
    date: "okt 2016 - aug 2017",
    location: "Stockholm",
    description: "Architectural firm with strong housing focus",
    responsibilities: [
      "Large housing projects in early stages of development.",
      "Graphic design on housing competitions and homepage material.",
      "Developing workflows for rapid prototyping with 3D-printers."
    ]
  },
  {
    title: "Student",
    organization: "Umea school of Architecture",
    orgLink: "http://www.arch.umu.se/",
    date: "sep 2013 - jun 2016",
    location: "Umea",
    description: "Bachelor degree in fine arts and architecture",
    responsibilities: [
      "Contemporary architectural studies on how we inhabit the built environment.",
      "Mapping and studies of the swedish hinterlands downfall.",
      "Studies on informal settlements and urban sprawl in Ahmedabad an Indian megacity."
    ]
  },
  {
    title: "Developer",
    organization: "Vizzit",
    orgLink: "https://www.vizzit.se/",
    date: "apr 2012 - jun 2013",
    location: "Stockholm",
    description: "Website statistics and user-flow analysis company",
    responsibilities: [
      "Back end development for UI and database entries.",
      "Smaller graphical design on UI and website.",
      "Server and customer support."
    ]
  }
];

function renderExperiences() {
    const container = document.getElementById('experiences-timeline');
    if (!container) {
        console.error('Experiences timeline container not found');
        return;
    }

    // Ensure proper encoding when creating HTML content
    const experiencesHTML = experiences.map((exp, index) => `
        <div class="row align-items-center ${index % 2 === 1 ? 'justify-content-end' : ''} d-flex">
            ${index % 2 === 0 ? createNumberCircle(index + 1) : ''}
            
            <div class="col-10 col-lg-8">
                <div class="experience-entry-heading">
                    ${exp.title ? `<h5>${encodeHTML(exp.title)}</h5>` : ''}
                    ${exp.organization ? `<h6><a href="${exp.orgLink}">${encodeHTML(exp.organization)}</a></h6>` : ''}
                    <p class="text-muted">${encodeHTML(exp.date)}, ${encodeHTML(exp.location)}</p>
                </div>
                
                ${exp.description ? `<p>${encodeHTML(exp.description)}</p>` : ''}
                ${exp.positions ? renderPositions(exp.positions) : ''}
                ${exp.responsibilities ? renderResponsibilities(exp.responsibilities) : ''}
            </div>
            
            ${index % 2 === 1 ? createNumberCircle(index + 1, true) : ''}
        </div>
        
        ${index < experiences.length - 1 ? createHorizontalLine(index % 2 === 1) : ''}
    `).join('');

    container.innerHTML = experiencesHTML;
}

// Helper function to safely encode HTML content while preserving UTF-8 characters
function encodeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function renderPositions(positions) {
    return `
        <div class="positions">
            ${positions.map(pos => `
                <h6 class="designation">${pos.title}</h6>
                <p class="text-muted">${pos.period}</p>
                <ul class="justify-content-around">
                    ${pos.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            `).join('')}
        </div>
    `;
}

function renderResponsibilities(responsibilities) {
    return `
        <h6 class="text-muted">Responsibilities:</h6>
        <ul class="justify-content-around">
            ${responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
    `;
}

function createNumberCircle(number, leftAdjustment = false) {
    return `
        <div class="col-1 col-lg-2 text-center vertical-line d-inline-flex justify-content-center${leftAdjustment ? ' vertical-line-left-adjustment' : ''}">
            <div class="circle font-weight-bold">${number}</div>
        </div>
    `;
}

function createHorizontalLine(isRight) {
    return `
        <div class="row horizontal-line">
            <div class="col-1 col-lg-2 timeline-side-div">
                <div class="corner ${isRight ? 'bottom-right' : 'top-right'}"></div>
            </div>
            <div class="col-10 col-lg-8">
                <hr>
            </div>
            <div class="col-1 col-lg-2 timeline-side-div">
                <div class="corner ${isRight ? 'top-left' : 'bottom-left'}"></div>
            </div>
        </div>
    `;
}

function initializeAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.experience-entry-heading').forEach(item => {
        observer.observe(item);
    });
}