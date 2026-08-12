// =====================================================
// Project Riya ❤️
// Background Sparkles Generator
// =====================================================

export function initSparkles() {
    const container = document.getElementById("sparkles");

    if (!container) return;

    // 1. ആരംഭത്തിൽ ചില Sparkles സ്ക്രീനിൽ ഉണ്ടാക്കുന്നു
    for (let i = 0; i < 25; i++) {
        createRandomSparkle(container);
    }

    // 2. തുടർന്ന് ഇടയ്ക്കിടെ പുതിയ Sparkles വരാൻ Interval ക്രമീകരിക്കുന്നു
    setInterval(() => {
        createRandomSparkle(container);
    }, 400);
}

function createRandomSparkle(container) {
    const spark = document.createElement("div");
    spark.className = "spark";

    // Random X & Y Positions
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Random Size (2px - 6px)
    const size = Math.random() * 4 + 2;

    spark.style.left = `${x}vw`;
    spark.style.top = `${y}vh`;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    // Random animation duration
    spark.style.animationDuration = `${Math.random() * 2 + 1.5}s`;

    container.appendChild(spark);

    // Animation കഴിയുമ്പോൾ Element സ്ക്രീനിൽ നിന്ന് റീമൂവ് ചെയ്യുന്നു
    spark.addEventListener("animationend", () => {
        spark.remove();
    });
}