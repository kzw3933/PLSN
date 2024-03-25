// 泛型约束

function add<T extends number>(a: T, b: T) {
    return a + b;
}

console.log(add(1,2))



interface Len {
    length: number
}

function fn<T extends Len>(a: T) {
    return a.length;
}

console.log(fn('12333'))


let obj = {
    name: 'foo',
    sex: 'female'
}

// keyof约束
type Key = keyof typeof obj

function fn2<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}


interface Data {
    name: string
    age: number
    sex: string
}

type Options<T extends object> = {
    [key in keyof T]?: T[key]    // 映射类型的语法 { [k in keys]: Type }
}

type B = Options<Data>