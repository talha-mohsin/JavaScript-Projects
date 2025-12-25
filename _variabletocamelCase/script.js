let output = document.querySelector(".output");
let textarea = document.querySelector("textarea");

document.querySelector("#btn").addEventListener("click", function () {
  if (!textarea.value) {
    output.style.color = 'red';
    return output.innerText = "Invalid input";
  }

  let arr = textarea
    .value.trim()
    .toLowerCase()
    .split("_");

  let val = arr.reduce(function (acc, elem) {
    return acc + elem[0].toUpperCase() + elem.slice(1);
  }, "");

  let camelCase = val[0].toLowerCase() + val.slice(1);
  output.style.color = 'green';
  output.innerText = camelCase;
});
