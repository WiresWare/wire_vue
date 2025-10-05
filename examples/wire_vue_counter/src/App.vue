<script setup lang="ts">
import { Wire } from 'wire-ts';
import AppLayout from '@/components/Layout/AppLayout.vue';
import CountButton from '@/components/Counter/CountButton.vue';
import ResetButton from '@/components/Counter/ResetButton.vue';
import AppHeader from '@/components/Layout/AppHeader.vue';
import CardComponent from '@/components/UI/CardComponent.vue';
import CountDisplay from '@/components/Counter/CountDisplay.vue';
import CountBadge from '@/components/Counter/CountBadge.vue';
import UndefinedStatus from '@/components/Counter/UndefinedStatus.vue';
import CounterAnalytics from '@/components/Counter/CounterAnalytics.vue';
import DataKeys from '@/constants/DataKeys';
import Signals from '@/constants/Signals';

const version = import.meta.env.VITE_APP_VERSION;

const onCountButtonIncrement = () => {
  console.log('> App -> onCountButtonIncrement');
  Wire.send(Signals.INCREASE);
};
const onResetButton = () => {
  console.log('> App -> onResetButton');
  Wire.send(Signals.RESET);
};
</script>

<template>
  <AppLayout>
    <template #header>
      <AppHeader
        title="Wire Vue Counter"
        description="A reactive counter using WireData component"
        :version="version"
      />
    </template>
    <!-- First WireData example with v-slot -->
    <CardComponent title="Current Count (v-slot)">
      <WireData
        v-slot="{ has, data }"
        :for="DataKeys.COUNT"
        :when="() => true"
      >
        <CountDisplay
          :has-data="has"
          :count="data"
        />
      </WireData>
    </CardComponent>

    <!-- Second WireData example with template slots -->
    <CardComponent title="Count Status (template slots)">
      <WireData :for="DataKeys.COUNT" :when="() => true">
        <template #default="{ data }">
          <CountBadge :count="data" />
        </template>
        <template #undefined>
          <UndefinedStatus />
        </template>
      </WireData>
    </CardComponent>

    <CardComponent>
      <div class="flex flex-col gap-4">
        <WireData
          v-slot="{ has, data }"
          :for="DataKeys.COUNT"
          :when="() => true"
        >
          <CountButton
            title="Click to Increase Counter"
            :count="data"
            :has-value="has"
            @increment="onCountButtonIncrement"
          />
        </WireData>
        <ResetButton @reset="onResetButton" />
      </div>
    </CardComponent>

    <!-- Counter Analytics -->
    <CardComponent title="Counter Analytics">
      <CounterAnalytics
        :target="10"
        :threshold="10"
        empty-sub-message="Start counting to see your analytics!"
      />
    </CardComponent>
  </AppLayout>
</template>
