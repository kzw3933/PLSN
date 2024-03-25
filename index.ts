// 元组类型
// 一种特殊的数组，继承了数组的方法，因此仍然可以使用push方法，编译本身不会阻止这样做

let arr1 = [1, false]
let arr2: [number, boolean] = [1, false]

arr1.push(34)
arr2.push(45)

console.log(arr1)
console.log(arr2)

let arr3: readonly [x: number, y?:boolean] = [1]

type first = typeof arr3[0]

console.log(arr3['length'])

let excel: [string, string, number][] = [
    ['str1', 'str2', 23],
    ['str3', 'str4', 34],
    ['str5', 'str6', 45]
]