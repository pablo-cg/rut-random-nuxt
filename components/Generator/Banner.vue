<script setup lang="ts">
type BannerProps = {
   title: string;
   logo: string;
   btnLabel: string;
};

type BannerEmits = {
   (e: "generate"): void;
};

defineProps<BannerProps>();
const emit = defineEmits<BannerEmits>();
</script>

<template>
   <header class="grid grid-cols-12 gap-3">
      <section class="col-span-4 lg:col-span-5 flex justify-center">
         <img :src="logo" class="h-40 w-40" />
      </section>
      <section class="col-span-8 lg:col-span-7 flex flex-col gap-1 justify-center">
         <h1 class="font-bold text-4xl text-emerald-800 dark:text-emerald-400">
            {{ title }}
         </h1>
         <p class="text-lg">
            <slot />
         </p>
         <AppButton
            class="font-semibold w-44 bg-emerald-700 text-emerald-50 hover:bg-emerald-600 hover:text-white shadow-md shadow-emerald-700/15 active:shadow-none disabled:bg-emerald-700/50 disabled:shadow-none dark:bg-emerald-400 dark:text-emerald-900 dark:hover:bg-emerald-700 dark:hover:text-emerald-50 dark:shadow-lg dark:shadow-emerald-400/15 dark:active:shadow-none disabled:dark:bg-emerald-400/50 disabled:dark:text-emerald-100/50"
            :label="btnLabel"
            icon="tabler:reload"
            @click="emit('generate')"
         />
      </section>
   </header>
</template>
