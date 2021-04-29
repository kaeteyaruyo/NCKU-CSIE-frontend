<i18n>
{
  "zh-TW": {
    "contact": {
      "title": "聯絡我們",
      "address": "70101 台南市東區大學路一號",
      "map": "交通方式(系館位置圖)",
    },
    "follow": "關注我們",
    "developer": "開發者",
  },
  "en-US": {
    "contact": {
      "title": "Contact Us",
      "address": "No.1, Daxue Rd., East Dist., Tainan City 701, Taiwan (R.O.C.)",
      "map": "Department Location",
    },
    "follow": "Follow us",
    "developer": "Developer",
  },
}
</i18n>

<template lang="pug">
footer.footer
  a.logo(href="/")
    img.icon(src="@/assets/image/logo/csie-white-small.png")
    article.title
      p.text 成功大學
      p.text 資訊工程學系
      p.text 暨
      p.text 研究所
    article.subtitle
      p.text Department
      p.text of
      p.text Computer
      p.text Science
      p.text and
      p.text Information
      p.text Engineering
  section.contact
    h1.title {{ $t("contact.title") }}
    section.info
      img.icon(src="@/assets/image/icon/location.png")
      a.content(href="/about/contact") {{ `${$t("contact.address")} | ${$t("contact.map")}` }}
    section.info
      img.icon(src="@/assets/image/icon/envelope.png")
      a.content(href="mailto:em62500@ncku.edu.tw") em62500@ncku.edu.tw
    section.info
      img.icon(src="@/assets/image/icon/phone.png")
      a.content(href="tel:06-2757575,62500") 06-2757575 ext 62500
    section.info
      img.icon(src="@/assets/image/icon/printer.png")
      a.content(href="fax:06-2747076") 06-2747076
  section.copyright
    h1.title Copyright © 2021 國立成功大學資訊工程學系
    hr.line
  section.others
    section.info
      h3.title {{ $t("follow") }}
      a.link(
        href='https://www.facebook.com/ncku.csie',
        target = '_blank'
      )
        img.icon(src="@/assets/image/icon/facebook.png")
    section.info
      h3.title {{ $t("developer") }}
      a.link(
        href="/developer",
        target = '_blank'
      )
        img.icon(src="@/assets/image/icon/laboratory.png")
</template>

<script>
export default {
  name: 'footer-bar'
}
</script>

<style scoped lang="scss">
// [ variable ]
$large: 600px;

.footer {
  // [ layout ]
  display: block;

  // [ skin ]
  width: 100%;
  height: auto;
  background: #213262;
}

.logo {
  // [ layout ]
  display: block;

  // [ skin ]
  width: 100%;

  > .icon {
    // [ layout ]
    display: block;
    margin: {
      left: auto;
      right: auto;
    }

    // [ skin ]
    width: 1.625rem;
    height: auto;
    padding: {
      top: 2.1875rem;
      bottom: 0.25rem;
    }
  }

  > .title {
    // [ layout ]
    display: flex;
    justify-content: center;

    // [ position ]
    margin-top: 6px;
    height: auto;

    > .text {
      // [ layout ]
      display: inline;
      line-height: 16px;

      // [ position ]
      width: auto;

      // [ skin ]
      font-size: 16px;
      color: #ffffff;

      // [ RWD: $large ]
      @media screen and ( min-width: $large ) {
        // [ layout ]
        line-height: 24px;

        // [ skin ]
        font-size: 24px;
      }
    }
  }

  > .subtitle {
    // [ layout ]
    display: flex;
    justify-content: center;

    // [ position ]
    margin-top: 6px;

    // [ skin ]
    height: auto;

    > .text {
      // [ layout ]
      display: inline;
      margin-right: 3px;
      line-height: 12px;

      // [ position ]
      width: auto;

      // [ skin ]
      color: #ffffff;
      font-size: 12px;

      // [ RWD: $large ]
      @media screen and ( min-width: $large ) {
        // [ layout ]
        margin-right: 6px;
        line-height: 16px;

        // [ skin ]
        font-size: 16px;
      }
    }
  }
}

