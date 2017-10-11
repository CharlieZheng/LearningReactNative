"use strict";
var p1 = new Promise(function (success, failed) {
    setTimeout(function () {
        failed(new Error("failed"));
    }, 3000)
})
var p2 = new Promise(function (success, failed) {
    setTimeout(function () {
        success(p1);
        console.log("3")
    }, 1000)
})
console.log("1")
p2.then(function (result) {
    console.log(result)
}, function (err) {
    console.log(err)
})
console.log("2")