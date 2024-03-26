"use strict";
// 发布订阅模式
// vue2: eventBus $on监听 $emit派发
// electron: ipcRenderer ipcMain 通讯
// DOM2: addEventListener removeEventListener
// DOM2 发布订阅模式
// 监听器
const callback = () => {
    console.log('kzw');
};
document.addEventListener('kzw', callback, {
    once: true // 只触发一次
});
// 订阅中心
const e = new Event('kzw');
// 支持删除监听器函数
document.removeEventListener('kzw', callback);
// 派发
document.dispatchEvent(e);
document.dispatchEvent(e);
document.dispatchEvent(e);
class Emitter {
    constructor() {
        this.events = new Map();
    }
    once(event, callback) {
        const inner = (...args) => {
            callback(...args);
            this.off(event, inner);
        };
        this.on(event, inner);
    }
    on(event, callback) {
        if (this.events.has(event)) {
            const callbackList = this.events.get(event);
            callbackList && callbackList.push(callback);
        }
        else {
            this.events.set(event, [callback]);
        }
    }
    emit(event, ...args) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.forEach(fn => {
                fn(...args);
            });
        }
    }
    off(event, callback) {
        const callbackList = this.events.get(event);
        if (callbackList) {
            callbackList.splice(callbackList.indexOf(callback), 1);
        }
    }
}
const bus = new Emitter();
const fn = (b, n) => {
    console.log(b, n);
};
bus.on('kzw', fn);
bus.once('message', fn);
bus.emit('kzw', false, 1);
bus.emit('kzw', false, 1);
bus.emit('kzw', false, 1);
bus.off('kzw', fn);
bus.emit('kzw', false, 1);
bus.emit('message', true, 1);
bus.emit('message', true, 1);
bus.emit('message', true, 1);
bus.emit('message', true, 1);
