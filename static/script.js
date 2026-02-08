/* ===== CHOCOLATE RAIN ===== */
for (let i = 0; i < 35; i++) {
    const choco = document.createElement("div");
    choco.className = "choco";
    choco.innerHTML = "🍫";
    choco.style.left = Math.random() * 100 + "vw";
    choco.style.animationDuration = 4 + Math.random() * 6 + "s";
    choco.style.fontSize = 24 + Math.random() * 16 + "px";
    document.body.appendChild(choco);
}

/* ===== SURPRISE ===== */
function showSurprise() {
    document.getElementById("choiceBox").style.display = "none";

    const box = document.getElementById("messageBox");
    box.classList.remove("hidden");

    const text = "Happy Chocolate Day 🍫\nHappy Anniversary baby 💋💕";
    let i = 0;

    document.getElementById("typingText").innerHTML = "";

    const typing = setInterval(() => {
        document.getElementById("typingText").innerHTML += text[i] === "\n" ? "<br>" : text[i];
        i++;
        if (i === text.length) clearInterval(typing);
    }, 65);
}

/* ===== NAVIGATION ===== */
function goLetter() {
    window.location.href = "/letter";
}

function goBack() {
    window.location.href = "/";
}
