<i18n>
{
  "zh-TW": {
    "login": "登入",
  },
  "en-US": {
    "login": "Login"
  }
}
</i18n>

<template lang="pug">
nav.nav-bar
  a.logo(href="/")
    img.image(
      src="@/assets/image/logo/csie-small.png"
      alt="csie logo"
    )
    section.caption(href="/")
      article.title
        span.text 成功大學
        span.text 資訊工程學系
        span.text 暨
        span.text 研究所
      article.subtitle
        span.text Department
        span.text of
        span.text Computer Science
        span.text and
        span.text Information Engineering
  nav.navigation(@mouseleave="currentList = ''")
    template(
      v-for="(obj, key) in allSiteMap"
      :key="`nav-${key}`"
    )
      ul.list
        a.header(
          :href="obj.header.href"
          @mouseover="currentList = key"
        ) {{obj.header[$root.$i18n.locale]}}
        li.dropdown(v-show="key === currentList")
          a.item(
            v-for="(item, itemKey) in obj.list"
            :key="`nav-item-${key}-${itemKey}`"
            :href="item.href"
          ) {{item[$root.$i18n.locale]}}
  section.tools
    a.login(href="/auth/login")
      img.image(src="@/assets/image/icon/user.png")
      span.button {{ $t('login') }}
    img.search(src="@/assets/image/icon/search.png")
    section.langs
      img.image(
        :src="require(`/src/assets/image/icon/flag-${getLanguageId($root.$i18n.locale)}.png`)"
        @click="isShowLang = !isShowLang"
      )
      ul.dropdown(v-show="isShowLang")
        template(
          v-for="(language, key) in supportedLanguages"
          :key="`dropdown-langs-${key}`"
        )
          li.item
            img.flag(:src="require(`/src/assets/image/icon/flag-${language.id}.png`)")
            span.content {{ language.name }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'navigation-bar',
  data () {
    return {
      currentList: '',
      isShowLang: false
    }
  },
  computed: {
    ...mapState(
      'language',
      ['supportedLanguages']
    ),
    ...mapGetters(
      'language',
      ['getLanguageId']
    ),
    ...mapGetters(
      'siteMap',
      ['allSiteMap', 'siteMapHeader']
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
  display: flex;
  align-items: center;

  // [ position ]
  width: 100%;
  height: 70px;

  // [ skin ]
  background-color: #ffffff;
  padding-right: 10px;
  box-shadow: 0 1px 2px rgba( 0, 0, 0, .25 );
}

.logo {
  // [ layout ]
  display: flex;
  align-items: center;
  height: 100%;

  .image {
    // [ layout ]
    display: inline-block;
    width: $logo-width;
    height: $logo-height;

    // [ skin ]
    margin: {
      left: 10px;
      right: 0;
    }
    background-color: transparent;
  }

  .caption {
    // [ layout ]
    display: inline-block;
    margin-left: 12px;

    // [ skin ]
    width: auto;
    height: $logo-height;
    padding: {
      top: ( $logo-height - $caption-title-font-size - $caption-subtitle-font-size - $caption-gap ) / 2;
      bottom: ( $logo-height - $caption-title-font-size - $caption-subtitle-font-size - $caption-gap ) / 2;
    }
    background-color: transparent;

    > .title {
      // [ layout ]
      display: block;
      width: auto;
      height: $caption-title-font-size;
      text-align: left;
      line-height: normal;

      // [ skin ]
      color: #212121;
      background-color: transparent;

      > .text {
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
    > .subtitle {
      // [ layout ]
      display: block;
      text-align: left;
      line-height: $caption-subtitle-font-size;

      // [ skin ]
      width: auto;
      height: $caption-subtitle-font-size;
      color: #212121;
      background-color: transparent;

      > .text {
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
}

.navigation {
  // [ variable ]
  $border-height: 20px;
  $item-width: 320px;
  $item-height: 50px + $border-height;
  $font-size: 16px;

  // [ position ]
  z-index: 2;

  // [ layout ]
  display: flex;
  align-items: center;
  overflow-y: visible;

  // [ skin ]
  width: auto;
  background-color: transparent;
  height: 100%;

  // [ animation ]
  transition: right .5s;

  > .list {
    // [ position ]
    position: static;

    // [ layout ]
    display: inline-flex;
    align-items: center;

    // [ skin ]
    width: auto;
    height: 44px;

    &:hover {
      // [ skin ]
      background-color: #ededed;
    }

    > .header {
      // [ position ]
      // This style is set to put `.item__link` above `.item__switch`.
      position: relative;
      z-index: 5;

      // [ layout ]
      display: inline-flex;
      line-height: $font-size;
      text-align: center;
      align-items: center;
      justify-content: center;

      // [ skin ]
      width: auto;
      min-width: 87px;
      height: 100%;
      color: #adacad;
      background-color: transparent;
      font: {
        size: $font-size;
        style: normal;
        weight: normal;
      }
    }

    > .dropdown {
      // [ position ]
      position: absolute;
      left: 0;
      right: 0;
      top: 70px;
      z-index: 4;

      // [ layout ]
      display: block;
      text-align: center;

      // [ skin ]
      max-height: 10000px;
      width: 100%;
      height: 80px;
      background-color: #213262;

      > .item {
        // [ layout ]
        display: inline-block;
        margin: 0;
        vertical-align: middle;
        line-height: $font-size;

        // [ skin ]
        min-width: 115px;
        width: auto;
        height: 80px;
        border: {
          color: transparent;
          style: solid;
          top-width: 14px;
          bottom-width: 14px;
          left-width: 0;
        };
        background-color: #213262;

        // [ skin ]
        padding: {
          top: ( ( 80 - 2 * 14 ) - $font-size ) / 2;
          bottom: ( ( 80 - 2 * 14 ) - $font-size ) / 2;
          left: 25px;
          right: 25px;
        }
        color: #ffffff;
        font: {
          size: $font-size;
          style: normal;
          weight: normal;
        }

        &:hover {
          // [ skin ]
          background-color: #1d2d56;
        }
      }
    }
  }
}

.tools {
  // [ position ]
  position: absolute;
  right: 8px;

  // [ layout ]
  display: flex;
  align-items: center;

  > .login {
    // [ layout ]
    display: inline-block;
    vertical-align: top;

    // [ skin ]
    width: 105px;
    height: 36.15px;
    line-height: 36.15px;
    background-color: #213262;
    box-shadow: 0 .06rem .06rem 0 rgba( 0, 0, 0, .24 ), 0 0 2px 0 rgba( 0, 0, 0, .12 );
    font: {
      size: 14px;
      weight: 500;
    }
    color: #ffffff;

    > .image {
      // [ layout ]
      display: inline-block;
      vertical-align: middle;
      margin: {
        right: 14.4px;
        left: 14.4px;
      }
      width: 22px;
      height: 21px;

      // [ skin ]
      max: {
        width: 22px;
        height: 22px;
      }
      border-radius: 50%;
      background: {
        size: 21.1px;
        repeat: no-repeat;
      }
      filter:
        invert( 100% )
        sepia( 0% )
        saturate( 1% )
        hue-rotate( 49deg )
        brightness( 101% )
        contrast( 101% );
    }

    > .button {
      // [ layout ]
      display: inline-block;
      vertical-align: top;

      // [ skin ]
      line-height: 36.15px;
      width: auto;
      height: 36.15px;
      font: {
        size: 14px;
        weight: 500;
      }
      color: #ffffff;
    }
  }

  > .search {
    // [ layout ]
    display: inline-block;
    vertical-align: top;
    margin: {
      left: 24px;
      top: 6px;
      bottom: 6px;
    }

    // [ skin ]
    height: 24px;
    width: 24px;
    background-color: #ffffff;
    cursor: pointer;
  }

  > .langs {
    // [ layout ]
    display: inline-flex;
    vertical-align: top;
    margin: {
      left: 24px;
      top: 6px;
      bottom: 6px;
    }

    // [ skin ]
    height: 24px;
    width: 24px;
    cursor: pointer;
    background-color: #ffffff;

    > .image {
      // [ skin ]
      height: 24px;
      width: 24px;
    }

    > .dropdown {
      // [ position ]
      top: 32px;
      left: -128px;
      z-index: 1;

      // [ layout ]
      display: flex;
      position: relative;
      flex-direction: column;
      align-content: center;
      justify-content: center;

      // [ skin ]
      height: 82px;
      min-width: 128px;
      background-color: #1a284d;
      box-shadow: 0 1px 2px 0 rgba( 0, 0, 0, .25 );
      font-size: 16px;
      color: #ffffff;

      &::before {
        // [ layout ]
        display: inline;
        position: absolute;
        top: -9.6px;
        right: 9.6px;

        // [ skin ]
        content: '';
        border: {
          width: 4.8px;
          style: solid;
          top-color: transparent;
          right-color: transparent;
          bottom-color: #1a284d;
          left-color: transparent;
        }
      }

      > .item {
        // [ layout ]
        display: flex;
        align-items: center;
        padding-left: 25.6px;

        // [ skin ]
        height: 41px;
        width: 100%;

        > .flag {
          // [ layout ]
          display: inline-block;
          margin-right: 16px;

          // [ position ]
          width: 21.1px;
          height: 21.1px;
        }
      }
    }
  }
}
</style>
