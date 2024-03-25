// 枚举

// 数字枚举
enum Color {
    red = 1, // 默认从0开始
    green,
    blue
}

console.log(Color.red)  

// 字符串枚举
enum ColorStr {
    red = '红色',
    green = '绿色',
    blue = '蓝色'
}

console.log(ColorStr.red)

// 异构枚举
enum Check {
    yes = 1,
    no = 'no'
}

console.log(Check.no)

// 接口枚举
interface A {
    red: Color.red
}


let obj: A = {
    red: Color.red
}

// const枚举 被tsc编译后直接就是常量
const enum Types {
    success,
    fail
}

let code: number = 0

if (code === Types.success) {
    console.log('success')
}

// 反向映射
enum Sexs {
    male,
    female
} 
let man: number = Sexs.male
let key = Sexs[man]
console.log(`value---${man}`, `key---${key}`)