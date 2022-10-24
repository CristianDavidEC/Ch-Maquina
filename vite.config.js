import { svelte } from '@sveltejs/vite-plugin-svelte'
import { reactivePreprocess } from "svelte-reactive-preprocessor"
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: reactivePreprocess({
      enabled: true,
      state: true,
    }),
  })]
})
