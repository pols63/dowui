<script lang="ts">
import { Utilities, Colors } from './utilities'

export enum IconPosition {
	top = 'top',
	bottom = 'bottom',
	left = 'left',
	right = 'right',
}

export type Appearance = {
	padding: number | string
	borderRadius: number | string
	borderColor: string
	color: string
	/* Icon */
	iconPadding: number | string
	iconPosition: IconPosition,
	iconSize: number
	iconBackgroundColor: string
	iconBackgroundColorHover: string
	iconBackgroundColorActive: string
	/* Label */
	labelPadding: number | string
	labelBackgroundColor: string
	labelBackgroundColorHover: string
	labelBackgroundColorActive: string
}

export const defaultAppearance: Record<string, Appearance> = (() => {
	const result: Record<string, Appearance> = {}
	for (const color in Colors) {
		let colorValue0 = (Colors as Record<string, string>)[color]
		if (['lime'].includes(color)) {
			colorValue0 = Utilities.Color.calculate(colorValue0, { light: -0.2 })
		} else if (['gold'].includes(color)) {
			colorValue0 = Utilities.Color.calculate(colorValue0, { light: -0.2 })
		}
		const colorValue1 = Utilities.Color.calculate(colorValue0, { light: -0.2 })
		const colorValue2 = Utilities.Color.calculate(colorValue0, { light: -0.1 })
		const colorValue3 = Utilities.Color.calculate(colorValue0, { light: 0.1 })
		const colorValue4 = Utilities.Color.calculate(colorValue0, { light: 0.2 })
		result[color] = {
			padding: 2,
			borderRadius: 4,
			borderColor: 'transparent',
			color: 'white',
			/* Icon */
			iconPadding: 5,
			iconPosition: IconPosition.bottom,
			iconSize: 24,
			iconBackgroundColor: colorValue4,
			iconBackgroundColorHover: colorValue3,
			iconBackgroundColorActive: colorValue0,
			/* Label */
			labelPadding: 5,
			labelBackgroundColor: colorValue0,
			labelBackgroundColorHover: colorValue2,
			labelBackgroundColorActive: colorValue1,
		}

		const colorValue5 = Utilities.Color.calculate(colorValue0, { light: 0.85 })
		const colorValue6 = Utilities.Color.calculate(colorValue0, { light: 0.9 })
		const colorValue7 = Utilities.Color.calculate(colorValue0, { light: 0.95 })
		result['invert-' + color] = {
			padding: 2,
			borderRadius: 4,
			borderColor: colorValue0,
			color: colorValue0,
			/* Icon */
			iconPadding: 5,
			iconPosition: IconPosition.bottom,
			iconSize: 18,
			iconBackgroundColor: colorValue7,
			iconBackgroundColorHover: colorValue6,
			iconBackgroundColorActive: colorValue5,
			/* Label */
			labelPadding: 5,
			labelBackgroundColor: 'white',
			labelBackgroundColorHover: colorValue7,
			labelBackgroundColorActive: colorValue6,
		}
	}
	return result
})()

export default {
	inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import DBaseButton from './DBaseButton.vue'
import DIcon from './DIcon.vue'

const slots = useSlots()

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

const _appearance = computed(() => {
	return {
		...defaultAppearance[props.defaultAppearance],
		...props.appearance
	}
})

const iconSlotIsEmpty = computed(() => Utilities.Slot.isEmpty(slots.icon))

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
</script>

<template>
	<DBaseButton :icon="icon" :type="type" :focusable="focusable" class="d-button" :style="{
		'--padding': _appearance.padding + (typeof _appearance.padding == 'number' ? 'px' : ''),
		'--borderRadius': _appearance.borderRadius + (typeof _appearance.borderRadius == 'number' ? 'px' : ''),
		'--borderColor': _appearance.borderColor,
		'--color': _appearance.color,
		'--iconPadding': _appearance.iconPadding + (typeof _appearance.iconPadding == 'number' ? 'px' : ''),
		'--iconSize': _appearance.iconSize + (typeof _appearance.iconSize == 'number' ? 'px' : ''),
		'--iconBackgroundColor': _appearance.iconBackgroundColor,
		'--iconBackgroundColorHover': _appearance.iconBackgroundColorHover,
		'--iconBackgroundColorActive': _appearance.iconBackgroundColorActive,
		'--labelPadding': _appearance.labelPadding + (typeof _appearance.labelPadding == 'number' ? 'px' : ''),
		'--labelBackgroundColor': _appearance.labelBackgroundColor,
		'--labelBackgroundColorHover': _appearance.labelBackgroundColorHover,
		'--labelBackgroundColorActive': _appearance.labelBackgroundColorActive,
		gridTemplateAreas: gridTemplateAreas
	}">
		<span class="d-button__border"></span>
		<span class="d-button__icon" v-if="!Utilities.Slot.isEmpty($slots.icon) || icon">
			<DIcon :icon="icon"></DIcon>
			<slot name="icon" v-if="!Utilities.Slot.isEmpty($slots.icon) && !icon"></slot>
		</span>
		<span class="d-button__label">
			<slot></slot>
		</span>
	</DBaseButton>
</template>

<style lang="scss">
.d-button {
	position: relative;
	padding: 0px;
	border: none;
	color: var(--color);
	box-sizing: border-box;
	display: inline-grid;
	grid-auto-flow: column;
	align-items: stretch;
	background-color: var(--labelBackgroundColor);
	border-radius: var(--borderRadius);
	overflow: hidden;

	.d-button__border {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		border-radius: var(--borderRadius);
		border: 1px solid var(--borderColor);
	}

	.d-button__label {
		display: grid;
		grid-area: label;
		align-items: center;
		justify-items: center;
		padding: var(--labelPadding);
		background-color: var(--labelBackgroundColor);
	}

	.d-button__icon {
		display: grid;
		align-items: center;
		justify-items: center;
		padding: var(--iconPadding);
		background-color: var(--iconBackgroundColor);
		font-size: var(--iconSize);
	}

	&:focus,
	&:hover {
		outline: none;

		.d-button__icon {
			background-color: var(--iconBackgroundColorHover);
		}

		.d-button__label {
			background-color: var(--labelBackgroundColorHover);
		}
	}

	&:active {
		.d-button__icon {
			background-color: var(--iconBackgroundColorActive);
		}

		.d-button__label {
			background-color: var(--labelBackgroundColorActive);
		}
	}
}
</style>