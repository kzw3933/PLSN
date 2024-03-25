// Symbol

let a1: symbol = Symbol(1)
let a2: symbol = Symbol(1)

console.log(a1 === a2)  // false

// Symbol.for会去全局查找是否已经注册过这个key，如果存在就直接使用
console.log(Symbol.for('2') === Symbol.for('2')) // true


let obj = {
    name: 1,
    [a1]: 111,
    [a2]: 222
}

console.log(obj) // 不会发生覆盖

// for in 不能读取Symbol, Object.keys(obj)也无法读取
for(let key in obj) {
    console.log(key)
}

console.log(Object.keys(obj))

console.log(Object.getOwnPropertySymbols(obj)) // 可以读取symbols，但是无法读取其他属性名了

console.log(Reflect.ownKeys(obj))