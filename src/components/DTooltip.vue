<script lang="ts">
import { reactive } from 'vue'
import { Utilities, type BoundBorders, type ColorsKey } from '@/core/utilities'

export type Position = 'top' | 'bottom' | 'vertical' | 'left' | 'right' | 'horizontal' 

export type Align = 'start' | 'center' | 'end'

export type Style = {
	colorSchema?: ColorsKey
	mode?: 'light' | 'normal' | 'dark'
	margin?: BoundBorders
	position?: Position
	align?: Align
	arrowSize?: number
	bordered?: boolean
	filled?: boolean
	zIndex?: number
}

export const defaultStyle: Required<Style> = {
	colorSchema: 'blue',
	mode: 'normal',
	margin: 5,
	position: 'bottom',
	align: 'center',
	arrowSize: 7,
	bordered: false,
	filled: false,
	zIndex: 1
}

export default {
	inheritAttrs: false
}

const borderRadius = 8
</script>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
	target?: HTMLElement
	visible?: boolean
	teleportTo?: string
	cStyle?: Style
}>(), {
	visible: false,
	teleportTo: 'body',
})

let interval: number
const _visible = ref<boolean>(false)

const emit = defineEmits<{
	(e: 'update:visible', value: boolean): void
	(e: 'shown'): void
}>()

watch(() => _visible.value, (newValue) => {
	emit('update:visible', newValue)
	if (newValue) {
		interval = setInterval(() => {
			const targetCoords = props.target?.getBoundingClientRect()
			if (targetCoords?.x != currentTargetElementClientRect?.x || targetCoords?.y != currentTargetElementClientRect?.y || targetCoords?.width != currentTargetElementClientRect?.width || targetCoords?.height != currentTargetElementClientRect?.height) _visible.value = false
		}, 500)
	} else {
		clearInterval(interval)
	}
})

watch(() => props.visible, (newValue) => {
	_visible.value = newValue
})

let currentTargetElementClientRect: DOMRect | undefined = undefined

const contentElement = ref<HTMLElement | undefined>()
const contentElementCoords = reactive<{
	maxHeight: number | null
	maxWidth: number | null
	x: number
	y: number
}>({
	maxHeight: null,
	maxWidth: null,
	x: 0,
	y: 0
})
const arrowElementCoords = reactive<{
	visible: boolean
	style: {
		borderTopWidth: string
		borderBottomWidth: string
		borderLeftWidth: string
		borderRightWidth: string
		borderTopColor: string
		borderBottomColor: string
		borderLeftColor: string
		borderRightColor: string
	}
	x: number
	y: number
}>({
	visible: false,
	style: {
		borderTopWidth: '',
		borderBottomWidth: '',
		borderLeftWidth: '',
		borderRightWidth: '',
		borderTopColor: '',
		borderBottomColor: '',
		borderLeftColor: '',
		borderRightColor: '',
	},
	x: 0,
	y: 0
})

const getBoundingClientRect = async () => {
	await nextTick()
	return (contentElement.value as HTMLElement)?.getBoundingClientRect()
}

