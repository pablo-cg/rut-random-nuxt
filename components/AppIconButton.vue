<script setup lang="ts">
type ButtonIconProps = {
   icon: string;
};

defineProps<ButtonIconProps>();
</script>

<template>
   <button
      class="p-2 shadow-md rounded-full flex items-center text-2xl dark:hover:bg-stone-700 hover:bg-stone-200 active:shadow-none"
   >
      <Icon :name="icon" />
   </button>
</template>
