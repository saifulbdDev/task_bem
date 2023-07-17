// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: [
    // SCSS file in the project
    "~/styles/main.scss" // you should add main.scss somewhere in your app
  ],
   modules: [
    // ...
    '@pinia/nuxt',
  ],
});
