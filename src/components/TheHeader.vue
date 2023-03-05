<script setup lang="ts">
import { useOptionsStore } from "../stores/options";

const isOpenInfoModal = ref(false);
const isOpenConfigModal = ref(false);

const toggleInfoModal = useToggle(isOpenInfoModal);
const toggleConfigModal = useToggle(isOpenConfigModal);

function closeInfoModal() {
   isOpenInfoModal.value = false;
}

function closeConfigModal() {
   isOpenConfigModal.value = false;
}
</script>
<template>
   <header class="h-12 flex justify-between items-center px-4">
      <section class="flex gap-4 items-center">
         <IconButton
            icon="icon-park-outline:config"
            @click="toggleConfigModal()"
         />
         <IconButton icon="icon-park-outline:info" @click="toggleInfoModal()" />
      </section>
      <TheThemeSwitch />
   </header>
   <ModalInfo :is-open="isOpenInfoModal" @close="closeInfoModal" />
   <ModalConfig :is-open="isOpenConfigModal" @close="closeConfigModal" />
</template>
