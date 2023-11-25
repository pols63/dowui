import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vitePluginDts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vitePluginDts()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		outDir: 'lib',
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'Dowui',
			fileName: 'dowui',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'vue'
				}
			}
		}
	},
})