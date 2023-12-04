<script lang="ts">
import { Utilities } from '@/core/utilities'
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits<{
	(evemt: 'update:value', value: string | number): void
	(evemt: 'error', value: boolean): void
}>()

const props = withDefaults(defineProps<{
	type?: 'text'
	value?: string | null
} | {
	type: 'number'
	value?: string | number | null
	decimals?: number
	gt?: number
	gte?: number
	lt?: number
	lte?: number
} | {
	type: 'date' | 'time'
	value?: string | null
}>(), {
	type: 'text',
	decimals: 0,
})

const inputValue = ref<string>()
let currentValue: string | number | null | undefined

const updateValue = (from: string | number | undefined | null, to: 'event' | 'input') => {
	let result: string | number = ''
	let thereIsAnError = false
	switch (props.type) {
		case 'text': {
			if (from == null) {
				result = ''
			} else if (typeof from == 'string') {
				result = from
			} else if (typeof from == 'number') {
				result = from.toString()
			} else {
				thereIsAnError = true
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
								thereIsAnError = true
								result = 0
							}
						} else {
							thereIsAnError = true
							result = 0
						}
					} else {
						thereIsAnError = true
						result = 0
					}
					break
				}
				case 'input': {
					if (typeof from == 'string') {
						if (!from) {
							result = ''
						} else if (from.match(/^-?\d*(\.\d+|\.)?$/)) {
							result = Number(from)
							if (result > 999999999999999.9 || result < -999999999999999.9 || !(result >= 0.9999999999999999 || result <= -0.9999999999999999)) {
								thereIsAnError = true
								result = from
							}
						} else {
							thereIsAnError = true
							result = from
						}
					} else if (typeof from == 'number') {
						const fromToString = from.toString()
						if (isNaN(from) || from > 999999999999999.9 || from < -999999999999999.9 || !(from >= 0.9999999999999999 || from <= -0.9999999999999999)) {
							thereIsAnError = true
						}
						result = fromToString
					} else if (from == null) {
						result = ''
					} else {
						thereIsAnError = true
						result = (from as any).toString()
					}
					break
				}
			}

			/* Validaciones de límites, en caso se hayan especificado */
			if (!thereIsAnError && result != '') {
				const value = typeof result == 'number' ? result : Number(result)
				if ('gt' in props && typeof props.gt == 'number') thereIsAnError = value <= props.gt
				if ('gte' in props && typeof props.gte == 'number') thereIsAnError = value < props.gte
				if ('lt' in props && typeof props.lt == 'number') thereIsAnError = value >= props.lt
				if ('lte' in props && typeof props.lte == 'number') thereIsAnError = value > props.lte
			}
			break
		}
		case 'date': {
			switch (to) {
				case 'event': {
					if (typeof from == 'string' && from != '') {
						const now = new Date()
						let day = Utilities.padLeft(now.getDate(), 2, '0')
						let month = Utilities.padLeft(now.getMonth() + 1, 2, '0')
						let year = Utilities.padLeft(now.getFullYear(), 4, '0')

						if (from != '*') {
							const match = from.match(/^([0-9]{1,2})((\.|\/)?([0-9]{1,2})((\3)?([0-9]{1,4}))?)?$/)
							if (match) {
								day = Utilities.padLeft(match[1], 2, '0')
								month = match[4] ? Utilities.padLeft(match[4], 2, '0') : month
								year = match[7] ? Utilities.padLeft(match[7], 4, '0') : year
							} else {
								thereIsAnError = true
							}
						}

						if (!thereIsAnError) {
							const tempDate = new Date(`${year}-${month}-${day} 00:00:00`)
							if (isNaN(tempDate.getTime())) {
								thereIsAnError = true
								result = ''
							} else {
								result = Utilities.Date.format(tempDate, '@y-@mm-@dd')
							}
						}							
					}
					break
				}
				case 'input': {
					if (typeof from == 'string') {
						const tempDate = new Date(`${from} 00:00:00`)
						if (isNaN(tempDate.getTime())) {
							thereIsAnError = true
							result = from
						} else {
							result = Utilities.Date.format(tempDate, '@dd/@mm/@y')
						}
					} else if (from == null) {
						result = ''
					} else {
						thereIsAnError = true
						result = from.toString()
					}
					break
				}
			}
			break
		}
		case 'time': {
			switch (to) {
				case 'event': {
					if (typeof from == 'string' && from != '') {
						const now = new Date()
						let hour = Utilities.padLeft(now.getHours(), 2, '0')
						let minute = Utilities.padLeft(now.getMinutes() + 1, 2, '0')
						let second = Utilities.padLeft(now.getSeconds(), 4, '0')

						if (from != '*') {
							const match = from.match(/^([0-9]{1,2})(:?([0-9]{1,2})(:?([0-9]{1,2}))?)?$/)
							if (match) {
								hour = Utilities.padLeft(match[1], 2, '0')
								minute = match[3] ? Utilities.padLeft(match[3], 2, '0') : minute
								second = match[5] ? Utilities.padLeft(match[5], 2, '0') : second
							} else {
								thereIsAnError = true
							}
						}

						if (!thereIsAnError) {
							if (hour > '23' || minute > '59' || second > '59') {
								thereIsAnError = true
								result = ''
							} else {
								result = `${hour}:${minute}:${second}`
							}
						}							
					}
					break
				}
				case 'input': {
					if (typeof from == 'string') {
						const match = from.match(/^([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/)
						thereIsAnError = !match || match[1] > '23' || match[2] > '59' || match[3] > '59'
						result = from
					} else if (from == null) {
						result = ''
					} else {
						thereIsAnError = true
						result = from.toString()
					}
					break
				}
			}
			break
		}
	}

	switch (to) {
		case 'event':
			currentValue = result
			emit('update:value', result)
			emit('error', thereIsAnError)
			break
		case 'input':
			if (inputValue.value !== result) {
				inputValue.value = typeof result == 'number' ? result.toString() : result
				emit('error', thereIsAnError)
			}
			break
	}
}

watch(() => props.value, (newValue) => {
	if (newValue != currentValue) updateValue(newValue, 'input')
})

const inputEvent = (event: Event) => {
	updateValue(inputValue.value, 'event')
}

const changeEvent = (event: Event) => {
	if (!inputValue.value) return
	switch (props.type) {
		case 'number': {
			if (typeof currentValue == 'number') {
				inputValue.value = Utilities.Number.format(currentValue, props.decimals, '.', '')
				updateValue(inputValue.value, 'event')
			}
			break
		}
		case 'date': {
			if (typeof currentValue == 'string' && currentValue) {
				inputValue.value = Utilities.Date.format(new Date(`${currentValue} 00:00:00`), '@dd/@mm/@y')
				updateValue(inputValue.value, 'event')
			}
			break
		}
	}
}
</script>

<template>
	<input class="d-base-input" v-model="inputValue" @input="inputEvent($event)" @change="changeEvent">
</template>

<style lang="scss" scoped>
.d-base-input {
	border: none;
	padding: 0px;

	&:focus, &:active {
		outline: none;
	}
}
</style>@/core/utilities