// 字符串类型
let str1: string = "学习ts"
let str2: string = `${str1}`
console.log(str1)
console.log(str2)

// 数字类型
let num: number = 123.123
let nan: number = NaN
let inf: number = Infinity
let dec: number = 6
let bin: number = 0b1010
let hex: number = 0xf00d
let oct: number = 0o744
console.log(num)
console.log(nan)
console.log(inf)
console.log(dec)
console.log(bin)
console.log(hex)
console.log(oct)

// 布尔类型
let bt: boolean = true
let bf: boolean = false
console.log(bt)
console.log(bf)

// null和undefined类型, 严格模式下两者无法穿插赋值
let n: null = null
let u: undefined = undefined
console.log(n)
console.log(u)

// void类型, 严格模式下无法将null赋值给void类型, void一般用于函数上
////let v1: void = null 
let v2: void = undefined
////console.log(v1)
console.log(v2)