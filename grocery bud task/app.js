// Grocery bud app without localStorage
// let itemsList = document.querySelector(".itemsList");
// let arr = [];

// function addItemHandler() {
//   let input = document.querySelector("input").value;
//   if (input == "")
//     return (document.querySelector(".inputTxt").style.display = "block");
//   document.querySelector(".inputTxt").style.display = "none";
//   arr.unshift(input);
//   listUI(arr);
// }

// function editItemHandler(e) {
//   task = e.parentElement.previousElementSibling.textContent;

//   document.querySelector("input").value = task;
//   let addBtn = document.querySelector(".addBtn");
//   let editBtn = document.querySelector(".editBtn");

//   addBtn.style.display = "none";
//   editBtn.style.display = "block";

//   editBtn.addEventListener("click", function () {
//     let idx = arr.indexOf(task);
//     inputTask = document.querySelector("input").value;
//     arr[idx] = inputTask;
//     task = inputTask;

//     let item = document.querySelectorAll(".item")[idx];

//     let taskName = item.children;
//     taskName[0].innerText = inputTask;

//     editBtn.style.display = "none";
//     addBtn.style.display = "block";
//   });
// }

// function removeItemHandler(e) {
//   arr.splice(arr.indexOf(e.parentNode.parentNode.innerText.trim()), 1);
//   e.parentNode.parentNode.remove();
//   listSize(arr);
// }

// function clearItems() {
//   let items = document.querySelectorAll(".item");
//   arr.splice(0);
//   items.forEach((item) => {
//     itemsList.removeChild(item);
//   });
//   listSize(arr);
// }

// function listUI(item) {
//   let div = document.createElement("div");
//   div.className = "item";
//   div.innerHTML = `
//   <p class="itemName">${item[0]}</p>
//   <span>
//   <i onclick="editItemHandler(this)" id="editIcon" class="fa-regular fa-pen-to-square"></i>
//   <i onclick="removeItemHandler(this)" id="deleteIcon" class="fa-solid fa-trash"></i>
//   </span>
//   `;

//   itemsList.prepend(div);
//   listSize(item);
// }

// function listSize(array) {
//   array.length >= 4
//     ? (itemsList.style.overflowY = "scroll")
//     : (itemsList.style.overflowY = "hidden");
// }

// Grocery Bud App Using local storage
let itemsList = document.querySelector(".itemsList");
let arr = JSON.parse(localStorage.getItem("items")) || [];

arr.forEach((item) => {
  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <p class="itemName">${item}</p>
    <span>
    <i onclick="editItemHandler(this)" id="editIcon" class="fa-regular fa-pen-to-square"></i>
    <i onclick="removeItemHandler(this)" id="deleteIcon" class="fa-solid fa-trash"></i>
    </span>
  `;
  itemsList.appendChild(div);
});
listSize(arr);

function addItemHandler() {
  let input = document.querySelector("input").value;
  if (input == "")
    return (document.querySelector(".inputTxt").style.display = "block");
  document.querySelector(".inputTxt").style.display = "none";
  arr.unshift(input);
  myStorage(arr);
  reloadUI();
  listSize(arr);
}

function editItemHandler(e) {
  task = e.parentElement.previousElementSibling.textContent;

  document.querySelector("input").value = task;
  let addBtn = document.querySelector(".addBtn");
  let editBtn = document.querySelector(".editBtn");

  addBtn.style.display = "none";
  editBtn.style.display = "block";

  editBtn.addEventListener("click", function () {
    let idx = arr.indexOf(task);
    inputTask = document.querySelector("input").value;
    arr[idx] = inputTask;
    task = inputTask;

    let item = document.querySelectorAll(".item")[idx];

    let taskName = item.children;
    taskName[0].innerText = inputTask;

    editBtn.style.display = "none";
    addBtn.style.display = "block";
    myStorage(arr);
  });
}

function removeItemHandler(e) {
  let text = e.parentNode.parentNode.innerText.trim();
  let idx = arr.indexOf(text);
  arr.splice(idx, 1);
  e.parentNode.parentNode.remove();
  listSize(arr);
  myStorage(arr);
}

function clearItems() {
  let items = document.querySelectorAll(".item");
  arr.splice(0);
  items.forEach((item) => {
    itemsList.removeChild(item);
  });
  myStorage(arr);
  listSize(arr);
}

function reloadUI() {
  let arr = JSON.parse(localStorage.getItem("items")) || [];

  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <p class="itemName">${arr[0]}</p>
    <span>
    <i onclick="editItemHandler(this)" id="editIcon" class="fa-regular fa-pen-to-square"></i>
    <i onclick="removeItemHandler(this)" id="deleteIcon" class="fa-solid fa-trash"></i>
    </span>
  `;
  itemsList.prepend(div);
  listSize(arr);
}

function listSize(array) {
  array.length >= 4
    ? (itemsList.style.overflowY = "scroll")
    : (itemsList.style.overflowY = "hidden");
}
function myStorage(data) {
  localStorage.setItem("items", JSON.stringify(data));
}
