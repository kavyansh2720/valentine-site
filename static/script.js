// INDEX PAGE
const noBtn = document.getElementById("noBtn");
if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
    });
}

function goYes() {
    window.location.href = "/yes";
}

// YES PAGE
function showSurprise() {
    document.getElementById("choiceBox").style.display = "none";
    const box = document.getElementById("messageBox");
    box.classList.remove("hidden");

    const text = "Happy Rose Day 🌹 & Happy Anniversary baby 💋💕";
    let i = 0;
    const typing = setInterval(() => {
        document.getElementById("typingText").innerHTML += text[i];
        i++;
        if (i === text.length) clearInterval(typing);
    }, 70);
}

function goLetter() {
    window.location.href = "/letter";
}

function goBack() {
    window.location.href = "/";
}

// LETTER PAGE
function openLetter() {
    document.getElementById("letterPaper").classList.remove("hidden");
}
