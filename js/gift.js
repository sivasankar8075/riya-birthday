// =====================================================
// Project Riya ❤️
// 3D Gift Box Drop & Animation Engine
// =====================================================

import { startParticles } from "./particles.js";

export function startGiftScene() {
    const gift = document.getElementById("giftDrop");
    const flash = document.getElementById("flashScreen");
    const lid = document.querySelector(".gift-lid");

    if (flash) {
        flash.classList.remove("hidden");
        flash.classList.add("flash");
        setTimeout(() => {
            flash.classList.add("hidden");
        }, 700);
    }

    if (gift) gift.classList.remove("hidden");

    setTimeout(() => {
        if (gift) gift.classList.add("drop");
    }, 250);

    setTimeout(() => {
        if (gift) gift.classList.add("shake");
    }, 1700);

    setTimeout(() => {
        if (lid) lid.classList.add("open");
    }, 2900);

    setTimeout(() => {
        startParticles();
    }, 3200);
}