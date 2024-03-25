// Object, object与 {}
// Object包含所有类型, 而object不包含原始类型，包含引用类型
// {} 字面量类型可以理解为new Object, 可以使用任意类型, 但是被赋值对象后无法读取属性，也就无法对其更改


let a: Object = 123
a = []
a = {test: "测试"}
console.log(a)

let b: object = []
console.log(b)

let c: {} = {test: "测试"}
console.log(c)

let d: {} = a
console.log(d)
//// d.age = 34
