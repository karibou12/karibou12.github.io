

// let topPos = window.pageYOffset;
//
//
// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     console.log("curr" + currentScrollPos);
//     if (topPos < currentScrollPos) {
//         document.getElementById("id1").style.marginTop = "250";
//     } else {
//         document.getElementById("id1").style.marginTop = "100";
//     }
//     topPos = currentScrollPos;
//     console.log( "prev" + topPos);
//     console.log( "----------------------");
// }

window.onscroll = function() {scrollSection1()};

// deplace présentation onscroll
function scrollSection1() {

    let htS1 = document.getElementById('s1').offsetHeight;
    let htS2 = document.getElementById('s2').offsetHeight;
    let htS3 = document.getElementById('s3').offsetHeight;


    let id1 = document.getElementById("id1");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        id1.style.transition = "0.2s";

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            id1.style.opacity = "0";
            id1.style.transition = ".6s";
        }
    } else {
        id1.style.marginTop = "250px";
        id1.style.opacity = "1";
        id1.style.transition = "0.6s";
    }




// déplace gallery onscroll
    let id2 = document.getElementById("id2");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        id2.style.marginTop = "200px";
        id2.style.opacity = "1";
        id2.style.transition = "1s";
        } else {
            id2.style.marginTop = "800px";
            id2.style.opacity = "0";
            id2.style.transition = "1s";
        }


        if (document.body.scrollTop > htS1 + 190 || document.documentElement.scrollTop > htS1 + 190  ) {
            id2.style.marginTop =   "-" + htS1 + "px";
            id2.style.opacity = "1";
            id2.style.transition = "1s";
        }else {
            id2.style.marginTop =  "200px";
            id2.style.opacity = "1";
            id2.style.transition = "1s";
        }






// déplace contact onscroll
//     let id3 = document.getElementById("id3");
//
//     if (document.body.scrollTop > htS1 + htS2 - 200 || document.documentElement.scrollTop > htS1 + htS2 - 200) {
//         id3.style.marginTop = "0px";
//         id3.style.opacity = "1";
//         id3.style.transition = "1s";
//
//         } else {
//             id3.style.marginTop = "500px";
//             id3.style.opacity = "0";
//             id3.style.transition = "1s";
//         }





    // change header color quand passage section 2
    let ul_nav = document.getElementsByClassName("li-navA");

    for (let i = 0; i < ul_nav.length ; i++){
        if (document.body.scrollTop > htS1-5 && document.body.scrollTop < htS1+htS2-100 || document.documentElement.scrollTop > htS1-5 && document.documentElement.scrollTop < htS1+htS2-100 ) {
            console.log("ul_nav[i]");
            ul_nav[i].style.color = "black";
        } else {
            ul_nav[i].style.color = "white";
        }
    }


}








function menuColorScroll(){

    if (document.body.scrollTop < 800){


    }



}











