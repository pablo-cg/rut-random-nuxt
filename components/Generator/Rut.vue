<script setup lang="ts">
import { Item } from "~~/types";

const { Rut } = useRut();

const rutList = ref<Item[]>([]);

function generateRandomRutList() {
   rutList.value = [];

   for (let i = 0; i < 10; i++) {
      rutList.value.push(new Rut());
   }
}

onMounted(() => {
   generateRandomRutList();
});
</script>

<template>
   <main class="w-full flex flex-col gap-3">
      <GeneratorBanner
         title="RUT Random"
         logo="/identity.png"
         btn-label="Generar Ruts"
         @generate="generateRandomRutList"
      >
         Genera una lista con 10 RUT aleatorios
      </GeneratorBanner>
      <GeneratorList :items="rutList" />
   </main>
</template>
