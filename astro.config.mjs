import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import astroExpressiveCode from 'astro-expressive-code'
import partytown from '@astrojs/partytown'
const astroExpressiveCodeOptions = {
  theme: 'min-light',
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    astroExpressiveCode(astroExpressiveCodeOptions),
    mdx(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  // workaround: fix build error
  // ref: https://github.com/withastro/astro/issues/7629
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
})
