import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
	build: {
		lib: {
			entry: 'src/index.ts', // 👈 Le dices a Vite dónde está tu archivo de entrada
			name: 'Dowui',
			fileName: (format) => `index.${format}.js`,
		}
	}
})
