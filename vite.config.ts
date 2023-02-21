import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/lib/style/_variables.scss" as *;'
			}
		}
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
