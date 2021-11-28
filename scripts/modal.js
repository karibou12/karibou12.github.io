import {gallery_db} from "./list_projects.js";

export {modal, modalClose, modalNav};


// navigation de la galery modal
const prev = document.getElementsByClassName('prev')[0];
const close = document.getElementsByClassName('close')[0];
const next = document.getElementsByClassName('next')[0];

prev.addEventListener('click', modalNav);
close.addEventListener('click', modalClose);
next.addEventListener('click', modalNav);


var indexMod = 0;
var index;
// Get the modal
const modalImg = document.getElementById("img01");

function modal(evt) {
    const images = document.getElementsByClassName('img');
    let tabImg = [];

    for (let i = 0; i < images.length; i++) {
        tabImg.push(images[i].currentSrc);
    }
    index = tabImg.indexOf(evt.children[0].currentSrc);


    const modal = document.getElementById("myModal");
    const captionText = document.getElementById("caption");
    const imgMod = document.getElementById("img01");

    imgMod.classList.replace('deZoom', 'modal-content');
    modal.classList.replace('deZoomMod', 'modal');
    modal.style.display = "block";

    // modalImg.src = evt.children[0].currentSrc;
    // captionText.innerHTML = evt.children[0].alt;
    // captionText.innerHTML = evt.children[2].innerHTML;
    //

    modalImg.src = gallery_db[index].modalGallery[0].image;
    captionText.innerHTML = gallery_db[index].modalGallery[0].description;


    modalImg.style.animation = "zoom 1s ";
    setTimeout(function () {
        modalImg.style.animation = '';
    }, 600)


    document.onkeydown = function (evt) {
        evt = evt || Event;

        if (evt.key === "Escape") {
            let modal = document.getElementById("myModal");
            const imgMod = document.getElementById("img01");
            imgMod.classList.replace('modal-content', 'deZoom');
            modal.classList.replace('modal', 'deZoomMod');
        }
    }
}


function modalNav() {
    const captionText = document.getElementById("caption");
    // const images = document.getElementsByClassName('img');
    // let tabImg = [];
    //
    // for (let i = 0; i < images.length; i++) {
    //     tabImg.push(images[i].currentSrc);
    // }
    // let index = tabImg.indexOf(modalImg.currentSrc);

    if (this.className === "prev") {
        if (indexMod === 0) {
            indexMod = gallery_db[index].modalGallery.length;
        }
        indexMod = indexMod - 1;

        modalImg.src = gallery_db[index].modalGallery[indexMod].image;
        captionText.innerHTML = gallery_db[index].modalGallery[indexMod].description;

        setTimeout(function () {
            modalImg.style.animation = "prev 0.4s ";
        }, 10)

        setTimeout(function () {
            modalImg.style.animation = '';
        }, 400)
    }


    if (this.className === "next") {
        if (indexMod === gallery_db[index].modalGallery.length -1 ) {
            indexMod = -1;
        }
        indexMod = indexMod + 1;
        modalImg.src = gallery_db[index].modalGallery[indexMod].image;
        captionText.innerHTML = gallery_db[index].modalGallery[indexMod].description;


        setTimeout(function () {
            modalImg.style.animation = "next 0.4s";
        }, 10)

        setTimeout(function () {
            modalImg.style.animation = '';
        }, 400)
    }


}

// dezoom du modal quand on click sur la croix.
function modalClose() {
    let modal = document.getElementById("myModal");
    const imgMod = document.getElementById("img01");
    imgMod.classList.replace('modal-content', 'deZoom');
    modal.classList.replace('modal', 'deZoomMod');
}


//
// function getIndex(evt) {
//     const images = document.getElementsByClassName('img');
//     let tabImg = [];
//
//     for (let i = 0; i < images.length; i++) {
//         tabImg.push(images[i].currentSrc);
//     }
//
//     console.log(tabImg.indexOf(modalImg.src) + 'bla')
//     return tabImg.indexOf(modalImg.currentSrc);
// }


// if (this.className === "prev") {
//     if (index === 0) {
//         index = images.length;
//     }
//     setTimeout(function () {
//         modalImg.style.animation = "prev 0.4s ";
//     }, 10)
//
//     setTimeout(function () {
//         modalImg.style.animation = '';
//     }, 400)
//
//     index = index - 1;
//     modalImg.src = tabImg[index];
//     captionText.innerHTML = images[index].alt;
// }


// if (this.className === "next") {
//
//     if (index === images.length - 1) {
//         index = -1;
//     }
//     index = index + 1;
//     modalImg.src = images[index].currentSrc;
//     captionText.innerHTML = images[index].alt;
//
//     setTimeout(function () {
//         modalImg.style.animation = "next 0.4s";
//     }, 10)
//
//     setTimeout(function () {
//         modalImg.style.animation = '';
//     }, 400)
// }



