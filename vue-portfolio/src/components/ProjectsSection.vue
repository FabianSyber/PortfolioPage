<template>
  <section id="projects" class="section-container bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore my architectural and digital projects that blend design, technology, and innovation.
        </p>
        <div class="w-24 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>

      <!-- Project Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="activeCategory = category.id"
          :class="[
            'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1',
            activeCategory === category.id 
              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
          ]"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="group"
        >
          <div 
            class="bg-white rounded-3xl overflow-hidden shadow-xl card-hover h-full flex flex-col"
            @mouseenter="hoveredProject = project.id"
            @mouseleave="hoveredProject = null"
          >
            <!-- Project Image/Color Block -->
            <div 
              class="h-48 relative overflow-hidden"
              :style="{ backgroundColor: project.color }"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-6xl font-bold text-white/20">
                  {{ project.icon }}
                </div>
              </div>
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/30">
                  {{ project.category }}
                </span>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6 flex-grow">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-bold text-gray-800">{{ project.title }}</h3>
                <button 
                  @click="toggleExpand(project.id)"
                  class="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                >
                  <i :class="[
                    'fas text-lg transition-transform duration-300',
                    expandedProject === project.id ? 'fa-chevron-up rotate-180' : 'fa-chevron-down'
                  ]"></i>
                </button>
              </div>

              <p class="text-gray-600 mb-4">{{ project.shortDescription }}</p>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.technologies.length > 3"
                  class="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <!-- Expanded Content -->
              <div 
                v-if="expandedProject === project.id"
                class="mt-4 pt-4 border-t border-gray-200 animate-scale-up"
              >
                <p class="text-gray-600 mb-4">{{ project.fullDescription }}</p>
                
                <div class="space-y-3">
                  <div v-if="project.features">
                    <h4 class="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul class="space-y-1">
                      <li 
                        v-for="feature in project.features" 
                        :key="feature"
                        class="flex items-start text-gray-600"
                      >
                        <i class="fas fa-check text-success-500 mr-2 mt-1"></i>
                        <span>{{ feature }}</span>
                      </li>
                    </ul>
                  </div>

                  <div class="flex gap-3 pt-4">
                    <a 
                      v-if="project.demoLink"
                      :href="project.demoLink"
                      target="_blank"
                      class="flex-1 btn-primary text-center py-2"
                    >
                      <i class="fas fa-external-link-alt mr-2"></i>
                      Live Demo
                    </a>
                    <a 
                      v-if="project.githubLink"
                      :href="project.githubLink"
                      target="_blank"
                      class="flex-1 btn-secondary text-center py-2"
                    >
                      <i class="fab fa-github mr-2"></i>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Footer -->
            <div class="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ project.year }}</span>
                <button 
                  @click="toggleExpand(project.id)"
                  class="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  {{ expandedProject === project.id ? 'Show Less' : 'Learn More' }}
                  <i :class="[
                    'fas ml-2 transition-transform duration-300',
                    expandedProject === project.id ? 'fa-chevron-up' : 'fa-chevron-down'
                  ]"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <button class="btn-primary px-8 py-4 text-lg">
          <i class="fas fa-th-large mr-2"></i>
          View All Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('all')
const expandedProject = ref<string | null>(null)
const hoveredProject = ref<string | null>(null)

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'digital', label: 'Digital Tools' },
  { id: 'research', label: 'Research' },
  { id: 'personal', label: 'Personal' },
]

