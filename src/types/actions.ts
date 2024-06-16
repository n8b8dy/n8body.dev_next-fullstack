export type ActionResponse<T> = {
  error?: never
  data: T
} | {
  error: string
  data?: never
}
