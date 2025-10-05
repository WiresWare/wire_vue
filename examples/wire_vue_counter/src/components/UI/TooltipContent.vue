<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';

const CodeBlock = defineAsyncComponent(() => import('./CodeBlock.vue'));

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
  <div>
    <div class="text-sm text-gray-600">
      <p class="mb-2">
        {{ description }}
      </p>
    </div>
    <Suspense>
      <template #default>
        <CodeBlock
          :code="code"
          :language="language"
        />
      </template>
      <template #fallback>
        <div class="mt-3 rounded-lg border border-gray-700 bg-gray-900 p-4">
          <div class="text-gray-400">
            <LoadingSpinner
              size="md"
              text="Loading code..."
            />
          </div>
        </div>
      </template>
    </Suspense>
  </div>
</template>
