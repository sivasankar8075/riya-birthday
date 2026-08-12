// =====================================================
// Project Riya ❤️
// Gallery Engine
// =====================================================

const galleryImages = [

    "assets/photos/memories/1.jpg",
    "assets/photos/memories/2.jpg",
    "assets/photos/memories/3.jpg",
    "assets/photos/memories/4.jpg",
    "assets/photos/memories/5.jpg",
    "assets/photos/memories/6.jpg"

];

let currentImage = 0;

export function initGallery(){

    const grid =
        document.getElementById("galleryGrid");

    if(!grid) return;

    grid.innerHTML="";

    galleryImages.forEach((src,index)=>{

        const img =
            document.createElement("img");

        img.src=src;

        img.loading="lazy";

        img.alt=`Memory ${index+1}`;

        img.onclick=()=>{

            openViewer(index);

        };

        grid.appendChild(img);

    });

}



// ======================================
// VIEWER
// ======================================

function openViewer(index){

    currentImage=index;

    let viewer=
        document.getElementById("galleryViewer");

    if(!viewer){

        viewer=document.createElement("div");

        viewer.id="galleryViewer";

        viewer.innerHTML=`

        <div class="viewer-bg">

            <button id="closeViewer">✕</button>

            <button id="prevImage">❮</button>

            <img id="viewerImage">

            <button id="nextImage">❯</button>

        </div>

        `;

        document.body.appendChild(viewer);

    }

    updateViewer();

    viewer.style.display="flex";



    document.getElementById("closeViewer").onclick=()=>{

        viewer.style.display="none";

    };



    document.getElementById("prevImage").onclick=()=>{

        currentImage--;

        if(currentImage<0)

            currentImage=galleryImages.length-1;

        updateViewer();

    };



    document.getElementById("nextImage").onclick=()=>{

        currentImage++;

        if(currentImage>=galleryImages.length)

            currentImage=0;

        updateViewer();

    };

}



// ======================================
// UPDATE VIEWER
// ======================================

function updateViewer(){

    document.getElementById("viewerImage").src=

        galleryImages[currentImage];

}