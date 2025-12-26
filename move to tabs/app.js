// Injecting initial HTML structure into the body
// This creates the main heading and introduction text
document.querySelector('body').innerHTML = `
  <header>
    <h1 class="mainHeading">About</h1>
    <p class="para">
      Together, History, Vision, and Goal show my journey from learning the
      basics to building a clear direction for my future. My past shaped my
      skills, my vision guides my purpose, and my goals keep me focused on
      continuous growth as a developer. This reflects my commitment to
      learning, improvement, and creating meaningful impact through
      technology.
    </p>
  </header>
  <section></section>
`;

// Constructor function to create an information object
// Each object represents one category: history, vision, or goal
function Information(imgUrl, heading, paragraph) {
  this.imgUrl = imgUrl;       // Image name (used in src)
  this.heading = heading;     // Section heading text
  this.paragraph = paragraph; // Description text
}

// Function to update About section UI based on selected category
function aboutUI(category) {
  let obj; // This will store the selected Information object

  // If Vision tab is clicked
  if (category === "vision") {
    obj = new Information(
      "vision",
      "Vision",
      "My vision is to become a skilled software developer who can build meaningful, user-friendly applications that solve real-world problems. I aim to continuously improve my technical skills, adapt to new technologies, and contribute to projects that create positive impact through technology."
    );

  // If Goal tab is clicked
  } else if (category === "goal") {
    obj = new Information(
      "goal",
      "Goal",
      "My goal is to master modern web development by building practical projects, improving my problem-solving skills, and gaining professional experience. I want to secure opportunities where I can learn from industry experts, contribute with confidence, and grow into a reliable and responsible developer."
    );

  // Default case: History section (also used on first load)
  } else {
    obj = new Information(
      "history",
      "History",
      "I started my journey in technology as a curious student who wanted to understand how websites and applications actually work. Over time, I began learning core programming concepts and web development, focusing on building logic and writing clean code. Each small project I create helps me grow step by step and strengthens my foundation as a future software engineer."
    );
  }

  // Updating the section content dynamically based on selected category
  document.querySelector("section").innerHTML = `
    <div class="image">
      <img src="assets/${obj.imgUrl}.jpeg" alt="">
    </div>

    <div class="aboutMe"> 
      <div class="tabs">
        <!-- Buttons call aboutUI with different categories -->
        <button onclick="aboutUI('history')" class="historyBtn">History</button>
        <button onclick="aboutUI('vision')" class="visionBtn">Vision</button>
        <button onclick="aboutUI('goal')" class="goalsBtn">Goals</button>
      </div>

      <div class="text">
        <!-- Dynamic heading and paragraph -->
        <h3 class="mainHeading">${obj.heading}</h3>
        <p class="para">${obj.paragraph}</p>
      </div>
    </div>
  `;
}

// Initial call to load History section by default
aboutUI();
