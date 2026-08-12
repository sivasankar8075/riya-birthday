// =====================================================
// Project Riya ❤️
// Birthday Stage Engine
// =====================================================

import { triggerCakeSequence } from "./cake.js";

export function showStage() {
    console.log("🎭 Birthday Stage Revealed!");

    const stage = document.getElementById("birthdayStage");
    if (!stage) return;

    stage.classList.remove("hidden");
    stage.classList.add("visible");

    setTimeout(() => {
        triggerCakeSequence();
    }, 600);
}