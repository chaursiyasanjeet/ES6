//Debouncing
let counter = 0;

function getData() {
  console.log("Fetching data", ++counter);
}

function myDebounce(call, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, delay);
  };
}
const betterFunction = myDebounce(getData, 1000);
