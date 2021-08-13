const gallery_db = [
        {
            "name":"cheminee",
            "image":"./images/cheminee.jpg",
            "alt":"renovation salon cheminée",
            "description":"exemple de réalisation"
        },
        {
            "name":"douche",
            "image":"./images/douche.jpg",
            "alt":"renovation douche",
            "description":"exemple de réalisation"
        },
        {
            "name":"escalier",
            "image":"./images/escalier.jpg",
            "alt":"renovation escalier",
            "description":"exemple de réalisation"
        },
        {
            "name":"sdb",
            "image":"./images/sdb.jpg",
            "alt":"renovation salle de bain",
            "description":"exemple de réalisation"
        },
        {
            "name":"cuisine",
            "image":"./images/cuisine.jpg",
            "alt":"renovation cuisine",
            "description":"exemple de réalisation"
        },
        {
            "name":"entree",
            "image":"./images/entree.jpg",
            "alt":"renovation entrée",
            "description":"exemple de réalisation"
        },

    ]




// create card elem
for ( const elem in gallery_db) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.onclick =  function () {
        modal(this);
    }

    let cardImg = document.createElement('img');
    cardImg.src = gallery_db[elem].image;
    cardImg.alt = gallery_db[elem].alt;
    cardImg.setAttribute('class', 'img');


    let cardDescription = document.createElement('p');
    cardDescription.textContent = gallery_db[elem].description;

    document.getElementsByClassName('menu gallery')[0].appendChild(card);
    document.getElementsByClassName('card')[elem].appendChild(cardImg);
    document.getElementsByClassName('card')[elem].appendChild(cardDescription);

}


// class Track {
//     constructor(name, label, image) {

//         this.name = name;
//         this.label = label;
//         this.image = image;

//     }
// }

// let BackInTheDayz = new Track("Back In Da Dayz","Bek Audio","BEK042.jpg");



