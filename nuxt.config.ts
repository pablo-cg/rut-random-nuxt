// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   srcDir: "src",
   modules: [
      "@nuxtjs/tailwindcss",
      "@pinia/nuxt",
      "@vueuse/nuxt",
      "@pinia-plugin-persistedstate/nuxt",
      "nuxt-headlessui",
      "nuxt-icon",
   ],
});
