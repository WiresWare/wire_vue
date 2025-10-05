<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

const TooltipContent = defineAsyncComponent(() => import('./TooltipContent.vue'));

interface Props {
  description: string;
  code: string;
  language?: string;
}

withDefaults(defineProps<Props>(), {
  language: 'vue',
});
</script>

<template>
  <Suspense>
    <template #default>
      <TooltipContent
        :description="description"
        :code="code"
        :language="language"
      />
    </template>
    <template #fallback>
      <LoadingSpinner size="sm" text="Loading component..." />
    </template>
  </Suspense>
</template>
