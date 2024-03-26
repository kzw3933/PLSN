// infer 推导泛型参数

interface User {
    name: string
    age: number
}


// 推导Promise参数
type PPType = Promise<Promise<User>>

type GetPromiseType<T> = T extends Promise<infer K> ? GetPromiseType<K> : T

type T = GetPromiseType<PPType>


// infer 协变
// 产生协变会返回联合类型
let obj = {
    name: '123',
    age: 12
}

type Bar1<T> = T extends {name: infer N, age: infer A} ? [N, A] : T
type Bar2<T> = T extends {name: infer N, age: infer N} ? N : T
type U1 = Bar1<typeof obj>
type U2 = Bar2<typeof obj>

// infer 逆变
// 产生逆变会返回交叉类型
type Tar<T> = T extends {
    a: (x: infer U) => void,
    b: (x: infer U) => void
} ? U : T

type V = Tar<{a: (x: number) => void, b: (x:string) => void }>