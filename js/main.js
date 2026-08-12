// ==========================================
// Project Riya ❤️
// Main Entry Engine
// ==========================================

import { initLoading } from "./loading.js";
import { initTyping } from "./typing.js";
import { initHearts } from "./hearts.js";
import { initStory } from "./story.js";
import { initTransition } from "./pageTransitions.js";
import { initLetter } from "./letter.js";
import { initMemory } from "./memory.js";
import { initGallery } from "./gallery.js";
import { initCursor } from "./cursor.js";
import { initEasterEggs } from "./eastereggs.js";
import { initMusic } from "./music.js";
import { initSparkles } from "./sparkles.js";
import { startPhotoRain } from "./photoRain.js";

// DOMContentLoaded ഫങ്ഷനുള്ളിൽ ചേർക്കുക:
initCursor();

window.addEventListener("DOMContentLoaded", () => {
    console.clear();
    console.log("❤️ Project Riya Main Engine Started");

    // Initialize UI Component Modules
    initLoading();
    initStory();
    initTyping();
    initHearts();
    initTransition();
    initLetter();
    initMemory();
    initGallery();
    // DOMContentLoaded ഫങ്ഷനുള്ളിൽ ചേർക്കുക:
    initCursor();
    initEasterEggs();
    initMusic();
    initSparkles();
});