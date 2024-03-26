// infer 使用实例

type Arr = ['a', 'b', 'c']

// 提取头部元素
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : []
type a = First<Arr>


// 剔除尾部元素
type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : []
type rest = Pop<Arr>

// shift
type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []
type s = Shift<Arr>

// 反转 递归
type Reverse<T extends any[]> = T extends [infer First, ...infer Rest] ? [...Reverse<Rest>, First]: T;
type r = Reverse<Arr>