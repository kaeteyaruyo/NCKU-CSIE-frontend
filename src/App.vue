<template lang="pug">
//- Navigation bar
navigation-bar
//- Content. The content of this component differs from page to page,
//- so it should be added dynamically in each page's `main.js`.
content
//- Footer
footer-bar
</template>

<script>
import NavigationBar from '@/components/common/NavigationBar.vue'
import FooterBar from '@/components/common/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import "assets/scss/reset.scss";
</style>
