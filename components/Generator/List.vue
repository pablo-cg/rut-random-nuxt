<script setup lang="ts">
import { Item } from '@/types'
import { TransitionRoot } from '@headlessui/vue'

type ListItemProps = {
  items: Item[]
}

type ListItemEmits = {
  (e: 'copy-item', item: Item): void
}

defineProps<ListItemProps>()
const emit = defineEmits<ListItemEmits>()

</script>

<template>
  <TransitionRoot
    :show="!!items.length"
    enter="transition-opacity duration-500"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-500"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <ul class="flex flex-col gap-2 px-4">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex justify-between items-center"
      >
        <span :class="item.isCopied ? 'line-through' : 'no-underline'">
          {{ item.value }}
        </span>
        <AppButton
          class="font-semibold w-28 bg-emerald-700 text-emerald-50 hover:bg-emerald-600 hover:text-white shadow-md shadow-emerald-700/15 active:shadow-none disabled:bg-emerald-700/50 disabled:shadow-none dark:bg-emerald-400 dark:text-emerald-900 dark:hover:bg-emerald-700 dark:hover:text-emerald-50 dark:shadow-lg dark:shadow-emerald-400/15 dark:active:shadow-none disabled:dark:bg-emerald-400/50 disabled:dark:text-emerald-100/50"
          :label="item.isCopied ? 'Copiado' : 'Copiar'"
          :disabled="item.isCopied"
          @click="emit('copy-item', item)"
          :icon="
            item.isCopied ? '' : 'material-symbols:content-copy-outline-rounded'
          "
        />
      </li>
    </ul>
  </TransitionRoot>
</template>
