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
import LearnMore from '@/components/LearnMore.vue';
import TooltipContentAsync from '@/components/UI/TooltipContentAsync.vue';
import DataKeys from '@/constants/DataKeys';
import Signals from '@/constants/Signals';
import CodeExamples from '@/constants/CodeExamples';

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
    <CardComponent
      title="Current Count (v-slot)"
      info="true"
    >
      <template #tooltip-content>
        <TooltipContentAsync
          description="This example uses v-slot syntax to access 'has' and 'data' properties from WireData. The 'has' property indicates if data exists, while 'data' contains the actual value."
          :code="CodeExamples.WIRE_DATA_V_SLOT"
        />
      </template>
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
    <CardComponent
      title="Count Status (template slots)"
      info="true"
    >
      <template #tooltip-content>
        <TooltipContentAsync
          description="This example uses named template slots for conditional rendering. The #default slot renders when data exists, while #undefined slot renders when data is undefined."
          :code="CodeExamples.WIRE_DATA_TEMPLATE_SLOTS"
        />
      </template>
      <WireData :for="DataKeys.COUNT" :when="() => true">
        <template #default="{ data }">
          <CountBadge :count="data" />
        </template>
        <template #undefined>
          <UndefinedStatus />
        </template>
      </WireData>
    </CardComponent>

    <CardComponent
      title="Increment Button"
      info="true"
    >
      <template #tooltip-content>
        <TooltipContentAsync
          description="This example shows how to send Wire signals from components. The button click sends the INCREASE signal, which is handled by the CountController to update the count data."
          :code="CodeExamples.WIRE_SEND_SIGNAL"
          language="javascript"
        />
      </template>
      <div class="flex flex-col gap-4">
        <WireData
          v-slot="{ has, data }"
          :for="DataKeys.COUNT"
          :when="() => true"
        >
          <CountButton
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

    <!-- Learn More -->
    <CardComponent title="Learn More">
      <LearnMore />
    </CardComponent>
  </AppLayout>
</template>
