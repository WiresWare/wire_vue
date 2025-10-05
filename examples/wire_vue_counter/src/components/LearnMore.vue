<script setup lang="ts">
import ExternalLink from '@/components/UI/ExternalLink.vue';

interface Resource {
  text: string;
  href: string;
}

const resources: Resource[] = [
  {
    text: 'Wire Vue',
    href: 'https://github.com/WiresWare/wire_vue',
  },
  {
    text: 'Wire for TypeScript',
    href: 'https://github.com/WiresWare/wire_ts',
  },
];
</script>

<template>
  <div class="space-y-3">
    <p class="text-sm text-gray-600">
      Explore these resources to learn more about the technologies used in this example:
    </p>
    <ul class="space-y-2">
      <li
        v-for="resource in resources"
        :key="resource.href"
        class="flex items-start"
      >
        <span class="mr-2 text-gray-400">→</span>
        <ExternalLink
          :href="resource.href"
          :text="resource.text"
        />
      </li>
    </ul>
  </div>
</template>
