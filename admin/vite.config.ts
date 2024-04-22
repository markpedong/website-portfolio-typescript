import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config
export default defineConfig({
	base: "/app",
	// server: {
	// 	port: 5467,
	// 	proxy: {
	// 		'/api': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/blogs': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/educations': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/experiences': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/info': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/links': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/messages': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/services': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/portfolios': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/public': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		},
	// 		'/testimonials': {
	// 			target: 'https://portfolio-client-ebnp.onrender.com',
	// 			changeOrigin: true
	// 		}
	// 	}
	// },
	plugins: [react(), sassDts(), tsConfigPaths()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
})
