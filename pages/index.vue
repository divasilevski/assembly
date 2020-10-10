<template lang="pug">
  section.container
    div
      app-logo
      h1.title assembly
      h2.subtitle Nuxt.js project
      h2.subtitle {{ someUrl }}
      h2.subtitle {{ response }}
      .links
        a(
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        ) Documentation
        a(
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        ) GitHub
</template>

<script>
import api from '~/assets/js/api'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  asyncData({ $axios }) {
    return api.getTodoById($axios, 1).then(response => {
      return { response }
    })
  },
  data: () => ({
    someUrl: ''
  }),
  created() {
    this.someUrl = process.env.NODE_ENV + ' ' + process.env.BACKEND_URL
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
