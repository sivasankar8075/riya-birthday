// ==========================================
// Project Riya ❤️
// Story & Scene Navigation Engine
// ==========================================

import { startPhotoRain } from "./photoRain.js";

const scenes = [
    "hero",
    "letter",
    "memory",
    "gallery",
    "reasons",
    "photoRain"
];

let currentScene = 0;

export function initStory() {
    scenes.forEach((scene, index) => {
        const section = document.getElementById(scene);
        if (!section) return;

        if (index === 0) {
            section.classList.remove("hidden");
            section.classList.add("fade-in");
        } else {
            section.classList.add("hidden");
            section.classList.remove("fade-in");
        }
    });
}

export function nextScene() {
    if (currentScene >= scenes.length - 1) return;

    const current = document.getElementById(scenes[currentScene]);
    const next = document.getElementById(scenes[currentScene + 1]);

    if (!current || !next) return;

    current.classList.add("hidden");
    next.classList.remove("hidden");
    next.classList.add("fade-in");

    currentScene++;

    // Trigger Photo Rain when reaching the photoRain scene
    if (scenes[currentScene] === "photoRain") {
        console.log("🌧️ Scene changed to Photo Rain!");
        startPhotoRain();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function previousScene() {
    if (currentScene <= 0) return;

    const current = document.getElementById(scenes[currentScene]);
    const previous = document.getElementById(scenes[currentScene - 1]);

    if (!current || !previous) return;

    current.classList.add("hidden");
    previous.classList.remove("hidden");
    previous.classList.add("fade-in");

    currentScene--;
}