export type HttpClientModel = {
  get: <T extends unknown, R extends unknown>(baseUrl: string, body?: T) => Promise<R>;
  post: <T extends unknown, R extends unknown>(baseUrl: string, body?: T) => Promise<R>;
  put: <T extends unknown, R extends unknown>(baseUrl: string, body?: T) => Promise<R>;
  delete: <T extends unknown, R extends unknown>(baseUrl: string, body?: T) => Promise<R>;
}
