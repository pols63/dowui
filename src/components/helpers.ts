export const Helpers = {
	calculateBoundborders: (value: null | undefined | number | [number, number, number, number], defaultValue: number | [number, number, number, number]): [number, number, number, number] => {
		let target: number | [number, number, number, number] = 0

		if (value) {
			target = value
		} else {
			target = defaultValue
		}

		if (typeof target == 'number') {
			target = [target, target, target, target]
		}
		return target
	}
}