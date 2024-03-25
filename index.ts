// 联合类型

let phone: number | string = '010-8928898'

let fn = function(type: number | boolean): boolean {
    return !!type
}

console.log(fn(123))

// 交叉类型
interface People {
    name: string
    age: number
}

interface Man {
    sex: number
}


const ikun = (man: People & Man): void => {
    console.log(man)
} 

ikun({
    name: 'ikun',
    age: 18,
    sex: 1
})


// 类型断言
let log = function(num: number | string): void {
    console.log((num as string).length) // 也可以使用(<string>num).length
}

log('123')
////log(123) 输出为undefined, 类型断言只起到欺骗编译器的作用