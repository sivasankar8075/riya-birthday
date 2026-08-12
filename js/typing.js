// =====================================================
// Project Riya ❤️
// Typing Engine
// =====================================================

export function initTyping() {

    const title =
        document.getElementById("typing-title");

    if (!title) return;

    const text = "Hi Riya ❤️";

    let index = 0;

    title.innerHTML = "";

    function type() {

        if (index < text.length) {

            title.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, 120);

        } else {

            blinkCursor();

        }

    }

    setTimeout(type, 3400);

}



// ======================================
// CURSOR BLINK
// ======================================

function blinkCursor() {

    const title =
        document.getElementById("typing-title");

    const cursor =
        document.createElement("span");

    cursor.innerHTML = "|";

    cursor.style.marginLeft = "4px";

    cursor.style.animation =
        "cursorBlink .8s infinite";

    title.appendChild(cursor);

}



// ======================================
// ADD CURSOR ANIMATION
// ======================================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes cursorBlink{

0%{

opacity:1;

}

50%{

opacity:0;

}

100%{

opacity:1;

}

}

`;

document.head.appendChild(style);