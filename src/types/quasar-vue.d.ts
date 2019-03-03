import VueI18n, { IVueI18n } from 'vue-i18n'

declare module 'vue/types/vue' {

  interface Vue {
    i18n: VueI18n & IVueI18n
    $q: any
  }

}
