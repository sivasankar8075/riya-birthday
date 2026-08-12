// =====================================================
// Project Riya ❤️
// Memory Engine
// =====================================================

const memories = [

    {
        image:"assets/photos/memories/1.jpg",
        title:"The Beginning ❤️",
        caption:"Every beautiful story starts with one beautiful moment."
    },

    {
        image:"assets/photos/memories/2.jpg",
        title:"My Favourite Smile 😊",
        caption:"Your smile has always been my favourite place."
    },

    {
        image:"assets/photos/memories/3.jpg",
        title:"Forever Together 💕",
        caption:"Every memory with you is a treasure."
    }

];

let current = 0;

export function initMemory(){

    const image =
        document.getElementById("memoryImage");

    const title =
        document.getElementById("memoryTitle");

    const caption =
        document.getElementById("memoryCaption");

    const next =
        document.getElementById("memoryNext");

    if(!image || !title || !caption) return;

    showMemory();

    if(next){

        next.addEventListener("click",nextMemory);

    }

}



// =====================================
// SHOW MEMORY
// =====================================

function showMemory(){

    const image =
        document.getElementById("memoryImage");

    const title =
        document.getElementById("memoryTitle");

    const caption =
        document.getElementById("memoryCaption");

    image.style.opacity="0";

    title.style.opacity="0";

    caption.style.opacity="0";

    setTimeout(()=>{

        image.src=
        memories[current].image;

        title.textContent=
        memories[current].title;

        caption.textContent=
        memories[current].caption;

        image.style.opacity="1";

        title.style.opacity="1";

        caption.style.opacity="1";

    },300);

}



// =====================================
// NEXT MEMORY
// =====================================

function nextMemory(){

    current++;

    if(current>=memories.length){

        current=0;

    }

    showMemory();

}