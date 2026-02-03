// Floating hearts background
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.opacity = Math.random() * 0.5 + 0.3;
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 400);

// NO button movement
function moveNo() {
  const noBtn = document.querySelector(".no-btn");
  if (!noBtn) return;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// YES celebration
function celebrateYes() {
  console.log("YES clicked"); // 🔥 debug proof

  const yesBtn = document.querySelector(".yes-btn");
  yesBtn.classList.add("yes-pop");

  for (let i = 0; i < 30; i++) {
    const burst = document.createElement("div");
    burst.className = "burst-heart";
    burst.innerHTML = "💖";

    const rect = yesBtn.getBoundingClientRect();
    burst.style.left = rect.left + rect.width / 2 + "px";
    burst.style.top = rect.top + "px";
    burst.style.fontSize = Math.random() * 20 + 14 + "px";

    document.body.appendChild(burst);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 120 + 40;

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

  setTimeout(() => {
    window.location.href = "/yes";
  }, 1000);
        }
