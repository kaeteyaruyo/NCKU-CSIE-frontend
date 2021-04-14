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
  section.footer__logo
    a.logo__link(href="/")
      img.link__image(src="@/assets/image/logo/csie-white-small.png")
    article.logo__caption.caption.caption--zh-TW
      a.caption__text(href="/") 成功大學
      a.caption__text(href="/") 資訊工程學系
      a.caption__text(href="/") 暨
      a.caption__text(href="/") 研究所
    article.logo__caption.caption.caption--en-US
      a.caption__text(href="/") Department
      a.caption__text(href="/") of
      a.caption__text(href="/") Computer
      a.caption__text(href="/") Science
      a.caption__text(href="/") and
      a.caption__text(href="/") Information
      a.caption__text(href="/") Engineering
  section.footer__contact.contact
    h1.contact__title {{ $t("contact.title") }}
    address.contact__address.address {{ $t("contact.address") }} |
      a.address__map(href="about/contact") {{ $t("contact.map") }}
    a.contact__email( href = 'mailto:em62500@mail.csie.ncku.edu.tw' ) em62500@ncku.edu.tw
    a.contact__phone( href = 'tel:062757575, 62500' ) 06-2757575 ext 62500
    a.contact__fax( href = 'fax:06-2747076' ) 06-2747076
  section.footer__copyright.copyright
    h1.copyright__title Copyright © 2021 國立成功大學資訊工程學系
    hr.copyright__line
  section.footer__social-media.social-media
    h1.social-media__title {{ $t("follow") }}
    a.social-media__link.link(
      href='https://www.facebook.com/ncku.csie',
      target = '_blank'
    )
      img.link__image(src="@/assets/image/icon/facebook.png")
  section.footer__developer.developer
    h1.developer__title {{ $t("developer") }}
    a.developer__link.link(
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

  > .logo__link {
    // [ layout ]
    display: block;
    margin: {
      left: auto;
      right: auto;
    }

    // [ skin ]
    width: 52px;
    height: auto;
    border: {
      style: solid;
      color: transparent;
      top-width: 70px;
      bottom-width: 10px;
    }

    > .link__image {
      // [ skin ]
      width: 52px;
      height: auto;
    }
  }

  > .logo__caption {
    // [ layout ]
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: {
      left: auto;
      right: auto;
    }

    // [ skin ]
    height: auto;

    > .caption__text {
      // [ layout ]
      display: inline;

      // [ skin ]
      color: #ffffff;
    }

    &.caption-- {
      // modifier
      // `> .#{ $block } > .footer > .logo > .caption.caption--zh-TW`
      &zh-TW {
        // [ skin ]
        width: auto;

        // element
        // `> .#{ $block } > .footer > .logo > .caption.caption--zh-TW > .caption__text`
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
        // [ layout ]
        margin-top: 10px;

        // [ skin ]
        width: 90%;

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
    top: 50px;
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

  %contact__element {
    // [ variable ]
    $font-size: 14px;

    // [ layout ]
    display: block;
    line-height: $font-size * 2;

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

    // [ before ]
    &::before {
      // [ layout ]
      display: inline-block;
      margin-right: 6px;
      vertical-align: middle;

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
  }

  > .contact__address {
    // [ template ]
    @extend %contact__element;

    // [ layout ]
    margin-top: 10px;

    // [ before ]
    &::before {
      // [ icon ]
      background-image: url('~@/assets/image/icon/location.png');
    }

    > .address__map {
      // [ layout ]
      display: inline-block;
      line-height: 14px;

      // [ skin ]
      color: #6982c0;
      font-size: 14px;
      text-decoration: underline;

      // [ RWD: $large ]
      @media screen and ( min-width: $large ) {
        // [ layout ]
        line-height: (16 * 2)px;

        // [ skin ]
        font-size: 16px;
      }
    }
  }

  > .contact__email {
    // [ template ]
    @extend %contact__element;

    // [ layout ]
    margin-top: 14px;
    word: {
      break: break-all;
      wrap: break-word;
    }

    // [ skin ]
    text-decoration: underline;

    // [ before ]
    &::before {
      // [ icon ]
      background-image: url('~@/assets/image/icon/envelope.png');
    }
  }

  > .contact__phone {
    // [ template ]
    @extend %contact__element;

    // [ layout ]
    margin-top: 14px;
    word: {
      break: break-all;
      wrap: break-word;
    }

    // [ skin ]
    text-decoration: underline;

    // [ before ]
    &::before {
      // [ icon ]
      background-image: url('~@/assets/image/icon/phone.png');
    }
  }

  > .contact__fax {
    // [ template ]
    @extend %contact__element;

    // [ layout ]
    margin-top: 14px;
    word: {
      break: break-all;
      wrap: break-word;
    }

    // [ skin ]
    text-decoration: underline;

    // [ before ]
    &::before {
      // [ icon ]
      background-image: url('~@/assets/image/icon/printer.png');
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
    max-width: 320px;
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

.footer__social-media.social-media {
  // [ layout ]
  display: inline-flex;
  margin-top: 30px;
  text-align: center;

  // [ skin ]
  width: 50%;
  height: auto;
  border-bottom: 32px solid #213262;
  justify-content: flex-end;
  align-items: center;

  > .social-media__title {
    // [ layout ]
    display: inline-block;
    margin: {
      left: 15px;
      right: 15px;
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

  > .social-media__link.link {
    // [ layout ]
    display: inline-block;
    margin: {
      left: 15px;
      right: 15px;
    }

    // [ skin ]
    width: 32px;
    height: 32px;

    // element
    // `> .#{ $block } > .footer > .social-media > .link > .link__image`
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

.footer__developer.developer {
  // [ layout ]
  display: inline-flex;
  margin-top: 30px;
  text-align: center;

  // [ skin ]
  width: 50%;
  height: auto;
  border-bottom: 32px solid #213262;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;

  // element
  // `> .#{ $block } > .footer > .developer > .developer__title`
  > .developer__title {
    // [ layout ]
    display: inline-block;
    margin: {
      left: 15px;
      right: 15px;
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

  > .developer__link.link {
    // [ layout ]
    display: inline-block;
    margin: {
      left: 15px;
      right: 15px;
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
</style>
