const mythrottle = (fun, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fun();
    }, d);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("myid").disabled = false;
  console.log("User clicked!!");
}, 2000);
