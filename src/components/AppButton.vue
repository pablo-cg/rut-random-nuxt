<script setup lang="ts">
interface ButtonProps {
   label: string;
   disabled?: boolean;
}

defineProps<ButtonProps>();
</script>
<template>
   <button
      :class="[
         'transition ease-linear py-2 px-4 rounded-full focus:outline-none',
         $attrs.class,
      ]"
      :disabled="disabled"
   >
      {{ label }}
   </button>
</template>
