import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5467,
		proxy: {
			'/api': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/blogs': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/educations': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/experiences': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/info': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/links': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/messages': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/services': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/portfolios': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/public': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			},
			'/testimonials': {
				target: 'https://portfolio-client-ebnp.onrender.com'
			}
		}
	},
	plugins: [react(), sassDts(), tsConfigPaths()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
