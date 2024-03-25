// 模块解析

// 默认导出 导出的内容可以是任意类型, 一个模块只能出现一个
export default 1

// 分别导出
export let a = 2
export const add = (x: number, y: number) => x + y

// 解构导出
let sum = (...args: number[]) => {
    return args.reduce((a, b) => a + b)
}

let mul = (...args: number[]) => {
    return args.reduce((a, b) => a * b)
}

let max = (...args: number[]) => {
    return Math.max(...args)
}

export {
    sum,
    mul,
    max,
}