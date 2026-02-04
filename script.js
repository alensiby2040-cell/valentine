const noButton = document.getElementById("no");
const message = document.getElementById("message");

let clickCount = 0;

noButton.addEventListener("click", () => {
  clickCount++;

if (clickCount === 1) {
  message.textContent = "Are you really saying no to me? 🥺";
}
else if (clickCount === 2) {
  message.textContent = "Hmm… I know you better than that 😌";
}
else if (clickCount === 3) {
  message.textContent = "Neha… come on 💗";
}
else {
  noButton.style.display = "none";
  message.textContent = "Yeah… I thought so 😏";
}

});
const yesButton = document.getElementById("yes");
const loveSection = document.getElementById("love");
const questionCard = document.getElementById("question");


yesButton.addEventListener("click", () => {
  questionCard.style.display = "none";
  loveSection.classList.remove("hidden");
});
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
