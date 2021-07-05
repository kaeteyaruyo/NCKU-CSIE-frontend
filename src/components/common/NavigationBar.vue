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
  a.nav-bar__logo(href="/")
    img.logo__image(src="@/assets/image/logo/csie-small.png", alt="csie logo")
  a.nav-bar__caption.caption(href="/")
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
  nav.nav-bar__navigation.navigation(@mouseleave="hideList()")
    template(v-for="(obj, key) in allSiteMap", :key="`nav-${key}`")
      ul.navigation__list
        a.list__header(:href="obj.header.href", @mouseover="showList(key)") {{ obj.header[currentLanguage] }}
        li.list__dropdown(v-show="list[`${key}`]")
          a.dropdown__item(
            v-for="(item, itemKey) in obj.list",
            :key="`item-${key}-${itemKey}`",
            :href="item.href"
          ) {{ item[currentLanguage] }}
  section.nav-bar__tools.bar__tools
    section.tools__login
      img.login__image(src="@/assets/image/icon/user.png")
      a.login__button(href="/auth/login") {{ $t('login') }}
    section.tools__search
      button.search__button
        img.button__image(src="@/assets/image/icon/search.png")
    section.tools__language
      button.language__button
        img.button__image(
          :src="require(`/src/assets/image/icon/flag-${currentLanguageId}.png`)",
          @click="isShowLang = !isShowLang"
        )
        ul.button__dropdown(v-show="isShowLang")
          li.dropdown__item(
            v-for="(language, key) in supportedLanguages",
            :key="`lang-${key}`",
            :class="`dropdown__item--${key}`",
            @click="changeLocale(key)"
          ) {{ language.name }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'navigation-bar',
  data () {
    return {
      list: {},
      isShowLang: false
    }
  },
  computed: {
    ...mapState('language', ['supportedLanguages']),
    ...mapGetters('language', ['currentLanguageId', 'currentLanguage']),
    ...mapGetters('siteMap', ['allSiteMap', 'siteMapHeader'])
  },
  methods: {
    showList (header) {
      this.list = this.siteMapHeader.reduce((keys, key) => {
        keys[`${key}`] = key === header
        return keys
      }, {})
    },
    hideList () {
      this.list = this.siteMapHeader.reduce((keys, key) => {
        keys[`${key}`] = false
        return keys
      }, {})
    },
    changeLocale (languageId) {
      const params = new URLSearchParams(window.location.search)
      params.set('languageId', languageId)
      window.location.assign(`${window.location.pathname}?${params.toString()}`)
    }
  },
  created () {
    this.hideList()
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
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

.nav-bar__logo {
  // [ layout ]
  display: inline-block;
  width: $logo-width;
  height: $logo-height;
  vertical-align: top;

  // [ skin ]
  margin: {
    top: (70px - $logo-height) / 2;
    bottom: (70px - $logo-height) / 2;
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

.nav-bar__caption.caption {
  // [ layout ]
  display: inline-block;
  vertical-align: top;
  margin: {
    top: (70px - $logo-height) / 2;
    bottom: (70px - $logo-height) / 2;
    left: 12px;
  }

  // [ skin ]
  width: auto;
  height: $logo-height;
  padding: {
    top: (
        $logo-height - $caption-title-font-size - $caption-subtitle-font-size -
          $caption-gap
      ) / 2;
    bottom: (
        $logo-height - $caption-title-font-size - $caption-subtitle-font-size -
          $caption-gap
      ) / 2;
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

.nav-bar__navigation {
  // [ variable ]
  $border-height: 20px;
  $item-width: 320px;
  $item-height: 50px + $border-height;
  $font-size: 16px;

  // [ position ]
  z-index: 2;

  // [ layout ]
  display: inline-block;
  overflow-y: visible;

  // [ skin ]
  width: auto;
  background-color: transparent;
  height: 100%;

  // [ animation ]
  transition: right 0.5s;

  > .navigation__list {
    // [ position ]
    position: static;

    // [ layout ]
    display: inline-block;
    margin-top: 8.7px;

    // [ skin ]
    width: auto;
    height: 44px;

    &:hover {
      // [ skin ]
      background-color: #ededed;
    }

    > .list__header {
      // [ position ]
      // This style is set to put `.item__link` above `.item__switch`.
      position: relative;
      z-index: 5;

      // [ layout ]
      display: inline-block;
      vertical-align: top;
      line-height: $font-size;
      text-align: center;

      // [ skin ]
      width: auto;
      min-width: 87px;
      height: 54px;
      padding: {
        top: (54px - $font-size) / 2;
        bottom: (24px - $font-size) / 2;
        left: 0;
        right: 0;
      }
      color: #adacad;
      background-color: transparent;
      font: {
        size: $font-size;
        style: normal;
        weight: normal;
      }
    }

    > .list__dropdown {
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

      > .dropdown__item {
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
        }
        background-color: #213262;

        // [ skin ]
        padding: {
          top: ((80 - 2 * 14) - $font-size) / 2;
          bottom: ((80 - 2 * 14) - $font-size) / 2;
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

.nav-bar__tools {
  // [ position ]
  position: absolute;
  right: 8px;

  // [ layout ]
  display: inline-block;
  margin-top: 16px;

  > .tools__login {
    // [ layout ]
    display: inline-block;
    vertical-align: top;

    // [ skin ]
    width: 105px;
    height: 36.15px;
    line-height: 36.15px;
    background-color: #213262;
    box-shadow: 0 0.06rem 0.06rem 0 rgba(0, 0, 0, 0.24),
      0 0 2px 0 rgba(0, 0, 0, 0.12);
    font: {
      size: 14px;
      weight: 500;
    }
    color: #ffffff;

    > .login__image {
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
      filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(49deg)
        brightness(101%) contrast(101%);
    }

    > .login__button {
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

  > .tools__search {
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

    > .search__button {
      // [ layout ]
      display: inline-block;
      vertical-align: top;

      // [ skin ]
      height: 24px;
      width: 24px;
      background-color: #ffffff;
      cursor: pointer;

      > .button__image {
        // [ skin ]
        height: 24px;
        width: 24px;
      }
    }
  }

  > .tools__language {
    display: inline-flex;
    vertical-align: top;

    > .language__button {
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

      > .button__image {
        // [ skin ]
        height: 24px;
        width: 24px;
      }

      > .button__dropdown {
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
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
        font-size: 16px;
        color: #ffffff;

        &::before {
          // [ layout ]
          display: inline;
          position: absolute;
          top: -9.6px;
          right: 9.6px;

          // [ skin ]
          content: "";
          border: {
            width: 4.8px;
            style: solid;
            top-color: transparent;
            right-color: transparent;
            bottom-color: #1a284d;
            left-color: transparent;
          }
        }

        > .dropdown__item {
          // [ layout ]
          display: flex;
          align-items: center;
          padding-left: 25.6px;

          // [ skin ]
          height: 41px;
          width: 100%;

          &::before {
            // [ layout ]
            background: {
              size: 21.1px;
              repeat: no-repeat;
            }
            margin-right: 16px;

            // [ skin ]
            content: "";
            width: 21.1px;
            height: 21.1px;
          }

          &.dropdown__item--zh-TW::before {
            // [ icon ]
            background-image: url("~@/assets/image/icon/flag-0.png");
          }

          &.dropdown__item--en-US::before {
            // [ icon ]
            background-image: url("~@/assets/image/icon/flag-1.png");
          }
        }
      }
    }
  }
}
</style>
