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
                        <ul class="space-y-1 list-none">
                          <li
                            v-for="resp in item.responsibilities"
                            :key="resp"
                            class="flex items-start gap-2 text-gray-600"
                          >
                            <span class="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>
                            <span>{{ resp }}</span>
                          </li>
                        </ul>
                      </div>

                      <div v-if="item.achievements">
                        <h4 class="font-semibold text-gray-800 mb-2">Achievements:</h4>
                        <ul class="space-y-1 list-none">
                          <li
                            v-for="achievement in item.achievements"
                            :key="achievement"
                            class="flex items-start gap-2 text-gray-600"
                          >
                            <span class="mt-2 w-1.5 h-1.5 rounded-full bg-secondary-500 shrink-0"></span>
                            <span>{{ achievement }}</span>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>

                  <!-- Expand/Collapse Button -->
                  <div v-if="item.details" class="mt-4">
                    <BaseButton variant="primary" :active="expandedItem === item.id" @click="toggleExpand(item.id)">
                      {{ expandedItem === item.id ? 'Show Less' : 'Learn More' }}
                      <i :class="['fas ml-2', expandedItem === item.id ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
                    </BaseButton>
                  </div>
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
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

interface TimelineItem {
  id: string
  title: string
  organization: string
  location: string
  date: string
  description: string
  color: string
  icon: string
  tags: string[]
  details: boolean
  responsibilities?: string[]
  achievements?: string[]
  technologies?: string[]
}

const expandedItem = ref<string | null>(null)
const hoveredItem = ref<string | null>(null)

const timelineItems: TimelineItem[] = [
  {
    id: 'link',
    title: 'Computational Design Lead',
    organization: 'LINK Arkitektur',
    location: 'Stockholm',
    date: 'Mar 2021 – Present',
    description: 'Architectural firm in Stockholm with a focus on urbanism, sustainability and computational design.',
    color: '#4F46E5',
    icon: 'fas fa-building',
    tags: ['Computational Design', 'Leadership', 'Web Development'],
    details: true,
    responsibilities: [
      'Leading the computational design team in Stockholm.',
      'Developing tools for early phase design work in Rhino and Grasshopper.',
      'Web development for internal tools and external tools using Speckle.',
      'Developing workflows for data driven design in Rhino and Grasshopper.',
      'Sustainability focus with Life Cycle Assessment (LCA) integrated into early design workflows.'
    ]
  },
  {
    id: 'chalmers',
    title: 'M.Sc. Architecture & Urban Design',
    organization: 'Chalmers University of Technology',
    location: 'Gothenburg',
    date: 'Sep 2018 – Jun 2020',
    description: 'Master degree with focus on how digitalisation of Architecture impacts architectural practice and the urban fabric. Also served as teaching assistant in parametric design courses.',
    color: '#10B981',
    icon: 'fas fa-graduation-cap',
    tags: ['Education', 'Parametric Design', 'Teaching'],
    details: true,
    responsibilities: [
      'Focus on how digitalisation of Architecture will impact the architectural practice and the urban fabric.',
      'Physical fabrication of digital models in both prototype and 1:1 scales.',
      'Discourse on how hard and soft data structures can inform and shape Architecture and urban planning.',
      'Assistant in courses on parametric tools and 3D-modelling.',
      'Lab assistant on fabrication of digital models with focus on 3D-printing and CNC milling.',
      'Lectures on Rhino and Grasshopper.'
    ],
    technologies: ['Rhino', 'Grasshopper', '3D Printing', 'CNC Milling']
  },
  {
    id: 'ps-arkitektur',
    title: 'Intern Architect',
    organization: 'PS Arkitektur',
    location: 'Stockholm',
    date: 'Aug 2017 – Jun 2018',
    description: 'Architectural firm focused on interior architecture, now merged with Reformark.',
    color: '#EC4899',
    icon: 'fas fa-building',
    tags: ['Interior Architecture', 'Office Design', 'CAD'],
    details: true,
    responsibilities: [
      'Interior architecture with a focus on office design and workplace development.',
      'Villas and smaller housing projects in both early and late design phases.',
      'Inhouse responsible for CAD and IT-systems.'
    ],
    technologies: ['AutoCAD', 'Revit', 'Interior Design']
  },
  {
    id: 'axeloth',
    title: 'Intern Architect',
    organization: 'Axeloth',
    location: 'Stockholm',
    date: 'Okt 2016 – Aug 2017',
    description: 'Architectural firm with a strong housing focus.',
    color: '#F59E0B',
    icon: 'fas fa-building',
    tags: ['Housing', 'Graphic Design', 'Prototyping'],
    details: true,
    responsibilities: [
      'Large housing projects in early stages of development.',
      'Graphic design on housing competitions and homepage material.',
      'Developing workflows for rapid prototyping with 3D-printers.'
    ],
    technologies: ['Rhino', '3D Printing', 'Graphic Design']
  },
  {
    id: 'umea',
    title: 'B.A. Fine Arts & Architecture',
    organization: 'Umeå School of Architecture',
    location: 'Umeå',
    date: 'Sep 2013 – Jun 2016',
    description: 'Bachelor degree in fine arts and architecture.',
    color: '#10B981',
    icon: 'fas fa-graduation-cap',
    tags: ['Education', 'Urban Studies', 'Research'],
    details: true,
    responsibilities: [
      'Contemporary architectural studies on how we inhabit the built environment.',
      'Mapping and studies of the Swedish hinterlands downfall.',
      'Studies on informal settlements and urban sprawl in Ahmedabad, an Indian megacity.'
    ],
    technologies: ['Architecture', 'Urban Research', 'Model Making']
  },
  {
    id: 'vizzit',
    title: 'Developer',
    organization: 'Vizzit',
    location: 'Stockholm',
    date: 'Apr 2012 – Jun 2013',
    description: 'Website statistics and user-flow analysis company.',
    color: '#0ea5e9',
    icon: 'fas fa-code',
    tags: ['Back-end', 'UI Design', 'Support'],
    details: true,
    responsibilities: [
      'Back end development for UI and database entries.',
      'Smaller graphical design on UI and website.',
      'Server and customer support.'
    ],
    technologies: ['Back-end Development', 'UI Design', 'Databases']
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