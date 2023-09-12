<script setup lang="ts">
import { ref } from 'vue'
import DTooltip, { Align } from './DTooltip.vue'

const tooltipVisible = ref<boolean>(false)
const body = ref<HTMLElement>()
</script>

<template>
	<div>
		<div @click="tooltipVisible = true" ref="body">Hola</div>
		<DTooltip v-model:visible="tooltipVisible" :appearance="{ align: Align.start, borderWidth: 2 }" :target="body">
			<div style="white-space: nowrap;">Esta es la lista de opciones</div>
			<div>Esta es la lista de opciones</div>
		</DTooltip>
	</div>
</template>