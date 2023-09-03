import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginDts from 'vite-plugin-dts'
import * as fs from 'fs'

const scanFiles = (rootPath: string): string[] => {
	return fs.readdirSync(rootPath).map(fileName => {
		const filePath = `${rootPath}/${fileName}`
		const stat = fs.statSync(filePath)
		if (stat.isDirectory()) {
			return scanFiles(filePath)
		} else {
			return filePath
		}
	}).flat().filter(filePath => filePath)
}

const entryFiles = scanFiles('./src/components')

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
			entry: entryFiles,
			fileName: (format, entry) => {
				return `${entry}.${format == 'es' ? 'js' : format}`
			},
			name: 'Dowui'
		}
	},
})
