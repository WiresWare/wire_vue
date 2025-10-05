<script setup lang="ts">
import CounterStatusIndicator from '@/components/Counter/CounterStatusIndicator.vue';
import ProgressIndicator from '@/components/Counter/ProgressIndicator.vue';
import AchievementBadge from '@/components/Counter/AchievementBadge.vue';
import EmptyMessage from '@/components/UI/EmptyMessage.vue';
import DataKeys from '@/constants/DataKeys';

withDefaults(defineProps<{
  target?: number;
  threshold?: number;
  emptySubMessage?: string;
}>(), {
  target: 10,
  threshold: 10,
  emptySubMessage: '',
});
</script>

<template>
  <WireData
    v-slot="{ has, data }"
    :for="DataKeys.COUNT"
    :when="() => true"
  >
    <div v-if="!has" class="w-full text-center">
      <EmptyMessage>
        No data yet.
      </EmptyMessage>
      <EmptyMessage v-if="emptySubMessage">
        {{ emptySubMessage }}
      </EmptyMessage>
    </div>
    <div v-else class="w-full space-y-4">
      <CounterStatusIndicator
        :count="data"
        :has-value="has"
      />
      <ProgressIndicator
        :count="data"
        :has-value="has"
        :target="target"
      />
      <AchievementBadge
        :count="data"
        :has-value="has"
        :threshold="threshold"
      />
    </div>
  </WireData>
</template>
