<template>
  <section id="about" class="section-container bg-white">
    <div>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-secondary-500">
            About Me
          </span>
        </h2>
        <div class="w-24 h-2 bg-secondary-500 mx-auto"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Column: Text Content -->
        <div class="space-y-6 animate-slide-in-left">
          <div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">Architect & Digital Innovator</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              I am an Architect with a passion for simplicity in complex systems. My focus is on how digital tools shape contemporary architecture and how to further develop these to create more diverse and interesting projects.
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 border-2 border-primary-200 bg-primary-100 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-lightbulb text-primary-600 text-xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Creative Problem Solver</h4>
                <p class="text-gray-600">Transforming complex architectural challenges into elegant, functional solutions.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 border-2 border-secondary-200 bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-code text-secondary-600 text-xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Tech Enthusiast</h4>
                <p class="text-gray-600">Bridging architecture with programming to create innovative digital tools.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 border-2 border-accent-200 bg-accent-100 flex items-center justify-center flex-shrink">
                <i class="fas fa-palette text-accent-600 text-xl"></i>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-1">Design Thinker</h4>
                <p class="text-gray-600">Focusing on user-centered design principles in both physical and digital spaces.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Stats/Visual -->
        <div class="animate-slide-in-right">
          <div class="card-style">
            <div class="grid grid-cols-2 gap-6">
              <!-- Stat 1 -->
              <div class="text-center p-6 card-style bg-white">
                <div class="text-4xl font-bold text-primary-500 mb-2">
                  5+
                </div>
                <div class="text-gray-600 font-medium">Years Experience</div>
              </div>

              <!-- Stat 2 -->
              <div class="text-center p-6 card-style bg-white">
                <div class="text-4xl font-bold text-secondary-500 mb-2">
                  20+
                </div>
                <div class="text-gray-600 font-medium">Projects Completed</div>
              </div>

              <!-- Stat 3 -->
              <div class="text-center p-6 card-style bg-white">
                <div class="text-4xl font-bold text-accent-500 mb-2">
                  10+
                </div>
                <div class="text-gray-600 font-medium">Digital Tools</div>
              </div>

              <!-- Stat 4 -->
              <div class="text-center p-6 card-style bg-white">
                <div class="text-4xl font-bold text-success-500 mb-2">
                  100%
                </div>
                <div class="text-gray-600 font-medium">Passion Driven</div>
              </div>
            </div>

            <!-- Skills Preview -->
            <div class="mt-8 pt-4 border-t border-gray-200">
              <h4 class="font-bold text-gray-800 mb-4">Core Expertise</h4>
              <div class="flex flex-wrap gap-3">
                <span class="skill-badge">Architectural Design</span>
                <span class="skill-badge">3D Modeling</span>
                <span class="skill-badge">Python</span>
                <span class="skill-badge">JavaScript</span>
                <span class="skill-badge">C#</span>
                <span class="skill-badge">Digital Fabrication</span>
                <span class="skill-badge">UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>

<style scoped>
/* Custom styles for the about section */
</style>