<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">FS</span>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Fabian Sellberg
          </span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a v-for="item in navItems" 
             :key="item.id" 
             :href="item.href"
             class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
             @click.prevent="scrollToSection(item.id)">
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-gray-700 hover:text-primary-600">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 space-y-4 animate-fade-in">
        <a v-for="item in navItems" 
           :key="item.id" 
           :href="item.href"
           class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
           @click.prevent="scrollToSection(item.id)">
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}
</script>

<style scoped>
/* Custom scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>