// --------------------------------- Color Changer by Hex Code ---------------------------------
let arr = ["a", "b", "c", "d", "e", "f"];

let h1 = document.createElement("h1");

function colorChanger() {
  let r1 = Math.floor(Math.random() * 15);
  let r2 = Math.floor(Math.random() * 15);
  let g1 = Math.floor(Math.random() * 15);
  let g2 = Math.floor(Math.random() * 15);
  let b1 = Math.floor(Math.random() * 15);
  let b2 = Math.floor(Math.random() * 15);

  if (r1 >= 10) {
    r1 = arr[r1 - 10];
  }
  if (r2 >= 10) {
    r2 = arr[r2 - 10];
  }
  if (g1 >= 10) {
    g1 = arr[g1 - 10];
  }
  if (g2 >= 10) {
    g2 = arr[g2 - 10];
  }
  if (b1 >= 10) {
    b1 = arr[b1 - 10];
  }
  if (b2 >= 10) {
    b2 = arr[b2 - 10];
  }

  document.body.style.backgroundColor = `#${r1}${r2}${g1}${g2}${b1}${b2}`;

  document.body.appendChild(h1).innerText = `Background Color Hex Code: #${r1}${r2}${g1}${g2}${b1}${b2}`;
}

// --------------------------------- Color Changer by RGB ---------------------------------
// function colorChanger() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }