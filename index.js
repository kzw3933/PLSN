"use strict";
// weakset weakmap set map
let i1 = {
    name: "John",
    id: 1
};
let i2 = {
    name: "John",
    id: 1
};
let set1 = new Set([1, 2, 3, 3, 3, 6, 7]); // 去重, 引用类型除外
let set2 = new Set([i1, i2]);
console.log(set1);
console.log(set2);
