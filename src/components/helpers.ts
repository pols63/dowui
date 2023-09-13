import { Comment, type Slot, type VNode } from 'vue'

export type BoundBorders = number | [number, number] | [number, number, number, number]

function asArray(arg: VNode | VNode[]) {
	return Array.isArray(arg) ? arg : arg != null ? [arg] : []
}

export const Helpers = {
	getBoundBorders: (value?: null | BoundBorders): [number, number, number, number] => {
		if (typeof value == 'number') {
			return [value, value, value, value]
		} else if (value == null) {
			return [0, 0, 0, 0]
		} else if (value.length == 2) {
			return [value[0], value[1], value[0], value[1]]
		} else {
			return value
		}
	},
	getBoundBordersString: (value?: null | BoundBorders): string => {
		return Helpers.getBoundBorders(value).map(v => `${v}px`).join(' ')
	},
	Slot: {
		isEmpty(slot: Slot | undefined | null, props: any = {}) {
			const vnode: VNode | VNode[] | undefined | null = slot?.(props)
			return !vnode || asArray(vnode).every((vnode) => vnode.type === Comment || (typeof vnode.children == 'string' && vnode.children.trim() == ''))
		}
	}
}