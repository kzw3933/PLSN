// 命名空间

// 支持嵌套
// 同名的namespace会合并
// 最外部的namespace支持导出供其他模块使用, 所有变量和方法必须export才能被外部使用
// 常用场景: 跨端的项目 h5 Android ios 小程序 做场景的拆分

export namespace NS {
    export let a = 1;  
    export const add = (a: number, b: number) => a + b;

    export namespace Inner {
        export let a = 'kzw';
        export const sub = (a: number, b: number) => a - b;
    }
}
