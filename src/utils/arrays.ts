export function interleave<T>(array: Array<T>, element: T) {
  return array.flatMap(e => [e, element]).slice(0, -1)
}
