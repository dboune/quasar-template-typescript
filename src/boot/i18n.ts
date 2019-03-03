import _Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

export default async ({ app, Vue }: { app: _Vue, Vue: typeof _Vue}) => {

  Vue.use(VueI18n)

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'en-us',
    fallbackLocale: 'en-us',
    messages
  })
}
