// ============================================
// Element Selections
// ============================================
const submitBtn = document.querySelector("#submitBtn");
const inputElements = document.querySelectorAll("input");
const heading = document.querySelector("#result");
const nav = document.querySelector("#nav");
const snipper = document.querySelector(".snipper");

// ============================================
// Function: Hide the Loading Spinner
// ============================================
function loadingStop() {
  snipper.style.display = "none";
}

// ============================================
// Event: Handle Form Submission
// ============================================
submitBtn.addEventListener("click", function () {
  // Display loading animation
  snipper.style.display = "flex";
  setTimeout(loadingStop, 2000); // Stop spinner after 2 seconds

  // Create an object to store user input dynamically
  let signUpDetails = {};
  inputElements.forEach(function (input) {
    signUpDetails[input.placeholder] = input.value;
  });

  // Store user details in local storage
  localStorage.setItem("userDetails", JSON.stringify(signUpDetails));

  // Re-render user data on screen after short delay
  setTimeout(renderOnLoad, 1000);
});

// ============================================
// Function: Render Stored Data on Page Load
// ============================================
function renderOnLoad() {
  let data = JSON.parse(localStorage.getItem("userDetails"));
  console.log(data);

  // Display personalized message
  heading.innerText = `Hi, ${data.firstName} ${data.lastName} 
                      Welcome back to our WebSite
                      Your email is ${data.email}
                      Your username is ${data.username}`;
}

// ============================================
// Theme Mode Toggle (Dark / Light)
// ============================================
let darkMode = document.getElementById("darkMode");
let lightMode = document.getElementById("lightMode");

// Function: Enable Dark Mode
function darkModeHandler() {
  document.body.style.backgroundColor = "rgba(85, 7, 85, 1)";
  document.body.style.color = "white";
  darkMode.style.display = "none";
  lightMode.style.display = "block";
  nav.style.boxShadow = "0 0 5px white";
}

// Function: Enable Light Mode
function lightModeHandler() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "purple";
  lightMode.style.display = "none";
  darkMode.style.display = "block";
  nav.style.boxShadow = "0 0 5px purple";
}

// ============================================
// Event Listeners for Theme Toggle Buttons
// ============================================
darkMode.addEventListener("click", function () {
  darkModeHandler();
  localStorage.setItem("Theme", "dark");
});

lightMode.addEventListener("click", function () {
  lightModeHandler();
  localStorage.setItem("Theme", "light");
});

// ============================================
// Apply Saved Theme on Page Reload
// ============================================
let theme = localStorage.getItem("Theme");
theme === "dark" ? darkModeHandler() : lightModeHandler();
