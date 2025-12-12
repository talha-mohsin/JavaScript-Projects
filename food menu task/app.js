const foodMenu = [
  {
    image: "assets/French Toast 1.jpg",
    name: "French Toast",
    price: 200,
    about: "Soft bread soaked in eggs and milk, fried to a golden finish.",
    category: "Breakfast",
  },
  {
    image: "assets/Qeema Paratha 2.jpg",
    name: "Qeema Paratha",
    price: 300,
    about: "Paratha filled with flavorful minced meat stuffing.",
    category: "Breakfast",
  },
  {
    image: "assets/Masala Omelette 3.jpg",
    name: "Masala Omelette",
    price: 130,
    about: "Egg omelette mixed with onions, tomatoes, and spices.",
    category: "Breakfast",
  },
  {
    image: "assets/Club Sandwich 4.jpg",
    name: "Club Sandwich",
    price: 250,
    about: "Triple-layer sandwich filled with chicken, egg, and mayo.",
    category: "Breakfast",
  },
  {
    image: "assets/Upma 5.jpg",
    name: "Upma",
    price: 170,
    about: "A light and savory semolina-based South Asian dish.",
    category: "Breakfast",
  },
  {
    image: "assets/Garlic Butter Toast 6.jpg",
    name: "Garlic Butter Toast",
    price: 90,
    about: "Toasted bread layered with garlic butter for a rich flavor.",
    category: "Breakfast",
  },
  {
    image: "assets/Chicken Biryani 7.jpg",
    name: "Chicken Biryani",
    price: 280,
    about: "Spicy rice dish cooked with aromatic chicken and masala.",
    category: "Lunch",
  },
  {
    image: "assets/Beef Qorma 8.jpg",
    name: "Beef Qorma",
    price: 850,
    about: "Slow-cooked beef gravy with rich traditional spices.",
    category: "Lunch",
  },
  {
    image: "assets/Daal Chawal 9.jpg",
    name: "Daal Chawal",
    price: 180,
    about: "Comfort meal of lentils served with steamed rice.",
    category: "Lunch",
  },
  {
    image: "assets/Chicken Karahi 10.jpg",
    name: "Chicken Karahi",
    price: 750,
    about: "A tangy tomato-based chicken curry cooked in a wok.",
    category: "Lunch",
  },
  {
    image: "assets/Grilled Chicken 11.jpg",
    name: "Grilled Chicken",
    price: 800,
    about: "Tender chicken pieces grilled with herbs and spices.",
    category: "Lunch",
  },
  {
    image: "assets/Chicken Pulao 12.jpg",
    name: "Chicken Pulao",
    price: 250,
    about: "Lightly spiced rice cooked with chicken broth.",
    category: "Lunch",
  },
  {
    image: "assets/Veg Thali 13.jpg",
    name: "Veg Thali",
    price: 300,
    about: "A complete vegetarian meal with multiple side dishes.",
    category: "Dinner",
  },
  {
    image: "assets/Nihari 14.jpg",
    name: "Nihari",
    price: 550,
    about: "Slow-cooked beef stew with a thick spicy gravy.",
    category: "Dinner",
  },
  {
    image: "assets/Chicken Handi 15.jpg",
    name: "Chicken Handi",
    price: 700,
    about: "Creamy chicken dish cooked in a traditional handi pot.",
    category: "Dinner",
  },
  {
    image: "assets/Beef Seekh Kabab 16.jpg",
    name: "Beef Seekh Kabab",
    price: 600,
    about: "Juicy minced beef kababs grilled on skewers.",
    category: "Dinner",
  },
  {
    image: "assets/Chicken Alfredo Pasta 17.jpg",
    name: "Chicken Alfredo Pasta",
    price: 500,
    about: "Creamy pasta tossed with grilled chicken and cheese.",
    category: "Dinner",
  },
  {
    image: "assets/Beef Steaks 18.jpg",
    name: "Beef Steaks",
    price: 850,
    about: "Tender beef steaks cooked to juicy perfection.",
    category: "Dinner",
  },
  {
    image: "assets/Chocolate Shake 19.jpg",
    name: "Chocolate Shake",
    price: 200,
    about: "Thick chocolate milkshake topped with cocoa flavor.",
    category: "Shake",
  },
  {
    image: "assets/Banana Shake 20.jpg",
    name: "Banana Shake",
    price: 150,
    about: "Fresh banana blended with chilled milk and sugar.",
    category: "Shake",
  },
  {
    image: "assets/Strawberry Shake 21.jpg",
    name: "Strawberry Shake",
    price: 180,
    about: "Sweet strawberry puree mixed with creamy milk.",
    category: "Shake",
  },
  {
    image: "assets/Mango Shake 22.jpg",
    name: "Mango Shake",
    price: 220,
    about: "Seasonal mango blended into a refreshing shake.",
    category: "Shake",
  },
  {
    image: "assets/Vanilla Shake 23.jpg",
    name: "Vanilla Shake",
    price: 170,
    about: "Classic vanilla-flavored creamy milkshake.",
    category: "Shake",
  },
  {
    image: "assets/Oreo Shake 24.jpg",
    name: "Oreo Shake",
    price: 250,
    about: "Crushed Oreo cookies blended into a thick milkshake.",
    category: "Shake",
  },
];

