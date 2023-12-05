<script lang="ts">
import { type ColorsKey } from '@/core/utilities'

export type Style = {
	colorSchema?: ColorsKey
	mode?: 'light' | 'normal' | 'dark'
	bordered?: boolean
	ghost?: boolean
}

export default {
	inheritAttrs: false
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import DTooltip, { Align } from './DTooltip.vue'
import DButton from './DButton.vue'

withDefaults(defineProps<{
	cStyle?: Style
	disabled?: boolean
	value?: string
}>(), {})

const tooltipVisible = ref<boolean>(false)
const body = ref<HTMLElement>()
</script>

<template>
	<div class="d-select" ref="body" tabindex="0" @click="tooltipVisible = true">
		<div class="d-select__label">Hola</div>
		<DButton :focusable="false" icon="down" :c-style="{ ghost: true, colorSchema: cStyle?.colorSchema, focusHalo: false }"></DButton>
		<DTooltip v-model:visible="tooltipVisible" :appearance="{ align: Align.start, borderWidth: 2, padding: [5, 10, 15, 20] }" :target="body">
			<div style="white-space: nowrap;">Esta es la lista de opciones</div>
			<div>Esta es la lista de opciones</div>
		</DTooltip>
	</div>
</template>

<style lang="scss">
.d-select {
	display: inline-grid;
	grid-template-columns: 1fr min-content;
	align-items: stretch;
	grid-auto-flow: column;
	cursor: default;
	user-select: none;
	border: 1px solid var(--borderColor);
	border-radius: var(--borderRadius);
	padding: 0px;

	.d-select__label {
		padding: var(--padding);
		justify-self: stretch;
	}
}
</style>@/core/utilities