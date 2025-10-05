<script setup lang="ts">
import { ref } from 'vue';
import InfoButton from './InfoButton.vue';
import TooltipDialog from './TooltipDialog.vue';

interface Props {
  title?: string;
  info?: string;
}

defineProps<Props>();

const isTooltipOpen = ref(false);

const toggleTooltip = () => {
  isTooltipOpen.value = !isTooltipOpen.value;
};

const closeTooltip = () => {
  isTooltipOpen.value = false;
};
</script>

<template>
  <div class="card relative bg-white">
    <div v-if="title" class="mb-3 flex items-center justify-between">
      <h2 class="text-xl font-semibold text-gray-700">
        {{ title }}
      </h2>
      <div v-if="info" class="relative">
        <InfoButton @click="toggleTooltip" />
        <TooltipDialog
          :text="info"
          :is-open="isTooltipOpen"
          @close="closeTooltip"
        />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>
