function Information(imgUrl, heading, paragraph) {
  this.imgUrl = imgUrl;
  this.heading = heading;
  this.paragraph = paragraph;
}

function aboutUI(category) {
  let obj;
  if (category === "vision") {
    obj = new Information(
      "vision",
      "Vision",
      "My vision is to become a skilled software developer who can build meaningful, user-friendly applications that solve real-world problems. I aim to continuously improve my technical skills, adapt to new technologies, and contribute to projects that create positive impact through technology."
    );
  } else if (category === "goal") {
    obj = new Information(
      "goal",
      "Goal",
      "My goal is to master modern web development by building practical projects, improving my problem-solving skills, and gaining professional experience. I want to secure opportunities where I can learn from industry experts, contribute with confidence, and grow into a reliable and responsible developer."
    );
  } else {
    obj = new Information(
      "history",
      "History",
      "I started my journey in technology as a curious student who wanted to understand how websites and applications actually work. Over time, I began learning core programming concepts and web development, focusing on building logic and writing clean code. Each small project I create helps me grow step by step and strengthens my foundation as a future software engineer."
    );
  }
  document.querySelector("section").innerHTML = `<div class="image">
            <img src="assets/${obj.imgUrl}.jpeg" alt="">
        </div>
        <div class="aboutMe">
            <div class="tabs">
                <button onclick="aboutUI('history')" class="historyBtn">History</button>
                <button onclick="aboutUI('vision')" class="visionBtn">Vision</button>
                <button onclick="aboutUI('goal')" class="goalsBtn">Goals</button>
            </div>
            <div class="text">
                <h3 class="mainHeading">${obj.heading}</h3>
                <p class="para">${obj.paragraph}</p>
            </div>
        </div>`;
}
aboutUI()