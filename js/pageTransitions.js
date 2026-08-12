// ==========================================
// Project Riya ❤️
// Page Transitions
// ==========================================

import { nextScene } from "./story.js";

export function initTransition() {

    const startBtn = document.getElementById("startBtn");
    const nextBtn = document.getElementById("nextBtn");
    const memoryNext = document.getElementById("memoryNext");
    const galleryNext = document.getElementById("galleryNext");
    const reasonNext = document.getElementById("reasonNext");
    const openGift = document.getElementById("openGift");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            const hero = document.getElementById("hero");

            hero.classList.add("hero-zoom");

            startBtn.disabled = true;

            setTimeout(() => {

                nextScene();

            }, 1300);

        });

    }

    if (nextBtn)
        nextBtn.addEventListener("click", nextScene);

    if (memoryNext)
        memoryNext.addEventListener("click", nextScene);

    if (galleryNext)
        galleryNext.addEventListener("click", nextScene);

    if (reasonNext)
        reasonNext.addEventListener("click", nextScene);

    if (openGift)
        openGift.addEventListener("click", nextScene);

}