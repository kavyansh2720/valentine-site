/* ===== INDEX PAGE ===== */
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
        yesBtn.style.transform = "scale(1.15)";
    });
}

function goYes() {
    window.location.href = "/yes";
}

/* ===== YES PAGE ===== */
function showSurprise() {
    document.getElementById("choiceBox").style.display = "none";
    const box = document.getElementById("messageBox");
    box.classList.remove("hidden");

    const text = "Happy Chocolate Day 🍫\nHappy Anniversary baby 💋💕";
    let i = 0;
    const target = document.getElementById("typingText");
    target.innerHTML = "";

    const typing = setInterval(() => {
        target.innerHTML += text[i] === "\n" ? "<br>" : text[i];
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

/* ===== LETTER PAGE ===== */
function openLetter() {
    const paper = document.getElementById("letterPaper");
    paper.classList.remove("hidden");

    const letter =
`Dear wifey ❤️

Happy Valentine’s Day babu 💕

I am the luckiest man to have you in my life baby,
not just as my Valentine but as mine, my partner in everything.
Har ek din mujhe sikhata hai ki real comfort, care aur love kya hota hai.
Tumhari har harkat meri favourite hai bubu 🥺

I can’t imagine even a single second without you.
Main din mein chahe hazaar baar bolu “I love you”,
par kabhi thakunga nahi, kyunki tum meri cute si princess ho
aur sabse beautiful girl ho jo main jaanta hoon.
I am always proud of you and proud to call you mine 💖

— Kavyansh Rashika Arora`;

    let i = 0;
    const target = document.getElementById("letterText");
    target.innerHTML = "";

    const typer = setInterval(() => {
        target.innerHTML += letter[i] === "\n" ? "<br>" : letter[i];
        i++;
        if (i === letter.length) clearInterval(typer);
    }, 45);
}
