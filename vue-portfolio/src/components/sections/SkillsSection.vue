<template>
  <section id="skills" class="section-container bg-white">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-secondary-500">
            Skills & Expertise
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A diverse skill set that bridges architecture, programming, and design thinking.
        </p>
        <div class="w-24 h-2 bg-secondary-500 mx-auto"></div>
      </div>

      <!-- Skills Categories -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Architecture Skills -->
        <div class="card-style">
          <div class="w-16 h-16 bg-primary-100 flex items-center justify-center mb-6 border-2 border-primary-200">
            <i class="fas fa-building text-primary-600 text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Architecture</h3>
          <p class="text-gray-600 mb-6">Traditional and digital architectural design skills.</p>
          
          <div class="space-y-4">
            <div 
              v-for="skill in architectureSkills" 
              :key="skill.name"
              class="group cursor-pointer"
              @click="toggleSkillDetail(skill.name)"
            >
              <div class="flex justify-between items-center">
                <span class="font-medium text-gray-700">{{ skill.name }}</span>
                <span class="text-primary-600 font-bold">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 overflow-hidden mt-1">
                <div 
                  class="h-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-1000"
                  :style="{ width: skill.level + '%' }"
                  :class="{ 'animate-pulse': expandedSkill === skill.name }"
                ></div>
              </div>
              
              <!-- Skill Details -->
              <div 
                v-if="expandedSkill === skill.name"
                class="mt-3 p-4 bg-primary-50 animate-scale-up"
              >
                <p class="text-sm text-gray-600 mb-2">{{ skill.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tool in skill.tools" 
                    :key="tool"
                    class="px-3 py-1 bg-white text-primary-700 text-xs font-medium"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Programming Skills -->
        <div class="card-style">
          <div class="w-16 h-16 bg-secondary-100 flex items-center justify-center mb-6 border-2 border-secondary-200">
            <i class="fas fa-code text-secondary-600 text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Programming</h3>
          <p class="text-gray-600 mb-6">Software development and digital tool creation.</p>
          
          <div class="space-y-4">
            <div 
              v-for="skill in programmingSkills" 
              :key="skill.name"
              class="group cursor-pointer"
              @click="toggleSkillDetail(skill.name)"
            >
              <div class="flex justify-between items-center">
                <span class="font-medium text-gray-700">{{ skill.name }}</span>
                <span class="text-secondary-600 font-bold">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 overflow-hidden mt-1">
                <div 
                  class="h-full bg-gradient-to-r from-secondary-400 to-secondary-600 transition-all duration-1000"
                  :style="{ width: skill.level + '%' }"
                  :class="{ 'animate-pulse': expandedSkill === skill.name }"
                ></div>
              </div>
              
              <!-- Skill Details -->
              <div 
                v-if="expandedSkill === skill.name"
                class="mt-3 p-4 bg-secondary-50 animate-scale-up"
              >
                <p class="text-sm text-gray-600 mb-2">{{ skill.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tool in skill.tools" 
                    :key="tool"
                    class="px-3 py-1 bg-white text-secondary-700 text-xs font-medium"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Design Skills -->
        <div class="card-style">
          <div class="w-16 h-16 bg-accent-100 flex items-center justify-center mb-6 border-2 border-accent-200">
            <i class="fas fa-palette text-accent-600 text-2xl"></i>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Design</h3>
          <p class="text-gray-600 mb-6">Visual and user experience design capabilities.</p>
          
          <div class="space-y-4">
            <div 
              v-for="skill in designSkills" 
              :key="skill.name"
              class="group cursor-pointer"
              @click="toggleSkillDetail(skill.name)"
            >
              <div class="flex justify-between items-center">
                <span class="font-medium text-gray-700">{{ skill.name }}</span>
                <span class="text-accent-600 font-bold">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 overflow-hidden mt-1">
                <div 
                  class="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full transition-all duration-1000"
                  :style="{ width: skill.level + '%' }"
                  :class="{ 'animate-pulse': expandedSkill === skill.name }"
                ></div>
              </div>
              
              <!-- Skill Details -->
              <div 
                v-if="expandedSkill === skill.name"
                class="mt-3 p-4 bg-accent-50 animate-scale-up"
              >
                <p class="text-sm text-gray-600 mb-2">{{ skill.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tool in skill.tools" 
                    :key="tool"
                    class="px-3 py-1 bg-white text-accent-700 text-xs font-medium"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills -->
      <div class="mt-12 card-style">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Capabilities</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <div 
            v-for="skill in additionalSkills" 
            :key="skill"
            class="px-6 py-3 card-style flex items-center space-x-4"
          >
            <div class="w-10 h-10 bg-success-100 flex items-center justify-center">
              <i class="fas fa-check text-success-600"></i>
            </div>
            <span class="font-medium text-gray-700">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expandedSkill = ref<string | null>(null)

const architectureSkills = [
  { 
    name: '3D Modeling', 
    level: 95,
    description: 'Advanced 3D modeling for architectural visualization and design development.',
    tools: ['Rhino', 'Revit', 'SketchUp', 'Blender']
  },
  { 
    name: 'Parametric Design', 
    level: 90,
    description: 'Algorithmic design using parametric tools and computational methods.',
    tools: ['Grasshopper', 'Dynamo', 'Python Scripting']
  },
  { 
    name: 'Technical Drawing', 
    level: 85,
    description: 'Precise technical documentation and construction drawings.',
    tools: ['AutoCAD', 'Vectorworks', 'BIM Standards']
  },
  { 
    name: 'Sustainable Design', 
    level: 80,
    description: 'Environmentally conscious design principles and energy analysis.',
    tools: ['Climate Analysis', 'Material Selection', 'Energy Modeling']
  }
]

const programmingSkills = [
  { 
    name: 'Python', 
    level: 90,
    description: 'Backend development, data analysis, and automation scripts.',
    tools: ['Django', 'Pandas', 'NumPy', 'Automation']
  },
  { 
    name: 'JavaScript', 
    level: 85,
    description: 'Frontend development and interactive web applications.',
    tools: ['Vue.js', 'React', 'Node.js', 'TypeScript']
  },
  { 
    name: 'CAD Automation', 
    level: 88,
    description: 'Automating architectural workflows through scripting.',
    tools: ['Rhino.Python', 'Revit API', 'Custom Plugins']
  },
  { 
    name: 'Data Visualization', 
    level: 82,
    description: 'Creating interactive visualizations for architectural data.',
    tools: ['D3.js', 'Three.js', 'Plotly', 'Custom Charts']
  }
]

const designSkills = [
  { 
    name: 'UI/UX Design', 
    level: 85,
    description: 'User-centered design for digital tools and applications.',
    tools: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
  },
  { 
    name: 'Visual Communication', 
    level: 88,
    description: 'Creating compelling visual presentations and graphics.',
    tools: ['Adobe Creative Suite', 'Diagramming', 'Infographics']
  },
  { 
    name: 'Design Thinking', 
    level: 90,
    description: 'Human-centered problem solving methodology.',
    tools: ['Workshop Facilitation', 'User Testing', 'Iterative Design']
  },
  { 
    name: 'Information Architecture', 
    level: 83,
    description: 'Structuring information for clarity and usability.',
    tools: ['Content Strategy', 'Navigation Design', 'Taxonomy']
  }
]

const additionalSkills = [
  'Project Management',
  'Team Leadership',
  'Research & Development',
  'Public Speaking',
  'Workshop Facilitation',
  'Technical Writing',
  'Mentoring',
  'Cross-disciplinary Collaboration'
]

const skillProgression = [
  {
    year: '2023-2024',
    focus: 'AI Integration',
    skills: ['Generative AI', 'Machine Learning', 'AR/VR Development']
  },
  {
    year: '2021-2022',
    focus: 'Digital Tools',
    skills: ['Web Development', 'CAD Automation', 'Parametric Design']
  },
  {
    year: '2019-2020',
    focus: 'Architectural Core',
    skills: ['BIM Mastery', 'Sustainable Design', 'Technical Documentation']
  },
  {
    year: '2017-2018',
    focus: 'Foundation',
    skills: ['3D Modeling', 'Design Principles', 'Basic Programming']
  }
]

const toggleSkillDetail = (skillName: string) => {
  expandedSkill.value = expandedSkill.value === skillName ? null : skillName
}
</script>

<style scoped>
/* Custom animations for skill bars */
@keyframes fillBar {
  from { width: 0% }
  to { width: var(--target-width) }
}

.skill-bar {
  --target-width: 0%;
  animation: fillBar 1s ease-out forwards;
}
</style>