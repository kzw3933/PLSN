// 泛型工具

interface User {
    address: string, 
    age: number, 
    name?: string, 
    sex: string
} 

// Partial 所有属性使其可选
type PartialUser = Partial<User>
type CustPartial<T> = {
    [P in keyof T]?: T[P]
}

// Required 所有属性使其必选
type RequiredUser = Required<User>
type CustRequired<T> = {
    [P in keyof T]-?:T[P]
}

// Pick 提取部分属性
type PickUser = Pick<User, 'age' | 'name'>
type CustPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// Exclude 排除部分属性
type ExcludeUser = Exclude<'a' | 'b' | 'c', 'b' | 'c'>
type CustExclude<T, K> = T extends K ? never : T; // never在联合类型中会被排除掉


// Omit 排除部分属性后返回新的类型
type OmitUser = Omit<User, 'name'>
type CustOmit<T, K> = Pick<T, Exclude<keyof T, K>>


// Record 约束对象的key和value, 支持嵌套
type Key = 'c' | 'x' | 'k' // key不能少
type Value = 'sing' | 'dance' | 'rap' // value随意

let obj: Record<Key, Value> = {
    c:'sing',
    x: 'dance',
    k: 'rap',
}

type ObjKey = keyof any // 对象的key只能是number, string, symbol
type CustRecord<K extends ObjKey, T> = {
    [P in K]: T
}                    

// ReturnType 获取函数类型的返回类型
const fn = () => [1,2,3, "str"]

type arrNumStr = ReturnType<typeof fn>
type CustReturnType<F extends Function> = F extends (...args: any[]) => infer Res ? Res : never
