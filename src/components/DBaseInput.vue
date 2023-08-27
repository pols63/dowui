<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits<{
	(evemt: 'update:value', value: string | number): void
	(evemt: 'error', value: boolean): void
}>()

const props = withDefaults( defineProps<{
	type?: 'text' | 'number' | 'date'
	value?: string | number | null
}>(), {
	type: 'text'
})

const inputValue = ref<string>()
const thereIsAnError = ref<boolean>(false)

const updateValue = (from: string | number | undefined | null, to: 'event' | 'input') => {
	let result: string | number = ''
	thereIsAnError.value = false
	switch (props.type) {
		case 'text': {
			if (from == null) {
				result = ''
			} else if (typeof from == 'string') {
				result = from
			} else if (typeof from == 'number') {
				result = from.toString()
			} else {
				thereIsAnError.value = true
				result = (from as any).toString()
			}
			break
		}
		case 'number': {
			switch (to) {
				case 'event': {
					if (typeof from == 'string') {
						if (!from) {
							result = 0
						} else if (from.match(/^-?\d*(\.\d+)?$/)) {
							result = Number(from)
							if (result > 999999999999999.9 || result < -999999999999999.9 || !(result >= 0.9999999999999999 || result <= -0.9999999999999999)) {
								thereIsAnError.value = true
								result = 0
							}
						} else {
							thereIsAnError.value = true
							result = 0
						}
					} else {
						thereIsAnError.value = true
						result = 0
					}
					break
				}
				case 'input': {
					if (typeof from == 'string') {
						if (!from) {
							result = ''
						} else if (from.match(/^-?\d*(\.\d+)?$/)) {
							result = Number(from)
							if (result > 999999999999999.9 || result < -999999999999999.9 || !(result >= 0.9999999999999999 || result <= -0.9999999999999999)) {
								thereIsAnError.value = true
								result = from
							}
						} else {
							thereIsAnError.value = true
							result = from
						}
					} else if (typeof from == 'number') {
						const fromToString = from.toString()
						if (isNaN(from) || from > 999999999999999.9 || from < -999999999999999.9 || !(from >= 0.9999999999999999 || from <= -0.9999999999999999)) {
							thereIsAnError.value = true
						}
						result = fromToString
					} else if (from == null) {
						result = ''
					} else {
						thereIsAnError.value = true
						result = (from as any).toString()
					}
					break
				}
			}
		}
	}

	switch (to) {
		case 'event':
			emit('update:value', result)
			emit('error', thereIsAnError.value)
			break
		case 'input':
			if (inputValue.value !== result) {
				if (inputValue.value == '' && (
					(typeof result == 'string' && result != '0')
					|| (typeof result == 'number' && result != 0)
				)) {
					inputValue.value = typeof result == 'number' ? result.toString() : result
					emit('error', thereIsAnError.value)
				}
			}
			break
	}
}

watch(() => props.value, (newValue) => {
	updateValue(newValue, 'input')
})

const inputEvent = (event: Event) => {
	updateValue(inputValue.value, 'event')
}
</script>

<template>
	<input v-model="inputValue" @input="inputEvent($event)">
</template>

<style lang="scss"></style>