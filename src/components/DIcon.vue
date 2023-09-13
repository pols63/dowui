<script setup lang="ts">
defineProps<{
	icon?: string
}>()
</script>

<template>
	<span class="dowuiicons-font" v-if="icon" :class="'i-' + icon"></span>
</template>