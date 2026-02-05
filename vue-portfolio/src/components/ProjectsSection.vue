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
                  @click="openProjectModal(project.id)"
                  class="text-gray-400 hover:text-primary-600 transition-colors duration-300"
                >
                  <i class="fas fa-expand text-lg"></i>
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

              <!-- Key Features (Always visible in small card) -->
              <div class="mt-4">
                <h4 class="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                <ul class="space-y-1">
                  <li 
                    v-for="feature in project.features.slice(0, 3)" 
                    :key="feature"
                    class="flex items-start text-gray-600 text-sm"
                  >
                    <i class="fas fa-check text-success-500 mr-2 mt-0.5 text-xs"></i>
                    <span class="truncate">{{ feature }}</span>
                  </li>
                  <li v-if="project.features.length > 3" class="text-gray-500 text-xs pl-5">
                    +{{ project.features.length - 3 }} more features
                  </li>
                </ul>
              </div>
            </div>

            <!-- Project Footer -->
            <div class="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ project.year }}</span>
                <button 
                  @click="openProjectModal(project.id)"
                  class="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  View Details
                  <i class="fas fa-arrow-right ml-2"></i>
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

    <!-- Full Screen Project Modal -->
    <div 
      v-if="selectedProject"
      class="fixed inset-0 z-50 overflow-hidden bg-black/95 backdrop-blur-sm"
      @click.self="closeProjectModal"
    >
      <div class="absolute inset-0 overflow-y-auto">
        <!-- Close Button -->
        <button 
          @click="closeProjectModal"
          class="fixed top-6 right-6 z-50 text-white hover:text-gray-300 transition-colors duration-300"
        >
          <i class="fas fa-times text-3xl"></i>
        </button>

        <!-- Modal Content -->
        <div class="min-h-screen">
          <!-- Scrolling Image Header -->
          <div class="sticky top-0 z-40 bg-gradient-to-b from-black/80 to-transparent">
            <div class="overflow-x-auto scrollbar-hide">
              <div class="flex space-x-4 p-4">
                <div 
                  v-for="(img, index) in projectImages" 
                  :key="index"
                  class="flex-shrink-0"
                >
                  <img 
                    :src="img" 
                    :alt="`${selectedProject.title} image ${index + 1}`"
                    class="h-48 w-auto rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                    @click="setActiveImage(index)"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="container mx-auto px-4 py-8 max-w-6xl">
            <!-- Project Header -->
            <div class="mb-8">
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                {{ selectedProject.title }}
              </h1>
              <div class="flex flex-wrap items-center gap-4">
                <span class="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
                  {{ selectedProject.category }}
                </span>
                <span class="text-gray-300">{{ selectedProject.year }}</span>
                <div class="flex gap-2">
                  <a 
                    v-if="selectedProject.demoLink"
                    :href="selectedProject.demoLink"
                    target="_blank"
                    class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <i class="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                  <a 
                    v-if="selectedProject.githubLink"
                    :href="selectedProject.githubLink"
                    target="_blank"
                    class="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300"
                  >
                    <i class="fab fa-github mr-2"></i>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <!-- Project Content -->
            <div class="grid lg:grid-cols-3 gap-8">
              <!-- Main Content Column -->
              <div class="lg:col-span-2">
                <!-- Full Description -->
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <h2 class="text-2xl font-bold text-white mb-4">Project Overview</h2>
                  <p class="text-gray-300 leading-relaxed">
                    {{ selectedProject.fullDescription }}
                  </p>
                </div>

                <!-- Post Content (if available) -->
                <div 
                  v-if="postContent"
                  class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8"
                >
                  <div class="prose prose-invert max-w-none" v-html="postContent"></div>
                </div>

                <!-- Key Features -->
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <h2 class="text-2xl font-bold text-white mb-4">Key Features</h2>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div 
                      v-for="feature in selectedProject.features" 
                      :key="feature"
                      class="flex items-start p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                    >
                      <i class="fas fa-check text-success-400 mr-3 mt-1"></i>
                      <span class="text-gray-300">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sidebar Column -->
              <div class="space-y-6">
                <!-- Technologies -->
                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <h3 class="text-xl font-bold text-white mb-4">Technologies</h3>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tech in selectedProject.technologies" 
                      :key="tech"
                      class="px-3 py-2 bg-white/10 text-gray-300 rounded-lg text-sm"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Active Image Preview -->
                <div 
                  v-if="activeImage"
                  class="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
                >
                  <h3 class="text-xl font-bold text-white mb-4">Image Preview</h3>
                  <img 
                    :src="activeImage" 
                    :alt="`${selectedProject.title} preview`"
                    class="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('all')
