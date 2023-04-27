<script setup lang="ts">
import { useEmailStore } from '~~/stores/email'
import { Item } from '~~/types'

const { Email } = useEmail()
const { postEmailCopied, postEmailsGenerated } = useEmailStore()

const emailList = ref<Item[]>([])
const totalEmailsGenerated = ref(0)

const debounceEmailPost = useDebounceFn((totalEmails: number) => {
  postEmailsGenerated(totalEmails).finally(() => {
    totalEmailsGenerated.value = 0
  })
}, 1500)

async function generateRandomEmailList() {
  emailList.value = []

  for (let i = 0; i < 10; i++) {
    emailList.value.push(new Email())
  }

  totalEmailsGenerated.value += emailList.value.length

  await debounceEmailPost(totalEmailsGenerated.value)
}

async function copyEmail(item: Item) {
  item.isCopied = true
  navigator.clipboard.writeText(item.value)
  await postEmailCopied(item.value)
}

onMounted(async () => {
  await generateRandomEmailList()
})
</script>

<template>
  <main class="w-full flex flex-col gap-3">
    <GeneratorBanner
      title="Email Random"
      logo="/email.png"
      btn-label="Generar Emails"
      @generate="generateRandomEmailList"
    >
      Genera una lista con 10 email aleatorios
    </GeneratorBanner>
    <GeneratorList :items="emailList" @copy-item="copyEmail" />
  </main>
</template>
