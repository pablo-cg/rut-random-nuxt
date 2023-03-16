// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   css: ["@/assets/css/main.css"],
   modules: [
      "@nuxtjs/tailwindcss",
      "@pinia/nuxt",
      "@vueuse/nuxt",
      "@pinia-plugin-persistedstate/nuxt",
      "nuxt-headlessui",
      "nuxt-icon",
   ],
   piniaPersistedstate: {
      storage: "localStorage",
   },
});
