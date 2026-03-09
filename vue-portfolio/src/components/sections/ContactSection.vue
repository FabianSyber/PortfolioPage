<template>
  <section id="contact" class="section-container bg-white">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-secondary-500">
            Get In Touch
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Interested in collaboration, have a project in mind, or just want to chat about architecture and technology?
        </p>
        <div class="w-24 h-2 bg-secondary-500 mx-auto"></div>
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
              class="flex items-center card-style group"
            >
              <div class="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mr-6">
                <i class="fas fa-envelope text-secondary-600 text-2xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Email Me</h4>
                <p class="text-gray-600">fabian@fabiansyber.se</p>
                <p class="text-sm text-secondary-600 mt-2 group-hover:underline">Click to send an email</p>
              </div>
            </a>

            <a 
              href="https://github.com/fabiansyber"
              target="_blank"
              class="flex items-center card-style group"
            >
              <div class="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mr-6">
                <i class="fab fa-github text-white text-2xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">GitHub</h4>
                <p class="text-gray-600">@fabiansyber</p>
                <p class="text-sm text-secondary-600 mt-2 group-hover:underline">View my projects and code</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/fabian-sellberg-4099b71a0/"
              target="_blank"
              class="flex items-center card-style group"
            >
              <div class="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mr-6">
                <i class="fab fa-linkedin text-white text-2xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">LinkedIn</h4>
                <p class="text-gray-600">Fabian Sellberg</p>
                <p class="text-sm text-secondary-600 mt-2 group-hover:underline">Connect professionally</p>
              </div>
            </a>
          </div>

          <!-- Download Resume -->
          <div class="p-6 card-style">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-bold text-gray-800 mb-2">Download Resume</h4>
                <p class="text-gray-600 text-sm">Get a detailed overview of my experience and skills.</p>
              </div>
              <a 
                href="/files/resume.pdf"
                target="_blank"
                class="px-6 py-3 bg-secondary-500 text-white font-semibold rounded-xl  flex items-center"
              >
                <i class="fas fa-download mr-2"></i>
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-slide-in-right">
          <div class="card-style">
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
                    class="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:outline-none focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200"
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
                    class="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:outline-none focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200"
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
                  class="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:outline-none focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200"
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
                  class="w-full px-4 py-3 bg-white border-2 border-gray-200 focus:outline-none focus:border-secondary-500 focus:ring-2 focus:ring-secondary-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                :class="[
                  'w-full py-4 font-semibold text-lg flex items-center justify-center',
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-secondary-500 text-white hover:bg-secondary-600'
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
                <i class="fas fa-clock text-secondary-500 mr-2"></i>
                <span class="text-sm">Typically responds within 24 hours</span>
              </div>
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