// type MyReadonly2<T, K> = any

type MyReadonly2<T, K extends keyof any = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P];
} & Omit<T, K>

