// Selecting the main items list container
let itemsList = document.querySelector(".itemsList");

// Load items from localStorage OR create empty array
let arr = JSON.parse(localStorage.getItem("items")) || [];

// Show all items UI on page load
arr.forEach((item) => {
  itemsList.appendChild(divUI(item));
});

// Set list scroll if items exceed limit
listSize(arr);

function addItemHandler() {
  let input = document.querySelector("input");

  // If input is empty → show warning text
  if (input.value == "")
    return (document.querySelector(".inputTxt").style.display = "flex");

  // Hide warning text
  document.querySelector(".inputTxt").style.display = "none";

  // Add new task at the beginning of array
  arr.unshift(input.value);

  // Clear input box
  input.value = null;

  // Save updated list to localStorage
  myStorage(arr);

  // Render new item in UI instantly
  reloadUI();

  // Update scroll behavior
  listSize(arr);
}

let task; // stores the selected task name for editing

// Called when user clicks the edit icon
function editItemHandler(e) {
  // Extract the text of the selected item
  task = e.parentElement.previousElementSibling.textContent;

  // Put task name inside input field
  document.querySelector("input").value = task;

  // Hide Add button and Show Edit button
  document.querySelector(".addBtn").style.display = "none";
  document.querySelector(".editBtn").style.display = "block";
}

// Edit button click → update item
document.querySelector(".editBtn").addEventListener("click", function () {
  // Find index of item in array
  let idx = arr.indexOf(task);

  let inputTask = document.querySelector("input");

  // Update array with new edited value
  arr[idx] = inputTask.value;

  // Update UI text for that item
  let item = document.querySelectorAll(".item")[idx];
  item.children[0].innerText = inputTask.value;

  // Update task variable with new value
  task = inputTask.value;

  // Clear input
  document.querySelector("input").value = "";

  // Show Add button again
  document.querySelector(".editBtn").style.display = "none";
  document.querySelector(".addBtn").style.display = "block";

  // Save updated list to localStorage
  myStorage(arr);
});

// Delete icon click → remove item
function removeItemHandler(e) {
  // Get item text that user wants to delete
  let text = e.parentNode.parentNode.innerText.trim();

  // Find index in array
  let idx = arr.indexOf(text);

  // Remove from array
  arr.splice(idx, 1);

  // Remove from UI
  e.parentNode.parentNode.remove();

  listSize(arr);
  myStorage(arr);
}

// Clear all items
function clearItems() {
  let items = document.querySelectorAll(".item");

  // Remove everything from array
  arr.splice(0);

  // Remove all item elements from UI
  items.forEach((item) => {
    itemsList.removeChild(item);
  });

  myStorage(arr);
  listSize(arr);
}

// Render 1 item when added (without refreshing the whole list)
function reloadUI() {
  let arr = JSON.parse(localStorage.getItem("items")) || [];

  // Insert new item at top
  itemsList.prepend(divUI(arr[0]));

  listSize(arr);
}

// Component for making item card UI
function divUI(item) {
  let div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <p class="itemName">${item}</p>
    <span>
      <i onclick="editItemHandler(this)" id="editIcon" class="fa-regular fa-pen-to-square"></i>
      <i onclick="removeItemHandler(this)" id="deleteIcon" class="fa-solid fa-trash"></i>
    </span>
  `;
  return div;
}

// Enable scrolling if items are more than 4
function listSize(array) {
  array.length >= 4
    ? (itemsList.style.overflowY = "scroll")
    : (itemsList.style.overflowY = "hidden");
}

// Save data in localStorage
function myStorage(data) {
  localStorage.setItem("items", JSON.stringify(data));
}
