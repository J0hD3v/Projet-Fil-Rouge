// #region Classe

class picture {
    constructor (name, link, client, ground, date) {
        this.name = name;
        this.link = link;
        this.client = client;
        this.ground = ground;
        this.date = date;
    }
}


// #region Variables

let picture_1 = new picture (
    "picture" + 1,
    "./Images/galerie-images/image-1.jpg",
    "Charles",
    "Terrain 1",
    {
        day: "01/06/2024",
        dayOfWeek: "samedi",
        hour: "14h"
    }
)

let picture_2 = new picture (
    "picture" + 2,
    "./Images/galerie-images/image-2.jpg",
    "Christophe",
    "Terrain 2",
    {
        day: "02/06/2024",
        dayOfWeek: "dimanche",
        hour: "16h"
    }
)

let picture_3 = new picture (
    "picture" + 3,
    "./Images/galerie-images/image-1.jpg",
    "Elodie",
    "Terrain 3",
    {
        day: "03/06/2024",
        dayOfWeek: "lundi",
        hour: "10h"
    }
)

let picture_4 = new picture (
    "picture" + 4,
    "./Images/galerie-images/image-2.jpg",
    "Florian",
    "Terrain 4",
    {
        day: "04/06/2024",
        dayOfWeek: "mardi",
        hour: "18h"
    }
)

let picture_5 = new picture (
    "picture" + 5,
    "./Images/galerie-images/image-1.jpg",
    "Anna",
    "Terrain 2",
    {
        day: "05/06/2024",
        dayOfWeek: "mercredi",
        hour: "19h"
    }
)


let tabPictures = [
    picture_1,
    picture_2,
    picture_3,
    picture_4,
    picture_5
];


const research_bar = document.getElementById("research_bar");
const espace_contenu = document.getElementById("espace_contenu");







// #region Recherche

function initialisation() {
    for(let picture of tabPictures) {

        const div_picture = document.createElement("div");
        div_picture.className = "picture";
        div_picture.id = picture.name;

        const new_image = document.createElement("img");
        const new_info_client = document.createElement("p");
        const new_info_dayOfWeek = document.createElement("p");
        const new_info_day = document.createElement("p");
        const new_info_hour = document.createElement("p");
        const new_info_ground = document.createElement("p");

        new_image.src = picture.link;
        new_info_client.innerText = picture.client;
        new_info_dayOfWeek.innerText = picture.date.dayOfWeek;
        new_info_day.innerText = picture.date.day;
        new_info_hour.innerText = picture.date.hour;
        new_info_ground.innerText = picture.ground;

        div_picture.append(new_image,new_info_client,new_info_dayOfWeek,new_info_day,new_info_hour,new_info_ground);
        espace_contenu.append(div_picture);
    }
}

initialisation();

research_bar.addEventListener("input", (e) => {
    let recherche = research_bar.value.toUpperCase();   // en upperCase pour faciliter la recherche

    for(let picture of tabPictures) {

        let
            client = picture.client.toUpperCase(),
            dayOfWeek = picture.date.dayOfWeek.toUpperCase(),
            day = picture.date.day.toUpperCase(),
            hour = picture.date.hour.toUpperCase(),
            ground = picture.ground.toUpperCase();
        
        let correspondingPicture = document.getElementById(picture.name);

        if (
            client.includes(recherche) == true ||
            dayOfWeek.includes(recherche) == true ||
            day.includes(recherche) == true ||
            hour.includes(recherche) == true ||
            ground.includes(recherche) == true
        ) {
            console.log("OK ",picture);
            correspondingPicture.style.display = "flex";
        }
        else {
            correspondingPicture.style.display = "none";
        }
    }
})








/*
let nbr_articles = 4;

let
    filtre_aucun = document.getElementById("aucun"),
    filtre_pertinence = document.getElementById("pertinence"),
    filtre_date = document.getElementById("date_ajout"),
    filtre_position = document.getElementById("position"),
    filtre_prix = document.getElementById("prix_croissants");

let
    article_1 = {
        image: "./Images/map.png",
        nom: "truc 1",
        description: "c'est stylé",
        date: "01/01/2024",
        pertinence: 4,
        position: 2,
        prix: "1 €"
    },
    article_2 = {
        image: "./Images/partenaire.png",
        nom: "machin 2",
        description: "c'est cool",
        date: "02/01/2024",
        pertinence: 3,
        position: 3,
        prix: "10 €"
    },
    article_3 = {
        image: "./Images/map.png",
        nom: "bidule 3",
        description: "c'est bien",
        date: "02/02/2024",
        pertinence: 2,
        position: 1,
        prix: "100 €"
    },
    article_4 = {
        image: "./Images/partenaire.png",
        nom: "chose 4",
        description: "c'est bof",
        date: "03/03/2024",
        pertinence: 1,
        position: 4,
        prix: "1000 €"
    };

let
    image_1 = document.getElementById("article_1_image"),
    image_2 = document.getElementById("article_2_image"),
    image_3 = document.getElementById("article_3_image"),
    image_4 = document.getElementById("article_4_image");
    
let
    nom_1 = document.getElementById("article_1_nom"),
    nom_2 = document.getElementById("article_2_nom"),
    nom_3 = document.getElementById("article_3_nom"),
    nom_4 = document.getElementById("article_4_nom");

let
    description_1 = document.getElementById("article_1_description"),
    description_2 = document.getElementById("article_2_description"),
    description_3 = document.getElementById("article_3_description"),
    description_4 = document.getElementById("article_4_description");


// ---------------------------------------------------------- initialisation
function initialisation() {
    for(let i=1 ; i<=nbr_articles ; i++) {
        let article = eval("article_"+i);
        let image = eval("image_"+i);
        let nom = eval("nom_"+i);
        let description = eval("description_"+i);

        image.src = article.image;
        nom.innerText = article.nom;
        description.innerText = article.description;
    }

}

initialisation();


// ---------------------------------------------------------- tris
function tri_pertinence() {

    for(let i=1 ; i<=nbr_articles ; i++) {
        let article = eval("article_"+i);
        let ordre = eval("article_"+i).pertinence;
        let image = eval("image_"+ordre);
        let nom = eval("nom_"+ordre);
        let description = eval("description_"+ordre);

        image.src = article.image;
        nom.innerText = article.nom;
        description.innerText = article.description;
    }
}

function tri_date() {

    for(let i=1 ; i<=nbr_articles ; i++) {
        let article = eval("article_"+i);
        let ordre = eval("article_"+i).pertinence;
        let image = eval("image_"+ordre);
        let nom = eval("nom_"+ordre);
        let description = eval("description_"+ordre);

        image.src = article.image;
        nom.innerText = article.nom;
        description.innerText = article.description;
    }
}

function tri_position() {

    for(let i=1 ; i<=nbr_articles ; i++) {
        let article = eval("article_"+i);
        let ordre = eval("article_"+i).position;
        let image = eval("image_"+ordre);
        let nom = eval("nom_"+ordre);
        let description = eval("description_"+ordre);

        image.src = article.image;
        nom.innerText = article.nom;
        description.innerText = article.description;
    }
}


// ---------------------------------------------------------- filtrage
function filtrage() {
    if(filtre_aucun.checked == true) {
        console.log("aucun filtre");
        initialisation();
    }
    else if(filtre_pertinence.checked == true) {
        console.log("filtre pertinence");
        tri_pertinence();
    }
    else if(filtre_date.checked == true) {
        console.log("filtre date");
    }
    else if(filtre_position.checked == true) {
        console.log("filtre position");
        tri_position();
    }
}

*/