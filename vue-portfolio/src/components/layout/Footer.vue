<template>
  <footer class="border-t-2 border-gray-200">
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Brand Column -->
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-gray-800">Fabian Sellberg</h3>
            <p class="text-gray-500 text-sm">Architect & Digital Innovator</p>
          </div>
          <p class="text-gray-600">
            Creating at the intersection of architecture, technology, and design.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-10 h-10 border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 group"
              :title="social.name"
            >
              <i :class="[social.icon, 'text-gray-500 group-hover:text-white transition-colors duration-300']"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-gray-800">Quick Links</h4>
          <ul class="flex flex-wrap gap-x-6 gap-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.url"
                class="text-gray-500 hover:text-primary-500 transition-colors duration-300"
                @click.prevent="scrollToSection(link.section)"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t-2 border-gray-200 my-8"></div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Fabian Sellberg. All rights reserved.
        </div>

        <div class="flex items-center space-x-6">
          <button
            @click="scrollToTop"
            class="text-gray-500 hover:text-primary-500 transition-colors duration-300 flex items-center group"
            title="Back to top"
          >
            <i class="fas fa-arrow-up mr-2"></i>
            <span class="text-sm">Back to top</span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/fabiansyber' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/fabian-sellberg-4099b71a0/' },
  { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:fabian.sellberg@hotmail.com' },
]

const quickLinks = [
  { name: 'Home', url: '#hero', section: 'hero' },
  { name: 'About', url: '#about', section: 'about' },
  { name: 'Projects', url: '#projects', section: 'projects' },
  { name: 'Skills', url: '#skills', section: 'skills' },
  { name: 'Experience', url: '#experience', section: 'experience' },
  { name: 'Contact', url: '#contact', section: 'contact' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
