let cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.className = "hidden";
// });

function cardDisplay() {
    console.log("button is clicked");

    for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        console.log(c)
    }
}
// har click per next card per jaker hidden class remove krni hai or previous card ki class hidden krni hai