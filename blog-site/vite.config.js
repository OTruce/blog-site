// import { defineConfig } from 'vite'
// // import { defineConfig } from "vitest/config";
// import react, { reactCompilerPreset } from '@vitejs/plugin-react'
// import babel from '@rolldown/plugin-babel'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     babel({ presets: [reactCompilerPreset()] })
//   ],
//   // test: {
//   //   environment: "jsdom",
//   //   setupFiles: "./src/setupTests.js",
//   // },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // <--- THIS LINE IS KEY
    setupFiles: './src/setupTests.js', // (Optional)
  },
})