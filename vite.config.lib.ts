import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginDts from 'vite-plugin-dts'
import * as fs from 'fs'

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
			entry: fs.readdirSync('./src/components').map(fileName => {
				const filePath = `./src/components/${fileName}`
				const stat = fs.statSync(filePath)
				if (stat.isDirectory()) return ''
				return filePath
			}).filter(filePath => filePath),
			fileName: (format, entry) => `${entry}.${format == 'es' ? 'js' : format}`,
			name: 'Dowui'
		}
	}
})
