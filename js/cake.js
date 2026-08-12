// =====================================================
// Project Riya ❤️
// Cake, Candle, Balloon & Popper Engine
// =====================================================

import { startFireworks } from "./fireworks.js";

export function triggerCakeSequence() {
    console.log("🎂 Cake Sequence Started");

    // 1. 🎁 Gift Box Hide ചെയ്യുക
    const giftBox = document.getElementById("giftBox") || document.querySelector(".gift-box") || document.querySelector(".gift");
    if (giftBox) {
        giftBox.style.display = "none";
    }

    // 2. 🎈 Balloons സ്റ്റാർട്ട് ചെയ്യുക
    createBalloons();

    const cake = document.getElementById("cakeContainer");
    const flame = document.getElementById("cakeFlame");
    const message = document.getElementById("finalMessage");

    if (cake) {
        cake.classList.add("rise");
    }

    setTimeout(() => {
        if (flame) {
            flame.classList.add("lit");
        }
    }, 1200);

    setTimeout(() => {
        if (message) {
            message.classList.add("show");
        }

        // 3. 🎉 Poppers & Fireworks പൊട്ടിക്കുക
        triggerPoppers();
        startFireworks();
    }, 2500);
}

// 🎈 Automatic Balloon Generator
function createBalloons() {
    const container = document.getElementById("balloonContainer");
    if (!container) return;

    const colors = ["#ff4fa3", "#ffb700", "#ff0055", "#e60073", "#ffd700"];

    for (let i = 0; i < 22; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        
        const size = Math.random() * 25 + 35;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.25}px`;
        balloon.style.left = `${Math.random() * 90 + 5}%`;
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.boxShadow = `inset -5px -5px 10px rgba(0,0,0,0.3), 0 0 15px ${balloon.style.background}`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.animationDuration = `${Math.random() * 4 + 6}s`;

        container.appendChild(balloon);
    }
}

// 🎉 Confetti Poppers Burst
function triggerPoppers() {
    const particleCount = 80;
    const colors = ["#ff4fa3", "#ffd700", "#ffffff", "#ff0055", "#00ffff"];

    for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = `${Math.random() * 8 + 6}px`;
        confetti.style.height = `${Math.random() * 12 + 8}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() < 0.5 ? "3%" : "95%";
        confetti.style.top = "85%";
        confetti.style.zIndex = "999";
        confetti.style.pointerEvents = "none";
        confetti.style.borderRadius = "3px";

        document.body.appendChild(confetti);

        const angle = Math.random() * Math.PI / 2 + (confetti.style.left === "3%" ? -Math.PI / 4 : -Math.PI * 3 / 4);
        const velocity = Math.random() * 25 + 15;
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