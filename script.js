//barre de nav avce li lien etc
//******************************

//Creation balise header
var headerElt = document.createElement("header");
headerElt.id= "header";
document.getElementById("main").insertAdjacentHTML("afterbegin", '<header id="header"></header>');

//Creation balise nav
var navElt = document.createElement("nav");
navElt.id= "nav";
document.getElementById("header").appendChild(navElt);

//Creation balise ul
var ulElt = document.createElement("ul");
ulElt.id= "ulNav";
document.getElementById("nav").appendChild(ulElt);


// creation liste dans ul
var Liste = ["Accueil","Galerie"];
var maNavListe = ["index.html","galerie.html"];
var classListe = ["btn","btn"];

for (var i = 0; i < Liste.length; i++) {
    var lienElt = document.createElement("li"); 
    lienElt.className = classListe[i];
    var lienA = document.createElement("a")
    lienA.textContent = Liste[i];
    lienA.href = maNavListe[i];
    // Ajoute un lien
    document.getElementById("ulNav").appendChild(lienElt);
    // Ajoute une balise <a>
    document.getElementsByClassName(classListe[i])[i].appendChild(lienA);
}







//Galerie 
/**********/
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
} 








   