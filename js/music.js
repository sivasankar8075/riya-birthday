// =====================================================
// Project Riya ❤️
// Background Music Engine
// =====================================================

export function initMusic() {
    const audio = document.getElementById("bgMusic");
    if (!audio) return;

    // Volume set (0.0 to 1.0)
    audio.volume = 0.7;

    function startAudio() {
        if (audio.paused) {
            audio.play().then(() => {
                console.log("🎵 Music playing successfully!");
            }).catch(err => {
                console.log("Autoplay prevented:", err);
            });
        }
    }

    // Touch My Heart ബട്ടണിലോ സ്ക്രീനിൽ എവിടെയെങ്കിലും ക്ലിക്ക് ചെയ്താലോ പാട്ട് സ്റ്റാർട്ട് ആകും
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", startAudio);
    }

    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("touchstart", startAudio, { once: true });
}

export function playMusic() {
    const audio = document.getElementById("bgMusic");
    if (audio && audio.paused) {
        audio.play().catch(e => console.log(e));
    }
}

export function pauseMusic() {
    const audio = document.getElementById("bgMusic");
    if (audio && !audio.paused) {
        audio.pause();
        console.log("⏸️ Music Paused");
    }
}