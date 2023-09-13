<script lang="ts">
import { Helpers, type BoundBorders } from './helpers'

export enum IconPosition {
	top = 'top',
	bottom = 'bottom',
	left = 'left',
	right = 'right',
}

export type Appearance = {
	padding: BoundBorders
	paddingLabel: BoundBorders
	paddingIcon: BoundBorders
	iconPosition: IconPosition,
	iconSize: number
	backgroundColor: string | {
		from: string
		to: string
	}
	borderRadius: number
	backLight: boolean
	invert: boolean
}

export const defaultAppearance: Appearance = {
	padding: 5,
	paddingLabel: 5,
	paddingIcon: 5,
	iconPosition: IconPosition.right,
	iconSize: 28,
	backgroundColor: '#0F34EF',
	borderRadius: 4,
	backLight: true,
	invert: false
}

export default {
	inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import DIcon from './DIcon.vue'

const props = withDefaults(defineProps<{
	appearance?: Appearance
	type?: 'button' | 'submit'
	focusable?: boolean,
	icon?: string
}>(), {
	type: 'button',
	focusable: true,
})

const _appearance = reactive<Appearance>(defaultAppearance)

const backgroundColor = computed(() => props.appearance?.backgroundColor ?? _appearance.backgroundColor)
</script>

<template>
	<component :is="focusable ? type : 'span'" class="d-button" :style="{
			backgroundColor: typeof backgroundColor == 'string' ? backgroundColor : '',
			background: typeof backgroundColor != 'string' ? ('linear-gradient(45deg, ' + backgroundColor.from + ', ' + backgroundColor.to + ')') : 'solid',
			padding: Helpers.getBoundBordersString(appearance?.padding ?? _appearance.padding),
			borderRadius: (appearance?.borderRadius ?? _appearance.borderRadius) + 'px'
		}">
		<div class="d-button__label" :style="{
				borderRadius: (appearance?.borderRadius ?? _appearance.borderRadius) + 'px',
				padding: Helpers.getBoundBordersString(appearance?.paddingLabel ?? _appearance.paddingLabel),
			}">
			<slot></slot>
		</div>
		<div class="d-button__icon" v-if="!Helpers.Slot.isEmpty($slots.icon) || icon">
			<slot name="icon" v-if="!Helpers.Slot.isEmpty($slots.icon) && !icon"></slot>
			<DIcon :icon="icon"></DIcon>
		</div>
	</component>
</template>

<style lang="scss">
.d-button {
	border: none;
	position: relative;

	.d-button__label {
		transition: all 0.2s ease;
		color: white;
	}

	&:hover {
		.d-button__label {
			background-color: calculate-color(white, 1, 0.2);
		}
	}
}
</style>