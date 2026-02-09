<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' }, // primary | secondary | transparent
})

</script>

<template>
    <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="inline-flex"
    >
        <span class="relative inline-block">            
            <!-- Button surface -->
            <span 
                :class="{
                    'btn-primary': props.variant === 'primary',
                    'btn-secondary': props.variant === 'secondary',
                    'btn-transparent': props.variant === 'transparent'
                }">
                <slot />
            </span>

            <!-- Shadow outline -->
            <span 
                :class="{
                    'btn-primary-shadow': props.variant === 'primary',
                    'btn-secondary-shadow': props.variant === 'secondary',
                    'btn-transparent-shadow': props.variant === 'transparent'
                }"
            />
        </span>
    </component>
</template>
