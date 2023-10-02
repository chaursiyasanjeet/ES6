//pushing elements in an array
const arr = [1, 2];
const append = (arr, ele) => {
  return [...arr, ele]; //this will return a new arrray

  //this will modify original array
  /*
    arr.push(ele);
    return arr;
    */
};

console.log(append(arr, 3));
console.log(arr);

//removing a duplicate element in an array
const arr2 = [1, 2, 3, 3, 4, 4, 4, 5];

/*
const uniqueArray = (arr) => {
  const uniqueElements = [];
  arr.forEach((ele) => {
    if (!uniqueElements.includes(ele)) {
      uniqueElements.push(ele);
    }
  });
  return uniqueElements;
};
*/

//level 1
/*
function uniqueArray(arr) {
  return [...new Set(arr)];
}
*/

//level 2
const uniqueArray = (arr) => {
  return arr.reduce((acc, ele) => {
    return acc.includes(ele) ? acc : [...acc, ele];
  }, []);
};
console.log(uniqueArray(arr2));

//concatenating the array
const mergeArray = (arr1, arr2) => {
  return arr1.concat(...arr2);
  //method 1
  //return [...arr1, ...arr2];
  //method 2
  // arr1.push(...arr2)
  //return arr1
};

const result = mergeArray(arr, arr2);
console.log(result, arr, arr2);
