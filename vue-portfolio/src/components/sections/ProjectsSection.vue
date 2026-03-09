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
      <TransitionGroup
        name="card"
        tag="div"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
      >
        <div
          v-for="item in displayItems"
          :key="item.type === 'spacer' ? item.id : item.project.id"
          :class="[
            item.type === 'spacer'
              ? 'invisible pointer-events-none'
              : ['group card-style overflow-hidden', expandedProject === item.project.id ? 'col-span-full' : '']
          ]"
        >
          <template v-if="item.type === 'project'">
            <!-- Collapsed layout -->
            <template v-if="expandedProject !== item.project.id">
              <div class="h-48 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <img :src="item.project.images[0]" alt="" class="w-full h-full object-cover card-style"/>
                </div>
              </div>

              <div class="p-6 flex-grow">
                <div class="flex justify-between items-start mb-4">
                  <h3 class="text-xl font-bold text-gray-800">{{ item.project.meta.title }}</h3>
                  <button @click="toggleExpand(item.project.id)" class="text-gray-400 hover:text-primary-600">
                    <i class="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div class="text-gray-600 mb-4">
                  <p v-html="marked(item.project.markdown.split('\n')[2])"></p>
                </div>
              </div>

              <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
                <div class="flex justify-between items-center">
                  <span>{{ item.project.meta.year }}</span>
                  <span>{{ item.project.meta.location }}</span>
                </div>
              </div>
            </template>

            <!-- Expanded layout: full-width side-by-side -->
            <template v-else>
              <div class="flex flex-col md:flex-row">
                <!-- Left: image slider -->
                <div class="md:w-1/3 shrink-0 h-64 md:h-auto relative overflow-hidden bg-gray-100 select-none">
                  <!-- Images -->
                  <transition :name="sliderDirection" mode="out-in">
                    <img
                      :key="sliderIndexes[item.project.id] ?? 0"
                      :src="item.project.images[sliderIndexes[item.project.id] ?? 0]"
                      alt=""
                      :class="['w-full h-full object-cover cursor-zoom-in', isPng(item.project.images[sliderIndexes[item.project.id] ?? 0]) ? 'bg-gray-100' : '']"
                      @click.stop="openLightbox(item.project)"
                    />
                  </transition>

                  <!-- Prev / Next arrows (only shown when multiple images) -->
                  <template v-if="item.project.images.length > 1">
                    <button
                      @click.stop="slideImage(item.project.id, item.project.images.length, -1)"
                      class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/65 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    >
                      <i class="fas fa-chevron-left text-xs"></i>
                    </button>
                    <button
                      @click.stop="slideImage(item.project.id, item.project.images.length, 1)"
                      class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/65 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    >
                      <i class="fas fa-chevron-right text-xs"></i>
                    </button>

                    <!-- Dot indicators -->
                    <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                      <button
                        v-for="(_, i) in item.project.images"
                        :key="i"
                        @click.stop="jumpToSlide(item.project.id, i)"
                        :class="[
                          'w-1.5 h-1.5 rounded-full transition-colors',
                          (sliderIndexes[item.project.id] ?? 0) === i ? 'bg-white' : 'bg-white/40'
                        ]"
                      />
                    </div>
                  </template>
                </div>

                <!-- Right: content -->
                <div class="flex flex-col flex-1 min-w-0">
                  <div class="p-6 flex-grow">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-2xl font-bold text-gray-800">{{ item.project.meta.title }}</h3>
                      <button @click="toggleExpand(item.project.id)" class="text-gray-400 hover:text-primary-600 ml-4 shrink-0">
                        <i class="fas fa-chevron-up"></i>
                      </button>
                    </div>
                    <div class="prose max-w-none text-gray-600" v-html="marked(item.project.markdown)"></div>
                  </div>

                  <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 text-sm text-gray-500">
                    <div class="flex justify-between items-center">
                      <span>{{ item.project.meta.year }}</span>
                      <span>{{ item.project.meta.location }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </div>
      </TransitionGroup>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <BaseButton variant="primary" @click="clearFilters">
          <i class="fas fa-th-large mr-2"></i>
          View All Projects
        </BaseButton>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="lightboxProject"
        class="fixed inset-0 z-50 flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closeLightbox" />

        <!-- Close button -->
        <button
          @click="closeLightbox"
          class="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <i class="fas fa-times"></i>
        </button>

        <!-- Counter -->
        <div v-if="lightboxProject.images.length > 1" class="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white/70 text-sm">
          {{ (sliderIndexes[lightboxProject.id] ?? 0) + 1 }} / {{ lightboxProject.images.length }}
        </div>

        <!-- Image -->
        <div class="relative z-10 max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center">
          <Transition :name="sliderDirection" mode="out-in">
            <img
              :key="sliderIndexes[lightboxProject.id] ?? 0"
              :src="lightboxProject.images[sliderIndexes[lightboxProject.id] ?? 0]"
              alt=""
              :class="['max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl', isPng(lightboxProject.images[sliderIndexes[lightboxProject.id] ?? 0]) ? 'bg-gray-100' : '']"
            />
          </Transition>
        </div>

        <!-- Prev / Next -->
        <template v-if="lightboxProject.images.length > 1">
          <button
            @click.stop="slideImage(lightboxProject.id, lightboxProject.images.length, -1)"
            class="absolute left-4 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            @click.stop="slideImage(lightboxProject.id, lightboxProject.images.length, 1)"
            class="absolute right-4 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
          >
            <i class="fas fa-chevron-right"></i>
          </button>

          <!-- Dot indicators -->
          <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            <button
              v-for="(_, i) in lightboxProject.images"
              :key="i"
              @click.stop="jumpToSlide(lightboxProject.id, i)"
              :class="['w-2 h-2 rounded-full transition-colors', (sliderIndexes[lightboxProject.id] ?? 0) === i ? 'bg-white' : 'bg-white/30']"
            />
          </div>
        </template>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { loadProjects, Project } from '../../utils/projectLoader'
import { marked } from 'marked'
import BaseButton from '../ui/BaseButton.vue'

type DisplayItem =
  | { type: 'project'; project: Project }
  | { type: 'spacer'; id: string }

const projects = ref<Project[]>([])
const activeCategory = ref('all')
const expandedProject = ref<string | null>(null)

// Track current column count to compute correct spacers at each breakpoint
const cols = ref(3)
const updateCols = () => {
  if (window.innerWidth >= 1024) cols.value = 3
  else if (window.innerWidth >= 768) cols.value = 2
  else cols.value = 1
}

onMounted(async () => {
  projects.value = await loadProjects()
  updateCols()
  window.addEventListener('resize', updateCols)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCols)
  window.removeEventListener('keydown', onKeydown)
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects.value
  return projects.value.filter(p => p.meta.categories.includes(activeCategory.value))
})

