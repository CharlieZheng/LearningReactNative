let p = new Proxy({
    hello: "few",

    hff: function (k) {
        console.log(k * 100)
    }
}, {
    get: function (v, f) {
        console.log(f.toString())
    }, hff: function (k) {
        console.log(k * 1000)
    }
})

p.hello
p.hff(9);