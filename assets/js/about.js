window.initializeAbout = function() {
    renderSkillCircles();
    initializeAnimations();
};

const skillCircles = [
    { name: "3D Modelling", color: "#A0D5B9" },
    { name: "Spatial planning", color: "#C0DD9E" },
    { name: "Digital fabrication", color: "#9BCE8F" },
    { name: "Parametric design", color: "#50BD8E" },
    { name: "Coding", color: "#2FA94A" },
    { name: "Web Design", color: "#64B34E" }
];

function renderSkillCircles() {
    const container = document.querySelector('.about-skills');
    if (!container) {
        console.error('About skills container not found');
        return;
    }

    const skillsHTML = skillCircles.map(skill => `
        <div class="col-6 col-lg-4 p-2">
            <div class="circular-progress">
                <div class="circular-progress-inner">
                    <div class="circular-progress-circle">
                        <div class="circular-progress-bar"
                             style="transform: rotate(${skill.percentage * 3.6}deg); 
                                    border-color: ${skill.color};">
                        </div>
                    </div>
                    <div class="circular-progress-value">
                        <span>${skill.name}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = skillsHTML;
}

function initializeAnimations() {
  console.log('Setting up animations...');
  const observer = new IntersectionObserver(
      (entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
                  observer.unobserve(entry.target);
              }
          });
      },
      { threshold: 0.1 }
  );

  // Observe each circular progress element
  document.querySelectorAll('.circular-progress').forEach(circle => {
      observer.observe(circle);
  });
}