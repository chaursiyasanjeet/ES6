//map -> store in key and value form

let myMap = new Map([
  ["A1", "Sanjeet"],
  ["A2", "Amit"],
]);

console.log(myMap);

//override the value
myMap.set("A2", "sanjeet");
console.log(myMap);

//to delete whole map
// map.delete()

//to delete key
myMap.delete("A2");
console.log(myMap);

for (let [key, value] of myMap) {
  console.log(`keys ${key}, value ${value}`);
}

myMap.forEach((value, key) => {
  console.log(key, value);
});
