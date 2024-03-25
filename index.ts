// interface 
// 重复定义会合并在一起
// 定义interface对象时不能多属性也不能少属性
// 对属性使用？可以使其变为可选
// readonly使得属性变为只读
// 接口可继承，支持多继承
// interface可定义函数类型
// 可使用索引签名以支持任意key, 避免每次定义完整填写所有属性


interface Student {
    name: string
    age: number,
    readonly isIkun: () => boolean
}

interface Student {
    like?: string
}

interface SuperStudent extends Student {
    id: number
}

let ikun: Student = {
    name: 'ikun',
    age: 18,
    like: 'kun',
    isIkun: () => {
        return true
    }
} 

let nikun: Student = {
    name: 'nikun',
    age: 18,
    isIkun: () => {
        return false
    }
}


//// nikun.isIkun = () => { return true; }


let st: SuperStudent = {
    name: 'ikun',
    age: 18,
    id: 123,
    isIkun: () => {
        return true
    }
}


interface Fn {
    (name: string): number[]
}

const fn: Fn = function(name: string) {
    return [1]
}


// 只对name, age强校验
interface Customer {
    name: string,
    age: number
    [other: string]: any
}

let customer1: Customer = {
    name: 'ikun',
    age: 18
}

console.log(customer1)

let customer2: Customer = {
    name: 'ikun',
    age: 18,
    test: "测试",
    exam: "考试"
}

console.log(customer2)