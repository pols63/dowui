<script lang="ts">
import { Utilities, Colors } from '@/helpers/utilities'

export enum IconPosition {
	top = 'top',
	bottom = 'bottom',
	left = 'left',
	right = 'right',
}

export type Style = {
	padding: number | string
	gap: number | string
	borderRadius: number | string
	borderColor: string
	color: string
	background: string | {
		from: string
		to: string
	}
	/* Icon */
	iconPosition: IconPosition
	iconSize: number | string
}

export type Appearance = {
	class: keyof typeof Colors
	default: Style
	hover: Style
	active: Style
	disabled: Style
}

export const defaultAppearance: Record<string, Appearance> = (() => {
	const result: Record<string, Appearance> = {}
	const base = {
		padding: 7,
		gap: 7,
		borderRadius: 4,
		iconPadding: 0,
		iconPosition: IconPosition.left,
		iconSize: 18,
		labelPadding: 0,
		focusSize: 4,
	}
	for (const color in Colors) {
		let colorValue0 = (Colors as Record<string, string>)[color]
		let fontColor = 'white'
		if (['lime', 'gold'].includes(color)) {
			fontColor = 'black'
		}
		const colorValue2 = Utilities.Color.calculate(colorValue0, { light: -0.1 })
		let focusColor = ''
		if (['lime', 'gold'].includes(color)) {
			focusColor = Utilities.Color.calculate(colorValue0, { light: -0.1 })
		} else {
			focusColor = Utilities.Color.calculate(colorValue0, { light: 0.4 })
		}

		result[color] = {
			...base,
			borderColor: 'transparent',
			color: fontColor,
			focusColor,
			backgroundColor: colorValue0,
			backgroundColorHover: colorValue2,
			clickColor: 'white',
		}

		fontColor = colorValue0
		if (['lime', 'gold'].includes(color)) {
			fontColor = Utilities.Color.calculate(colorValue0, { light: -0.2 })
		}
		const colorValue7 = Utilities.Color.calculate(fontColor, { light: 0.95 })
		result['invert-' + color] = {
			...base,
			borderColor: fontColor,
			color: fontColor,
			focusColor,
			backgroundColor: 'white',
			backgroundColorHover: colorValue7,
			clickColor: fontColor,
		}
	}
	return result
})()

export default {
	inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, useSlots, reactive, ref, nextTick } from 'vue'
import DBaseButton from './DBaseButton.vue'
import DIcon from './DIcon.vue'

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

const props = withDefaults(defineProps<{
	appearance?: Partial<Appearance>
	defaultAppearance?: string
	type?: 'button' | 'submit'
	focusable?: boolean
	icon?: string
	preventDoubleClick?: boolean
}>(), {
	defaultAppearance: 'blue',
	type: 'button',
	focusable: true,
	preventDoubleClick: false
})

const clickElement = reactive<{
	x: string
	y: string
	size: number
	animating: boolean
}>({
	x: '0px',
	y: '0px',
	size: 0,
	animating: false,
})
const bodyElement = ref<InstanceType<typeof DBaseButton>>()

const slots = useSlots()

const _appearance = computed(() => {
	return {
		...defaultAppearance[props.defaultAppearance],
		...props.appearance
	}
})

const iconSlotIsEmpty = computed(() => Utilities.Slot.isEmpty(slots.icon))
const labelSlotIsEmpty = computed(() => Utilities.Slot.isEmpty(slots.default))

const gridTemplateAreas = computed(() => {
	if (!props.icon && iconSlotIsEmpty.value) {
		return '"label"'
	} else {
		switch (_appearance.value.iconPosition) {
			case IconPosition.top:
				return "'icon' 'label'"
			case IconPosition.bottom:
				return "'label' 'icon'"
			case IconPosition.left:
				return "'icon label'"
			case IconPosition.right:
				return "'label icon'"
		}
	}
})

