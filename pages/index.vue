<script setup lang="ts">
useHead({
  title: 'RUT Random',
  link: [
    { rel: 'icon', href: '/favicon.png' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&display=swap',
      rel: 'stylesheet'
    }
  ]
})
</script>

<template>
  <main
    class="py-3 gap-10 grid grid-cols-1 lg:gap-0 lg:grid-cols-2 lg:content-center lg:h-full"
  >
    <GeneratorRut />
    <GeneratorEmail />
  </main>
</template>
