// =====================================================
// Project Riya ❤️
// Celebration Fireworks Engine (Canvas)
// =====================================================

export function startFireworks() {
    console.log("🎆 Fireworks Engine Started!");

    let canvas = document.getElementById("fireworksCanvas");

    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "fireworksCanvas";
        canvas.style.position = "fixed";
        canvas.style.inset = "0";
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = "999";
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const colors = ["#ff4fa3", "#ffd166", "#8a5cff", "#ff82c5", "#00f0ff", "#ffffff"];

    function createExplosion(x, y) {
        const count = 60;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 7 + 2;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 3 + 2,
                decay: Math.random() * 0.015 + 0.008
            });
        }
    }

    function launchRandomRocket() {
        const x = Math.random() * (width - 200) + 100;
        const y = Math.random() * (height * 0.4) + height * 0.15;
        createExplosion(x, y);
    }

    // Auto launch fireworks at regular intervals
    setInterval(() => {
        launchRandomRocket();
    }, 550);

    function render() {
        ctx.clearRect(0, 0, width, height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.04; // Gravity
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        requestAnimationFrame(render);
    }

    render();
}