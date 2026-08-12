// =====================================================
// Project Riya ❤️
// Golden Particles Explosion Engine
// =====================================================

import { startFlashTransition } from "./flashTransition.js";

export function startParticles() {
    console.log("✨ Golden Particles Started");

    const count = 120;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "gold-particle";

        particle.style.left = "50%";
        particle.style.top = "55%";

        particle.style.setProperty("--x", (Math.random() * 700 - 350) + "px");
        particle.style.setProperty("--y", -(Math.random() * 500 + 100) + "px");

        particle.style.animationDuration = (1.5 + Math.random() * 1.2) + "s";

        document.body.appendChild(particle);

        particle.addEventListener("animationend", () => {
            particle.remove();
        });
    }

    setTimeout(() => {
        startFlashTransition();
    }, 2200);
}