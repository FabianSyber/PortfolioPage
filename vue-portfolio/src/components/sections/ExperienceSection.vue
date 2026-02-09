<template>
  <section id="experience" class="section-container">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-primary-500">
            Experience & Education
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          My professional journey through architecture, technology, and innovation.
        </p>
        <div class="w-24 h-2 bg-primary-500 mx-auto"></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 hidden md:block"></div>

        <!-- Timeline Items -->
        <div class="space-y-12">
          <div 
            v-for="(item, index) in timelineItems" 
            :key="item.id"
            class="relative"
          >
            <!-- Timeline Item -->
            <div 
              :class="[
                'flex flex-col md:flex-row items-center',
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              ]"
            >
              <!-- Date -->
              <div 
                :class="[
                  'w-full md:w-2/5 mb-4 md:mb-0',
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                ]"
              >
                <div class="inline-block px-4 py-2 bg-primary-500">
                  <span class="font-bold text-white">{{ item.date }}</span>
                </div>
              </div>

              <!-- Content Card -->
              <div class="w-full md:w-3/5">
                <div 
                  class="card-style"
                  @mouseenter="hoveredItem = item.id"
                  @mouseleave="hoveredItem = null"
                >
                  <div class="flex items-start justify-between mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ item.title }}</h3>
                      <div class="flex items-center text-gray-600 mb-3">
                        <i class="fas fa-building mr-2"></i>
                        <span class="font-medium">{{ item.organization }}</span>
                        <span class="mx-2">•</span>
                        <i class="fas fa-map-marker-alt mr-2"></i>
                        <span>{{ item.location }}</span>
                      </div>
                    </div>
                    <div 
                      class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      :style="{ backgroundColor: item.color + '20' }"
                    >
                      <i :class="[item.icon, 'text-xl']" :style="{ color: item.color }"></i>
                    </div>
                  </div>

                  <p class="text-gray-600 mb-6">{{ item.description }}</p>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span 
                      v-for="tag in item.tags" 
                      :key="tag"
                      class="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <!-- Expandable Details -->
                  <div v-if="item.details && expandedItem === item.id" class="mt-4 pt-4 border-t border-gray-200 animate-scale-up">
                    <div class="space-y-4">
                      <div v-if="item.responsibilities">
                        <h4 class="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                        <ul class="space-y-2">
                          <li 
                            v-for="resp in item.responsibilities" 
                            :key="resp"
                            class="flex items-start text-gray-600"
                          >
                            <i class="fas fa-check-circle text-success-500 mr-2 mt-1"></i>
                            <span>{{ resp }}</span>
                          </li>
                        </ul>
                      </div>

                      <div v-if="item.achievements">
                        <h4 class="font-semibold text-gray-800 mb-2">Achievements:</h4>
                        <ul class="space-y-2">
                          <li 
                            v-for="achievement in item.achievements" 
                            :key="achievement"
                            class="flex items-start text-gray-600"
                          >
                            <i class="fas fa-trophy text-accent-500 mr-2 mt-1"></i>
                            <span>{{ achievement }}</span>
                          </li>
                        </ul>
                      </div>

                      <div v-if="item.technologies" class="pt-2">
                        <h4 class="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                        <div class="flex flex-wrap gap-2">
                          <span 
                            v-for="tech in item.technologies" 
                            :key="tech"
                            class="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-sm font-medium rounded-full"
                          >
                            {{ tech }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Expand/Collapse Button -->
                  <BaseButton
                    variant="primary"
                    v-if="item.details"
                    @click="toggleExpand(item.id)"
                    class="w-full mt-4 py-3 rounded-xl border-2 border-gray-200 hover:border-primary-300 text-gray-600 hover:text-primary-600 font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    {{ expandedItem === item.id ? 'Show Less' : 'Learn More' }}
                    <i :class="[
                      'fas ml-2 transition-transform duration-300',
                      expandedItem === item.id ? 'fa-chevron-up' : 'fa-chevron-down'
                    ]"></i>
                  </BaseButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Current Focus -->
      <div class="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-6 md:mb-0 md:mr-8">
            <h3 class="text-2xl font-bold mb-4">Current Focus</h3>
            <p class="text-primary-100 mb-4">
              Exploring the intersection of AI and architecture, developing tools that enhance creative workflows and enable new forms of design expression.
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Generative Design</span>
              <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">AI-Assisted Architecture</span>
              <span class="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Digital Fabrication</span>
            </div>
          </div>
          <div class="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
            <i class="fas fa-bolt text-5xl text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

