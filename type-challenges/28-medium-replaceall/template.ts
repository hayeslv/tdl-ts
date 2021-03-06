// type ReplaceAll<S extends string, From extends string, To extends string> = any

type ReplaceAll<S extends string, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${ReplaceAll<R, From, To>}`
    : S


// 错误的方式：递归
// type ReplaceAll<S extends string, From extends string, To extends string> = From extends ""
//   ? S
//   : S extends `${infer L}${From}${infer R}`
//     ? ReplaceAll<`${L}${To}${R}`, From, To>
//     : S