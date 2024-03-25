// 数组类型

// 普通方式
let arr: number[] = [1,2,3]
console.log(arr)

// 泛型方式
let arr2: Array<boolean> = [true, false, false]


// 定义对象数组
interface Student {
    name: string
}

let arr3: Array<Student> = [{name: "John"}, {name: "susan"}]
console.log(arr3)


// 二维数组
let arr4: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr4)
let arr5: Array<Array<number>> = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr5)


// 数组在函数中的使用, IArguments本质是一个interface
function sum(...args: number[]) {
    let a: IArguments = arguments
}