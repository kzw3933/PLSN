// 类型守卫

// 1. 类型收缩
// typeof是有缺陷的， 对于 数组、对象返回object
const isStr = (str: any) => typeof str === 'string'
const isArray = (arr: any) => arr instanceof Array

// 2. 类型谓词
const isObj = (arg: any) => ({}).toString.call(arg) === '[object Object]'
const isNum = (num: any): num is number => typeof num === 'number' // 类型谓词
const isString = (str: any): str is string => typeof str === 'string' // 类型谓词
const isFun = (fun: any): fun is Function => typeof fun === 'function' // 类型谓词


const fn = (data: any) => {
    if(isObj(data)) {
        // 遍历属性不能用for in, 会遍历原型上的属性
        Object.keys(data).forEach(key => {
            let val = data[key]
            if(isNum(val)) {
                data[key] = val.toFixed(2)
            } 
            if(isString(val)) {
                data[key] = val.trim()
            }
            if(isFun(val)) {
                data[key]() // 如果直接使用val(), 会出现undefined, js中函数独立调用如果在浏览器中this指向window, nodejs中为undefined
            }
        })
    }
}


let obj = {
    a: 100.222,
    b: "  jsjks ",
    c: function() {
        console.log(this)
    }
}

fn(obj)