.contact {
  // [ layout ]
  display: block;
  margin: {
    top: 1.5625rem;
    left: auto;
    right: auto;
  }
  text-align: center;

  // [ skin ]
  width: 80%;

  > .title {
    // [ layout ]
    display: block;
    line-height: 16px;

    // [ position ]
    margin-bottom: 10px;

    // [ skin ]
    color: #ffffff;
    font-size: 16px;

    // [ RWD: $large ]
    @media screen and ( min-width: $large ) {
      // [ margin ]
      line-height: 20px;

      // [ skin ]
      font-size: 20px;
    }
  }

  > .info {
    // [ variable ]
    $font-size: 14px;

    // [ layout ]
    display: flex;
    justify-content: center;
    align-items: center;

    height: 42px;

    > .icon {
      // [ layout ]
      display: block;
      margin-right: 6px;

      // [ skin ]
      width: $font-size * 1.2;
      height: $font-size * 1.2;
      background: {
        position: center;
        size: $font-size * 1.2;
        repeat: no-repeat;
      }
      content: '';
      filter:
        invert( 50% )
        sepia( 19% )
        saturate( 1012% )
        hue-rotate( 185deg )
        brightness( 98% )
        contrast( 89% );
    }

    > .content {
      // [ layout ]
      display: block;
      line-height: normal;

      // [ skin ]
      height: auto;
      color: #6982c0;
      font-size: $font-size;

      // [ RWD: $large ]
      @media screen and ( min-width: $large ) {
        // [ layout ]
        line-height: 16px * 2;

        // [ skin ]
        font-size: 16px;
      }
    }
  }
}

.copyright {
  // [ position ]
  position: relative;

  // [ layout ]
  display: block;
  margin-top: 50px;
  text-align: center;

  // [ skin ]
  width: 100%;

  > .title {
    // [ position ]
    position: relative;
    z-index: 1;

    // [ layout ]
    display: inline-block;
    margin: {
      left: auto;
      right: auto;
    }
    line-height: 14px;

    // [ skin ]
    max-width: 10rem;
    width: 80%;
    border: {
      color: #213262;
      style: solid;
      left-width: 10px;
      right-width: 10px;
    }
    color: #ffffff;
    background-color: #213262;
    font-size: 14px;

    // [ RWD: $large ]
    @media screen and ( min-width: $large ) {
      // [ layout ]
      line-height: 16px;

      // [ skin ]
      font-size: 16px;
      max-width: 350px;
    }
  }

  // element
  // `> .#{ $block } > .footer > .copyright > .copyright__line`
  > .line {
    // [ position ]
    position: absolute;
    top: 65%;
    left: 0;
    z-index: 0;

    // [ layout ]
    display: inline-block;

    // [ skin ]
    width: 100%;
    height: 1px;
    color: #6982c0;
    background-color: #6982c0;
  }
}

.others {
  // [ layout ]
  display: flex;
  justify-content: center;

  > .info {
    // [ layout ]
    display: flex;
    justify-content: center;
    align-items: center;

    // [ position ]
    height: 3.5rem;
    margin: {
      left: .5em;
      right: .5em;
    }

    > .title {
      // [ layout ]
      display: block;
      margin: {
        left: .5em;
        right: .5em;
      }
      line-height: 16px;

      // [ skin ]
      height: auto;
      color: #ffffff;
      font-size: 16px;

      // [ RWD: $large ]
      @media screen and ( min-width: $large ) {
        // [ layout ]
        line-height: 20px;

        // [ skin ]
        font-size: 20px;
      }
    }

    > .link {
      // [ layout ]
      display: block;
      margin: {
        left: .5em;
        right: .5em;
      }

      // [ skin ]
      width: 32px;
      height: 32px;

      > .icon {
        // [ layout ]
        vertical-align: middle;

        // [ skin ]
        width: 32px;
        height: 32px;
        filter:
          invert( 51% )
          sepia( 59% )
          saturate( 350% )
          hue-rotate( 185deg )
          brightness( 88% )
          contrast( 92% );
      }
    }
  }
}
</style>
