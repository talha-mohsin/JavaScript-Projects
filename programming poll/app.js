const poll = {
  answers: JSON.parse(localStorage.getItem("pollData")) || new Array(4).fill(0),

  vote(index) {
    this.answers[index]++;
    localStorage.setItem("pollData", JSON.stringify(this.answers));
  },

  renderResults() {
    const card = document.getElementById("card");
    card.innerHTML = `
          <h2>Poll Results</h2>
          <div class="results">
            <p>JavaScript: ${this.answers[0]}</p>
            <p>Python: ${this.answers[1]}</p>
            <p>Rust: ${this.answers[2]}</p>
            <p>C++: ${this.answers[3]}</p>
          </div>
        `;
  },
};

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openPoll");
const submitBtn = document.getElementById("submitVote");

openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="lang"]:checked');
  if (!selected) return alert("Please select an option");

  poll.vote(+selected.value);
  modal.classList.remove("active");
  poll.renderResults();
});
