<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div class="container mx-auto px-6 py-20 text-center relative z-10">
      <!-- Main Heading -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        <span class="text-primary-500">
          Fabian Sellberg
        </span>
      </h1>

      <!-- Typing Animation Text -->
      <div class="text-2xl md:text-3xl font-semibold mb-8 h-12">
        <vue-typewriter-effect :strings="['Architect', 'Developer', 'Designer']" />
      </div>

      <!-- Description -->
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-slide-in-left">
        Architect with a passion for simplicity in complex systems. Exploring how digital tools shape contemporary architecture.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right">
        <BaseButton href="#projects" variant="primary">
          <i class="fas fa-rocket mr-2"></i>
          View Projects
        </BaseButton>
        <BaseButton href="#contact" variant="transparent">
          <i class="fas fa-envelope mr-2"></i>
          Get In Touch
        </BaseButton>
        <BaseButton href="/files/resume.pdf" target="_blank" variant="secondary">
          <i class="fas fa-download mr-2"></i>
          Download Resume
        </BaseButton>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" class="text-primary-500 hover:text-primary-600 transition-colors duration-300">
          <i class="fas fa-chevron-down text-3xl"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import VueTypewriterEffect from "vue-typewriter-effect"

import BaseButton from '../ui/BaseButton.vue'
</script>