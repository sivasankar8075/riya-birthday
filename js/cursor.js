// =====================================================
// Project Riya ❤️
// Cursor Glow & Sparkle Trailing Engine
// =====================================================

export function initCursor() {
    const cursorGlow = document.getElementById("cursor-glow");
    const sparklesContainer = document.getElementById("sparkles");

    if (!cursorGlow) return;

    // 1. Mouse movement custom glow position update
    window.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;

        // Smooth movement using transform
        cursorGlow.style.left = `${clientX}px`;
        cursorGlow.style.top = `${clientY}px`;

        // Create subtle trailing sparkles occasionally
        if (Math.random() < 0.25 && sparklesContainer) {
            createSparkle(clientX, clientY, sparklesContainer);
        }
    });

    // 2. Touch screen glow positioning (for mobile devices)
    window.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            cursorGlow.style.left = `${touch.clientX}px`;
            cursorGlow.style.top = `${touch.clientY}px`;

            if (Math.random() < 0.2 && sparklesContainer) {
                createSparkle(touch.clientX, touch.clientY, sparklesContainer);
            }
        }
    });
}

function createSparkle(x, y, container) {
    const spark = document.createElement("div");
    spark.className = "spark";

    // Randomize initial positions around the cursor
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;

    spark.style.left = `${x + offsetX}px`;
    spark.style.top = `${y + offsetY}px`;

    // Random size for dynamic effect
    const size = Math.random() * 4 + 2;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    container.appendChild(spark);

    // Remove particle element after animation completes
    spark.addEventListener("animationend", () => {
        spark.remove();
    });
}