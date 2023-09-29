//infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(3)(5)(3)(312)());
