import { defineConfig } from 'tsup'

export default defineConfig({
	platform: "node",
	target: 'es2022',
	entry: ['src/**/*.ts'],	
	format: ['cjs'],
	skipNodeModulesBundle:true,
	bundle:true,
	minify: true,
	minifyWhitespace: true,
	minifyIdentifiers: true,
	minifySyntax: true,
	sourcemap: 'inline',
	treeshake: true,
	metafile:true
});