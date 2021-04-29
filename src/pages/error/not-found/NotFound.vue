<i18n>
{
  "zh-TW": {
    "title": "頁面不存在",
  },
  "en-US": {
    "title": "Page not found"
  }
}
</i18n>

<template lang="pug">
section.not-found
  img.not-found__image(src="@/assets/image/icon/404.png")
</template>

<script>
export default {
  name: 'content',
  components: {}
}
</script>

<style scoped lang="scss">
.not-found {
  // [ layout ]
  display: block;

  // [ skin ]
  height: 100vh;
  width: 100%;
  background-color: white;
}

.not-found__image {
  // [ layout ]
  display: block;
  margin-left: auto;
  margin-right: auto;

  // [ skin ]
  width: 70%;
  height: auto;
}
</style>
