<script lang="ts">
import { Utilities, Colors, type ColorsKey } from '@/core/utilities'

export type IconPositions = 'top' | 'bottom' | 'left' | 'right'

export type Modes = 'light' | 'normal' | 'dark'

export type Style = {
	iconPosition?: IconPositions,
	colorSchema?: keyof typeof Colors
	mode?: Modes
	bordered?: boolean
	ghost?: boolean
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
// const labelSlotIsEmpty = computed(() => Utilities.Slot.isEmpty(slots.default))

const gridTemplateAreas = computed(() => {
	if (!props.icon && iconSlotIsEmpty.value) {
		return '"label"'
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