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
	<div class="section">
		<DBaseInput type="date" v-model:value="input" @error="console.log"></DBaseInput>
	</div>
	<div class="section">
		<DSelect default-appearance="blue"></DSelect>
		<DSelect default-appearance="red"></DSelect>
		<DSelect default-appearance="green"></DSelect>
		<DSelect default-appearance="skyBlue"></DSelect>
		<DSelect default-appearance="yellow"></DSelect>
		<DSelect default-appearance="gray"></DSelect>
		<DSelect default-appearance="lime"></DSelect>
		<DSelect default-appearance="brownie"></DSelect>
		<DSelect default-appearance="purple"></DSelect>
		<DSelect default-appearance="gold"></DSelect>
	</div>
	<div class="section">
		<DBaseButton icon="key">Guardar</DBaseButton>
	</div>
	<div class="section">
		<DButton icon="key" @click="console.log('hola')">Guardar</DButton>
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
		<DButton>Guardar</DButton>
		<DButton default-appearance="red">Guardar</DButton>
		<DButton default-appearance="green">Guardar</DButton>
		<DButton default-appearance="skyBlue">Guardar</DButton>
		<DButton default-appearance="yellow">Guardar</DButton>
		<DButton default-appearance="gray">Guardar</DButton>
		<DButton default-appearance="lime">Guardar</DButton>
		<DButton default-appearance="brownie">Guardar</DButton>
		<DButton default-appearance="purple">Guardar</DButton>
		<DButton default-appearance="gold">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" default-appearance="invert-blue">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-red">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-green">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-skyBlue">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-yellow">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-gray">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-lime">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-brownie">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-purple">Guardar</DButton>
		<DButton icon="key" default-appearance="invert-gold">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" default-appearance="blue"></DButton>
		<DButton icon="key" default-appearance="red"></DButton>
		<DButton icon="key" default-appearance="green"></DButton>
		<DButton icon="key" default-appearance="skyBlue"></DButton>
		<DButton icon="key" default-appearance="yellow"></DButton>
		<DButton icon="key" default-appearance="gray"></DButton>
		<DButton icon="key" default-appearance="lime"></DButton>
		<DButton icon="key" default-appearance="brownie"></DButton>
		<DButton icon="key" default-appearance="purple"></DButton>
		<DButton icon="key" default-appearance="gold"></DButton>
	</div>
	<div class="section">
		<DButton default-appearance="invert-blue">Guardar</DButton>
		<DButton default-appearance="invert-red">Guardar</DButton>
		<DButton default-appearance="invert-green">Guardar</DButton>
		<DButton default-appearance="invert-skyBlue">Guardar</DButton>
		<DButton default-appearance="invert-yellow">Guardar</DButton>
		<DButton default-appearance="invert-gray">Guardar</DButton>
		<DButton default-appearance="invert-lime">Guardar</DButton>
		<DButton default-appearance="invert-brownie">Guardar</DButton>
		<DButton default-appearance="invert-purple">Guardar</DButton>
		<DButton default-appearance="invert-gold">Guardar</DButton>
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