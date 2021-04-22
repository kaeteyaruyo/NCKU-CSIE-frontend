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
  a.footer__logo(href="/")
    img.logo__image(src="@/assets/image/logo/csie-white-small.png")
    article.logo__caption.caption.caption--zh-TW
      p.caption__text 成功大學
      p.caption__text 資訊工程學系
      p.caption__text 暨
      p.caption__text 研究所
    article.logo__caption.caption.caption--en-US
      p.caption__text Department
      p.caption__text of
      p.caption__text Computer
      p.caption__text Science
      p.caption__text and
      p.caption__text Information
      p.caption__text Engineering
  section.footer__contact.contact
    h1.contact__title {{ $t("contact.title") }}
    section.contact__info
      img.info__image(src="@/assets/image/icon/location.png")
      a.info__content(href="/about/contact") {{ `${$t("contact.address")} | ${$t("contact.map")}` }}
    section.contact__info
      img.info__image(src="@/assets/image/icon/envelope.png")
      a.info__content(href="mailto:em62500@ncku.edu.tw") em62500@ncku.edu.tw
    section.contact__info
      img.info__image(src="@/assets/image/icon/phone.png")
      a.info__content(href="tel:06-2757575,62500") 06-2757575 ext 62500
    section.contact__info
      img.info__image(src="@/assets/image/icon/printer.png")
      a.info__content(href="fax:06-2747076") 06-2747076
  section.footer__copyright.copyright
    h1.copyright__title Copyright © 2021 國立成功大學資訊工程學系
    hr.copyright__line
  section.footer__others
    section.others__info
      h3.info__title {{ $t("follow") }}
      a.info__link.link(
        href='https://www.facebook.com/ncku.csie',
        target = '_blank'
      )
        img.link__image(src="@/assets/image/icon/facebook.png")
    section.others__info
      h3.info__title {{ $t("developer") }}
      a.info__link.link(
        href="/developer",
        target = '_blank'
      )
        img.link__image(src="@/assets/image/icon/laboratory.png")
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

.footer__logo {
  // [ layout ]
  display: block;

  // [ skin ]
  width: 100%;

  > .logo__image {
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

  > .logo__caption {
    // [ layout ]
    display: flex;
    justify-content: center;

    // [ position ]
    margin-top: 6px;

    // [ skin ]
    height: auto;

    > .caption__text {
      // [ layout ]
      display: inline;

      // [ position ]
      width: auto;

      // [ skin ]
      color: #ffffff;
    }

    &.caption-- {
      &zh-TW {
        > .caption__text {
          // [ layout ]
          line-height: 16px;

          // [ skin ]
          font-size: 16px;

          // [ RWD: $large ]
          @media screen and ( min-width: $large ) {
            // [ layout ]
            line-height: 24px;

            // [ skin ]
            font-size: 24px;
          }
        }
      }

      &en-US {
        > .caption__text {
          // [ layout ]
          margin-right: 3px;
          line-height: 12px;

          // [ skin ]
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
  }
}

.footer__contact {
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

  > .contact__title {
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

  > .contact__info {
    // [ variable ]
    $font-size: 14px;

    // [ layout ]
    display: flex;
    justify-content: center;
    align-items: center;

    height: 42px;

    > .info__image {
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

    > .info__content {
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

.footer__copyright.copyright {
  // [ position ]
  position: relative;

  // [ layout ]
  display: block;
  margin-top: 50px;
  text-align: center;

  // [ skin ]
  width: 100%;

  > .copyright__title {
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
  > .copyright__line {
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

.footer__others {
  // [ layout ]
  display: flex;
  justify-content: center;

  > .others__info {
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

    > .info__title {
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

    > .info__link.link {
      // [ layout ]
      display: block;
      margin: {
        left: .5em;
        right: .5em;
      }

      // [ skin ]
      width: 32px;
      height: 32px;

      > .link__image {
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
