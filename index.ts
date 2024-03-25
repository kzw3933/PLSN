// 生成器
function* gen() {
    yield Promise.resolve('A')
    yield 'B'
    yield 'C'
    yield 'D'
}

const genr = gen()
console.log(genr.next())
console.log(genr.next())
console.log(genr.next())
console.log(genr.next())
console.log(genr.next())

// 迭代器

let set: Set<number> = new Set([1,2,3,1,2,3]) // 去重后1,2,3
let map: Map<any, any> = new Map<number, number>

let Arr = [1,2,3]
map.set(Arr, '数组123')

console.log(map.get(Arr))

const each = (value: any) => {
    let iter: any = value[Symbol.iterator]()
    let next: any = {done: false}
    while(!next.done) {
        next = iter.next()
        if(!next.done) {
            console.log(next.value)
        }
    }
}

each(map)


// 迭代器的语法糖, for of不能用于对象，对象上没有iterator
for(let val of set) {
    console.log(val)
}

// 解构的底层原理也是调用iterator
let [a, b, c] = [1,2,3]
let copy = [...Arr]
console.log(a, b, c)
console.log(copy)

// 对象支持for of
let obj = {
    max: 5,
    current: 0,
    [Symbol.iterator]() {
        return {
            max: this.max,
            current: this.current,
            next() {
                if(this.current == this.max) {
                    return {
                        value: undefined,
                        done: true
                    }
                } else {
                    return {
                        value: this.current++,
                        done: false
                    }
                }
            }
        }
    }
}

for(let val of obj) {
    console.log(val)
}