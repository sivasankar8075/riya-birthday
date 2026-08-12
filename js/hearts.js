// =====================================================
// Project Riya ❤️
// Floating Hearts Engine
// =====================================================

export function initHearts() {

    const container =
        document.getElementById("hearts");

    if (!container) return;

    setInterval(() => {

        createHeart(container);

    }, 450);

}



// ======================================
// CREATE HEART
// ======================================

function createHeart(container){

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const hearts = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "💓"

    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
        Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize =
        (18+Math.random()*30)+"px";

    heart.style.opacity =
        .5+Math.random()*.5;

    heart.style.animationDuration =
        (6+Math.random()*4)+"s";

    heart.style.transform =
        `rotate(${Math.random()*360}deg)`;

    container.appendChild(heart);

    heart.animate(

        [

            {

                transform:"translateY(0) scale(.5)",

                opacity:0

            },

            {

                opacity:1,

                offset:.2

            },

            {

                transform:
                `translateY(-110vh)
                translateX(${random(-120,120)}px)
                rotate(${random(-180,180)}deg)
                scale(1.4)`,

                opacity:0

            }

        ],

        {

            duration:
            (6000+Math.random()*4000),

            easing:"linear"

        }

    );

    setTimeout(()=>{

        heart.remove();

    },10000);

}



// ======================================
// RANDOM NUMBER
// ======================================

function random(min,max){

    return Math.floor(

        Math.random()*(max-min+1)

    )+min;

}