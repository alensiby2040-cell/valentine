// =========================
// FIRST QUESTION SECTION
// =========================

const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");
const music = document.getElementById("bg-music");
music.volume = 0.25;

let yesSize = 1;
let noSize = 1;
let noClickCount = 0;

const jokes = [
  "Wait… did you just press No? 🤨",
  "That’s a bold move 😏",
  "Nehaaa don’t play like this 😭",
  "You really think No is an option? 👀",
  "Press Yes. You know you want to 😂",
  "Okay fine… I’ll make this harder for you 😌"
];

noButton.addEventListener("click", () => {

  noClickCount++;

  // YES grows
  yesSize += 0.15;
  yesButton.style.transform = `scale(${yesSize})`;

  // NO shrinks
  noSize -= 0.1;

  if (noSize <= 0.3) {
    noButton.style.display = "none";
  } else {
    noButton.style.transform = `scale(${noSize})`;
  }

  message.textContent = jokes[(noClickCount - 1) % jokes.length];
});


// =========================
// YES BUTTON REVEAL LETTER
// =========================

const loveSection = document.getElementById("love");
const questionCard = document.getElementById("question");

yesButton.addEventListener("click", () => {
  questionCard.style.display = "none";

  loveSection.style.display = "block";
  window.scrollTo(0, 0);

  document.body.classList.add("love-mode");
  
  document.getElementById("bg-music").play();

  // allow display to apply first
  setTimeout(() => {
    loveSection.style.opacity = "1";
  }, 50);
});

// =========================
// FLOATING HEARTS
// =========================

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 1200);


// =========================
// CINEMATIC SCROLL REVEAL
// =========================

const cinematicElements = document.querySelectorAll(".cinematic");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

cinematicElements.forEach((el) => observer.observe(el));


// =========================
// FINAL SECTION
// =========================

const finalYes = document.getElementById("final-yes");
const finalNo = document.getElementById("final-no");
const finalMessage = document.getElementById("final-message");

let finalYesSize = 1;
let finalNoSize = 1;
let finalNoClickCount = 0;

const finalJokes = [
  "After reading all that… No? 😭",
  "You scrolled this far just to say no? 😌",
  "Still trying to escape? 👀",
  "You’re really testing me now 😂",
  "Okay okay… last chance 😏"
];

finalNo.addEventListener("click", () => {

  finalNoClickCount++;

  // YES grows
  finalYesSize += 0.15;
  finalYes.style.transform = `scale(${finalYesSize})`;

  // NO shrinks
  finalNoSize -= 0.1;

  if (finalNoSize <= 0.3) {
    finalNo.style.display = "none";
  } else {
    finalNo.style.transform = `scale(${finalNoSize})`;
  }

  finalMessage.textContent = finalJokes[(finalNoClickCount - 1) % finalJokes.length];
});

const endingScreen = document.getElementById("ending-screen");

finalYes.addEventListener("click", () => {
  finalMessage.textContent = "Too late… you are stuck with me babe ❤️";

  setTimeout(() => {
    endingScreen.classList.add("show");
  }, 1500);
  fadeOutMusic();

});
function fadeOutMusic() {
  const fadeInterval = setInterval(() => {
    if (music.volume > 0.05) {
      music.volume -= 0.05;
    } else {
      music.volume = 0;
      clearInterval(fadeInterval);
    }
  }, 200);
}
