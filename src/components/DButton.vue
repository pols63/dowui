<script lang="ts">
import { Helpers, type BoundBorders } from './helpers'

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
	iconColor: string
	labelPadding: BoundBorders
	color: string
	backgroundColor: string | string[]
	borderRadius: number
	backLight: boolean
	invert: boolean
}

export const defaultAppearance: Appearance = {
	padding: 1,
	labelPadding: 5,
	iconPadding: 5,
	iconPosition: IconPosition.right,
	iconSize: 28,
	iconColor: '#124AEA',
	color: 'white',
	backgroundColor: ['#124AEA', '#1288EA', '#12EAC9'],
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
import DBaseButton from './DBaseButton.vue'
import DIcon from './DIcon.vue'

const props = withDefaults(defineProps<{
	appearance?: Partial<Appearance>
	type?: 'button' | 'submit'
	focusable?: boolean
	icon?: string
	preventDoubleClick?: boolean
}>(), {
	type: 'button',
	focusable: true,
	preventDoubleClick: false
})

const _appearance = reactive<Appearance>(defaultAppearance)

const backgroundColor = computed(() => props.appearance?.backgroundColor ?? _appearance.backgroundColor)
</script>

<template>
	<DBaseButton :icon="icon" :type="type" :focusable="focusable" class="d-button" :style="{
			background: backgroundColor instanceof Array ? ('linear-gradient(45deg,' + backgroundColor.join(',') + ')') : '',
			backgroundColor: backgroundColor instanceof Array ? '' : backgroundColor,
			padding: (appearance?.padding ?? _appearance.padding) + 'px',
			borderRadius: (appearance?.borderRadius ?? _appearance.borderRadius) + 'px'
		}">
		<span class="d-button__light" v-if="appearance?.backLight ?? _appearance.backLight" :style="{
				background: backgroundColor instanceof Array ? ('linear-gradient(45deg,' + backgroundColor.join(',') + ')') : '',
				backgroundColor: backgroundColor instanceof Array ? '' : backgroundColor,
			}"></span>
		<span class="d-button__content" :style="{
				borderRadius: ((appearance?.borderRadius ?? _appearance.borderRadius) - (appearance?.padding ?? _appearance.padding)) + 'px' 
			}">
			<span class="d-button__icon" v-if="!Helpers.Slot.isEmpty($slots.icon) || icon" :style="{
					color: appearance?.color ?? _appearance.color,
					padding: Helpers.getBoundBordersString(appearance?.iconPadding ?? _appearance.iconPadding),
				}">
				<DIcon :icon="icon"></DIcon>
				<slot name="icon" v-if="!Helpers.Slot.isEmpty($slots.icon) && !icon"></slot>
			</span>
			<span class="d-button__label" :style="{
					color: appearance?.color ?? _appearance.color,
					padding: (appearance?.labelPadding ?? _appearance.labelPadding) + 'px'
				}">
				<slot></slot>
			</span>
		</span>
	</DBaseButton>
</template>

<style lang="scss">
.d-button {
	border: none;
	position: relative;
	box-sizing: border-box;

	.d-button__light {
		position: absolute;
		top: 5px;
		bottom: -3px;
		left: 5px;
		right: 5px;
		z-index: -1;
		border-radius: 30%;
		filter: blur(5px);
	}

	.d-button__content {
		display: inline-grid;
		grid-auto-flow: column;
		align-items: stretch;
		transition: all 0.2s ease;
		border: 2px dashed transparent;
		box-sizing: content-box;

		.d-button__label {
			display: grid;
			align-items: center;
			justify-items: center;
		}

		.d-button__icon {
			display: grid;
			align-items: center;
			justify-items: center;
		}

	}

	&:focus {
		.d-button__content {
			border: 2px dashed calculate-color(white, 1, 0.2);
		}
	}

	&:hover {
		.d-button__content {
			border: 2px dashed calculate-color(white, 1, 0.2);
		}
	}

	&:active {
		.d-button__content {
			border: 2px solid calculate-color(white, 1, 0.2);
			background-color: calculate-color(white, 1, 0.2);
		}
	}
}
</style>