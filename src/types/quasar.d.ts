// Type definitions for quasar-framework
// Project: quasar
// Definitions by: Damian Bouné <http://github.com/dboune>

declare module 'quasar' {
  
  import Vue, { PluginFunction, PluginObject } from 'vue'

  export function openURL (url: string): void

  interface QuasarIconSetPlugin {
    install: ($q: any, iconSet: any) => void
    set: (iconSet: any) => void
  }

  interface QuasarLangPlugin {
    install: ($q: any, queues: any, lang: any) => void
    set: (lang: any) => void
  }

  interface QuasarPluginOptions {
    config: any
    lang: any
    iconSet: any
    components: any
    directives: any
    plugins: any
  }

  interface Quasar extends PluginObject<QuasarPluginOptions> {
    version: string
    lang: QuasarLangPlugin
    iconSet: QuasarIconSetPlugin
  }

  export default Quasar

}

declare module 'quasar-framework/*' {}
