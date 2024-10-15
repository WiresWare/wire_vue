/// <reference types=".vue-global-types/vue_3.5_false.d.ts" />
import { Wire } from 'wire-ts';
import { computed, onMounted, onUnmounted, ref, useSlots } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const slots = useSlots();
let __VLS_typeProps;
const props = defineProps();
const wireData = Wire.data(props.for);
const data = ref(wireData.value);
const hasData = computed(() => data.value !== undefined && data.value !== null);
const hasWhen = () => props.when !== undefined && props.when !== null;
const hasUndefinedSlot = computed(() => slots.undefined);
const isWhenFunction = () => !!props.when && props.when instanceof Function;
const onWireDataUpdate = async (value) => {
    const skip = (hasWhen() && !props.when) || (isWhenFunction() && !props.when(value));
    if (skip)
        return;
    // console.log('> WireData -> onWireDataUpdate:', value);
    data.value = value;
};
onMounted(() => {
    // console.log('> WireData -> onMounted: for =', props.for, data.value);
    if (props.isStatic)
        return;
    wireData.subscribe(onWireDataUpdate);
});
onUnmounted(() => {
    if (props.isStatic)
        return;
    wireData.unsubscribe(onWireDataUpdate);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.hasData || (!__VLS_ctx.hasData && !__VLS_ctx.hasUndefinedSlot)) {
        var __VLS_0 = {
            data: ((__VLS_ctx.data)), has: ((__VLS_ctx.hasData)),
        };
    }
    else {
        var __VLS_1 = {};
    }
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            data: data,
            hasData: hasData,
            hasUndefinedSlot: hasUndefinedSlot,
        };
    },
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
export default {};
;
