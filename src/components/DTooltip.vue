<script lang="ts">
import { reactive } from 'vue'
import { Helpers } from './helpers'

export enum Position {
	top = 'top',
	bottom = 'bottom',
	vertical = 'vertical',
	left = 'left',
	right = 'right',
	horizontal = 'horizontal'
}

export enum Align {
	start = 'start',
	center = 'center',
	end = 'end',
}

export type Appearance = {
	padding: number | [number, number, number, number]
	margin: number | [number, number, number, number]
	position: Position
	align: Align
	arrowSize: number
	borderColor: string
	backgroundColor: string
	shadow: string
	zIndex: number
}

export const defaultAppearance: Appearance = {
	padding: 5,
	margin: 5,
	position: Position.bottom,
	align: Align.center,
	arrowSize: 15,
	borderColor: 'white',
	backgroundColor: 'white',
	shadow: '0px 0px 5px black',
	zIndex: 9999999
}

export default {
	inheritAttrs: false
}

</script>

<script setup lang="ts">
import { nextTick, ref, useAttrs, watch, onMounted } from 'vue'

const props = withDefaults(defineProps<{
	target?: HTMLElement
	visible?: boolean
	teleportTo?: string
	appearance?: Partial<Appearance>
}>(), {
	visible: false,
	position: Position.bottom,
	teleportTo: 'body',
})

let interval: number
const _visible = ref<boolean>(false)
const _appearance = reactive<Appearance>(defaultAppearance)

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

const getBoundingClientRect = async () => {
	await nextTick()
	return (contentElement.value as HTMLElement)?.getBoundingClientRect()
}

const calculatePosition = async () => {
	if (!props.target) return

	/* Obtiene las coordenadas del objeto objetivo */
	currentTargetElementClientRect = props.target.getBoundingClientRect()
	
	const margins = Helpers.calculateBoundborders(props.appearance?.margin, _appearance.margin)
	const arrowSize = props.appearance?.arrowSize ?? _appearance.arrowSize

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
	let position = props.appearance?.position ?? _appearance.position
	const align = props.appearance?.align ?? _appearance.align

	/* Según las dimensiones disponibles, identifica el lugar en donde se ubicará el tooltip */
	let finalPosition: Position = position
	switch (position) {
		case Position.top:
			if (requiredSpace.height > availableSpaces.top) {
				if (requiredSpace.height > availableSpaces.bottom) {
					finalPosition = Position.vertical
				} else {
					finalPosition = Position.bottom
				}
			}
			break
		case Position.bottom:
			if (requiredSpace.height > availableSpaces.bottom) {
				if (requiredSpace.height > availableSpaces.top) {
					finalPosition = Position.vertical
				} else {
					finalPosition = Position.top
				}
			}
			break
		case Position.left:
			if (requiredSpace.width > availableSpaces.left) {
				if (requiredSpace.width > availableSpaces.right) {
					finalPosition = Position.horizontal
				} else {
					finalPosition = Position.right
				}
			}
			break
		case Position.right:
			if (requiredSpace.width > availableSpaces.right) {
				if (requiredSpace.width > availableSpaces.left) {
					finalPosition = Position.horizontal
				} else {
					finalPosition = Position.left
				}
			}
			break
	}

	/* Establece las dimensiones finales del contenido según la posición final del tooltip */
	switch (finalPosition) {
		case Position.top:
		case Position.bottom:
		case Position.vertical:
			contentElementCoords.maxWidth = availableSpaces.width
			break
		case Position.left:
		case Position.right:
		case Position.horizontal:
			contentElementCoords.maxHeight = availableSpaces.height
	}
	switch (finalPosition) {
		case Position.top:
			contentElementCoords.maxHeight = availableSpaces.top - arrowSize
			break
		case Position.bottom:
			contentElementCoords.maxHeight = availableSpaces.bottom - arrowSize
			break
		case Position.vertical:
			contentElementCoords.maxHeight = availableSpaces.height
			break
		case Position.left:
			contentElementCoords.maxWidth = availableSpaces.left - arrowSize
			break
		case Position.right:
			contentElementCoords.maxWidth = availableSpaces.right - arrowSize
			break
		case Position.horizontal:
			contentElementCoords.maxWidth = availableSpaces.width
			break
	}
	contentElementClientRect = await getBoundingClientRect()

	/* Ubica el tooltip según la posición calculada. Realiza el cálculo sobre el eje principal según la posición escogida */
	switch (finalPosition) {
		case Position.top:
			contentElementCoords.y = currentTargetElementClientRect.y - contentElementClientRect.height - arrowSize
			break
		case Position.bottom:
			contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height + arrowSize
			break
		case Position.vertical:
			contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height / 2 - contentElementClientRect.height / 2
			/* Se corrige si es necesario */
			if (contentElementCoords.y < margins[0]) {
				contentElementCoords.y = margins[0]
			} else if (contentElementCoords.y + contentElementClientRect.height > window.innerHeight - margins[2]) {
				contentElementCoords.y = window.innerHeight - margins[2] - contentElementClientRect.height
			}
			break
		case Position.left:
			contentElementCoords.x = currentTargetElementClientRect.x - contentElementClientRect.width - arrowSize
			break
		case Position.right:
			contentElementCoords.x = currentTargetElementClientRect.x + currentTargetElementClientRect.width + arrowSize
			break
		case Position.horizontal:
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
		case Position.top:
		case Position.bottom:
		case Position.vertical:
			switch (align) {
				case Align.start:
					contentElementCoords.x = currentTargetElementClientRect.x
					break
				case Align.center:
					contentElementCoords.x = currentTargetElementClientRect.x + currentTargetElementClientRect.width / 2 - contentElementClientRect.width / 2
					break
				case Align.end:
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
		case Position.left:
		case Position.right:
		case Position.horizontal:
			switch (align) {
				case Align.start:
					contentElementCoords.y = currentTargetElementClientRect.y
					break
				case Align.center:
					contentElementCoords.y = currentTargetElementClientRect.y + currentTargetElementClientRect.height / 2 - contentElementClientRect.height / 2
					break
				case Align.end:
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
}

const setPosition = async () => {
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
	if (!contentElement.value?.contains(event.relatedTarget as HTMLElement)) _visible.value = false
}
</script>

<template>
	<teleport :to="teleportTo">
		<transition name="fade" @enter="setPosition()" @after-enter="$emit('shown')">
			<div class="d-tooltip" v-if="_visible">
				<div class="d-tooltip__arrow"></div>
				<div class="d-tooltip__content" ref="contentElement" tabindex="0" @focusout="focusuot($event)" :style="{
						maxHeight: contentElementCoords.maxHeight + 'px',
						maxWidth: contentElementCoords.maxWidth + 'px',
						top: contentElementCoords.y + 'px',
						left: contentElementCoords.x + 'px'
					}">
					<slot></slot>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<style lang="scss">
.d-tooltip {
	filter: drop-shadow(v-bind('$props.appearance?.shadow ?? _appearance.shadow'));
	z-index: v-bind('$props.appearance?.zIndex ?? _appearance.zIndex');
	position: fixed;

	.d-tooltip__content {
		background-color: v-bind('$props.appearance?.backgroundColor ?? _appearance.backgroundColor');
		padding: v-bind('$props.appearance?.padding ?? _appearance.padding');
		border-radius: 4px;
		width: fit-content;
		position: fixed;
		box-sizing: border-box;

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