<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

const props = withDefaults(defineProps<{
	type?: 'button' | 'submit'
	focusable?: boolean
	preventDoubleClick?: boolean
	disabled?: boolean
}>(), {
	type: 'button',
	focusable: true,
	preventDoubleClick: false,
	disabled: false
})

const element = ref<HTMLElement>()
const active = ref<boolean>(true)
let interval: ReturnType<typeof setInterval>

watch(() => props.disabled, (newValue) => {
	clearInterval(interval)
	active.value = newValue == null ? true : !newValue
})

const click = (event: MouseEvent) => {
	if (!active.value) return
	emit('click', event)
	if (!props.preventDoubleClick) return
	active.value = false
	interval = setTimeout(() => {
		active.value = true
	}, 500)
}
</script>

<template>
	<component :is="focusable ? type : 'span'" @click="click" :class="disabled ? 'disabled' : ''" ref="element">
			<slot></slot>
	</component>
</template>