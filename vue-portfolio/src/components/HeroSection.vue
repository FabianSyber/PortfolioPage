<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div class="absolute bottom-20 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 4s"></div>
    </div>

    <div class="container mx-auto px-6 py-20 text-center relative z-10">
      <!-- Avatar/Profile Image -->
      <div class="w-48 h-48 mx-auto mb-8 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse-slow"></div>
        <div class="absolute inset-4 bg-white rounded-full flex items-center justify-center">
          <div class="w-40 h-40 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
            <span class="text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              FS
            </span>
          </div>
        </div>
      </div>

      <!-- Main Heading -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        <span class="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
          Fabian Sellberg
        </span>
      </h1>

      <!-- Typing Animation Text -->
      <div class="text-2xl md:text-3xl font-semibold mb-8 h-12">
        <span class="inline-block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
          {{ currentRole }}
        </span>
        <span class="inline-block w-1 h-8 bg-primary-500 ml-1 animate-pulse"></span>
      </div>

      <!-- Description -->
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-slide-in-left">
        Architect with a passion for simplicity in complex systems. Exploring how digital tools shape contemporary architecture.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right">
        <a href="#projects" class="btn-primary">
          <i class="fas fa-rocket mr-2"></i>
          View Projects
        </a>
        <a href="#contact" class="btn-secondary">
          <i class="fas fa-envelope mr-2"></i>
          Get In Touch
        </a>
        <a href="/files/resume.pdf" target="_blank" class="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <i class="fas fa-download mr-2"></i>
          Download Resume
        </a>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" class="text-gray-400 hover:text-primary-500 transition-colors duration-300">
          <i class="fas fa-chevron-down text-3xl"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const roles = ['Architect', 'Programmer', 'Designer', 'Innovator']
const currentRoleIndex = ref(0)
const currentRole = ref(roles[0])
let roleInterval: number

const rotateRoles = () => {
  currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
  currentRole.value = roles[currentRoleIndex.value]
}

onMounted(() => {
  roleInterval = setInterval(rotateRoles, 2000)
})

onUnmounted(() => {
  if (roleInterval) {
    clearInterval(roleInterval)
  }
})
</script>

<style scoped>
/* Custom typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
}
</style>