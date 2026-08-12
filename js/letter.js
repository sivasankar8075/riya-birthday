// ==========================================
// LOVE LETTER ENGINE
// ==========================================

export function initLetter() {

    const text = `Dear Riya ❤️

Today is not just your birthday...

It is the day my favourite person
came into this world.

Thank you for every smile,
every laugh,
every little fight,
every memory.

These 3.5 years are the
most beautiful chapter
of my life.

Happy Birthday My Princess ❤️`;

    const container =
        document.getElementById("letterContent");

    if (!container) return;

    let i = 0;

    function type() {

        if (i < text.length) {

            container.innerHTML +=
                text.charAt(i);

            i++;

            setTimeout(type,40);

        }

    }

    type();

}