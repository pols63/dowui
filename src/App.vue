<script setup lang="ts">
import { ref } from 'vue'
import DBaseButton from './components/DBaseButton.vue'
import DButton from './components/DButton.vue'
import DSelect from './components/DSelect.vue'

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
		<DSelect :c-style="{ colorSchema: 'blue' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'red' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'green' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'sky-blue' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'yellow' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'gray' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'lime' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'brownie' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'purple' }"></DSelect>
		<DSelect :c-style="{ colorSchema: 'gold' }"></DSelect>
	</div>
	<div class="section">
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :disabled="true" :c-style="{ colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ iconBackground: false, colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ bordered: false, iconBackground: false, colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, bordered: false, colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ ghost: true, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, bordered: false, colorSchema: 'gold' }">Guardar</DButton>
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
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', iconBackground: false, colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'light', bordered: false, iconBackground: false, colorSchema: 'gold' }"></DButton>
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
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton icon="key" :disabled="true" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'light', bordered: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'red' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'green' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'yellow' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gray' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'lime' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'brownie' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'purple' }"></DButton>
		<DButton icon="key" :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gold' }"></DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
	</div>
	<div class="section">
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'red' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'green' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'sky-blue' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'yellow' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gray' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'lime' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'brownie' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'purple' }">Guardar</DButton>
		<DButton :c-style="{ ghost: true, mode: 'dark', bordered: false, iconBackground: false, colorSchema: 'gold' }">Guardar</DButton>
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