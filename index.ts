// any类型和unknown类型
// any类型可以赋值给其他类型但是unknown类型不行，只能赋值给自身或any类型
// unknown如果被赋值一个对象，无法读取属性也不能调用方法
// unknown比any更加安全

let a: any = []
a = {test: "测试"}
a = Symbol(1)

console.log(a)

let b: unknown = []
b = {test: "测试"}
b = Symbol(1)
console.log(b)

// 类型顺序
// 1. top type: any和unknown
// 2. Object
// 3. Number String Boolean
// 4. number string boolean
// 5. 1 '测试' false
// 6. never