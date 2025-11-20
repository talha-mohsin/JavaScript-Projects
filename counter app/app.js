let display = document.querySelector(".display");
let roundsDiv = document.querySelector(".roundsDiv");

let i = 0;
let a = 1;

function popUp() {
  roundsDiv.style.display = "block";
  roundsDiv.innerHTML = `
        <div class="rounds">
          <p class="roundPop-up">
            Round ${a} completed <i onclick="cross()" id="cross" class="fa-solid fa-xmark"></i>
          </p>
        </div>
        <div class="border"></div>`;
  a++;
}

let increament = () => {
  if (i < 10) {
    display.innerText = ++i;
  } else {
    popUp();
    i = 0;
  }
};

let reset = () => {
  display.innerText = `${(i = 0)}`;
};

let decreament = () => {
  if (i > 1) display.innerText = --i;
};

function cross() {
  roundsDiv.style.display = "none";
}
