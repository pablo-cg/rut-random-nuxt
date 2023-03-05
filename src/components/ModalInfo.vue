<script setup lang="ts">
import { useOptionsStore } from "../stores/options";
import { DialogTitle } from "@headlessui/vue";

type InfoModalProps = {
   isOpen: boolean;
};

type InfoModalEmits = {
   (e: "close"): void;
};

defineProps<InfoModalProps>();
const emit = defineEmits<InfoModalEmits>();

const optionsStore = useOptionsStore();

const minimumRut = computed(() => optionsStore.minRut.toLocaleString());
const maximumRut = computed(() => optionsStore.maxRut.toLocaleString());
</script>

<template>
   <ModalWrapper :show="isOpen" @close="emit('close')">
      <DialogTitle
         as="h3"
         class="px-2 mb-4 text-lg font-medium leading-6 text-stone-900 dark:text-orange-50 flex justify-between items-center"
      >
         <span>Acerca de</span>
         <Icon name="mdi:account-question" class="text-2xl" />
      </DialogTitle>
      <main
         class="px-2 grid md:grid-cols-2 gap-4 text-stone-900 dark:text-orange-50"
      >
         <section
            class="border border-stone-300 dark:border-stone-600 rounded-lg p-3"
         >
            <div
               class="flex justify-between items-center text-2xl font-bold mb-3 px-2"
            >
               <h1>Configuración Actual</h1>
               <Icon name="clarity:settings-solid" />
            </div>
            <ul class="px-2 flex flex-col gap-1">
               <li>RUT Mínimo: {{ minimumRut }}</li>
               <li>RUT Máximo: {{ maximumRut }}</li>
            </ul>
         </section>
         <section
            class="border border-stone-300 dark:border-stone-600 rounded-lg p-3"
         >
            <div
               class="flex justify-between items-center text-2xl font-bold mb-3 px-2"
            >
               <h1>RUT Random</h1>
               <Icon name="clarity:info-standard-solid" />
            </div>
            <ul class="px-2 flex flex-col gap-1">
               <li>
                  <NuxtLink to="https://github.com/pablo-cg" target="_blank">
                     <Icon name="ion:logo-github" class="text-2xl" /> pablo-cg
                  </NuxtLink>
               </li>
               <li>
                  <NuxtLink
                     to="https://www.instagram.com/pablocg.uwu/?hl=es-la"
                     target="_blank"
                  >
                     <Icon name="ion:logo-instagram" class="text-2xl" />
                     pablocg.uwu
                  </NuxtLink>
               </li>
            </ul>
         </section>
         <section
            class="border col-span-2 border-stone-300 dark:border-stone-600 rounded-lg p-3"
         >
            <ul class="px-2 flex gap-4 justify-center">
               <li>
                  <NuxtLink to="https://vuejs.org/" target="_blank">
                     <Icon name="simple-icons:vuedotjs" class="text-2xl" />
                  </NuxtLink>
               </li>
               <li>
                  <NuxtLink to="https://nuxt.com/" target="_blank">
                     <Icon name="simple-icons:nuxtdotjs" class="text-2xl" />
                  </NuxtLink>
               </li>
               <li>
                  <NuxtLink to="https://headlessui.com/" target="_blank">
                     <Icon name="simple-icons:headlessui" class="text-2xl" />
                  </NuxtLink>
               </li>
               <li>
                  <NuxtLink to="https://tailwindcss.com/" target="_blank">
                     <Icon name="simple-icons:tailwindcss" class="text-2xl" />
                  </NuxtLink>
               </li>
            </ul>
         </section>
      </main>
   </ModalWrapper>
</template>
