import { defineStore } from 'pinia'

const rutStore = () => {
  const totalRutsGenerated = ref(0)
  const totalRutsCopied = ref(0)

  async function getRutsGenerated() {
    const { data } = await useFetch('/api/rut/generated')

    totalRutsGenerated.value = data.value?.ruts_generated || 0

    return data
  }

  async function postRutsGenerated(rutsGenerated: number) {
    const { data } = await useFetch('/api/rut/generated', {
      method: 'POST',
      body: {
        ruts_generated: rutsGenerated
      }
    })

    return data
  }

  async function getRutsCopied() {
    const { data } = await useFetch('/api/rut/copied')

    totalRutsCopied.value = data.value?.totalRutsCopied || 0

    return data
  }

  async function postRutCopied(rut: string) {
    const { data } = await useFetch('/api/rut/copied', {
      method: 'POST',
      body: {
        rut: rut
      }
    })

    return data
  }

  return {
    getRutsGenerated,
    postRutsGenerated,
    getRutsCopied,
    postRutCopied,
    totalRutsCopied,
    totalRutsGenerated
  }
}

export const useRutStore = defineStore('rutStore', rutStore, { persist: true })
