<script lang="ts">
import { Utilities, Colors } from './utilities'

export type Appearance = {
	padding: number | string
	borderRadius: number | string
	borderColor: string
	focusColor: string
	focusSize: number | string
}

export const defaultAppearance: Record<string, Appearance> = (() => {
	const result: Record<string, Appearance> = {}
	const base = {
		padding: 7,
		borderRadius: 4,
		focusSize: 4,
	}
	for (const color in Colors) {
		let colorValue0 = (Colors as Record<string, string>)[color]
		
		let focusColor = ''
		if (['lime', 'gold'].includes(color)) {
			focusColor = Utilities.Color.calculate(colorValue0, { light: -0.1 })
		} else {
			focusColor = Utilities.Color.calculate(colorValue0, { light: 0.4 })
		}

		result[color] = {
			...base,
			borderColor: colorValue0,
			focusColor,
		}
	}
	return result
})()

export default {
	inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DTooltip, { Align, Position } from './DTooltip.vue'
import DButton from './DButton.vue'

const props = withDefaults(defineProps<{
	appearance?: Partial<Appearance>
	defaultAppearance?: string
}>(), {
	defaultAppearance: 'blue',
})

const tooltipVisible = ref<boolean>(false)
const body = ref<HTMLElement>()

const _appearance = computed(() => {
	return {
		...defaultAppearance[props.defaultAppearance],
		...props.appearance
	}
})

</script>

<template>
	<div class="d-select" ref="body" tabindex="0" @click="tooltipVisible = true" :style="{
		'--padding': _appearance.padding + (typeof _appearance.padding == 'number' ? 'px' : ''),
		'--borderColor': _appearance.borderColor,
		'--borderRadius': _appearance.borderRadius + (typeof _appearance.borderRadius == 'number' ? 'px' : ''),
		'--focusColor': _appearance.focusColor,
	}">
		<div class="d-select__label">Hola</div>
		<DButton :focusable="false" icon="down" :default-appearance="'invert-' + $props.defaultAppearance" :appearance="{ iconSize: '0.75em', borderColor: 'transparent' }"></DButton>
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
</style>