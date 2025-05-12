<script lang="ts">
import { PUtilsDate, PUtilsNumber, PUtilsString } from 'pols-utils'
</script>

<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'

const emit = defineEmits<{
	(evemt: 'update:value', value: string | number | null): void
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
	decimals: 0
})

const inputValue = ref<string | null>()
const inputElement = ref<HTMLElement>()
let numberValue: number | null
let dateValue: Date | null
let stringValue: string | null

const updateValue = (value: string | number | undefined | null | unknown, from: 'input' | 'property') => {
	numberValue = null
	dateValue = null
	stringValue = null

	let thereIsAnError = false

	/* Analiza y transforma el dato de llegada */
	switch (props.type) {
		case 'text': {
			if (value == null) {
				stringValue = ''
			} else if (typeof value == 'string') {
				stringValue = value
			} else {
				try {
					stringValue = value.toString()
				} catch {
					stringValue = ''
				}
			}
			break
		}
		case 'number': {
			switch (from) {
				case 'input': {
					if (typeof value == 'string') {
						const temp = value.replace(/,/g, '').trim()
						if (!temp) {
							numberValue = 0
						} else if (temp.match(/^-?\d*(\.\d*)?$/)) {
							numberValue = Number(temp)
							if (numberValue > 999999999999999.9 || numberValue < -999999999999999.9 || !(numberValue >= 0.9999999999999999 || numberValue <= -0.9999999999999999)) {
								thereIsAnError = true
								numberValue = 0
							}
						} else {
							thereIsAnError = true
							numberValue = 0
						}
					} else {
						thereIsAnError = true
						numberValue = 0
					}
					break
				}
				case 'property': {
					if (typeof value == 'string') {
						if (!value) {
							numberValue = 0
						} else if (value.match(/^-?\d*(\.\d+|\.)?$/)) {
							numberValue = Number(value)
							if (numberValue > 999999999999999.9 || numberValue < -999999999999999.9 || !(numberValue >= 0.9999999999999999 || numberValue <= -0.9999999999999999)) {
								thereIsAnError = true
							}
						} else {
							thereIsAnError = true
							numberValue = NaN
						}
					} else if (typeof value == 'number') {
						if (isNaN(value) || value > 999999999999999.9 || value < -999999999999999.9 || !(value >= 0.9999999999999999 || value <= -0.9999999999999999)) {
							thereIsAnError = true
						}
						numberValue = isNaN(value) ? value : PUtilsNumber.round(value, props.decimals)
					} else if (value == null) {
						numberValue = 0
					} else {
						thereIsAnError = true
						numberValue = NaN
					}
					break
				}
			}

			/* Validaciones de límites, en caso se hayan especificado */
			if (!thereIsAnError && !isNaN(numberValue)) {
				if ('gt' in props && typeof props.gt == 'number') thereIsAnError = numberValue <= props.gt
				if ('gte' in props && typeof props.gte == 'number') thereIsAnError = numberValue < props.gte
				if ('lt' in props && typeof props.lt == 'number') thereIsAnError = numberValue >= props.lt
				if ('lte' in props && typeof props.lte == 'number') thereIsAnError = numberValue > props.lte
			}
			break
		}
		case 'date': {
			switch (from) {
				case 'input': {
					if (typeof value == 'string' && value != '') {
						const now = new Date()
						let day = PUtilsString.padStart(now.getDate(), 2)
						let month = PUtilsString.padStart(now.getMonth() + 1, 2)
						let year = PUtilsString.padStart(now.getFullYear(), 4)

						if (value != '*') {
							const match = value.match(/^([0-9]{1,2})((\.|\/)?([0-9]{1,2})((\3)?([0-9]{1,4}))?)?$/)
							if (match) {
								day = PUtilsString.padStart(match[1], 2)
								month = match[4] ? PUtilsString.padStart(match[4], 2) : month
								year = match[7] ? PUtilsString.padStart(match[7], 4) : year
							} else {
								thereIsAnError = true
							}
						}

						if (!thereIsAnError) {
							const tempDate = new Date(`${year}-${month}-${day} 00:00:00`)
							thereIsAnError = isNaN(tempDate.getTime())
							dateValue = thereIsAnError ? null : tempDate
						}
					}
					break
				}
				case 'property': {
					if (typeof value == 'string') {
						if (!value.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)) {
							thereIsAnError = true
							dateValue = new Date(NaN)
						} else {
							const tempDate = new Date(`${value} 00:00:00`)
							thereIsAnError = isNaN(tempDate.getTime())
							dateValue = tempDate
						}
					} else if (value == null) {
						dateValue = null
					} else {
						thereIsAnError = true
						dateValue = new Date(NaN)
					}
					break
				}
			}
			break
		}
		case 'time': {
			// switch (to) {
			// 	case 'event': {
			// 		if (typeof value == 'string' && value != '') {
			// 			const now = new Date()
			// 			let hour = PUtilsString.padStart(now.getHours(), 2)
			// 			let minute = PUtilsString.padStart(now.getMinutes() + 1, 2)
			// 			let second = PUtilsString.padStart(now.getSeconds(), 4)

			// 			if (value != '*') {
			// 				const match = value.match(/^([0-9]{1,2})(:?([0-9]{1,2})(:?([0-9]{1,2}))?)?$/)
			// 				if (match) {
			// 					hour = PUtilsString.padStart(match[1], 2)
			// 					minute = match[3] ? PUtilsString.padStart(match[3], 2) : minute
			// 					second = match[5] ? PUtilsString.padStart(match[5], 2) : second
			// 				} else {
			// 					thereIsAnError = true
			// 				}
			// 			}

			// 			if (!thereIsAnError) {
			// 				if (hour > '23' || minute > '59' || second > '59') {
			// 					thereIsAnError = true
			// 					result = ''
			// 				} else {
			// 					result = `${hour}:${minute}:${second}`
			// 				}
			// 			}
			// 		}
			// 		break
			// 	}
			// 	case 'input': {
			// 		if (typeof value == 'string') {
			// 			const match = value.match(/^([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/)
			// 			thereIsAnError = !match || match[1] > '23' || match[2] > '59' || match[3] > '59'
			// 			result = value
			// 		} else if (value == null) {
			// 			result = ''
			// 		} else {
			// 			thereIsAnError = true
			// 			result = value.toString()
			// 		}
			// 		break
			// 	}
			// }
			break
		}
	}

	/* Analiza y muestra o asigna el valor encontrado */
	switch (from) {
		case 'input':
			switch (props.type) {
				case 'text':
					emit('update:value', stringValue)
					break
				case 'number':
					if (numberValue == null || isNaN(numberValue)) {
						emit('update:value', numberValue)
					} else {
						emit('update:value', PUtilsNumber.round(numberValue, props.decimals))
					}
					break
				case 'date':
					if (dateValue == null) {
						emit('update:value', null)
					} else if (isNaN(dateValue.getTime())) {
						emit('update:value', NaN)
					} else {
						emit('update:value', PUtilsDate.format(dateValue, '@y-@mm-@dd'))
					}
					break
			}
			emit('error', thereIsAnError)
			break
		case 'property':
			switch (props.type) {
				case 'text':
					inputValue.value = stringValue
					break
				case 'number':
					if (numberValue == null) {
						inputValue.value = null
					} else {
						inputValue.value = isNaN(numberValue) ? 'NaN' : PUtilsNumber.format(numberValue, { decimals: props.decimals })
					}
					break
				case 'date':
					if (dateValue == null) {
						inputValue.value = null
					} else {
						inputValue.value = isNaN(dateValue.getTime()) ? 'NaN' : PUtilsDate.format(dateValue, '@dd/@mm/@y')
					}
					break
			}
			emit('error', thereIsAnError)
			break
	}
}

watch(() => props.value, (newValue) => {
	if (document.activeElement !== inputElement.value) {
		updateValue(newValue, 'property')
	}
})

const setFormatted = async () => {
	updateValue(inputValue.value, 'input')
	switch (props.type) {
		case 'text':
			inputValue.value = stringValue
			break
		case 'number':
			if (numberValue == null) {
				inputValue.value = null
			} else {
				inputValue.value = isNaN(numberValue) ? 'NaN' : PUtilsNumber.format(numberValue, { decimals: 2 })
			}
			break
		case 'date':
			if (dateValue == null) {
				inputValue.value = null
			} else {
				inputValue.value = isNaN(dateValue.getTime()) ? 'NaN' : PUtilsDate.format(dateValue, '@dd/@mm/@y')
			}
			break
	}
}

</script>

<template>
	<input ref="inputElement" class="d-base-input" v-model="inputValue" @input="updateValue(inputValue, 'input')"
		@focusout="setFormatted()">
</template>

<style lang="scss" scoped>
.d-base-input {
	border: none;
	padding: 0px;

	&:focus,
	&:active {
		outline: none;
	}
}
</style>@/core/utilities