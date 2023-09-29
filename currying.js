const { func } = require("prop-types");

// Currying function in javascript
function Addition(a, b, c) {
  return a + b + c;
}

const total = Addition(123, 52, 234);
console.log(total);

function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const res = addition(3); //function 1
const res2 = res(5); //function 2
const res3 = res2(5); //function 3
console.log(res3);

//currying function way to write the function
const resCurrying = addition(3)(4)(4);
console.log(resCurrying);

const userData = {
  name: "Sanjeet",
  age: 22,
};
function userInfo(obj) {
  return function (value) {
    return obj[value];
  };
}
const data2 = userInfo(userData)("name");
console.log(data2);
