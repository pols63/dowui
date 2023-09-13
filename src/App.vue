<script setup lang="ts">
import DBaseInput from './components/DBaseInput.vue'
import { ref } from 'vue'
import DSelect from './components/DSelect.vue'
import DBaseButton from './components/DBaseButton.vue'
import DButton from './components/DButton.vue'

const input = ref()

Object.defineProperties(window, {
	input: {
		value: input
	}
})
</script>

<template>
	<DBaseInput type="date" v-model:value="input" @error="console.log"></DBaseInput>
	<DSelect></DSelect>
	<DBaseButton icon="key">Guardar</DBaseButton>
	<div>
		<DButton icon="key" :appearance="{ backLight: true }">Guardar</DButton>
	</div>
	<DButton icon="key" :appearance="{ backLight: true }">Guardar</DButton>
</template>

<style lang="scss">
@import '/dowuiicons/dowuiicons.css';
</style>