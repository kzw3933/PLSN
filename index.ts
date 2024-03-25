// 内置对象
// js是由三个部分组成的 ECMAScript、DOM、BOM
// ECMA: Number Date RegExp Error XMLHttprequest
// DOM: querySelect MouseEvent
// BOM: promise localstorage location cookie

let num: Number = new Number(0);
let date: Date = new Date()
let reg: RegExp = new RegExp(/\w/)
let err: Error = new Error('Invalid Data')
// let xhr: XMLHttpRequest = new XMLHttpRequest() 只能在网页端执行


// HTML(元素名称)Element HTMLElement Element
// let div = document.querySelector('div') 只能在网页端执行

// let divs: NodeList = document.querySelectorAll('div') 只能在网页端执行
// let nodes: NodeListOf<HTMLDivElement | HTMLSpanElement> = document.querySelectorAll('div span') 只能在网页端执行


// let local: Storage = localStorage 只能在网页端执行
// let loc: Location = window.location 只能在网页端执行

let promise: Promise<number> = new Promise((resolve) => resolve(1))
// let cookie: string = document.cookie 只能在网页端执行

promise.then(res => {
    console.log(res)
})



