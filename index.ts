// 装饰器
import axios from 'axios'
import 'reflect-metadata'

// 类装饰器 target参数是构造函数, 再不破坏的类的结构的基础上为类增加功能或属性

const Base1: ClassDecorator = (target) => {
    target.prototype.fn = () => {
        console.log('fn')
    } 
}

@Base1
class Http1 {

}

const http1 = new Http1() as any
http1.fn()

// 装饰器工厂 curry化
const Base2 = (name: string) => {
    const fn: ClassDecorator = (target) => {
        target.prototype.fn = () => {
            console.log(name)
        } 
    }
    return fn
}

@Base2("function")
class Http2 {

}

const http2 = new Http2() as any
http2.fn()

// 方法装饰器

const Get = (url: string) => {
    const fn: MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
        console.log(key, descriptor, descriptor)
        axios.get(url).then(res => {
            descriptor.value(res.data)
        })
    }

    return fn
}



class Http3 {
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(data: any) {
        console.log(data.result.list)
    }
}

// 参数装饰器

const GetResult = (url: string) => {
    const fn: MethodDecorator = (target, _, descriptor: PropertyDescriptor) => {
        const key = Reflect.getMetadata('key', target)
        axios.get(url).then(res => {
            descriptor.value(key ? res.data[key] : res.data)
        })
    }

    return fn
}

const Result = () => {
    const fn: ParameterDecorator = (target, key, index) => {
        Reflect.defineMetadata('key', 'result', target)
        console.log(target, key, index)
    }
    return fn;
}


class Http4 {
    @GetResult('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList(@Result() data: any) {
        console.log(data.list)
    }
}

// 属性装饰器

const Name: PropertyDecorator = (target, key) => {
    console.log(target, key)
}

class Http5 {
    @Name
    name: string
    constructor() {
        this.name = 'name'
    }
}