//can only store object
//can't itterate

let wm = new WeakMap();
const obj1 = { name: "sanjeet" };
const obj2 = {};

wm.set(obj1, "sanjeet");
wm.set(obj2, "sanjeet");

console.log(wm);

/* 0
: {Object => "sanjeet"}
key: {name: 'sanjeet'}
value: "sanjeet"
1: {Object => "sanjeet"}
key: {}
value: "sanjeet"*/
