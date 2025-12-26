// TASK 0: Inject HTML structure dynamically
document.querySelector("body").innerHTML = `
  <h1>Our Reviews</h1>
  <div class="container">
    <div class="cards"></div>
    <div class="bottom">
      <span>
        <i onclick="prevCard()" class="fa-solid fa-angle-left"></i>
        <i onclick="nextCard()" class="fa-solid fa-angle-right"></i>
      </span>
      <button>Surprise Me</button>
    </div>
  </div>`;

// TASK 1: Constructor function
// Purpose: Define the structure of each review object
function Data(name, designation, review) {
  this.name = name;
  this.designation = designation;
  this.review = review;
}

// TASK 2: Array to store all review objects
let arrData = [];

// TASK 3: Object creator function
// Purpose: Create object using constructor and push it into array
function objectCreater(name, designation, review) {
  let obj = new Data(name, designation, review);
  arrData.push(obj);
}

// TASK 4: Create review objects (data entry)
objectCreater(
  "Sarah Johnson",
  "Digital Marketing Specialist",
  "“I’ve tried many platforms before, but this one truly stands out. The interface is super intuitive, and everything loads quickly. Itreally saves me time and makes online shopping enjoyable.”"
);

objectCreater(
  "Ahmed Khan",
  "Software Engineer",
  "“I’m impressed by how smooth the entire process was from order to delivery. The product arrived on time and looked exactly as shown on the website. Customer support was quick to respond to all my questions.”"
);

objectCreater(
  "Emily Parker",
  "Freelance Designer",
  "“This service exceeded my expectations in every way possible. I found exactly what I needed, and the checkout process was seamless. Highly reliable and definitely worth recommending to others.”"
);

objectCreater(
  "David Smith",
  "Small Business Owner",
  "“I appreciate how affordable yet high-quality the products are. The website runs smoothly, and updates about my order were always on time. It’s clear that customer satisfaction is their top priority.”"
);

objectCreater(
  "Huzaifa Malik",
  "Content Creator",
  "“The design and experience of this platform are just amazing. I could easily find what I was looking for without wasting any time. I’m definitely coming back again — five stars from me!”"
);

// TASK 5: Generate card UI using map()
let a = 1; // used to generate unique image classes

let cardUI = arrData.map(function (data) {
  return `
    <div class="card">
      <div class="imgBg"></div>
      <div class="img img${a++}"></div>
      <h3 class="name">${data.name}</h3>
      <p class="designation">${data.designation}</p>
      <p class="review">${data.review}</p>
    </div>`;
});

// Insert all cards into DOM
document.querySelector(".cards").innerHTML += cardUI.join("");

// TASK 6: Select all cards and store in array
let cards = [...document.querySelectorAll(".card")];

// TASK 7: Hide all cards except the first one
for (let i = 1; i < cards.length; i++) {
  cards[i].style.display = "none";
}

// TASK 8: Index tracker for current card
let i = 1;

// TASK 9: Next button logic
// Purpose: Show next review card
function nextCard() {
  if (i < 5) {
    cards[i - 1].style.display = "none";
    cards[i].style.display = "flex";
    i++;
  } else {
    cards[4].style.display = "none";
    cards[0].style.display = "flex";
    i = 1;
  }
}

// TASK 10: Previous button logic
// Purpose: Show previous review card
function prevCard() {
  if (i == 1) {
    cards[0].style.display = "none";
    cards[4].style.display = "flex";
    i = 5;
  } else {
    cards[i - 1].style.display = "none";
    cards[i - 2].style.display = "flex";
    i--;
  }
}
