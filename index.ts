// Proxy与Reflect

// Proxy支持对象、数组、函数、set、map
// 支持拦截get-->取值, set-->赋值, apply-->函数调用, has-->in操作, ownKeys-->for in操作, 
// construct-->new操作, deleteProperty-->delete操作
let person = { name: "jack", age: 24 }
let personProxy = new Proxy(person, {
    get(target, key, receiver) {
        console.log(target, key, receiver)
        if(target.age <= 18) {
            return Reflect.get(target, key, receiver)
        } else {
            return '成年'
        }
    }
})


console.log(personProxy.age)
console.log(Reflect.get(person, 'age'))
console.log(person.age) 


// 观察者模式

const list: Set<Function> = new Set()

const autorun = (callback: Function) => {
    if(!list.has(callback)) {
        list.add(callback)
    }
}

const observable = <T extends object>(params: T) => {
    return new Proxy(params, {
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver)
            list.forEach(fn => fn())
            return result
        }
    })
}

const studentProxy = observable({name: 'turing', age: 89})

autorun(() => {
    console.log("student")
})

studentProxy.age = 89