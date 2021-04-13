<template lang="pug">
nav.nav-bar
  a.nav-bar__logo(href="/")
    img.logo__image(
      src="@/assets/image/logo/csie-small.png"
      alt="csie logo"
    )
  a.header__caption.caption(href="/")
    article.caption__title.title
      span.title__text 成功大學
      span.title__text 資訊工程學系
      span.title__text 暨
      span.title__text 研究所
    article.caption__subtitle.subtitle
      span.subtitle__text Department
      span.subtitle__text of
      span.subtitle__text Computer Science
      span.subtitle__text and
      span.subtitle__text Information Engineering
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
    ...mapState(
      'language',
      ['supportedLanguages']
    )
  }
}
</script>

<style scoped lang="scss">
// [ variable ]
$logo-height: 44px;
$logo-width: 58px;
$caption-title-font-size: 16px;
$caption-subtitle-font-size: 12px;
$caption-gap: 4px;

.nav-bar {
  // [ layout ]
  position: fixed;
  text-align: left;
  top: 0;
  display: block;
  width: 100%;
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  padding-right: 10px;
  box-shadow: 0 1px 2px rgba( 0, 0, 0, .25 );
}

.nav-bar__logo {
  // [ layout ]
  display: inline-block;
  width: $logo-width;
  height: $logo-height;
  vertical-align: top;

  // [ skin ]
  margin: {
    top: ( 70px - $logo-height ) / 2;
    bottom: ( 70px - $logo-height ) / 2;
    left: 10px;
    right: 0;
  }
  background-color: transparent;

  > .logo__image {
    // [ layout ]
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: auto;

    // [ skin ]
    background-color: transparent;
  }
}

.header__caption.caption {
  // [ layout ]
  display: inline-block;
  vertical-align: top;
  margin: {
    top: ( 70px - $logo-height ) / 2;
    bottom: ( 70px - $logo-height ) / 2;
    left: 12px;
  }

  // [ skin ]
  width: auto;
  height: $logo-height;
  padding: {
    top: ( $logo-height - $caption-title-font-size - $caption-subtitle-font-size - $caption-gap ) / 2;
    bottom: ( $logo-height - $caption-title-font-size - $caption-subtitle-font-size - $caption-gap ) / 2;
  }
  background-color: transparent;

  > .caption__title.title {
    // [ layout ]
    display: block;
    width: auto;
    height: $caption-title-font-size;
    text-align: left;
    line-height: $caption-title-font-size;

    // [ skin ]
    color: #212121;
    background-color: transparent;

    > .title__text {
      // [ layout ]
      display: inline-block;
      vertical-align: top;
      line-height: $caption-title-font-size;

      // [ skin ]
      width: auto;
      height: $caption-title-font-size;
      margin-bottom: $caption-gap;
      background-color: transparent;
      font: {
        size: $caption-title-font-size;
        style: normal;
        weight: bold;
      }
    }
  }
  > .caption__subtitle.subtitle {
    // [ layout ]
    display: block;
    text-align: left;
    line-height: $caption-subtitle-font-size;

    // [ skin ]
    width: auto;
    height: $caption-subtitle-font-size;
    color: #212121;
    background-color: transparent;

    > .subtitle__text {
      // [ layout ]
      display: inline-block;
      vertical-align: top;
      line-height: $caption-subtitle-font-size;
      word-spacing: 3px;

      // [ skin ]
      width: auto;
      height: $caption-subtitle-font-size;
      border: {
        color: transparent;
        style: solid;
        right-width: 3px;
      }
      background-color: transparent;
      font: {
        size: $caption-subtitle-font-size;
        style: normal;
        weight: normal;
      }
    }
  }
}
</style>
