<script setup lang="ts">
interface Props {
  href: string;
  text: string;
}

defineProps<Props>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="group inline-flex items-center gap-1 text-blue-600 transition-colors hover:text-blue-800"
  >
    <span>{{ text }}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
</template>
