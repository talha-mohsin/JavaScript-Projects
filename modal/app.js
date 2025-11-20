function modal(category) {
  var modal = document.querySelector(".modal");
  var card = document.querySelector(".product");
  var darkDisplay = document.querySelector(".darkDisplay");

  if (category == "open") {
    modal.style.transform = "translateY(0vh)";
    card.style.display = "none";
    darkDisplay.style.display = "block";
  } else {
    modal.style.transform = "translateY(-100vh)";
    card.style.display = "block";
    darkDisplay.style.display = "none";
  }
}