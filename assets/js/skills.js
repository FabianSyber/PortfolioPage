window.initializeSkills = function() {
  const skillsContainer = document.getElementById('primary-skills');
  if (skillsContainer) {
      skillsContainer.innerHTML = skills.map(skill => createSkillCard(skill)).join('');
      initializeAnimations();
  }
};

const skills = [
  {
    title: "C#",
    image: "csharp.png",
    description: "Good understanding of C# and making executables and plugins mainly for Rhino and Grasshopper."
  },
  {
    title: "Typescript",
    image: "ts.png",
    description: "Great understanding of Typescript and making webbased applications both as dynamic and static pages."
  },
  {
    title: "Vue",
    image: "vue.png",
    description: "Vue is my main frontend framework and I have used it for many years especially combined with pinia."
  },
  {
    title: "Rhino",
    image: "rhino.jpg",
    description: "Rhino is the main 3D-modeling software I have used in my professional work. I have a good understanding of the software and its SDK and have used it for many years."
  },
  {
    title: "Grasshopper",
    image: "grasshopper.png",
    description: "Grasshopper is something I have worked with and developed scripts for under a long period of time. I have a good understanding of the software and its SDK."
  },
  {
    title: "Revit/Autocad",
    image: "revit.png",
    description: "Cabable of managing and producing larger prjects in Revit and Autocad, good understanding of its intricacies."
  },
  {
    title: "Adobe Suite",
    image: "ps.png",
    description: "I have used the Adobe Suite for many years and have a good understanding of Photoshop, Illustrator and Indesign."
  },
  {
    title: "Python",
    image: "python.png",
    description: "Good understanding of Python and its Machine learning libraries such as tensorflow but also in connection to BIM software."
  },
  {
    title: "Figma",
    image: "figma.png",
    description: "Figma is my main sketching tool for UI and UX design and I have a good understanding of it."
  },
];


// Function to create a skill card
function createSkillCard(skill) {
  return `
    <div class="col-sm-12 col-md-6 col-lg-4 pt-2">
      <div class="card">
        <div class="card-head d-flex">
          ${skill.image ? `
            <img class="card-img-xs" src="/assets/images/${skill.image}" alt="${skill.title}" />
          ` : ''}
          <h5 class="card-title">${skill.title}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">${skill.description}</p>
        </div>
      </div>
    </div>
  `;
}

// Function to render all skills
function renderSkills() {
  const skillsContainer = document.getElementById('primary-skills');
  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(skill => createSkillCard(skill)).join('');
  }
}

// Animation observer for skill cards
function initializeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  initializeAnimations();
});