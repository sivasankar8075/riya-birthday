// =====================================================
// Project Riya ❤️
// Cake & Candle Animation Engine
// =====================================================

import { startFireworks } from "./fireworks.js";
import { initDecorations, triggerPoppers } from "./decorations.js"; // 🎈 ബലൂണും പോപ്പേഴ്സും Import ചെയ്യുന്നു

export function triggerCakeSequence() {
    console.log("🎂 Cake Sequence Started");

    // 🎁 കേക്ക് സീൻ സ്റ്റാർട്ട് ചെയ്യുമ്പോൾ ഗിഫ്റ്റ് ബോക്സ് Hide ചെയ്യുന്നു
    const giftBox = document.getElementById("giftBox") || document.querySelector(".gift-box") || document.querySelector(".gift");
    if (giftBox) {
        giftBox.style.display = "none";
    }

    // 🎈 ബലൂണുകൾ ക്രിയേറ്റ് ചെയ്യുന്നു
    initDecorations();

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

        // 🎉 കേക്കും മെസ്സേജും വരുമ്പോൾ Fireworks-നൊപ്പം Party Poppers-ഉം പൊട്ടുന്നു!
        triggerPoppers();
        startFireworks();
    }, 2500);
}