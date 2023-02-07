// Classe Fruit qui représente chaque fruit individuel dans le panier
class Fruit {
    // Le constructeur prend en entrée le nom du fruit et son prix
    constructor(nom, prix, quantite, total) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
        this.total = total;
    }
    // Ajouter les fruit au panier
}

function Ajouter(fruit) {
    let peches = new Fruit("peches", 10, 0,0 );
     peches.quantite = document.getElementById("nbPeches");
     peches.total = document.getElementById("totalPeches");

    let poires = new Fruit("poires", 12, 0,0 );
    poires.quantite = document.getElementById("nbPoires");
    poires.total = document.getElementById("totalPoires");

    let pommes = new Fruit("pommes", 11, 0,0 );
    pommes.quantite = document.getElementById("nbPommes");
    pommes.total = document.getElementById("totalPommes");


    switch (fruit) {
        case "peches" :
            peches.total.innerHTML = peches.prix * parseInt(peches.quantite.value);
            break;
        case "poires" :
            poires.total.innerHTML = poires.prix * parseInt(poires.quantite.value);
            break;
        case "pommes" :
            pommes.total.innerHTML = pommes.prix * parseInt(pommes.quantite.value);
            break;

    }


}


