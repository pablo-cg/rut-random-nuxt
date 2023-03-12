<script setup lang="ts">
import { Item } from "~~/types";

const { Email } = useEmail();

const emailList = ref<Item[]>([]);

function generateRandomEmailList() {
   emailList.value = [];

   for (let i = 0; i < 10; i++) {
      emailList.value.push(new Email());
   }
}

onMounted(() => {
   generateRandomEmailList();
});
</script>

<template>
   <main class="w-full flex flex-col gap-3">
      <GeneratorBanner
         title="Email Random"
         logo="/email.png"
         btn-label="Generar Emails"
         @generate="generateRandomEmailList"
      >
         Genera una lista con 10 email aleatorios
      </GeneratorBanner>
      <GeneratorList :items="emailList" />
   </main>
</template>
