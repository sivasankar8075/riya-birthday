// =====================================================
// Project Riya ❤️
// Photo Rain Engine
// =====================================================

import { startGiftScene } from "./gift.js";

export function startPhotoRain() {
    const container = document.getElementById("photoRain");
    if (!container) return;

    const photos = [];

    for (let i = 1; i <= 89; i++) {
        photos.push(`assets/photos/rain/${i}.jpg`);
    }

    // Shuffle photos
    for (let i = photos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [photos[i], photos[j]] = [photos[j], photos[i]];
    }

    let current = 0;

    function dropPhoto() {
        if (current >= photos.length) {
            clearInterval(rainInterval);

            setTimeout(() => {
                startGiftScene();
            }, 2000);

            return;
        }

        const img = document.createElement("img");
        img.src = photos[current];
        current++;

        img.className = "rain-photo";

        img.style.left = Math.random() * 100 + "vw";
        img.style.width = (80 + Math.random() * 120) + "px";
        img.style.animationDuration = (6 + Math.random() * 5) + "s";
        img.style.transform = `rotate(${Math.random() * 360}deg)`;

        container.appendChild(img);

        img.addEventListener("animationend", () => {
            img.remove();
        });
    }

    const rainInterval = setInterval(dropPhoto, 250);
}