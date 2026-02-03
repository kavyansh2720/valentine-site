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
