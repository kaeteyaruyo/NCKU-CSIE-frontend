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
  p(
    v-for="(parent, key) in getAllSiteMap",
    :key="`${key}`"
  ) {{ key }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'navigation-bar',
  computed: {
    ...mapState(
      'language',
      ['supportedLanguages']
    ),
    ...mapGetters(
      'siteMap',
      ['getAllSiteMap']
    )
  }
}
</script>

<style scoped lang="scss">
</style>
