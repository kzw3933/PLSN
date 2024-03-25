// Mixins

interface A {
    num: number;
}

interface B {
    str: string;
}

let a: A = {
    num: 1
}  

let b: B = {
    str: "hello"
}

// 对象混入
//  1. 扩展运算符 浅拷贝 返回新的类型
let c = {...a, ...b} 
console.log(c)

// 2. Object.assign 也是浅拷贝， 返回交叉类型
let c2 = Object.assign({}, a, b) 
console.log(c2)


// 类的混入
class Logger {
    log(msg: string) {
        console.log(msg)
    }
}

class Html {
    render() {
        return `<h1>Hello World</h1>`
    }
}

class App {
    run() {
        console.log('run')
    }
}

type Constructor<T> = new (...args: any[]) => T  // 类类型
function pluginMixins<T extends Constructor<App>>(Base: T) {
    return class extends Base {
        Logger: Logger
        Html: Html
        constructor(...args: any[]) {
            super(...args)
            this.Logger = new Logger()
            this.Html = new Html()
        }

        run() {
            this.Logger.log('run')
        }

        render() {
            return this.Html.render()
        }
    }
}

const mixins = pluginMixins(App)

const app = new mixins()
console.log(app.render())





