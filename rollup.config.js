    
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";

// delete old typings to avoid issues
require('fs').unlink('dist/index.d.ts', (err) => {});

export default {
	input: 'src/Mx/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'cjs'
		},
		{
			file: 'dist/index.es.js',
			format: 'es'
		},
		{
			file: 'dist/index.bundle.js',
			format: 'iife',
			name: 'Mx'
		}
	],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
		terser()
	]
};