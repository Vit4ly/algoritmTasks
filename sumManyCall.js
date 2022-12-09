function sum(a) {
    let acc = a
    function f(b) {
        acc += b
        return f
    }
    f.toString = function () {
        return acc
    }
    return f
}

console.log(sum(1)(2)(3))
