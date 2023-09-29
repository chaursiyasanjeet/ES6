// const sum = function (a) {
//     console.log(a)
//     const c = 4;
//     return function (b) {
//         return a + b + c;
//     }
// }

// let store = sum(10)
// console.log(store(3))


const sum = function (a, b, c) {
    return {
        getSumTwo: function () {
            return a + b;
        },
        getSumThree: function () {
            return a + b + c;
        }
    }
}

let store = sum(3, 4, 5)
console.log(sum(2, 3, 4))
console.log(store)