import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	css: {
		/* Esto permite que todos los componentes de forma implícita importen el archivo 'helpers' */
		preprocessorOptions: {
			scss: {
				additionalData: `@import '@/core/utilities';`
			}
		}
	},
})
