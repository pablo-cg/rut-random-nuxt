<script setup lang="ts">
type InputNumberProps = {
   modelValue: number;
   label: string;
   id: string;
   min?: number;
   max?: number;
};

type InputNumberEmits = {
   (e: "update:modelValue", value: number): void;
};

const props = defineProps<InputNumberProps>();
const emit = defineEmits<InputNumberEmits>();

const inputNumber = ref(props.modelValue);

function updateValue() {
   emit("update:modelValue", inputNumber.value);
}
</script>

<template>
   <div>
      <label
         :for="id"
         class="block mb-2 text-sm font-medium text-stone-900 dark:text-orange-50"
      >
         {{ label }}
      </label>
      <input
         v-model="inputNumber"
         type="number"
         :id="id"
         class="block border-none w-full p-2.5 text-sm rounded-lg bg-orange-100/10 text-stone-900 ring-emerald-700 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-emerald-600 dark:bg-stone-700 dark:text-orange-50 dark:ring-emerald-900 dark:focus:ring-2 dark:focus:ring-inset dark:focus:ring-emerald-400"
         required
         :min="min"
         :max="max"
         @change="updateValue"
      />
   </div>
</template>