const calculatePosition = async () => {
	if (!props.target) return

	/* Obtiene las coordenadas del objeto objetivo */
	currentTargetElementClientRect = props.target.getBoundingClientRect()
	
	const margins = Utilities.Borders.getBoundBorders(props.cStyle?.margin ?? defaultStyle.margin)
	const arrowSize = props.cStyle?.arrowSize ?? defaultStyle.arrowSize

	/* Elimina los límites de tamaño del elemento de contenido de forma que se adapte a sus elementos hijos */
	contentElementCoords.maxWidth = null
	contentElementCoords.maxHeight = null
	contentElementCoords.x = 0
	contentElementCoords.y = 0
	let contentElementClientRect = await getBoundingClientRect()
	
	const requiredSpace = {
		height: contentElementClientRect.height + arrowSize,
		width: contentElementClientRect.width + arrowSize,
	}

	const availableSpaces = {
		top: currentTargetElementClientRect.y - margins[0],
		bottom: window.innerHeight - currentTargetElementClientRect.y - currentTargetElementClientRect.height - margins[2],
		left: currentTargetElementClientRect.x - margins[3],
		right: window.innerWidth - currentTargetElementClientRect.x - currentTargetElementClientRect.width - margins[1],
		height: window.innerHeight - margins[0] - margins[2],
		width: window.innerHeight - margins[1] - margins[3],
	}

	/* Calcula la ubicación del tooltip */
	let position = props.cStyle?.position ?? defaultStyle.position
	const align = props.cStyle?.align ?? defaultStyle.align

	/* Según las dimensiones disponibles, identifica el lugar en donde se ubicará el tooltip */
	let finalPosition: Position = position
	switch (position) {
		case 'top':
			if (requiredSpace.height > availableSpaces.top) {
				if (requiredSpace.height > availableSpaces.bottom) {
					finalPosition = 'vertical'
				} else {
					finalPosition = 'bottom'
				}
			}
			break
		case 'bottom':
			if (requiredSpace.height > availableSpaces.bottom) {
				if (requiredSpace.height > availableSpaces.top) {
					finalPosition = 'vertical'
				} else {
					finalPosition = 'top'
				}
			}
			break
		case 'left':
			if (requiredSpace.width > availableSpaces.left) {
				if (requiredSpace.width > availableSpaces.right) {
					finalPosition = 'horizontal'
				} else {
					finalPosition = 'right'
				}
			}
			break
		case 'right':
			if (requiredSpace.width > availableSpaces.right) {
				if (requiredSpace.width > availableSpaces.left) {
					finalPosition = 'horizontal'
				} else {
					finalPosition = 'left'
				}
			}
			break
	}

	/* Establece las dimensiones finales del contenido según la posición final del tooltip */
	switch (finalPosition) {
		case 'top':
		case 'bottom':
		case 'vertical':
			contentElementCoords.maxWidth = availableSpaces.width
			break
		case 'left':
		case 'right':
		case 'horizontal':
			contentElementCoords.maxHeight = availableSpaces.height
	}
	switch (finalPosition) {
		case 'top':
			contentElementCoords.maxHeight = availableSpaces.top - arrowSize
			break
		case 'bottom':
			contentElementCoords.maxHeight = availableSpaces.bottom - arrowSize
			break
		case 'vertical':
			contentElementCoords.maxHeight = availableSpaces.height
			break
		case 'left':
			contentElementCoords.maxWidth = availableSpaces.left - arrowSize
			break
		case 'right':
			contentElementCoords.maxWidth = availableSpaces.right - arrowSize
			break
		case 'horizontal':
			contentElementCoords.maxWidth = availableSpaces.width
			break
	}
	contentElementClientRect = await getBoundingClientRect()

	/* Ubica el tooltip según la posición calculada. Realiza el cálculo sobre el eje principal según la posición escogida */
	switch (finalPosition) {
		case 'top':
			contentElementCoords.y = currentTargetElementClientRect.y - contentElementClientRect.height - arrowSize
			break
		case 'bottom':
			contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height + arrowSize
			arrowElementCoords.y = contentElementCoords.y - arrowSize
			arrowElementCoords.visible = true
			break
		case 'vertical':
			contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height / 2 - contentElementClientRect.height / 2
			/* Se corrige si es necesario */
			if (contentElementCoords.y < margins[0]) {
				contentElementCoords.y = margins[0]
			} else if (contentElementCoords.y + contentElementClientRect.height > window.innerHeight - margins[2]) {
				contentElementCoords.y = window.innerHeight - margins[2] - contentElementClientRect.height
			}
			break
		case 'left':
			contentElementCoords.x = currentTargetElementClientRect.x - contentElementClientRect.width - arrowSize
			break
		case 'right':
			contentElementCoords.x = currentTargetElementClientRect.x + currentTargetElementClientRect.width + arrowSize
			break
		case 'horizontal':
			contentElementCoords.x = currentTargetElementClientRect.x + currentTargetElementClientRect.width / 2 - contentElementClientRect.width / 2
			/* Se corrige si es necesario */
			if (contentElementCoords.x < margins[3]) {
				contentElementCoords.x = margins[3]
			} else if (contentElementCoords.x + contentElementClientRect.width > window.innerWidth - margins[1]) {
				contentElementCoords.x = window.innerWidth - margins[1] - contentElementClientRect.width
			}
			break
	}

	/* Ubica la posición del tooltip en el eje secundario, según la alineación escogida */
	switch (finalPosition) {
		case 'top':
		case 'bottom':
		case 'vertical':
			switch (align) {
				case 'start':
					contentElementCoords.x = currentTargetElementClientRect.x
					break
				case 'center':
					contentElementCoords.x = currentTargetElementClientRect.x + currentTargetElementClientRect.width / 2 - contentElementClientRect.width / 2
					break
				case 'end':
					contentElementCoords.x = currentTargetElementClientRect.x + currentTargetElementClientRect.width - contentElementClientRect.width
					break
			}
			/* Se corrige si es necesario */
			if (contentElementCoords.x < margins[3]) {
				contentElementCoords.x = margins[3]
			} else if (contentElementCoords.x + contentElementClientRect.width > window.innerWidth - margins[1]) {
				contentElementCoords.x = window.innerWidth - margins[1] - contentElementClientRect.width
			}
			break
		case 'left':
		case 'right':
		case 'horizontal':
			switch (align) {
				case 'start':
					contentElementCoords.y = currentTargetElementClientRect.y
					break
				case 'center':
					contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height / 2 - contentElementClientRect.height / 2
					break
				case 'end':
					contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height - contentElementClientRect.height
					break
			}
			/* Se corrige si es necesario */
			if (contentElementCoords.y < margins[0]) {
				contentElementCoords.y = margins[0]
			} else if (contentElementCoords.y + contentElementClientRect.height > window.innerHeight - margins[2]) {
				contentElementCoords.y = window.innerHeight - margins[2] - contentElementClientRect.height
			}
			break
	}
	
	/* Posicionamiento del arrow */
	if (finalPosition == 'horizontal' || finalPosition == 'vertical') {
		arrowElementCoords.visible = false
	} else {
		arrowElementCoords.visible = true
		switch (finalPosition) {
			case 'top':
			case 'bottom':
				switch (align) {
					case 'start':
						arrowElementCoords.x = Math.max(currentTargetElementClientRect.x, contentElementCoords.x) + borderRadius
						break
					case 'center':
						arrowElementCoords.x = Math.min(currentTargetElementClientRect.x + currentTargetElementClientRect.width / 2, contentElementCoords.x + contentElementClientRect.width / 2) - arrowSize / 2
						break
					case 'end':
						arrowElementCoords.x = Math.min(currentTargetElementClientRect.x + currentTargetElementClientRect.width, contentElementCoords.x + contentElementClientRect.width) - borderRadius - arrowSize
						break
				}
				break
			case 'left':
			case 'right':
				switch (align) {
					case 'start':
						arrowElementCoords.y = contentElementCoords.y + borderRadius
						break
					case 'center':
						arrowElementCoords.y = contentElementCoords.y + contentElementClientRect.height / 2 - arrowSize / 2
						break
					case 'end':
						contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height - contentElementClientRect.height
						break
				}
				break
		}

		switch (finalPosition) {
			case 'left':
				arrowElementCoords.x = currentTargetElementClientRect.x + - arrowSize
				break
			case 'right':
				arrowElementCoords.x = currentTargetElementClientRect.x + currentTargetElementClientRect.width
				break
			case 'top':
				arrowElementCoords.y = currentTargetElementClientRect.y - arrowSize
				break
		}

		/* Estilo del arrow */
		switch (finalPosition) {
			case 'top':
				arrowElementCoords.style.borderTopWidth = arrowSize + 'px'
				arrowElementCoords.style.borderBottomWidth = '0px'
				arrowElementCoords.style.borderBottomColor = 'transparent'
				break
			case 'bottom':
				arrowElementCoords.style.borderBottomWidth = arrowSize + 'px'
				arrowElementCoords.style.borderTopWidth = '0px'
				arrowElementCoords.style.borderTopColor = 'transparent'
				break
			case 'left':
				arrowElementCoords.style.borderLeftWidth = arrowSize + 'px'
				arrowElementCoords.style.borderRightWidth = '0px'
				arrowElementCoords.style.borderRightColor = 'transparent'
				break
			case 'right':
				arrowElementCoords.style.borderRightWidth = arrowSize + 'px'
				arrowElementCoords.style.borderLeftWidth = '0px'
				arrowElementCoords.style.borderLeftColor = 'transparent'
				break
		}

		switch (finalPosition) {
			case 'top':
			case 'bottom':
				arrowElementCoords.style.borderLeftWidth = (arrowSize / 1.5) + 'px'
				arrowElementCoords.style.borderLeftColor = 'transparent'
				arrowElementCoords.style.borderRightWidth = (arrowSize / 1.5) + 'px'
				arrowElementCoords.style.borderRightColor = 'transparent'
				break
			case 'left':
			case 'right':
				arrowElementCoords.style.borderTopWidth = (arrowSize / 1.5) + 'px'
				arrowElementCoords.style.borderTopColor = 'transparent'
				arrowElementCoords.style.borderBottomWidth = (arrowSize / 1.5) + 'px'
				arrowElementCoords.style.borderBottomColor = 'transparent'
				break
		}
	}
}

