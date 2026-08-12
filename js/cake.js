// =====================================================
// Project Riya ❤️
// Cake, Candle, Mobile Side Balloons & 4-Corner Continuous Poppers + Malayalam Note Engine
// =====================================================

import { startFireworks } from "./fireworks.js";

let popperInterval = null;

export function triggerCakeSequence() {
    console.log("🎂 Cake Sequence Started");

    // 1. Gift Box Hide ചെയ്യുന്നു
    const giftBox = document.getElementById("giftBox") || document.querySelector(".gift-box") || document.querySelector(".gift");
    if (giftBox) {
        giftBox.style.display = "none";
    }

    // 2. വശങ്ങളിൽ ആടുന്ന ബലൂണുകൾ സ്റ്റാർട്ട് ചെയ്യുന്നു
    createMobileSwayingBalloons();

    // 3. ബലൂണുകൾ പറക്കുമ്പോൾ ഇടയ്ക്കിടെ പോപ്പേഴ്സ് തനിയെ പൊട്ടുന്നു
    startContinuousPoppers();

    const cake = document.getElementById("cakeContainer");
    const flame = document.getElementById("cakeFlame");

    if (cake) {
        cake.classList.add("rise");
    }

    // 4. Candle തെളിയുന്നു
    setTimeout(() => {
        if (flame) {
            flame.classList.add("lit");
        }
    }, 1000);

    // 5. Cake Cutting Sequence Start
    setTimeout(() => {
        performCakeCut();
    }, 2200);
}

// 🎂 Cake Cut Animation + 4 Corners Blast + Malayalam Typewriter Note
function performCakeCut() {
    const cutLine = document.getElementById("cakeCutLine");
    const topTier = document.getElementById("tierTop");
    const bottomTier = document.getElementById("tierBottom");
    const message = document.getElementById("finalMessage");
    const banner = document.getElementById("stageBanner");

    // 1. ലൈൻ താഴേക്ക് വന്ന് കേക്ക് വെട്ടുന്നു
    if (cutLine) cutLine.classList.add("cutting");

    setTimeout(() => {
        if (topTier) topTier.classList.add("cut-left");
        if (bottomTier) bottomTier.classList.add("cut-right");

        // 🎉 കേക്ക് കട്ടാകുമ്പോൾ 4 കോണുകളിൽ നിന്നും ബിഗ് ബർസ്റ്റ്!
        trigger4CornerPoppers();
        startFireworks();

        // 2. "Happy Birthday Riya" വന്ന് അതിനുശേഷം റൊമാന്റിക് മലയാളം ലെറ്റർ ടൈപ്പ് ആകുന്നു!
        setTimeout(() => {
            if (banner) banner.style.display = "block";
            if (message) message.style.opacity = "1";

            // ✍️ Typewriter effect for Romantic Malayalam Note
            startMalayalamTypewriter();
        }, 300);

    }, 600);
}

// ✍️ Romantic Malayalam Wish Typewriter Function
function startMalayalamTypewriter() {
    const noteElement = document.getElementById("romanticNoteText");
    if (!noteElement) return;

    const fullMessage = "എന്റെ ജീവിതത്തിലേക്ക് വന്നതിന്, ഓരോ നിമിഷവും ഇത്രയും മനോഹരമാക്കിയതിന് ഒത്തിരി നന്ദി റിയാ... ❤️ നിന്നോടൊപ്പമുള്ള ഓരോ ദിവസവും എനിക്ക് പ്രിയപ്പെട്ടതാണ്. ജനനം കൊണ്ട് ധന്യമായ എന്റെ പ്രണയത്തിന് ഒരായിരം ജന്മദിനാശംസകൾ! 💖✨";
    
    noteElement.textContent = "";
    let index = 0;

    const timer = setInterval(() => {
        if (index < fullMessage.length) {
            noteElement.textContent += fullMessage.charAt(index);
            index++;
        } else {
            clearInterval(timer);
        }
    }, 45); // Typing speed
}

// 🎈 ബലൂണുകൾ വശങ്ങളിൽ നിർമ്മിക്കുന്നു
function createMobileSwayingBalloons() {
    const container = document.getElementById("balloonContainer");
    if (!container) return;
    container.innerHTML = "";

    const colors = ["#ff4fa3", "#ffb700", "#ff0055", "#e60073", "#ffd700", "#00ffff"];

    for (let i = 0; i < 22; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";

        const size = Math.floor(Math.random() * 15 + 30);
        balloon.style.width = `${size}px`;
        balloon.style.height = `${Math.floor(size * 1.25)}px`;

        const isLeft = Math.random() < 0.5;
        const leftPos = isLeft ? Math.random() * 18 + 2 : Math.random() * 18 + 80;
        balloon.style.left = `${leftPos}%`;

        const color = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = color;
        balloon.style.boxShadow = `inset -3px -3px 6px rgba(0,0,0,0.3), 0 0 10px ${color}`;

        balloon.style.animationDelay = `${(Math.random() * 4).toFixed(1)}s`;
        balloon.style.animationDuration = `${(Math.random() * 3 + 5).toFixed(1)}s`;

        container.appendChild(balloon);
    }
}

// 💥 4 CORNERS TO CENTER POPPERS BLAST
function trigger4CornerPoppers() {
    const corners = [
        { x: 5, y: 5, targetX: 50, targetY: 45 },
        { x: 95, y: 5, targetX: 50, targetY: 45 },
        { x: 5, y: 90, targetX: 50, targetY: 45 },
        { x: 95, y: 90, targetX: 50, targetY: 45 }
    ];

    const colors = ["#ff4fa3", "#ffd700", "#ffffff", "#ff0055", "#00ffff", "#ff9900"];

    corners.forEach(corner => {
        for (let i = 0; i < 35; i++) {
            const confetti = document.createElement("div");
            confetti.className = "confetti-particle";
            confetti.style.position = "fixed";
            confetti.style.width = `${Math.random() * 8 + 6}px`;
            confetti.style.height = `${Math.random() * 10 + 6}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${corner.x}%`;
            confetti.style.top = `${corner.y}%`;
            confetti.style.zIndex = "1000";
            confetti.style.pointerEvents = "none";
            confetti.style.borderRadius = "3px";

            document.body.appendChild(confetti);

            const angle = Math.atan2(corner.targetY - corner.y, corner.targetX - corner.x) + (Math.random() - 0.5) * 0.6;
            const velocity = Math.random() * 22 + 12;
            let vx = Math.cos(angle) * velocity;
            let vy = Math.sin(angle) * velocity;
            let opacity = 1;

            const anim = setInterval(() => {
                confetti.style.left = `${parseFloat(confetti.style.left) + vx * 0.25}%`;
                confetti.style.top = `${parseFloat(confetti.style.top) + vy}px`;
                vy += 0.5;
                opacity -= 0.015;
                confetti.style.opacity = opacity;

                if (opacity <= 0) {
                    clearInterval(anim);
                    confetti.remove();
                }
            }, 20);
        }
    });
}

// ⏱️ Continuous Poppers
function startContinuousPoppers() {
    if (popperInterval) clearInterval(popperInterval);
    
    trigger4CornerPoppers();

    popperInterval = setInterval(() => {
        trigger4CornerPoppers();
    }, 3500);
}