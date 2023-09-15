<script lang="ts">
import { Utilities, Colors, type BoundBorders } from './utilities'

export enum IconPosition {
	top = 'top',
	bottom = 'bottom',
	left = 'left',
	right = 'right',
}

export type Appearance = {
	padding: number
	iconPadding: BoundBorders
	iconPosition: IconPosition,
	iconSize: number
	labelPadding: BoundBorders
	color: string
	backgroundColor: string | string[]
	borderRadius: number
	borderColor: string
	backLight: boolean
	invert: boolean
}

export type AppearanceProfiles = Record<keyof typeof Colors, Appearance>

export const defaultAppearance: AppearanceProfiles = (() => {
	const result: Record<string, Appearance> = {}
	for (const color in Colors) {
		let colorValue = (Colors as Record<string, string>)[color]
		if (['lime', 'gold'].includes(color)) {
			colorValue = Utilities.Color.calculate(colorValue, { light: -0.15 })
		}
		const colorValue1 = Utilities.Color.calculate(colorValue, { light: 0.05 })
		const colorValue2 = Utilities.Color.calculate(colorValue, { light: -0.1 })
		let fontColor = 'white'
		// if (['lime', 'gold'].includes(color)) {
		// 	fontColor = 'black'
		// }
		result[color] = {
			padding: 2,
			labelPadding: 5,
			iconPadding: 5,
			iconPosition: IconPosition.left,
			iconSize: 18,
			color: fontColor,
			backgroundColor: [colorValue1, colorValue2],
			borderColor: colorValue,
			borderRadius: 4,
			backLight: false,
			invert: false
		}
	}
	return result as AppearanceProfiles
})()

export default {
	inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import DBaseButton from './DBaseButton.vue'
import DIcon from './DIcon.vue'

const props = withDefaults(defineProps<{
	appearance?: Partial<Appearance>
	defaultAppearance?: keyof typeof Colors
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

/* Estilos según los valores encontrados en appearance */
const dButtonStyle = computed(() => {
	const _backgroundColor = _appearance.value.backgroundColor

	let background = ''
	if (!_appearance.value.invert && _backgroundColor instanceof Array && _backgroundColor.length > 1) {
		background = 'linear-gradient(135deg,' + _backgroundColor.join(',') + ')'
	}

	let backgroundColor = ''
	if ((_backgroundColor instanceof Array && _backgroundColor.length == 1)) {
		backgroundColor = _backgroundColor[0]
	} else if (typeof _backgroundColor == 'string') {
		backgroundColor = _backgroundColor
	} else if (_appearance.value.invert) {
		backgroundColor = 'white'
	}

	let color = _appearance.value.color
	if (_appearance.value.invert) {
		color = _appearance.value.borderColor
	}

	let insetShadow = 'white'
	if (_appearance.value.invert) {
		insetShadow = _appearance.value.borderColor
	}

	return {
		background,
		backgroundColor,
		color,
		padding: _appearance.value.padding + 'px',
		borderRadius: _appearance.value.borderRadius + 'px',
		'--insetShadow': insetShadow,
	}
})

const gridTemplateAreas = computed(() => {
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
})
</script>

<template>
	<DBaseButton :icon="icon" :type="type" :focusable="focusable" class="d-button" :style="{
		...dButtonStyle,
		border: '1px solid ' + _appearance.borderColor,
		padding: _appearance.padding + 'px',
		borderRadius: _appearance.borderRadius + 'px'
	}">
		<span class="d-button__light" v-if="_appearance.backLight" :style="dButtonStyle"></span>
		<span class="d-button__icon" v-if="!Utilities.Slot.isEmpty($slots.icon) || icon" :style="{
			padding: Utilities.Borders.getBoundBordersString(_appearance.iconPadding),
			fontSize: _appearance.iconSize + 'px'
		}">
			<DIcon :icon="icon"></DIcon>
			<slot name="icon" v-if="!Utilities.Slot.isEmpty($slots.icon) && !icon"></slot>
		</span>
		<span class="d-button__label" :style="{
			padding: _appearance.labelPadding + 'px'
		}">
			<slot></slot>
		</span>
	</DBaseButton>
</template>

<style lang="scss">
.d-button {
	border: none;
	position: relative;
	box-sizing: border-box;
	display: inline-grid;
	grid-auto-flow: column;
	grid-template-areas: 'icon label';
	align-items: stretch;
	transition: all 0.2s ease;

	.d-button__light {
		position: absolute;
		top: 5px;
		bottom: -3px;
		left: 5px;
		right: 5px;
		z-index: -1;
		border-radius: 30%;
		filter: blur(5px);
		opacity: 0.7;
		transition: all 0.2s ease;
	}

	.d-button__label {
		display: grid;
		grid-area: label;
		align-items: center;
		justify-items: center;
	}

	.d-button__icon {
		display: grid;
		grid-area: icon;
		align-items: center;
		justify-items: center;
	}

	&:focus, &:hover {
		outline: none;
		box-shadow: inset 0px 0px 10px var(--insetShadow);

		.d-button__light {
			opacity: 1;
		}
	}

	&:active {
		box-shadow: inset 0px 0px 10px 3px var(--insetShadow);

		.d-button__light {
			opacity: 1;
		}
	}
}
</style>