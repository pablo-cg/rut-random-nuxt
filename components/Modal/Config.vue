<script setup lang="ts">
import { storeToRefs } from "pinia";
import { DialogTitle } from "@headlessui/vue";
import { useOptionsStore } from "@/stores/options";

type ConfigModalProps = {
   isOpen: boolean;
};

type ConfigModalEmits = {
   (e: "close"): void;
};

defineProps<ConfigModalProps>();
const emit = defineEmits<ConfigModalEmits>();

const optionsStore = useOptionsStore();
const { minRut, maxRut, defaultMinRut } = storeToRefs(optionsStore);

const rutOptions = reactive({
   minimum: minRut.value,
   maximum: maxRut.value,
});

function guardarConfig() {
   if (rutOptions.minimum < defaultMinRut.value) return;
   if (rutOptions.maximum <= rutOptions.minimum) return;

   minRut.value = rutOptions.minimum;
   maxRut.value = rutOptions.maximum;
   emit("close");
   location.reload();
}
</script>

<template>
   <ModalWrapper :show="isOpen" @close="emit('close')">
      <main class="px-2">
         <DialogTitle
            as="h3"
            class="text-lg font-medium leading-6 text-stone-900 dark:text-orange-50 flex justify-between items-center"
         >
            <span>Configuración</span>
            <Icon name="clarity:settings-solid" class="text-2xl" />
         </DialogTitle>
         <section
            class="mt-5 text-stone-900 dark:text-orange-50 grid grid-cols-2 gap-2"
         >
            <AppInputNumber
               id="minimum-rut"
               v-model="rutOptions.minimum"
               label="Valor mínimo RUT"
               :min="defaultMinRut"
            />
            <AppInputNumber
               id="maximum-rut"
               v-model="rutOptions.maximum"
               label="Valor máximo RUT"
               :min="rutOptions.minimum"
            />
         </section>

         <section class="mt-5 flex gap-2 flex-row-reverse">
            <AppButton
               label="Guardar"
               class="font-semibold w-24 bg-emerald-700 text-emerald-50 hover:bg-emerald-600 hover:text-white shadow-md shadow-emerald-700/15 active:shadow-none disabled:bg-emerald-700/50 disabled:shadow-none dark:bg-emerald-400 dark:text-emerald-900 dark:hover:bg-emerald-700 dark:hover:text-emerald-50 dark:shadow-lg dark:shadow-emerald-400/15 dark:active:shadow-none disabled:dark:bg-emerald-400/50 disabled:dark:text-emerald-100/50"
               @click="guardarConfig"
            />
            <AppButton
               label="Cancelar"
               class="w-24 hover:bg-emerald-800/70 hover:text-emerald-50 text-stone-900 dark:text-orange-50"
               @click="emit('close')"
            />
         </section>
      </main>
   </ModalWrapper>
</template>
