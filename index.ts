// class

// class基本用法、继承、类型约束、implements、super

interface Options {
    el: string | HTMLElement
}

interface VueCls {
    options: Options
    init():void
}

interface Vnode {
    tag: string,
    text?: string
    children?: Vnode[]
}


class Dom {
    // 创建节点的方法
    createElement(el: string) {
        return document.createElement(el);
    }
    // 填充文本的方法
    setText(el: HTMLElement, text: string | null) {
        el.textContent = text;
    }
    // 渲染函数
    render(data: Vnode) {
        let root = this.createElement(data.tag)
        if(data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);!
                root.appendChild(child);
            })
        } else {
            this.setText(root, data.text ?? null);
        }

        return root
    } 
}

class Vue extends Dom implements VueCls {
    options: Options;
    constructor(options: Options) {
        super(); // 父类的prototype.constructor.call
        this.options = options
        this.init()
    }
    init(): void {
        // 虚拟dom 就是通过js去渲染真实的dom
        let data: Vnode = {
            tag: 'div',
            children: [
                {
                    tag: 'h1',
                    text: 'Hello Vue!'
                },
                {
                    tag: 'p',
                    text: 'Welcome to Vue!'
                }
            ]
        }
        let app = typeof this.options.el == 'string'? document.querySelector(this.options.el) : this.options.el;
        app?.appendChild(this.render(data))
    }
}

let app = new Vue({
    el: '#app'
})

// class的修饰符 readonly private protected public
// readonly用于属性前，代表只读
// private 用于属性或方法前, 只能在类内部使用(子类中也无法使用)
// protected 可以给子类和内部使用
// public 公开, 默认即为public

class Student {
    readonly age: number
    constructor(age: number) {
        this.age = age
    }
    private say() {
        console.log(this.age)
    }
}

// 静态方法
class Teacher {
    name: string
    constructor(name: string) {
        this.name = name
    }
    static job() {
        console.log('Teacher')
    }
}

// get和set
class Ref {
    _value: any
    constructor(value: any) {
        this._value = value
    }

    get value() {
        return this._value
    }

    set value(value: any) {
        this._value = value
    }
}


const ref = new Ref('test')
