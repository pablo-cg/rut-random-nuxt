<script setup lang="ts">
import { useRutStore } from '~~/stores/rut'
import { Item } from '~~/types'

const { Rut } = useRut()
const { postRutsGenerated } = useRutStore()

const rutList = ref<Item[]>([])
const totalRutsGenerated = ref(0)

const debounceRutPost = useDebounceFn((totalRuts: number) => {
  postRutsGenerated(totalRuts).finally(() => {
    totalRutsGenerated.value = 0
  })
}, 1500)

async function generateRandomRutList() {
  rutList.value = []

  for (let i = 0; i < 10; i++) {
    rutList.value.push(new Rut())
  }

  totalRutsGenerated.value += rutList.value.length
  
  await debounceRutPost(totalRutsGenerated.value)
}

onMounted(async () => {
  await generateRandomRutList()
})
</script>

<template>
  <main class="w-full flex flex-col gap-3">
    <GeneratorBanner
      title="RUT Random"
      logo="/identity.png"
      btn-label="Generar Ruts"
      @generate="generateRandomRutList"
    >
      Genera una lista con 10 RUT aleatorios
    </GeneratorBanner>
    <GeneratorList :items="rutList" />
  </main>
</template>
