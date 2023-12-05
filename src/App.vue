<script setup lang="ts">
import { ref } from 'vue'
import DBaseButton from './components/DBaseButton.vue'
import DButton from './components/DButton.vue'
// import DSelect from './components/DSelect.vue'
import DTooltip from './components/DTooltip.vue'

const input = ref()

Object.defineProperties(window, {
	input: {
		value: input
	}
})

const tooltipVisible = ref<boolean>(false)

const buttonWrapper = ref<HTMLElement>()

const showTooltip = () => {
	tooltipVisible.value = true
}
</script>

<template>
	<div class="section">
		<DBaseButton icon="key">Guardar</DBaseButton>
	</div>
	<div class="section">
		<span ref="buttonWrapper">
			<DButton icon="key" @click="showTooltip()" :c-style="{ colorSchema: 'gray' }" ref="boton">Guardar</DButton>
		</span>
		<DTooltip :target="buttonWrapper" v-model:visible="tooltipVisible" :c-style="{ colorSchema: 'blue' }">Esto es una prueba</DTooltip>
	</div>
</template>

<style lang="scss">
@import '/dowuiicons/dowuiicons.css';

.section {
	display: grid;
	grid-auto-flow: column;
	justify-items: start;
	gap: 10px;
	padding: 10px;
}
</style>