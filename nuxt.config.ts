// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
      "@nuxtjs/tailwindcss",
      "@pinia/nuxt",
      "@vueuse/nuxt",
      "@pinia-plugin-persistedstate/nuxt",
      "nuxt-headlessui",
      "nuxt-icon",
   ],
   css: ["@/assets/css/main.css"],
});
