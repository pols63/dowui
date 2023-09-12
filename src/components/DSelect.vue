<script setup lang="ts">
import { ref } from 'vue'
import DTooltip from './DTooltip.vue'

const tooltipVisible = ref<boolean>(false)
const body = ref<HTMLElement>()
</script>

<template>
	<div>
		<div @click="tooltipVisible = true" ref="body">Hola</div>
		<DTooltip v-model:visible="tooltipVisible" :appearance="{ backgroundColor: 'silver' }" :target="body">Esta es la lista de opciones</DTooltip>
	</div>
</template>