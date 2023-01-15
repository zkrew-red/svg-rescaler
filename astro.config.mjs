import { defineConfig } from 'astro/config'
import compress from 'astro-compress'
import compressor from 'astro-compressor'

export default defineConfig({
	integrations: [compress(), compressor()],
	base: '/rescaler',
	site: 'https://zkrew.red/rescaler/'
})
