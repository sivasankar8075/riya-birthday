// =====================================================
// Project Riya ❤️
// Secret Easter Eggs & Surprise Triggers
// =====================================================

export function initEasterEggs() {
    initSecretCode();
    initDoubleTapSurprise();
}

// 1. Secret Keyword Detector ("RIYA")
function initSecretCode() {
    const secretCode = "riya";
    let inputBuffer = "";

    window.addEventListener("keydown", (e) => {
        inputBuffer += e.key.toLowerCase();

        // Keep buffer length to code length
        if (inputBuffer.length > secretCode.length) {
            inputBuffer = inputBuffer.substr(inputBuffer.length - secretCode.length);
        }

        // Trigger Love Explosion if "RIYA" is typed
        if (inputBuffer === secretCode) {
            console.log("🎉 Secret Easter Egg Unlocked: RIYA!");
            triggerHeartExplosion();
            inputBuffer = ""; // Reset buffer
        }
    });
}

// 2. Double Click / Double Tap Surprise Effect
function initDoubleTapSurprise() {
    window.addEventListener("dblclick", (e) => {
        createFloatingHeartAt(e.clientX, e.clientY);
    });

    // Touch devices
    let lastTap = 0;
    window.addEventListener("touchend", (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 300 && tapLength > 0) {
            const touch = e.changedTouches[0];
            createFloatingHeartAt(touch.clientX, touch.clientY);
        }
        lastTap = currentTime;
    });
}

// Visual Effect: Pop a Heart at Click Location
function createFloatingHeartAt(x, y) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "💖";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = "30px";
    heart.style.position = "fixed";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "99999";
    heart.style.transition = "transform 1s ease-out, opacity 1s ease-out";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-80px) scale(1.5)";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 1050);
}

// Visual Effect: Full Screen Heart & Sparkle Explosion
function triggerHeartExplosion() {
    const count = 40;
    const emojis = ["💖", "💕", "✨", "🌸", "❤️"];

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.position = "fixed";
        particle.style.left = "50%";
        particle.style.top = "50%";
        particle.style.fontSize = `${Math.random() * 20 + 20}px`;
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "99999";

        const x = (Math.random() - 0.5) * window.innerWidth * 0.8;
        const y = (Math.random() - 0.5) * window.innerHeight * 0.8;

        particle.style.transition = "transform 1.5s cubic-bezier(0.1, 1, 0.1, 1), opacity 1.5s ease";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
            particle.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            particle.remove();
        }, 1550);
    }
}