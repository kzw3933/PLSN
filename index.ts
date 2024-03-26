// 协变、逆变、双向协变

interface A {
    name: string,
    age: number
}

interface B {
    name: string,
    age: number,
    sex: string
}


let a: A = {
    name: 'zhangsan',
    age: 18
}

let b: B = {
    name: 'jack',
    age: 19,
    sex:'male'
}

// 协变
console.log(a)
a = b
console.log(a)

// 逆变

let fna = (param: A) => {

}


let fnb = (param: B) => {

}

// fna = fnb  不允许, 在tsconfig中禁止strictFunctionTypes可支持双向协变
fnb = fna