// Build the display list so the expanded card never moves down on screen.
//
// Complete row (all cols filled): move the expanded card to the front of its
// row group so it claims col-1 without shifting downward. The cards that were
// before it in the row follow after it and move down naturally.
//
// Incomplete row (last row, not fully filled): insert invisible spacers before
// the card to push it to the next row — it's the last row so moving down is
// the only option anyway.
const displayItems = computed((): DisplayItem[] => {
  const items = filteredProjects.value
  const expandedId = expandedProject.value

  if (!expandedId) return items.map(p => ({ type: 'project', project: p }))

  const expandedIndex = items.findIndex(p => p.id === expandedId)
  if (expandedIndex === -1) return items.map(p => ({ type: 'project', project: p }))

  const col = expandedIndex % cols.value          // 0-based column of the expanded card
  if (col === 0) return items.map(p => ({ type: 'project', project: p }))

  const rowStart = expandedIndex - col            // index of first card in this row
  const rowIsComplete = rowStart + cols.value <= items.length

  const result: DisplayItem[] = []

  if (rowIsComplete) {
    // Cards in rows above: unchanged
    for (let i = 0; i < rowStart; i++) {
      result.push({ type: 'project', project: items[i] })
    }
    // Expanded card moves to front of its row → stays on the same row
    result.push({ type: 'project', project: items[expandedIndex] })
    // Cards that were before it in the row now follow → they move down
    for (let i = rowStart; i < expandedIndex; i++) {
      result.push({ type: 'project', project: items[i] })
    }
    // Remaining cards after the expanded card
    for (let i = expandedIndex + 1; i < items.length; i++) {
      result.push({ type: 'project', project: items[i] })
    }
  } else {
    // Incomplete row: spacers fill the remaining slots so the card drops to the
    // next row at col-1 (acceptable; there's nothing below to displace)
    for (let i = 0; i < expandedIndex; i++) {
      result.push({ type: 'project', project: items[i] })
    }
    const spacersNeeded = cols.value - col
    for (let s = 0; s < spacersNeeded; s++) {
      result.push({ type: 'spacer', id: `spacer-${s}` })
    }
    for (let i = expandedIndex; i < items.length; i++) {
      result.push({ type: 'project', project: items[i] })
    }
  }

  return result
})

const categories = computed(() => {
  const allCategories: string[] = []
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
  if (expandedProject.value === projectId) {
    sliderIndexes.value[projectId] = 0
  }
}

// Slider state
const sliderIndexes = ref<Record<string, number>>({})
const sliderDirection = ref<'slide-left' | 'slide-right'>('slide-left')

const slideImage = (projectId: string, total: number, dir: 1 | -1) => {
  sliderDirection.value = dir === 1 ? 'slide-left' : 'slide-right'
  const current = sliderIndexes.value[projectId] ?? 0
  sliderIndexes.value[projectId] = (current + dir + total) % total
}

const jumpToSlide = (projectId: string, index: number) => {
  const current = sliderIndexes.value[projectId] ?? 0
  sliderDirection.value = index > current ? 'slide-left' : 'slide-right'
  sliderIndexes.value[projectId] = index
}

// Lightbox
const lightboxProject = ref<Project | null>(null)

const openLightbox = (project: Project) => {
  lightboxProject.value = project
}

const closeLightbox = () => {
  lightboxProject.value = null
}

const isPng = (src: string) => /\.png$/i.test(src)

const onKeydown = (e: KeyboardEvent) => {
  if (!lightboxProject.value) return
  const p = lightboxProject.value
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowRight') slideImage(p.id, p.images.length, 1)
  else if (e.key === 'ArrowLeft')  slideImage(p.id, p.images.length, -1)
}

</script>

<style scoped>
/* FLIP-based shuffle for all surrounding cards */
.card-move {
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Image slider transitions — no position:absolute so containers keep their height */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.35s ease, opacity 0.35s ease;
}
.slide-left-enter-from  { transform: translateX(48px);  opacity: 0; }
.slide-left-leave-to    { transform: translateX(-48px); opacity: 0; }
.slide-right-enter-from { transform: translateX(-48px); opacity: 0; }
.slide-right-leave-to   { transform: translateX(48px);  opacity: 0; }

/* Lightbox overlay fade */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Markdown heading spacing */
:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4) {
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}
:deep(.prose h1 + p),
:deep(.prose h2 + p),
:deep(.prose h3 + p),
:deep(.prose h4 + p) {
  margin-top: 0;
}

/* Spacers fade in/out silently */
.card-enter-active,
.card-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
