//Memoization=>opimization technique that can be reduce
//time-consuming calculations by saving previous input to something called cahe and resulting from it

const { memo } = require("react");

let sum = 0;
const calc = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("\n", "Value from Cache");
      console.log(cache);
      return cache[n];
    } else {
      console.log("Calculating first time");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
let recevied = memoize(calc);
let result = recevied(5);
console.timeEnd();

console.time();
result = recevied(5);
console.timeEnd();
