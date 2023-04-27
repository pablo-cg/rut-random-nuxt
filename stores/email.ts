import { defineStore } from 'pinia'

const emailStore = () => {
  const totalEmailsGenerated = ref(0)
  const totalEmailsCopied = ref(0)

  async function getEmailsGenerated() {
    const { data } = await useFetch('/api/email/generated')

    totalEmailsGenerated.value = data.value?.emails_generated || 0

    return data
  }

  async function postEmailsGenerated(emailsGenerated: number) {
    const { data } = await useFetch('/api/email/generated', {
      method: 'POST',
      body: {
        emails_generated: emailsGenerated
      }
    })

    return data
  }

  async function getEmailsCopied() {
    const { data } = await useFetch('/api/email/copied')

    totalEmailsCopied.value = data.value?.totalEmailsCopied || 0

    return data
  }

  async function postEmailCopied(email: string) {
    const { data } = await useFetch('/api/email/copied', {
      method: 'POST',
      body: {
        email: email
      }
    })

    return data
  }

  return {
    getEmailsCopied,
    getEmailsGenerated,
    postEmailCopied,
    postEmailsGenerated
  }
}

export const useEmailStore = defineStore('emailStore', emailStore, {
  persist: true
})
