import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		dts({
			include: ['src'], // asegúrate que incluya tu código fuente
			insertTypesEntry: true,
			outDir: 'dist',      // Asegúrate de que coincida con tu build
		})
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
