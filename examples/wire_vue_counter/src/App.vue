<script setup lang="ts">
import CountButton from '@/components/CountButton.vue';
import DataKeys from '@/constants/DataKeys';
import { Wire } from 'wire-ts';
import { WireData } from 'wire-vue';
import Signals from '@/constants/Signals';

const onClearClick = () =>
  Wire.send(Signals.RESET);
</script>

<template>
  <WireData
    v-slot="{ has, data }"
    :for="DataKeys.COUNT"
    :when="() => true"
  >
    <h1>{{ has ? data : 'no data' }}</h1>
  </WireData>
  <WireData
    :for="DataKeys.COUNT"
    :when="() => true"
  >
    <template #default="{ data }">
      <h1>{{ data }}</h1>
    </template>
    <template #undefined>
      <p>Value is undefined</p>
    </template>
  </WireData>
  <CountButton title="Count" />
  <div style="margin-top: 1rem;">
    <button
      style="background-color: pink;"
      @click="onClearClick"
    >
      Reset
    </button>
  </div>
</template>
