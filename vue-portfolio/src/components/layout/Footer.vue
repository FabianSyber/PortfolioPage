<template>
  <footer class="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand Column -->
        <div class="space-y-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">FS</span>
            </div>
            <div>
              <h3 class="text-xl font-bold">Fabian Sellberg</h3>
              <p class="text-gray-400 text-sm">Architect & Digital Innovator</p>
            </div>
          </div>
          <p class="text-gray-400">
            Creating at the intersection of architecture, technology, and design.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              :title="social.name"
            >
              <i :class="[social.icon, 'text-gray-300 hover:text-white']"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.url"
                class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                @click.prevent="scrollToSection(link.section)"
              >
                <i class="fas fa-chevron-right text-xs mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Skills Highlight -->
        <div>
          <h4 class="text-lg font-bold mb-6">Expertise</h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="skill in featuredSkills" 
              :key="skill"
              class="px-3 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-lg font-bold mb-6">Stay Updated</h4>
          <p class="text-gray-400 mb-4">
            Subscribe to my newsletter for updates on projects and insights.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="space-y-3">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="Your email"
              required
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-900 text-white"
            />
            <button
              type="submit"
              :disabled="isSubscribing"
              class="w-full py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <span v-if="!isSubscribing">
                <i class="fas fa-paper-plane mr-2"></i>
                Subscribe
              </span>
              <span v-else>
                <i class="fas fa-spinner fa-spin mr-2"></i>
                Subscribing...
              </span>
            </button>
          </form>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 my-8"></div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {{ currentYear }} Fabian Sellberg. All rights reserved.
        </div>
        
        <div class="flex items-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Terms of Service
          </a>
          <button 
            @click="scrollToTop"
            class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
            title="Back to top"
          >
            <i class="fas fa-arrow-up mr-2"></i>
            <span class="text-sm">Back to top</span>
          </button>
        </div>
      </div>

      <!-- Attribution -->
      <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>
          Made with 
          <i class="fas fa-heart text-red-500 mx-1"></i> 
          using Vue 3, Tailwind CSS, and Vite
        </p>
        <p class="mt-2">
          <i class="fas fa-code text-primary-500 mr-2"></i>
          This portfolio is open source. 
          <a 
            href="https://github.com/fabiansyber/portfolio-v3"
            target="_blank"
            class="text-primary-400 hover:text-primary-300 transition-colors duration-300"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
const newsletterEmail = ref('')
const isSubscribing = ref(false)

const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/fabiansyber' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/fabian-sellberg-4099b71a0/' },
  { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:fabian.sellberg@hotmail.com' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/fabiansellberg' }
]

const quickLinks = [
  { name: 'Home', url: '#hero', section: 'hero' },
  { name: 'About', url: '#about', section: 'about' },
  { name: 'Projects', url: '#projects', section: 'projects' },
  { name: 'Skills', url: '#skills', section: 'skills' },
  { name: 'Experience', url: '#experience', section: 'experience' },
  { name: 'Contact', url: '#contact', section: 'contact' }
]

const featuredSkills = [
  'Architecture',
  '3D Modeling',
  'Python',
  'Vue.js',
  'Parametric Design',
  'UI/UX',
  'Research',
  'Innovation'
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

const subscribeNewsletter = async () => {
  if (isSubscribing.value || !newsletterEmail.value) return

  isSubscribing.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real application, this would be an API call
    // await fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: newsletterEmail.value })
    // })

    alert('Thank you for subscribing! You\'ll receive updates soon.')
    newsletterEmail.value = ''
    
  } catch (error) {
    alert('Subscription failed. Please try again.')
  } finally {
    isSubscribing.value = false
  }
}
</script>

<style scoped>
/* Custom footer animations */
footer a:hover {
  transform: translateX(5px);
  transition: transform 0.3s ease;
}
</style>