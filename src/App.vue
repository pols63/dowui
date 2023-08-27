<script setup lang="ts">
import DBaseInput from './components/DBaseInput.vue'
import { ref } from 'vue'

const input = ref()

Object.defineProperties(window, {
	input: {
		value: input
	}
})
</script>

<template>
	<DBaseInput type="number" v-model:value="input" @error="console.log"></DBaseInput>
</template>