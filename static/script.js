const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.transform = "rotate(360deg)";

    scale += 0.1;
    yesBtn.style.transform = `scale(${scale})`;
});
// Floating Hearts - spread across screen
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";

  const hearts = ["❤️", "💖", "💕", "💗"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 12 + "px";
  heart.style.opacity = Math.random() * 0.5 + 0.3; // translucent
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);
function celebrateYes() {
  // Button pop animation
  const yesBtn = document.querySelector(".yes-btn");
  yesBtn.classList.add("yes-pop");

  // Confetti hearts burst
  for (let i = 0; i < 25; i++) {
    const burst = document.createElement("div");
    burst.className = "burst-heart";
    burst.innerHTML = "💖";
    burst.style.left = yesBtn.getBoundingClientRect().left + 40 + "px";
    burst.style.top = yesBtn.getBoundingClientRect().top + "px";
    burst.style.fontSize = Math.random() * 20 + 14 + "px";
    burst.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(burst);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 120 + 50;

    burst.animate([
      { transform: "translate(0,0)", opacity: 1 },
      {
        transform: `translate(${Math.cos(angle) * distance}px,
                               ${Math.sin(angle) * distance}px)`,
        opacity: 0
      }
    ], {
      duration: 900,
      easing: "ease-out"
    });

    setTimeout(() => burst.remove(), 900);
  }

  // Go to letter page after celebration
  setTimeout(() => {
    window.location.href = "/yes";
  }, 1000);
}
