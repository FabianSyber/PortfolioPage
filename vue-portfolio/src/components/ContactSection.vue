<template>
  <section id="contact" class="section-container bg-white">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Interested in collaboration, have a project in mind, or just want to chat about architecture and technology?
        </p>
        <div class="w-24 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8 animate-slide-in-left">
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
            <p class="text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-6">
            <a 
              href="mailto:fabian.sellberg@hotmail.com"
              class="flex items-center p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-envelope text-primary-600 text-2xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Email Me</h4>
                <p class="text-gray-600">fabian.sellberg@hotmail.com</p>
                <p class="text-sm text-primary-600 mt-2 group-hover:underline">Click to send an email</p>
              </div>
            </a>

            <a 
              href="https://github.com/fabiansyber"
              target="_blank"
              class="flex items-center p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div class="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fab fa-github text-white text-2xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">GitHub</h4>
                <p class="text-gray-600">@fabiansyber</p>
                <p class="text-sm text-primary-600 mt-2 group-hover:underline">View my projects and code</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/fabian-sellberg-4099b71a0/"
              target="_blank"
              class="flex items-center p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <i class="fab fa-linkedin text-white text-2xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">LinkedIn</h4>
                <p class="text-gray-600">Fabian Sellberg</p>
                <p class="text-sm text-primary-600 mt-2 group-hover:underline">Connect professionally</p>
              </div>
            </a>
          </div>

          <!-- Download Resume -->
          <div class="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold text-gray-800 mb-2">Download Resume</h4>
                <p class="text-gray-600 text-sm">Get a detailed overview of my experience and skills.</p>
              </div>
              <a 
                href="/files/resume.pdf"
                target="_blank"
                class="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center"
              >
                <i class="fas fa-download mr-2"></i>
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-slide-in-right">
          <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                  id="consent"
                  v-model="form.consent"
                  type="checkbox"
                  required
                  class="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 border-gray-300"
                />
                <label for="consent" class="ml-3 text-sm text-gray-600">
                  I agree to the processing of my data for contact purposes.
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                :class="[
                  'w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center',
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white hover:shadow-xl transform hover:-translate-y-1'
                ]"
              >
                <span v-if="!isSubmitting">
                  <i class="fas fa-paper-plane mr-3"></i>
                  Send Message
                </span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin mr-3"></i>
                  Sending...
                </span>
              </button>

              <!-- Success/Error Message -->
              <div 
                v-if="submitMessage"
                :class="[
                  'p-4 rounded-xl text-center font-medium animate-scale-up',
                  submitStatus === 'success' 
                    ? 'bg-success-50 text-success-700 border border-success-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                ]"
              >
                <i :class="[
                  'fas mr-2',
                  submitStatus === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
                ]"></i>
                {{ submitMessage }}
              </div>
            </form>

            <!-- Response Time -->
            <div class="mt-8 pt-8 border-t border-gray-200 text-center">
              <div class="inline-flex items-center text-gray-600">
                <i class="fas fa-clock text-primary-500 mr-2"></i>
                <span class="text-sm">Typically responds within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Location/Map Placeholder -->
      <div class="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-xl">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="mb-6 md:mb-0 md:mr-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Based in Sweden</h3>
            <p class="text-gray-600 mb-4">
              Working remotely with clients and collaborators worldwide. Available for both local and international projects.
            </p>
            <div class="flex items-center text-gray-600">
              <i class="fas fa-globe-europe text-primary-500 mr-3 text-xl"></i>
              <span>Open to remote collaboration and travel</span>
            </div>
          </div>
          <div class="w-64 h-48 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
            <div class="text-center text-white">
              <i class="fas fa-map-marker-alt text-4xl mb-4"></i>
              <p class="font-bold">Stockholm, Sweden</p>
              <p class="text-sm opacity-80">UTC+1 (CET)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  consent: boolean
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
  consent: false
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)
const submitMessage = ref('')

const submitForm = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  submitStatus.value = null
  submitMessage.value = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real application, this would be an API call
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // })

    submitStatus.value = 'success'
    submitMessage.value = 'Message sent successfully! I\'ll get back to you soon.'

    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    form.consent = false

  } catch (error) {
    submitStatus.value = 'error'
    submitMessage.value = 'Something went wrong. Please try again or email me directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Custom form animations */
input:focus, textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1);
}
</style>