<script setup lang="ts">
useHead({
   title: "RUT Random",
   link: [{ rel: "icon", href: "/favicon.png" }],
});
</script>

<template>
   <main class="pt-3 gap-10 grid grid-cols-1 lg:gap-0 lg:grid-cols-2 lg:content-center lg:h-full">
      <GeneratorRut />
      <GeneratorEmail />
   </main>
</template>
