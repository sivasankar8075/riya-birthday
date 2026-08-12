// =====================================================
// Project Riya ❤️
// White Flash Transition Engine
// =====================================================

import { showStage } from "./stage.js";

export function startFlashTransition() {
    const flash = document.getElementById("flashTransition");
    if (!flash) return;

    flash.classList.remove("hidden");
    flash.classList.add("show");

    setTimeout(() => {
        showStage();
    }, 450);

    setTimeout(() => {
        flash.classList.remove("show");
        flash.classList.add("hidden");
    }, 900);
}