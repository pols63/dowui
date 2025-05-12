import DBaseButton from './components/DBaseButton.vue'
import DBaseInput from './components/DBaseInput.vue'
import type { App } from 'vue'

export { DBaseButton, DBaseInput }

export default {
	install(app: App) {
		app.component('DBaseButton', DBaseButton)
		app.component('DBaseInput', DBaseInput)
	}
}