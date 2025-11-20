let cards = [...document.querySelectorAll(".card")];
let i = 1;

// next
function nextCard() {
  if (i < 5) {
    cards[i - 1].className = "hidden"; //0 wala card hidden
    cards[i].className = "card"; //1 wala card visualize
    i += 1; //increment
  } else {
    cards[4].className = "hidden";
    cards[0].className = "card";
    i = 1;
  }
}

// previous
function prevCard() {
  if (i == 1) {
    cards[0].className = "hidden";
    cards[4].className = "card";
    i = 5;
  } else {
    cards[i - 1].className = "hidden";
    cards[i - 2].className = "card";
    i -= 1;
  }
}


// ---------------------- "TASK SOLUTION 2" -----------------------

// let reviews = [
//   {
//     customerName: "Sarah Johnson",
//     designation: "Digital Marketing Specialist",
//     comment:
//       "“I’ve tried many platforms before, but this one truly stands out. The interface is super intuitive, and everything loads quickly. It really saves me time and makes online shopping enjoyable.”",
//     id: 0,
//   },
//   {
//     customerName: "Ahmed Khan",
//     designation: "Software Engineer",
//     comment:
//       "“I’m impressed by how smooth the entire process was from order to delivery. The product arrived on time and looked exactly as shown on the website. Customer support was quick to respond to all my questions.”",
//     id: 1,
//   },
//   {
//     customerName: "Emily Parker",
//     designation: "Freelance Designer",
//     comment:
//       "“This service exceeded my expectations in every way possible. I found exactly what I needed, and the checkout process was seamless. Highly reliable and definitely worth recommending to others.”",
//     id: 2,
//   },
//   {
//     customerName: "David Smith",
//     designation: "Small Business Owner",
//     comment:
//       "“I appreciate how affordable yet high-quality the products are. The website runs smoothly, and updates about my order were always on time. It’s clear that customer satisfaction is their top priority.”",
//     id: 3,
//   },
//   {
//     customerName: "Huzaifa Malik",
//     designation: "Content Creator",
//     comment:
//       "“The design and experience of this platform are just amazing. I could easily find what I was looking for without wasting any time. I’m definitely coming back again — five stars from me!”",
//     id: 4,
//   },
// ];

// let cards = document.querySelector(".cards");
// let prev = document.querySelector("#prev");
// let next = document.querySelector("#next");

// let i = 0;

// next.addEventListener("click", function () {
//   i++;
//   if (i > 4) i = 0;
//   let object = reviews[i];
//   cardStructure(object);
// });

// prev.addEventListener("click", function () {
//   i--;
//   if (i < 0) i = 4;
//   let object = reviews[i];
//   cardStructure(object);
// });

// let cardStructure = (card) => {
//   cards.innerHTML = `<div class="card">
//                     <div class="imgBg"></div>
//                     <div class="img img${i + 1}"></div>
//                     <h3 class="name">${card.customerName}</h3>
//                     <p class="designation">${card.designation}</p>
//                     <p class="review">${card.comment}</p>
//                   </div>`;
// };