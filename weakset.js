// weakset
// olnly store object
// cant itterate
const ws = new WeakSet();

const obj1 = { name: "tiger" };
const obj2 = { name: "ghhh" };
ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1));
ws.delete(obj1);

console.log(ws.has(obj1));
