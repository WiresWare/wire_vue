<script setup lang="ts" generic="T">
/**
 * `WireData` is a generic component designed to connect to and display reactive data streams
 * from the `wire-ts` library. It provides slots for displaying data when present
 * and a separate slot for when data is undefined or null.
 *
 * @template T The expected type of the data being retrieved from `wire-ts`.
 */
import { Wire } from 'wire-ts';
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  useSlots,
} from 'vue';
import type { IWireDataProps } from '@/types/WireData';

type WireDataPossibleValues = T | undefined | null;

const slots = useSlots();

/**
 * Props for the WireData component.
 * @property {string} for - The key for the Wire.data instance to subscribe to.
 * @property {boolean | ((value: T | undefined | null) => boolean)} [when] - A condition to control when data updates should be applied.
 *   If a boolean, updates are skipped if 'false'.
 *   If a function, updates are skipped if the function returns 'false'.
 * @property {boolean} [isStatic=false] - If true, the component will not subscribe to Wire data updates after initial load.
 */
const props = defineProps<IWireDataProps>();
/**
 * Emits events from the WireData component.
 * @event changed - Emitted whenever the `dataRef` value changes, providing the new data.
 * @type {T | undefined | null} The new value of the `dataRef`.
 */
const emits = defineEmits<{ changed: [WireDataPossibleValues] }>();

const wireData = Wire.data<T>(props.for);
const dataRef = ref<WireDataPossibleValues>(wireData.value);

const hasData = computed(() => dataRef.value !== undefined && dataRef.value !== null);
const hasWhen = () => props.when !== undefined && props.when !== null;
const hasSlotUndefined = computed(() => slots.undefined);

const isWhenFunction = () => !!props.when && props.when instanceof Function;

const emitChanged = () => emits('changed', dataRef.value);

const onWireDataUpdate = async (value: any) => {
  const skip = (hasWhen() && !props.when)
    || (isWhenFunction() && props.when(value) === false);
  if (skip) return;
  // console.log('> WireData -> onWireDataUpdate:', value);
  dataRef.value = value;
  emitChanged();
};
onMounted(() => {
  // console.log('> WireData -> onMounted: for =', props.for, data.value);
  if (!props.isStatic) {
    wireData.subscribe(onWireDataUpdate);
  }
  if (props.emitOnMounted) {
    emitChanged();
  }
});
onUnmounted(() => {
  if (props.isStatic) return;
  wireData.unsubscribe(onWireDataUpdate);
});
</script>

<template>
  <slot
    v-if="hasData || (!hasData && !hasSlotUndefined)"
    :data="dataRef"
    :has="hasData"
  />
  <slot v-else name="undefined" />
</template>
