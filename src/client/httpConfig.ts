export type HttpClientConfig = {
  baseURL?: string
  getAccessToken?: () => string | null | undefined
  onRefreshToken?: (http: any) => Promise<void>
}

let currentConfig: HttpClientConfig = {}

export const setHttpClientConfig = (cfg: HttpClientConfig) => {
  currentConfig = { ...currentConfig, ...cfg }
}

export const getHttpClientConfig = (): HttpClientConfig => {
  return currentConfig
}