const expandedItem = ref<string | null>(null)
const hoveredItem = ref<string | null>(null)

const timelineItems = [
  {
    id: 'current',
    title: 'Digital Architecture Researcher',
    organization: 'Independent Research',
    location: 'Remote',
    date: '2023 - Present',
    description: 'Researching and developing digital tools that bridge architecture with emerging technologies.',
    color: '#4F46E5',
    icon: 'fas fa-flask',
    tags: ['Research', 'Development', 'Innovation'],
    details: true,
    responsibilities: [
      'Developing AI-powered architectural design tools',
      'Conducting research on digital fabrication methods',
      'Creating parametric design systems',
      'Publishing findings in architectural journals'
    ],
    achievements: [
      'Developed SpecklCA cellular automata system',
      'Created augmented reality visualization tools',
      'Published research on AI in architecture',
      'Built open-source tools for architects'
    ],
    technologies: ['Python', 'TensorFlow', 'Unity', 'Rhino/Grasshopper']
  },
  {
    id: 'project1',
    title: 'Architectural Designer',
    organization: 'Innovate Architects',
    location: 'Stockholm, Sweden',
    date: '2021 - 2023',
    description: 'Led digital design initiatives and implemented parametric design workflows.',
    color: '#EC4899',
    icon: 'fas fa-building',
    tags: ['Architecture', 'Design', 'Leadership'],
    details: true,
    responsibilities: [
      'Led digital transformation initiatives',
      'Implemented parametric design workflows',
      'Managed client presentations using AR/VR',
      'Trained team members on digital tools'
    ],
    achievements: [
      'Reduced design iteration time by 40%',
      'Won design competition for sustainable housing',
      'Implemented BIM standards across projects',
      'Developed custom design automation tools'
    ],
    technologies: ['Revit', 'Rhino', 'Python', 'VR/AR']
  },
  {
    id: 'education',
    title: 'M.Sc. in Architecture',
    organization: 'Royal Institute of Technology',
    location: 'Stockholm, Sweden',
    date: '2018 - 2021',
    description: 'Specialized in digital design and computational methods in architecture.',
    color: '#10B981',
    icon: 'fas fa-graduation-cap',
    tags: ['Education', 'Research', 'Thesis'],
    details: true,
    responsibilities: [
      'Conducted research on computational design',
      'Developed thesis on algorithmic architecture',
      'Participated in design workshops and seminars',
      'Collaborated on interdisciplinary projects'
    ],
    achievements: [
      'Graduated with honors',
      'Published thesis on parametric design',
      'Won academic design competition',
      'Developed open-source design tools'
    ],
    technologies: ['Computational Design', 'Research', 'Academic Writing']
  },
  {
    id: 'internship',
    title: 'Architectural Intern',
    organization: 'Design Futures Studio',
    location: 'Gothenburg, Sweden',
    date: '2017 - 2018',
    description: 'Gained hands-on experience in architectural practice and digital tool development.',
    color: '#F59E0B',
    icon: 'fas fa-hammer',
    tags: ['Internship', 'Learning', 'Practice'],
    details: true,
    responsibilities: [
      'Assisted in design development',
      'Created 3D models and visualizations',
      'Participated in client meetings',
      'Supported digital tool implementation'
    ],
    achievements: [
      'Developed first architectural software plugin',
      'Improved office design workflow efficiency',
      'Created training materials for digital tools',
      'Contributed to competition-winning design'
    ],
    technologies: ['AutoCAD', 'SketchUp', '3D Modeling', 'Design']
  }
]

const toggleExpand = (itemId: string) => {
  expandedItem.value = expandedItem.value === itemId ? null : itemId
}
</script>

<style scoped>
/* Custom timeline animations */
.timeline-item-enter-active,
.timeline-item-leave-active {
  transition: all 0.5s ease;
}

.timeline-item-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.timeline-item-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>