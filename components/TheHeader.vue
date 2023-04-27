<script setup lang="ts">
import { useEmailStore } from '~~/stores/email'
import { useRutStore } from '~~/stores/rut'

const { getRutsCopied, getRutsGenerated } = useRutStore()
const { getEmailsCopied, getEmailsGenerated } = useEmailStore()

const isOpenInfoModal = ref(false)
const isOpenConfigModal = ref(false)

const toggleInfoModal = useToggle(isOpenInfoModal)
const toggleConfigModal = useToggle(isOpenConfigModal)

const isLoadingModal = ref(false)

async function getAnalytics() {
  isLoadingModal.value = true
  await getRutsCopied()
  await getRutsGenerated()
  await getEmailsCopied()
  await getEmailsGenerated()
  isLoadingModal.value = false
}

async function loadInfoModal() {
  toggleInfoModal()
  await getAnalytics()
}

function closeInfoModal() {
  isOpenInfoModal.value = false
}

function closeConfigModal() {
  isOpenConfigModal.value = false
}
</script>
<template>
  <header class="h-12 flex justify-between items-center px-4">
    <section class="flex gap-4 items-center">
      <AppIconButton
        icon="icon-park-outline:config"
        @click="toggleConfigModal()"
      />
      <AppIconButton icon="icon-park-outline:info" @click="loadInfoModal" />
    </section>
    <TheThemeSwitch />
  </header>
  <ModalInfo
    :is-open="isOpenInfoModal"
    @close="closeInfoModal"
    :loading="isLoadingModal"
  />
  <ModalConfig :is-open="isOpenConfigModal" @close="closeConfigModal" />
</template>