const setPosition = async (el: Element, done: () => void) => {
	if (!props.target) {
		emit('update:visible', false)
		return
	}
	await calculatePosition()

	const elementToFocus = contentElement.value?.querySelector('[autofocus]')
	if (elementToFocus) {
		(elementToFocus as HTMLElement).focus()
	} else {
		contentElement.value?.focus()
	}
}

const focusuot = (event: FocusEvent) => {
	// if (!contentElement.value?.contains(event.relatedTarget as HTMLElement)) _visible.value = false
}
</script>

<template>
	<teleport :to="teleportTo">
		<transition name="fade" @enter="setPosition" @after-enter="$emit('shown')">
			<div class="d-tooltip" v-if="_visible" :class="[
					'dc-bordered-' + (cStyle?.bordered ?? defaultStyle.bordered),
					'dc-color-' + (cStyle?.colorSchema ?? defaultStyle.colorSchema),
					'dc-filled-' + (cStyle?.filled ?? defaultStyle.filled),
					'dc-mode-' + (cStyle?.mode ?? defaultStyle.mode),
				]" :style="{
					zIndex: cStyle?.zIndex ?? defaultStyle.zIndex,
				}">
				<div class="d-tooltip__arrow" v-if="arrowElementCoords.visible" :style="{
						...arrowElementCoords.style,
						top: arrowElementCoords.y + 'px',
						left: arrowElementCoords.x + 'px',
					}"></div>
				<div class="d-tooltip__content" ref="contentElement" tabindex="0" @focusout="focusuot($event)" :style="{
						maxHeight: contentElementCoords.maxHeight + 'px',
						maxWidth: contentElementCoords.maxWidth + 'px',
						top: contentElementCoords.y + 'px',
						left: contentElementCoords.x + 'px',
						borderRadius: borderRadius + 'px',
					}">
					<slot></slot>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<style lang="scss">
