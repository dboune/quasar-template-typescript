import _Vue from 'vue'
import axios from 'axios'

export default async ({ Vue }: { Vue: typeof _Vue }) => {
  Vue.prototype.$axios = axios
}
