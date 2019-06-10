    
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";

// delete old typings to avoid issues
require('fs').unlink('dist/index.d.ts', (err) => {});

const outputPrefix = 'lib/'

export default {
	input: 'src/Mx/index.ts',
	output: [
		{
			file: `${outputPrefix}index.js`,
			format: 'cjs'
		},
		{
			file: `${outputPrefix}index.es.js`,
			format: 'es'
		},
		{
			file: `${outputPrefix}index.bundle.js`,
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