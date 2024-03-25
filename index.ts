// never类型

type A = number & string // never类型

function error(): never {
    throw new Error('error')
}

function loop(): never {
    while (true) {
        
    }
}

type B = void | number | never // void | number类型


type C = 'sing' | 'dance' | 'rap'

function kun(value: C) {
    switch(value) {
        case 'sing':
            break
        case 'dance':
            break
        case 'rap':
            break
        default:
            // 兜底逻辑
            const error: never = value
            break
    }
}

console.log(kun('sing'))

