//set
// It contains unique values
// object constructor

let myArray = [1, 2, 3, 4];
let obj = new Set(myArray);

console.log(obj);
obj.add(4);
console.log(obj);

obj.delete(4);
console.log(obj);
const obj1 = { name: "sanjeet" };
obj.add(obj1);
console.log(obj);

//to search

console.log(obj.has(10));
console.log(obj.has(2));

//to itereate over set
for (let i of obj) {
  console.log(i);
}

//
obj.forEach((element) => {
  console.log(element);
});