let itemsMenu = document.querySelector(".itemsMenu");
let allBtn = document.querySelector("#all");
let breakfastBtn = document.querySelector("#breakfast");
let lunchBtn = document.querySelector("#lunch");
let dinnerBtn = document.querySelector("#dinner");
let shakesBtn = document.querySelector("#shakes");
let input = document.querySelector("input");

input.addEventListener("click", function () {
  document.querySelectorAll(".suggest").forEach((suggest) => {
    suggest.style.display = "inline-block";
    suggest.addEventListener("click", function () {
      input.value = suggest.innerText.trim();
    });
  });
});

function itemUI(dish) {
  return `<div class="item">
    <div class="itemImg">
    <img
    src="${dish.image}"
      alt="${dish.name}"
      />
      </div>
      <div class="itemDetails">
      <div class="name_Prize">
      <h4 class="name">${dish.name}</h4>
      <p class="prize">PKR ${dish.price}/=</p>
      </div>
      <div class="aboutItem">            
      ${dish.about}
      </div>
      </div>
      </div>`;
}

let lastCategory = "";

allBtn.addEventListener("click", all);
all();

function all() {
  let allFoodItems = foodMenu.map((food) => {
    return itemUI(food);
  });
  itemsMenu.innerHTML = allFoodItems.join("");

  priceRangeHandler(foodMenu);

  foodSearch(foodMenu);
  lastCategory = `all`;
}

// work when clicked on breakfast btn
breakfastBtn.addEventListener("click", breakfast);

function breakfast() {
  let breakfastItems = foodMenu.filter((food) => {
    if (food.category.toLowerCase() == "breakfast") return food;
  });
  priceRangeHandler(breakfastItems);

  let breakfastUI = breakfastItems.map((food) => {
    return itemUI(food);
  });
  itemsMenu.innerHTML = breakfastUI.join("");
  foodSearch(breakfastItems);
  lastCategory = `breakfast`;
}

// work when clicked on lunch btn
lunchBtn.addEventListener("click", lunch);

function lunch() {
  let lunchItems = foodMenu.filter((food) => {
    if (food.category.toLowerCase() == "lunch") return food;
  });

  priceRangeHandler(lunchItems);

  let lunchUI = lunchItems.map((food) => {
    return itemUI(food);
  });

  itemsMenu.innerHTML = lunchUI.join("");
  foodSearch(lunchItems);
  lastCategory = `lunch`;
}

// work when clicked on dinner btn
dinnerBtn.addEventListener("click", dinner);

function dinner() {
  let dinnerItems = foodMenu.filter((food) => {
    if (food.category.toLowerCase() == "dinner") return food;
  });

  priceRangeHandler(dinnerItems);

  let dinnerUI = dinnerItems.map((food) => {
    return itemUI(food);
  });

  itemsMenu.innerHTML = dinnerUI.join("");
  foodSearch(dinnerItems);
  lastCategory = `dinner`;
}

// work when clicked on shakes btn
shakesBtn.addEventListener("click", shakes);

function shakes() {
  let shakeItems = foodMenu.filter((food) => {
    if (food.category.toLowerCase() == "shake") return food;
  });

  priceRangeHandler(shakeItems);

  let shakeUI = shakeItems.map((food) => {
    return itemUI(food);
  });

  itemsMenu.innerHTML = shakeUI.join("");
  foodSearch(shakeItems);
  lastCategory = `shakes`;
}

// Searching Features
function foodSearch(dishes) {
  document.querySelector("#searchIco").addEventListener("click", function () {
    document.querySelectorAll(".suggest").forEach((suggest) => {
      suggest.style.display = "none";
    });
    let input = document.querySelector("input").value.toLowerCase();
    let isItemFound = false;

    let searchItem = dishes.find(function (dish) {
      if (input == dish.name.toLowerCase()) {
        isItemFound = true;
        return dish;
      }
    });

    if (!isItemFound) {
      lastCategoryHandler()
      return alert(`Sorry, No food found in this catefory`);
    }

    itemsMenu.innerHTML = itemUI(searchItem);
  });
}

// searching issue in dinner, all etc show alert even if food is exist in this category and at the end it show the food after alerts???

// Price Ranges
function priceRangeHandler(foods) {
  let checkboxes = document.querySelectorAll(".checkbox");

  let priceRange = [];
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function (event) {
      if (checkbox.checked) {
        let checkboxVal = event.currentTarget.value.split(" - ");

        checkboxVal.forEach(function (checkedval) {
          priceRange.push(checkedval);
        });

        let isFood = false;

        let priceRangeFood = foods.filter(function (food) {
          for (i = 0; i < priceRange.length; i++) {
            if (food.price <= priceRange[i]) {
              isFood = true;
              return food;
            }
          }
        });

        if (!isFood) {
          itemsMenu.innerHTML = null;
          return alert("Sorry, No food found in this range.");
        }

        let priceRangeFoodUI = priceRangeFood.map((food) => {
          return itemUI(food);
        });

        itemsMenu.innerHTML = priceRangeFoodUI.join("");
      } else {
        lastCategoryHandler();
      }
    });
  });
}
priceRangeHandler(foodMenu);

function lastCategoryHandler() {
  switch (lastCategory) {
    case "all":
      all();
      break;
    case "breakfast":
      breakfast();
      break;
    case "lunch":
      lunch();
      break;
    case "dinner":
      dinner();
      break;
    case "shakes":
      shakes();
      break;
    default:
      all();
  }
}
