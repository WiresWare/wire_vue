<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  count?: number;
  hasValue: boolean;
  threshold?: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  threshold: 10,
});

const showAchievement = computed(() => props.hasValue && props.count >= props.threshold);
</script>

<template>
  <div v-if="showAchievement" class="animate-bounce">
    <div class="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
      <div class="mr-1 h-2 w-2 rounded-full bg-yellow-500" />
      Achievement Unlocked!
    </div>
  </div>
</template>
