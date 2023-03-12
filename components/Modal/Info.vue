<script setup lang="ts">
import { useOptionsStore } from "@/stores/options";
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

const frameworks = ref([
   { url: "https://vuejs.org/", icon: "IconVue" },
   { url: "https://nuxt.com/", icon: "IconNuxt" },
   { url: "https://headlessui.com/", icon: "IconHeadlessUI" },
   { url: "https://tailwindcss.com/", icon: "IconTailwind" },
]);

const socialNetworks = ref([
   {
      url: "https://github.com/pablo-cg",
      icon: "ion:logo-github",
      username: "pablo-cg",
   },
   {
      url: "https://www.instagram.com/pablocg.uwu/?hl=es-la",
      icon: "IconInstagram",
      username: "pablocg.uwu",
   },
]);
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
         class="px-2 grid grid-cols-1 lg:grid-cols-2 gap-4 text-stone-900 dark:text-orange-50"
      >
         <section
            class="border col-span-full border-stone-300 dark:border-stone-600 rounded-lg p-3"
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
            class="border col-span-full border-stone-300 dark:border-stone-600 rounded-lg p-3"
         >
            <div
               class="flex justify-between items-center text-2xl font-bold mb-3 px-2"
            >
               <h1>RUT Random</h1>
               <Icon name="clarity:info-standard-solid" />
            </div>
            <ul class="px-2 flex flex-col gap-1">
               <li v-for="social in socialNetworks" :key="social.url">
                  <NuxtLink :to="social.url" target="_blank">
                     <Icon :name="social.icon" class="text-2xl" />
                     {{ social.username }}
                  </NuxtLink>
               </li>
            </ul>
         </section>
         <section
            class="border col-span-full lg:col-span-2 border-stone-300 dark:border-stone-600 rounded-lg p-3"
         >
            <ul class="px-2 flex gap-4 justify-center">
               <li v-for="framework in frameworks" :key="framework.url">
                  <NuxtLink :to="framework.url" target="_blank">
                     <Icon :name="framework.icon" class="text-2xl" />
                  </NuxtLink>
               </li>
            </ul>
         </section>
      </main>
   </ModalWrapper>
</template>
