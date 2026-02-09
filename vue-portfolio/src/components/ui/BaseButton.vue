<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'primary',
  },
  transparent: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => [
  'btn',
  `btn-${props.variant}`,
  { 'btn-transparent': props.transparent },
])
</script>

<template>
    <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="classes"
    >
        <span class="btn-shadow" aria-hidden="true"/>
        <slot />
    </component>
    
</template>