const projects = [
  {
    id: 'specklca',
    title: 'SpecklCA',
    category: 'architecture',
    shortDescription: 'Cellular automata system for architectural pattern generation.',
    fullDescription: 'A sophisticated cellular automata system designed specifically for architectural pattern generation and urban planning simulations. This tool enables architects to explore complex emergent behaviors in design.',
    year: '2023',
    color: '#4F46E5',
    icon: 'S',
    technologies: ['Python', 'Cellular Automata', 'Architectural Design', 'Simulation'],
    features: [
      'Real-time pattern generation',
      'Custom rule sets for architectural constraints',
      'Export to CAD formats',
      'Multi-scale simulation capabilities'
    ],
    demoLink: 'https://example.com/specklca',
    githubLink: 'https://github.com/fabiansyber/specklca'
  },
  {
    id: 'augmentedarchitect',
    title: 'Augmented Architect',
    category: 'digital',
    shortDescription: 'AR tool for architectural visualization and client presentations.',
    fullDescription: 'An augmented reality application that allows architects to visualize and present designs in real-world contexts, enhancing client understanding and engagement.',
    year: '2023',
    color: '#EC4899',
    icon: 'A',
    technologies: ['Unity', 'ARCore', 'C#', '3D Modeling'],
    features: [
      'Real-time AR visualization',
      'Multi-user collaboration',
      'Design annotation system',
      'Client presentation mode'
    ],
    demoLink: 'https://example.com/augmented-architect',
    githubLink: 'https://github.com/fabiansyber/augmented-architect'
  },
  {
    id: 'deeparch',
    title: 'DeepArch',
    category: 'research',
    shortDescription: 'AI-powered architectural style analysis and generation.',
    fullDescription: 'Research project exploring the use of deep learning for architectural style analysis, classification, and generative design assistance.',
    year: '2022',
    color: '#10B981',
    icon: 'D',
    technologies: ['TensorFlow', 'Python', 'Computer Vision', 'Generative AI'],
    features: [
      'Style classification from images',
      'Generative design suggestions',
      'Historical style analysis',
      'Custom training datasets'
    ],
    demoLink: 'https://example.com/deeparch',
    githubLink: 'https://github.com/fabiansyber/deeparch'
  },
  {
    id: 'refab',
    title: 'ReFab',
    category: 'architecture',
    shortDescription: 'Sustainable architecture using recycled materials.',
    fullDescription: 'A project focused on sustainable architecture using recycled and upcycled materials, with digital tools for material optimization and structural analysis.',
    year: '2022',
    color: '#F59E0B',
    icon: 'R',
    technologies: ['Sustainability', 'Material Science', 'Structural Analysis', '3D Printing'],
    features: [
      'Material optimization algorithms',
      'Structural integrity analysis',
      'Cost-benefit calculations',
      'Environmental impact assessment'
    ]
  },
  {
    id: 'frankie',
    title: 'Frankie Framework',
    category: 'digital',
    shortDescription: 'Framework for parametric architectural design.',
    fullDescription: 'A comprehensive framework for parametric architectural design that integrates with existing CAD software to provide advanced algorithmic design capabilities.',
    year: '2021',
    color: '#8B5CF6',
    icon: 'F',
    technologies: ['Python', 'Rhino/Grasshopper', 'Parametric Design', 'API Development'],
    features: [
      'Plugin architecture for CAD software',
      'Visual programming interface',
      'Library of parametric components',
      'Real-time design feedback'
    ],
    githubLink: 'https://github.com/fabiansyber/frankie'
  },
  {
    id: 'hammarkullen',
    title: 'Hammarkullen',
    category: 'architecture',
    shortDescription: 'Community center design with participatory approach.',
    fullDescription: 'A community center design project that employed participatory design methods, engaging local residents in the design process through workshops and digital tools.',
    year: '2021',
    color: '#3B82F6',
    icon: 'H',
    technologies: ['Participatory Design', 'Community Engagement', '3D Visualization', 'Workshop Facilitation'],
    features: [
      'Community feedback integration',
      'Interactive 3D models for public consultation',
      'Accessibility-focused design',
      'Sustainable building systems'
    ]
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const toggleExpand = (projectId: string) => {
  expandedProject.value = expandedProject.value === projectId ? null : projectId
}
</script>

<style scoped>
/* Custom transition for expand/collapse */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>