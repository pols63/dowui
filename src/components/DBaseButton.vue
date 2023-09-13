<script lang="ts">
import { Helpers, type BoundBorders } from './helpers'

export default {
	inheritAttrs: false
}
</script>

<script setup lang="ts">
import DIcon from './DIcon.vue'

const props = withDefaults(defineProps<{
	type?: 'button' | 'submit'
	focusable?: boolean
	icon?: string
	styleBody?: Partial<CSSStyleDeclaration>
	styleLabel?: Partial<CSSStyleDeclaration>
	styleIcon?: Partial<CSSStyleDeclaration>
}>(), {
	type: 'button',
	focusable: true,
})
</script>

<template>
	<component :is="focusable ? type : 'span'" class="d-button" :style="styleBody">
		<component :is="'span'" class="d-button__label" :style="styleLabel">
			<slot></slot>
		</component>
		<component :is="'span'" class="d-button__icon" v-if="!Helpers.Slot.isEmpty($slots.icon) || icon" :style="styleIcon">
			<slot name="icon" v-if="!Helpers.Slot.isEmpty($slots.icon) && !icon"></slot>
			<DIcon :icon="icon"></DIcon>
		</component>
	</component>
</template>