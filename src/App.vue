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
	<div class="section">
		<DButton icon="key">Guardar</DButton>
		<DButton icon="key" default-appearance="red">Guardar</DButton>
		<DButton icon="key" default-appearance="green">Guardar</DButton>
		<DButton icon="key" default-appearance="skyBlue">Guardar</DButton>
		<DButton icon="key" default-appearance="yellow">Guardar</DButton>
		<DButton icon="key" default-appearance="gray">Guardar</DButton>
		<DButton icon="key" default-appearance="lime">Guardar</DButton>
		<DButton icon="key" default-appearance="brownie">Guardar</DButton>
		<DButton icon="key" default-appearance="purple">Guardar</DButton>
		<DButton icon="key" default-appearance="gold">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="red" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="green" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="skyBlue" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="yellow" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="gray" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="lime" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="brownie" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="purple" :appearance="{ invert: true }">Guardar</DButton>
		<DButton icon="key" default-appearance="gold" :appearance="{ invert: true }">Guardar</DButton>
	</div>
</template>

<style lang="scss">
@import '/dowuiicons/dowuiicons.css';

.section {
	padding: 20px;
}
</style>