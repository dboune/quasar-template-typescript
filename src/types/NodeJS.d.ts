declare namespace NodeJS {
  export interface ProcessEnv {
    MODE: string
    VUE_ROUTER_MODE: "hash" | "history" | "abstract"
    VUE_ROUTER_BASE: string
  }
}
