<script setup lang="ts">
import { ref } from 'vue'
import DTooltip, { Align, Position } from './DTooltip.vue'

const tooltipVisible = ref<boolean>(false)
const body = ref<HTMLElement>()
</script>

<template>
	<div>
		<div @click="tooltipVisible = true" ref="body">Hola</div>
		<DTooltip v-model:visible="tooltipVisible" :appearance="{ position: Position.left, align: Align.start, borderWidth: 2 }" :target="body">
			<div style="white-space: nowrap;">Esta es la lista de opciones</div>
			<div>Esta es la lista de opciones</div>
		</DTooltip>
	</div>
</template>