const hoveredProject = ref<string | null>(null)
const selectedProject = ref<any>(null)
const projectImages = ref<string[]>([])
const activeImage = ref<string>('')
const postContent = ref<string>('')

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

const openProjectModal = async (projectId: string) => {
  const project = projects.find(p => p.id === projectId)
  if (!project) return
  
  selectedProject.value = project
  activeImage.value = ''
  postContent.value = ''
  
  // Load images for this project
  await loadProjectImages(project.id)
  
  // Load post content if available
  await loadPostContent(project.id)
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  projectImages.value = []
  activeImage.value = ''
  postContent.value = ''
  
  // Restore body scroll
  document.body.style.overflow = ''
}

const setActiveImage = (index: number) => {
  if (projectImages.value[index]) {
    activeImage.value = projectImages.value[index]
  }
}

const loadProjectImages = async (projectId: string) => {
  // Map project IDs to image directories
  const imageDirs: Record<string, string> = {
    specklca: 'specklca',
    augmentedarchitect: 'augmentedarchitect',
    deeparch: 'deeparch',
    refab: 'ReFab',
    frankie: 'frankie',
    hammarkullen: 'hammarkullen'
  }
  
  const imageDir = imageDirs[projectId]
  if (!imageDir) {
    // Fallback to placeholder images if no directory found
    const placeholderImages = [
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    ]
    projectImages.value = placeholderImages
    if (placeholderImages.length > 0) {
      activeImage.value = placeholderImages[0]
    }
    return
  }
  
  // In a real implementation, you would load images from your server
  // For now, we'll use a sample of images from the directory
  const sampleImages = [
    `/images/${imageDir}/a.png`,
    `/images/${imageDir}/b.png`,
    `/images/${imageDir}/c.png`,
    `/images/${imageDir}/d.png`
  ].filter(img => {
    // Check if image exists (in real implementation, this would be a server call)
    return true // Assume they exist for demonstration
  })
  
  // Use actual images if available, otherwise use placeholders
  if (sampleImages.length > 0) {
    projectImages.value = sampleImages
    activeImage.value = sampleImages[0]
  } else {
    const placeholderImages = [
      'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    ]
    projectImages.value = placeholderImages
    if (placeholderImages.length > 0) {
      activeImage.value = placeholderImages[0]
    }
  }
}

const loadPostContent = async (projectId: string) => {
  // Map project IDs to post directories
  const postDirs: Record<string, string> = {
    specklca: 'specklca',
    augmentedarchitect: 'augmentedarchitect',
    deeparch: 'deeparch',
    refab: 'refab',
    frankie: 'frankie',
    hammarkullen: 'hammarkullen'
  }
  
  const postDir = postDirs[projectId]
  if (!postDir) {
    postContent.value = ''
    return
  }
  
  // In a real implementation, you would fetch the HTML content from your server
  // For demonstration, we'll show a message that post content is available
  postContent.value = `
    <div class="space-y-4">
      <h3 class="text-xl font-bold text-white">Project Documentation</h3>
      <p class="text-gray-300">
        Detailed project documentation is available in the posts directory.
        This would include project specifications, design process, technical details,
        and implementation notes.
      </p>
      <div class="bg-white/10 p-4 rounded-lg">
        <p class="text-gray-300 text-sm">
          <strong>Post location:</strong> /posts/${postDir}/index.html
        </p>
        <p class="text-gray-300 text-sm mt-2">
          In a production environment, this content would be loaded dynamically
          from the corresponding HTML file in the posts folder.
        </p>
      </div>
    </div>
  `
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