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
		<DBaseButton icon="key">Guardar</DBaseButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ bordered: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
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