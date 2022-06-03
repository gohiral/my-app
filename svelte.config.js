import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // trailingSlash: 'never',
    }),
    prerender: { default: true },
  },
}

export default config
