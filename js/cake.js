// =====================================================
// Project Riya ❤️
// Cake & Candle Animation Engine
// =====================================================

import { startFireworks } from "./fireworks.js";

export function triggerCakeSequence() {
    console.log("🎂 Cake Sequence Started");

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

        // 🎆 Final Message വരുമ്പോൾ താനേ Fireworks സ്റ്റാർട്ട് ആകുന്നു!
        startFireworks();
    }, 2500);
}