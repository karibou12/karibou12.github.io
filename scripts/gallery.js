import {gallery_db} from "./list_projects.js";
import {modal} from "./modal.js";

// const modalImg = document.getElementById("img01");

// function getIndex(evt) {
//     const images = document.getElementsByClassName('img');
//     let tabImg = [];
//
//     for (let i = 0; i < images.length; i++) {
//         tabImg.push(images[i].currentSrc);
//     }
//
//     return tabImg.indexOf(modalImg.currentSrc);
// }

// create card elem
for (const elem in gallery_db) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', gallery_db[elem].id);

    card.onclick = function () {
        modal(this);

    }

    let cardImg = document.createElement('img');
    cardImg.src = gallery_db[elem].image;
    cardImg.alt = gallery_db[elem].alt;
    cardImg.setAttribute('class', 'img');


    let cardDescription = document.createElement('p');
    cardDescription.textContent = gallery_db[elem].description;

    let cardAlt = document.createElement('p');
    cardAlt.textContent = gallery_db[elem].alt;


    document.getElementsByClassName('menu gallery')[0].appendChild(card);
    document.getElementsByClassName('card')[elem].appendChild(cardImg);
    document.getElementsByClassName('card')[elem].appendChild(cardAlt);
    // document.getElementsByClassName('card')[elem].appendChild(cardDescription);
    // cardDescription.style.display = "none";

}

// const gallery_db = [
//     {
//         "id": "1",
//         "name": "cheminee",
//         "image": "images/pjpoulet/20avantapres.jpg",
//         "alt": "Rénovation de cuisine",
//         "description": "La cuisine et l'espace salon ont été créés à la place de l'ancien garage",
//         "modal": [{
//             "id": "1",
//             "name": "cheminee",
//             "image": "images/pjpoulet/20avantapres.jpg",
//             "alt": "Rénovation de cuisine",
//             "description": "La cuisine et l'espace salon ont été créés à la place de l'ancien garage",
//         },
//             {
//                 "id": "2",
//                 "name": "cheminee",
//                 "image": "images/pjpoulet/20avantapres.jpg",
//                 "alt": "Rénovation de cuisine",
//                 "description": "La cuisine et l'espace salon ont été créés à la place de l'ancien garage",
//             }
//         ]
//     },
//     {
//         "id": "2",
//         "name": "douche",
//         "image": "./images/douche.jpg",
//         "alt": "renovation douche",
//         "description": "exemple de réalisation"
//     },
//     {
//         "id": "3",
//         "name": "escalier",
//         "image": "./images/escalier.jpg",
//         "alt": "renovation escalier",
//         "description": "exemple de réalisation"
//     },
//     {
//         "id": "4",
//         "name": "sdb",
//         "image": "./images/sdb.jpg",
//         "alt": "renovation salle de bain",
//         "description": "exemple de réalisation"
//     },
//     {
//         "id": "5",
//         "name": "cuisine",
//         "image": "./images/cuisine.jpg",
//         "alt": "renovation cuisine",
//         "description": "exemple de réalisation"
//     },
//     {
//         "id": "6",
//         "name": "entree",
//         "image": "./images/entree.jpg",
//         "alt": "renovation entrée",
//         "description": "exemple de réalisation"
//     },
//
// ]
