<script setup lang="ts">
interface ButtonProps {
   label: string;
   disabled?: boolean;
   icon?: string;
}

defineProps<ButtonProps>();
</script>
<template>
   <button
      :class="[
         'transition ease-linear py-2 px-4 rounded-full focus:outline-none flex justify-evenly items-center',
         $attrs.class,
      ]"
      :disabled="disabled"
   >
      <span>{{ label }} </span>
      <Icon v-if="icon" :name="icon" />
   </button>
</template>
