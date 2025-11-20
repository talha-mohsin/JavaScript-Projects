// Create a main container div dynamically
let container = document.createElement('div');
container.className = "container"; // Add a class name to the container
document.body.prepend(container); // Add container at the top of the body

// Create and insert a heading inside the container
let h1 = document.createElement('h1');
h1.textContent = "General Questions";
container.prepend(h1);

// Data array containing questions and answers
let data = [
  {
    question: `What is front-end development?`,
    answer: `It’s the part of web development that focuses on how a website looks and
      feels using HTML, CSS, and JavaScript. Developers ensure everything is
      responsive and user-friendly.`,
  },
  {
    question: `Why is version control important?`,
    answer: `It helps developers track code changes, collaborate safely, and revert errors. Tools like Git make teamwork easier and protect project history.`,
  },
  {
    question: `What does debugging mean in coding?`,
    answer: `Debugging is the process of finding and fixing errors in code. It ensures the program runs smoothly and behaves as expected.`,
  },
];

// Loop through each question-answer object and create accordion structure
data.forEach(function (obj) {
  container.innerHTML += `
      <div class="accordian">
        <div class="questionDiv">
          <p class="que">${obj.question}</p>
          <i class="fa-regular fa-square-plus"></i>          
          <i style="display: none;" class="fa-regular fa-square-minus"></i>
        </div>
        <div class="answerDiv">
          <p class="ans">${obj.answer}</p>
        </div>
      </div>`;
});

// Select all plus icons (for opening)
let openTabs = document.querySelectorAll(".fa-square-plus");
// Select all minus icons (for closing)
let closeTabs = document.querySelectorAll(".fa-square-minus");

// Add click event to each plus icon to open its answer
openTabs.forEach((openTab) => {
  openTab.addEventListener("click", function () {
    openTab.style.display = "none"; // Hide the plus icon
    openTab.nextElementSibling.style.display = "block"; // Show the minus icon
    openTab.parentElement.nextElementSibling.style.display = "block"; // Show the answer div
  });
});

// Add click event to each minus icon to close its answer
closeTabs.forEach((closeTab) => {
  closeTab.addEventListener("click", function () {
    closeTab.style.display = "none"; // Hide the minus icon
    closeTab.previousElementSibling.style.display = "block"; // Show the plus icon
    closeTab.parentElement.nextElementSibling.style.display = "none"; // Hide the answer div
  });
});