const click = async (event: MouseEvent) => {
	clickElement.animating = false
	await nextTick()
	if (event instanceof TouchEvent) {
		clickElement.x = '50%'
		clickElement.y = '50%'
	} else {
		let x = event.offsetX
		let y = event.offsetY
		if (event.target != event.currentTarget) {
			x += (event.target as HTMLElement).offsetLeft
			y += (event.target as HTMLElement).offsetTop
		}
		clickElement.x = x + 'px'
		clickElement.y = y + 'px'
	}

	/* Obtiene las dimensiones del botón para escalar el punto creciente hasta un tamaño máximo */
	const rect = (bodyElement.value?.$refs.element as HTMLElement).getBoundingClientRect()
	const maxWidth = rect.width * 2
	const maxHeight = rect.height * 2
	clickElement.size = Math.max(maxHeight, maxWidth) / 10
	clickElement.animating = true
	emit('click', event)
}
</script>

<template>
	<DBaseButton :icon="icon" :type="type" :focusable="focusable" class="d-button" @click="click" ref="bodyElement" :style="{
		'--padding': _appearance.padding + (typeof _appearance.padding == 'number' ? 'px' : ''),
		'gap': labelSlotIsEmpty ? '0px' : (_appearance.gap + (typeof _appearance.gap == 'number' ? 'px' : '')),
		'--borderRadius': _appearance.borderRadius + (typeof _appearance.borderRadius == 'number' ? 'px' : ''),
		'--borderColor': _appearance.borderColor,
		'--color': _appearance.color,
		'--focusColor': _appearance.focusColor,
		'--focusSize': _appearance.focusSize + (typeof _appearance.focusSize == 'number' ? 'px' : ''),
		'--backgroundColor': _appearance.backgroundColor,
		'--backgroundColorHover': _appearance.backgroundColorHover,
		'--iconPadding': _appearance.iconPadding + (typeof _appearance.iconPadding == 'number' ? 'px' : ''),
		'--iconSize': _appearance.iconSize + (typeof _appearance.iconSize == 'number' ? 'px' : ''),
		'--labelPadding': _appearance.labelPadding + (typeof _appearance.labelPadding == 'number' ? 'px' : ''),
		'--clickColor': _appearance.clickColor,
		gridTemplateAreas: gridTemplateAreas
	}">
		<span class="d-button__click" :class="clickElement.animating ? 'animating' : ''" :style="{
			'--x': clickElement.x,
			'--y': clickElement.y,
			'--size': clickElement.size,
		}"></span>
		<span class="d-button__icon" v-if="!Utilities.Slot.isEmpty($slots.icon) || icon">
			<DIcon :icon="icon"></DIcon>
			<slot name="icon" v-if="!Utilities.Slot.isEmpty($slots.icon) && !icon"></slot>
		</span>
		<span class="d-button__label" v-if="!Utilities.Slot.isEmpty($slots.default)">
			<slot></slot>
		</span>
	</DBaseButton>
</template>

<style lang="scss">
.d-button {
	position: relative;
	padding: var(--padding);
	border: 1px solid var(--borderColor);
	color: var(--color);
	box-sizing: border-box;
	display: inline-grid;
	grid-auto-flow: column;
	align-items: stretch;
	background-color: var(--backgroundColor);
	border-radius: var(--borderRadius);
	overflow: hidden;
	transition: all 0.2s;
	outline: 0px solid var(--focusColor);

	.d-button__click {
		transform-origin: center;
		top: -10px;
		left: -10px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		position: absolute;
		background: radial-gradient(var(--clickColor) 0%, var(--clickColor) 40%, transparent 90%);
		opacity: 0;
		z-index: 1;

		&.animating {
			animation: 0.5s forwards clicking ease-out;
		}
	}

	@keyframes clicking {
		0% {
			opacity: 0;
			transform: translate(var(--x), var(--y)) scale(0);
		}

		20% {
			opacity: 0.4;
		}

		100% {
			opacity: 0;
			transform: translate(var(--x), var(--y)) scale(var(--size));
		}
	}

	.d-button__label {
		display: grid;
		grid-area: label;
		align-items: center;
		justify-items: center;
		padding: var(--labelPadding);
	}

	.d-button__icon {
		display: grid;
		align-items: center;
		justify-items: center;
		padding: var(--iconPadding);
		font-size: var(--iconSize);
	}

	&:focus {
		transition: all 0.2s;
		outline: var(--focusSize) solid var(--focusColor);
	}

	&:hover {
		background-color: var(--backgroundColorHover);
	}
}
</style>