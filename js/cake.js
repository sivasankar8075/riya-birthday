// =====================================================
// Project Riya ❤️
// Cake, Candle, Cake-Cutting & Poppers Burst Engine
// =====================================================

import { startFireworks } from "./fireworks.js";

export function triggerCakeSequence() {
    console.log("🎂 Cake Sequence Started");

    // 1. Gift Box Hide ചെയ്യുന്നു
    const giftBox = document.getElementById("giftBox") || document.querySelector(".gift-box") || document.querySelector(".gift");
    if (giftBox) {
        giftBox.style.display = "none";
    }

    // 2. വശങ്ങളിൽ ആടുന്ന ബലൂണുകൾ സ്റ്റാർട്ട് ചെയ്യുന്നു
    createSwayingBalloons();

    const cake = document.getElementById("cakeContainer");
    const flame = document.getElementById("cakeFlame");

    if (cake) {
        cake.classList.add("rise");
    }

    // 3. Candle തെളിയുന്നു
    setTimeout(() => {
        if (flame) {
            flame.classList.add("lit");
        }
    }, 1000);

    // 4. Cake Cutting Sequence Start (2.2 സെക്കൻഡിൽ)
    setTimeout(() => {
        performCakeCut();
    }, 2200);
}

// 🎂 Cake Cut Animation + Poppers Trigger
function performCakeCut() {
    const cutLine = document.getElementById("cakeCutLine");
    const topTier = document.getElementById("tierTop");
    const bottomTier = document.getElementById("tierBottom");
    const message = document.getElementById("finalMessage");
    const banner = document.getElementById("stageBanner");

    // 1. ലൈൻ താഴേക്ക് വന്ന് കേക്ക് വെട്ടുന്നു
    if (cutLine) cutLine.classList.add("cutting");

    setTimeout(() => {
        // കേക്ക് രണ്ടു വശത്തേക്ക് ചെറിയ രീതിയിൽ വേർപെടുന്നു
        if (topTier) topTier.classList.add("cut-left");
        if (bottomTier) bottomTier.classList.add("cut-right");

        // 🎉 വെട്ടുന്ന അതേ നിമിഷം പാർട്ടി പോപ്പേഴ്സും ഫയർവർക്സും പൊട്ടുന്നു!
        triggerPartyPoppers();
        startFireworks();

        // 2. പോപ്പേഴ്സ് പൊട്ടിയ ശേഷമേ "Happy Birthday Riya" ബാനറും മെസ്സേജും കാണിക്കൂ!
        setTimeout(() => {
            if (banner) banner.style.display = "block";
            if (message) message.style.opacity = "1";
        }, 300);

    }, 600);
}

// 🎈 ബലൂണുകൾ കർട്ടന് തൊട്ടരികിൽ സ്റ്റേജിൽ തെളിഞ്ഞു പൊങ്ങാൻ:
function createSwayingBalloons() {
    const container = document.getElementById("balloonContainer");
    if (!container) return;
    container.innerHTML = "";

    const colors = ["#ff4fa3", "#ffb700", "#ff0055", "#e60073", "#ffd700"];

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";

        const size = Math.floor(Math.random() * 20 + 35);
        balloon.style.width = `${size}px`;
        balloon.style.height = `${Math.floor(size * 1.25)}px`;

        // Left Stage Area (16%-26%) & Right Stage Area (74%-84%)
        const isLeft = Math.random() < 0.5;
        const leftPos = isLeft ? Math.random() * 10 + 16 : Math.random() * 10 + 74;
        balloon.style.left = `${leftPos}%`;

        const color = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = color;
        balloon.style.boxShadow = `inset -4px -4px 8px rgba(0,0,0,0.3), 0 0 12px ${color}`;

        balloon.style.animationDelay = `${(Math.random() * 4).toFixed(1)}s`;
        balloon.style.animationDuration = `${(Math.random() * 3 + 6).toFixed(1)}s`;

        container.appendChild(balloon);
    }
}

// 🎉 Confetti Party Poppers
function triggerPartyPoppers() {
    const particleCount = 100;
    const colors = ["#ff4fa3", "#ffd700", "#ffffff", "#ff0055", "#00ffff"];

    for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = `${Math.random() * 8 + 6}px`;
        confetti.style.height = `${Math.random() * 12 + 8}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() < 0.5 ? "5%" : "92%";
        confetti.style.top = "80%";
        confetti.style.zIndex = "999";
        confetti.style.pointerEvents = "none";
        confetti.style.borderRadius = "3px";

        document.body.appendChild(confetti);

        const angle = Math.random() * Math.PI / 2 + (confetti.style.left === "5%" ? -Math.PI / 4 : -Math.PI * 3 / 4);
        const velocity = Math.random() * 26 + 16;
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity;
        let opacity = 1;

        const anim = setInterval(() => {
            confetti.style.left = `${parseFloat(confetti.style.left) + vx * 0.3}%`;
            confetti.style.top = `${parseFloat(confetti.style.top) + vy}px`;
            vy += 0.8;
            opacity -= 0.015;
            confetti.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(anim);
                confetti.remove();
            }
        }, 20);
    }
}