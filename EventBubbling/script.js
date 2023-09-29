const button = document.querySelector("button");
const div = document.querySelector("div");
const a = document.querySelector("a");

div.addEventListener("click", () => {
  console.log("div is clicked");
});

button.addEventListener("click", (e) => {
  //   e.stopPropagation();
  console.log("button is clicked");
});

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("button1 is clicked");
});

button.addEventListener("click", (e) => {
  console.log("button3 is clicked");
});

a.addEventListener("click", (e) => {
  e.preventDefault();
});
//event bubbling =>child to parent
//event capturing=>parent to child just pass a true value after callback function
