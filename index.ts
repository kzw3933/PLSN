// weakset weakmap Set Map

// Set
interface I {
    name: string
    id: number
}

let i1: I = {
    name: "John",
    id: 1
}

let i2: I = {
    name: "John",
    id: 1
}

let set1: Set<number> = new Set([1,2,3, 3, 3, 6, 7]) // 去重, 引用类型除外
let set2: Set<string> = new Set(['456', '456'])
let set3: Set<I> = new Set([i1, i2])

console.log(set1)
console.log(set2)
console.log(set3)

console.log(set1.has(5))
console.log(set1.delete(7))
console.log(set1.add(8))
set1.clear()

// Map 
// 和对象不同，map的key可以是应用类型
let obj = {name: 'kzw'}
let map: Map<object, any> = new Map()

map.set(obj, 123)

console.log(map)


// weakmap weakmap 不会增加引用次数
// weakmap的key只能是引用类型
let obj1:any = {name: 'obj1'}
let obj2:any = obj1

let weakmap: WeakMap<object, any> = new WeakMap()
weakmap.set(obj2, 'obj2')
console.log(weakmap.get(obj1))
obj1 = null
obj2 = null