@mixin set-vars($color-name, $color, $mode) {
	@if $mode == 'light' {
		@if ($color-name == lime or $color-name == yellow) {
			--shadow-color: #{calculate-color($color, -0.4, 0.75)};
			--border-color: #{calculate-color($color, -0.5, 1)};
		} @else {
			--shadow-color: #{calculate-color($color, 0, 0.75)};
			--border-color: #{calculate-color($color, -0.3, 1)};
		}
	}
	@if $mode == 'normal' {
		--border-color: #{calculate-color($color, -0.3, 1)};
		@if ($color-name == lime or $color-name == yellow) {
			--shadow-color: #{calculate-color($color, -0.4, 0.75)};
		} @else {
			--shadow-color: #{calculate-color($color, 0, 0.75)};
		}
	}
	@if $mode == 'dark' {
		--border-color: #{calculate-color($color, -0.8, 1)};
		@if ($color-name == lime or $color-name == yellow) {
			--shadow-color: #{calculate-color($color, -0.4, 0.75)};
		} @else {
			--shadow-color: #{calculate-color($color, 0, 0.75)};
		}
	}
}

.d-tooltip {
	left: 0px;
	top: 0px;
	width: 0px;
	height: 0px;
	position: fixed;
	filter: drop-shadow(0px 0px 5px var(--shadow-color));
	cursor: default;
	--border-width: 2px;

	@each $color-name, $color in $colors {
		&.dc-color-#{$color-name} {
			&.dc-mode {
				&-light {
					@include set-vars($color-name, $color, 'light');
				}
				&-normal {
					@include set-vars($color-name, $color, 'normal');
				}
				&-dark {
					@include set-vars($color-name, $color, 'dark');
				}
			}
		}
	}

	&.dc-filled {
		&-true {
			.d-tooltip__content {
				background-color: var(--border-color);
			}
			.d-tooltip__arrow {
				border-color: var(--border-color);
			}
		}
		&-false {
			.d-tooltip__content {
				background-color: white;
			}
		}
	}

	&.dc-bordered {
		&-true {
			.d-tooltip__content {
				border: var(--border-width) solid var(--border-color);
			}
			.d-tooltip__arrow {
				border-color: var(--border-color);
			}
		}
		&-false {
			.d-tooltip__content {
				border: var(--border-width) solid transparent;
			}
		}
	}

	.d-tooltip__arrow {
		position: fixed;
		border-style: solid;
		border-top-width: 0px;
		border-left-color: transparent;
		border-right-color: transparent;
		border-color: white;
	}

	.d-tooltip__content {
		position: fixed;
		box-sizing: border-box;
		padding: 5px;

		&:focus-visible {
			outline: none;
		}
	}

	&.fade {
		&-enter-from, &-leave-to {
			opacity: 0;
		}

		&-enter-active, &-leave-active {
			transition: opacity 0.2s;
		}

		&-enter-to, &-leave-fom {
			opacity: 1;
		}
	}
}
</style>