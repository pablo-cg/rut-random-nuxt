<script setup lang="ts">
import { Switch } from "@headlessui/vue";
const isDark = useDark();

</script>

<template>
   <ClientOnly>
      <Switch
         v-model="isDark"
         :class="isDark ? 'bg-stone-700' : 'bg-stone-200'"
         class="relative inline-flex h-7 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
         <!-- <span class="sr-only">Use setting</span> -->
         <Icon
            :name="isDark ? 'lucide:moon' : 'lucide:sun'"
            aria-hidden="true"
            :class="isDark ? 'translate-x-9' : 'translate-x-0'"
            class="pointer-events-none inline-block h-6 w-6 transform rounded-full bg-transparent shadow-lg ring-0 transition duration-200 ease-in-out"
         />
      </Switch>
   </ClientOnly>
</template>
