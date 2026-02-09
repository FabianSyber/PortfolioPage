<template>
  <section id="projects" class="section-container">
    <div class="mx-auto z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-primary-500">
            Projects
          </span>
        </h2>
        <div class="w-24 h-2 bg-primary-500 mx-auto"></div>
      </div>

      <!-- Project Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-6 py-3 rounded-full font-medium',
            activeCategory === category 
              ? 'bg-primary-500 text-white' 
              : 'bg-white text-gray-700 hover:border-primary-500 border-2 border-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="group card-style"
        >
        
          <!-- Banner / Images -->
          <div class="h-48 relative overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <img :src="project.images[0]" alt="" class="w-full h-full object-cover card-style"/>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold text-gray-800">{{ project.meta.title }}</h3>
              <button @click="toggleExpand(project.id)" class="text-gray-400 hover:text-primary-600">
                <i :class="expandedProject === project.id ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
              </button>
            </div>

            <!-- Short description (first paragraph) -->
            <div v-if="expandedProject !== project.id" class="text-gray-600 mb-4">
              <p v-html="marked(project.markdown.split('\n')[2])"></p>
            </div>

            <!-- Expanded Markdown content -->
            <div v-if="expandedProject === project.id" class="mt-4 pt-4 border-t border-gray-200">
              <div v-html="marked(project.markdown)"></div>
            </div>
          </div>

          <!-- Footer / Metadata -->
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
            <div class="flex justify-between items-center">
              <span>{{ project.meta.year }}</span>
              <span>{{ project.meta.location }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <BaseButton variant="primary" @click="clearFilters">
          <i class="fas fa-th-large mr-2"></i>
          View All Projects
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { loadProjects, Project } from '../../utils/projectLoader'
import { marked } from 'marked'
import BaseButton from '../ui/BaseButton.vue'

const projects = ref<Project[]>([])
const activeCategory = ref('all')
const expandedProject = ref<string | null>(null)

onMounted(async () => {
  projects.value = await loadProjects()
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects.value
  return projects.value.filter(p => p.meta.categories.includes(activeCategory.value))
})

const categories = computed(() => {
  const allCategories: string[] = []
  console.log(projects)
  projects.value.forEach((project: Project) => {
    project.meta.categories.forEach((category: string) => {
      allCategories.push(category)
    })
  })

  return Array.from(new Set(allCategories))
})

const clearFilters = () => {
  activeCategory.value = 'all'
}

const toggleExpand = (projectId: string) => {
  expandedProject.value = expandedProject.value === projectId ? null : projectId
}
</script>