// 函数类型


// 普通函数
function add(a: number = 0, b: number = 0): number {
    return a + b;
}
console.log(add())
console.log(add(456, 789));

// 箭头函数
const sub = (a: number, b: number): number => a - b;
console.log(sub(456, 789));


// 使用?实现可选参数，无法与默认值连用
function mul(a: number, b?: number): number {
    if(b === undefined) {
        b = 1
    }
    return a * b;
}

console.log(mul(456))

// this
interface Student {
    name: string
    likes: string[],
    tell: (this: Student, num: number) => void
}

let st: Student = {
    name: '小明',
    likes: ['吃饭', '玩游戏'],
    tell(num: number) {
        console.log(this.name +'说：' + num);
    }
}

st.tell(123);

// 函数重载
let arr: number[] = [1, 2, 3, 4, 1, 6, 7, 8]

function findNum(id: number): number[];
function findNum(): number[];
function findNum(ids: number[]): number[];

function findNum(ids?: number | number[]): number[] {
    if(typeof ids == 'number') {
        return arr.filter((item) => item == ids)
    } else if(Array.isArray(ids)) {
        arr.push(...ids)
        return arr
    } else {
        return arr
    }
}

console.log(findNum(1))