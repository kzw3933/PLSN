// 类型推论
let arr = [1,2,3] // number[]

let str   // any
str = 456


// 类型别名
type str = string

let str1: str = 'usdiod'

type num = 1 extends number ? 1 : 0   // 和类别的层级关系有关

let num1: num = 1
