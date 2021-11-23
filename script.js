//********menu Burger *********************** */

const nav = document.querySelector('.navigation');
const burger = document.querySelector('.burger');

burger.addEventListener("click", () => {
    burger.classList.toggle('clicked');
});

const linavA = document.getElementsByClassName("li-navA");

for (let i = 0; i < linavA.length; i++) {

    if (window.innerWidth < 900) {

        burger.addEventListener("click", () => {
            if (nav.style.display === "block") {
                nav.style.display = "none";
            } else {
                nav.style.display = "block";
            }

        })

    linavA[i].addEventListener('click',()=>{
        if (nav.style.display === "block") {
            nav.style.display = "none";
            burger.classList.toggle('clicked');
        } else {
            nav.style.display = "block";
        }
    })
}
}


//******** hover socials icon *********************** */
function selectIcon(elem, name) {

    // let socialIcons = document.getElementsByClassName("socialIcon");
    let stroke = document.getElementById(name);

    // socialIcons[i].style.filter = "grayscale(1)";
    elem.style.transform = "scale(1.25)";
    stroke.style.animation = "dash 0.6s cubic-bezier(1,0,.82,-0.01) forwards";

    // selected.style.filter = "grayscale(1)";
    elem.addEventListener( "mouseout",() =>{
        stroke.style.animation = "undash 0.4s cubic-bezier(0,.96,.56,1) forwards";
        elem.style.transform = "scale(1)";
    })

}


// Get the modal
const modalImg = document.getElementById("img01");

function modal(evt) {

    const modal = document.getElementById("myModal");
    const captionText = document.getElementById("caption");
    const imgMod = document.getElementById("img01");

    imgMod.classList.replace('deZoom', 'modal-content');
    modal.classList.replace('deZoomMod', 'modal');
    modal.style.display = "block";


    modalImg.src = evt.children[0].currentSrc;
    // captionText.innerHTML = evt.children[0].alt;
    captionText.innerHTML = evt.children[2].innerHTML;
    

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

function modalNav(evt) {
    const captionText = document.getElementById("caption");
    const images = document.getElementsByClassName('img');
    let tabImg = [];

    for (let i = 0; i < images.length; i++) {
        tabImg.push(images[i].currentSrc);
    }
    let index = tabImg.indexOf(modalImg.currentSrc);

    if (evt.className === "prev") {
        if (index === 0) {
            index = images.length;
        }

        setTimeout(function () {
            modalImg.style.animation = "prev 0.4s ";
        }, 10)

        setTimeout(function () {
            modalImg.style.animation = '';
        }, 400)


        index = index - 1;
        modalImg.src = tabImg[index];
        captionText.innerHTML = images[index].alt;


    }

    if (evt.className === "next") {
        if (index === images.length - 1) {
            index = -1;
        }
        index = index + 1;
        modalImg.src = images[index].currentSrc;
        captionText.innerHTML = images[index].alt;

        setTimeout(function () {
            modalImg.style.animation = "next 0.4s";
        }, 10)


        setTimeout(function () {
            modalImg.style.animation = '';
        }, 400)


    }

}




// dezoom du modal quand on click sur la croix.
function testAnim() {
    let modal = document.getElementById("myModal");
    const imgMod = document.getElementById("img01");
    imgMod.classList.replace('modal-content', 'deZoom');
    modal.classList.replace('modal', 'deZoomMod');

}

//
// function scrollWin(n) {
//     let ht = document.getElementById('s1').offsetHeight;
//     window.scrollTo({
//         top: ht * n,
//         left: 0,
//         behavior: 'smooth'
//     });
// }
//
//
