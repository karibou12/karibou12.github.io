
//************ active la gallery *****************
function active(evt, nom) {
    let menus = document.getElementsByClassName("menu");

    for (let i = 0; i < menus.length; i++) {
        menus[i].className = menus[i].className.replace(
            " visible",
            " invisible"
        );
    }

   let liNavs = document.getElementsByClassName("li-nav");
    for (let i = 0; i < liNavs.length; i++) {
        liNavs[i].className = liNavs[i].className.replace(" active", "");
    }

    let currentMenu = document.getElementById(nom).className;

    document.getElementById(nom).className = currentMenu.replace('invisible', ' visible');
    evt.className += " active";

}


//******** hover socials icon *********************** */
function selectIcon(elem) {
    let selected = elem;
    let socialIcons = document.getElementsByClassName("socialIcon");

    for (let i = 0; i < socialIcons.length; i++) {
        socialIcons[i].style.transform = "scale(0.6)";
        socialIcons[i].style.filter = "grayscale(1)";
        selected.style.transform = "scale(1.1";
        selected.style.filter = "grayscale(0)";
    }
}

function unselectIcon() {
    let socialIcons = document.getElementsByClassName("socialIcon");

    for (let i = 0; i < socialIcons.length; i++) {
        socialIcons[i].style.transform = "scale(1)";
        socialIcons[i].style.filter = "grayscale(0)";

    }
}



// Get the modal
const modalImg = document.getElementById("img01");

function modal(evt) {

    const modal = document.getElementById("myModal");
    const captionText = document.getElementById("caption");
    const imgMod= document.getElementById("img01");

    imgMod.classList.replace('deZoom', 'modal-content');
    modal.classList.replace('deZoomMod', 'modal');
    modal.style.display = "block";

    modalImg.src = evt.children[0].currentSrc;
    captionText.innerHTML = evt.children[0].alt;

    modalImg.style.animation = "zoom 1s ";
    setTimeout(function() {
        modalImg.style.animation = '';
    }, 600)


    document.onkeydown = function (evt) {
        evt = evt || Event;

        if (evt.key === "Escape") {
            let modal = document.getElementById("myModal");
            const imgMod= document.getElementById("img01");
            imgMod.classList.replace('modal-content','deZoom');
            modal.classList.replace('modal','deZoomMod');

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





    if (evt.className === "prev"){
        if (index === 0) {
            index = images.length;
        }

        setTimeout(function() {
            modalImg.style.animation = "prev 0.4s ";
        }, 10)

        setTimeout(function() {
            modalImg.style.animation = '';
        }, 400)



        index = index - 1;
        modalImg.src = tabImg[index];
        captionText.innerHTML = images[index].alt;



    }

    if (evt.className === "next"){
        if (index === images.length - 1) {
            index = -1;
        }
        index = index + 1;
        modalImg.src = images[index].currentSrc;
        captionText.innerHTML = images[index].alt;

        setTimeout(function() {
            modalImg.style.animation = "next 0.4s";
        }, 10)


        setTimeout(function() {
            modalImg.style.animation = '';
        }, 400)


    }








}




// dezoom du modal quand on click sur la croix.
function testAnim(){


    // Get the <span> element that closes the modal
    // let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }



    let modal = document.getElementById("myModal");
    const imgMod= document.getElementById("img01");
    imgMod.classList.replace('modal-content','deZoom');
    modal.classList.replace('modal','deZoomMod');






}

