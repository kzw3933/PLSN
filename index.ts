
// 使用方式import 如果是默认导出，名称可以随便取
// 可以使用 import * as api from './lib' 查看暴露了哪些内容
import xx, {a, add as addOfLib, sum, mul, max} from './lib'

console.log(xx)
console.log(a)
console.log(addOfLib(3,4))

console.log(sum(1,2,3))
console.log(mul(1,2,3))
console.log(max(1,2,3))

// 动态引入
// import 只能在最上层使用
if(true) {
    import('./lib').then(res => {
        console.log(res)
    })
}

