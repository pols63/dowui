<script lang="ts">
import { Utilities, type ColorsKey } from '@/core/utilities'

export type Style = {
	iconPosition?: 'top' | 'bottom' | 'left' | 'right'
	colorSchema?: ColorsKey
	mode?: 'light' | 'normal' | 'dark'
	bordered?: boolean
	ghost?: boolean
	iconBackground?: boolean
	size?: 'small' | 'normal' | 'large'
}

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
	type?: 'button' | 'submit'
	focusable?: boolean
	icon?: string
	preventDoubleClick?: boolean
	cStyle?: Style
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

const iconSlotIsEmpty = computed(() => Utilities.Slot.isEmpty(slots.icon))
const labelSlotIsEmpty = computed(() => Utilities.Slot.isEmpty(slots.default))

const gridTemplateAreas = computed(() => {
	if (!props.icon && iconSlotIsEmpty.value) {
		return '"label"'
	} else if ((props.icon || !iconSlotIsEmpty.value) && labelSlotIsEmpty.value) {
		return '"icon"'
	} else {
		switch (props.cStyle?.iconPosition ?? 'left') {
			case 'top':
				return "'icon' 'label'"
			case 'bottom':
				return "'label' 'icon'"
			case 'left':
				return "'icon label'"
			case 'right':
				return "'label icon'"
		}
		return ''
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
		gridTemplateAreas: gridTemplateAreas
	}" :class="[
		'dc-color-' + (cStyle?.colorSchema ?? 'blue'),
		'dc-mode-' + (cStyle?.mode ?? 'normal'),
		'dc-icon-background-' + (cStyle?.iconBackground ?? true),
		'dc-bordered-' + (cStyle?.bordered ?? true),
	]">
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
@mixin set-vars-light($color-name, $color) {
	--background-from: white;
	--shadow-color: #{calculate-color($color, 0, 0.75)};
	--outline-hover: #{calculate-color($color, 0.5, 1)};
	--outline-active: #{calculate-color($color, 0.3, 1)};
	--click-color: #{$color};
	@if ($color-name == lime or $color-name == yellow) {
		--background-icon-color: #{calculate-color($color, -0.2, 0.5)};
		--background-to: #{calculate-color($color, 0.6, 1)};
		--border-color: #{calculate-color($color, -0.5, 1)};
		--color: #{calculate-color($color, -0.5, 1)};
	} @else {
		--background-icon-color: #{calculate-color($color, 0.2, 0.5)};
		--background-to: #{calculate-color($color, 0.8, 1)};
		--border-color: #{calculate-color($color, -0.3, 1)};
		--color: #{calculate-color($color, -0.3, 1)};
	}
}

@mixin set-vars-normal($color-name, $color) {
	--border-color: #{calculate-color($color, -0.3, 1)};
	--background-from: #{$color};
	--background-to: #{calculate-color($color, -0.2, 1)};
	--shadow-color: #{calculate-color($color, 0, 0.75)};
	--background-icon-color: #{calculate-color($color, -0.5, 0.5)};
	--outline-hover: #{calculate-color($color, 0.5, 1)};
	--outline-active: #{calculate-color($color, 0.3, 1)};
	--click-color: white;
	@if ($color-name == lime or $color-name == yellow) {
		--color: black;
	} @else {
		--color: white;
	}
}

@mixin set-vars-dark($color-name, $color) {
	--border-color: #{calculate-color($color, -0.3, 1)};
	--background-from: #{$color};
	--background-to: #{calculate-color($color, -0.2, 1)};
	--shadow-color: #{calculate-color($color, 0, 0.75)};
	--background-icon-color: #{calculate-color($color, -0.4, 1)};
	--outline-hover: #{calculate-color($color, 0.5, 1)};
	--outline-active: #{calculate-color($color, 0.3, 1)};
	--click-color: white;
	@debug $color-name;
	@if ($color-name == lime or $color-name == yellow) {
		--color: black;
	} @else {
		--color: white;
	}
}

.d-button {
	position: relative;
	border: 1px solid var(--borderColor);
	box-sizing: border-box;
	display: inline-grid;
	grid-auto-flow: column;
	align-items: stretch;
	background: linear-gradient(180deg, var(--background-from), var(--background-to));
	border-radius: 8px;
	gap: 4px;
	overflow: hidden;
	transition: all 0.1s;
	box-shadow: 0px 0px 5px var(--shadow-color);
	outline: 0px solid transparent;

	@each $color-name, $color in $colors {
		&.dc-color-#{$color-name} {
			&.dc-mode-light {
				@include set-vars-light($color-name, $color);
			}
			&.dc-mode-normal {
				@include set-vars-normal($color-name, $color);
			}
			&.dc-mode-dark {
				@include set-vars-dark($color-name, $color);
			}
		}
	}

	&.dc-bordered {
		&-true {
			padding: 4px;
			border: 1px solid var(--border-color);
		}
		&-false {
			padding: 5px;
			border: 0px solid transparent;
		}
	}

	&.dc-icon-background {
		&-true {
			.d-button__icon {
				background-color: var(--background-icon-color);
			}
		}
		&-false {
			.d-button__icon {
				background-color: transparent;
			}
		}
	}

	&:hover, &:focus {
		outline: 4px solid var(--outline-hover);
	}

	.d-button__click {
		transform-origin: center;
		top: -10px;
		left: -10px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		position: absolute;
		background: radial-gradient(var(--click-color) 0%, var(--click-color) 40%, transparent 90%);
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
		padding: 0px 4px;
		display: grid;
		grid-area: label;
		align-items: center;
		justify-items: center;
		color: var(--color);
	}

	.d-button__icon {
		display: grid;
		align-items: center;
		justify-items: center;
		padding: 4px;
		font-size: inherit;
		color: var(--color);
		border-radius: 5px;
	}
}
</style>