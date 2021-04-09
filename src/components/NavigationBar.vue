<template lang="pug">
div
  //- Change locale button
  section.locale
    select(v-model="$root.$i18n.locale")
      option(
        v-for="(language, key) in supportedLanguages",
        :key="`lang-${key}`",
        :value="key"
      ) {{ language.name }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navigation-bar',
  computed: {
    ...mapState('language', ['supportedLanguages'])
  }
}
</script>

<style scoped lang="scss">
</style>
