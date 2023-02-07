// Classe Fruit qui représente chaque fruit individuel dans le panier
class Fruit {
    // Le constructeur prend en entrée le nom du fruit et son prix
    constructor(nom , prix) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = 0;
        this.total = 0;
    }

    // La méthode majSousTotal permet de mettre à jour le sous-total pour ce fruit en fonction de la quantité
    majSousTotal() {
        this.total = this.prix * this.quantite;
    }
}

// Classe Commander qui représente la commande complète
class Commander {
    // Le constructeur initialise les variables membres
    constructor() {
        this.fruits = []; // Liste de tous les fruits
        this.total = 0; // Total de la commande
        this.error = " "; // Message d'erreur, vide par défaut
    }

    // La méthode addFruit permet d'ajouter un fruit à la liste des fruits de la commande
    addFruit(fruit) {
        this.fruits.push(fruit);
    }

    // La méthode majSousTotal permet de mettre à jour le total de la commande en additionnant les sous-totaux de chaque fruit
    majSousTotal() {
        this.total = 0;
        for (const fruit of this.fruits) {
            fruit.majSousTotal();
            this.total += fruit.total;
        }
    }

    // La méthode validerPanier vérifie si le total de la commande est supérieur à 20$, et enregistre un message d'erreur s'il est inférieur
    validerPanier() {
        this.majSousTotal();
        if (this.total < 20) {
            this.error = "La valeur minimale des paniers est de 20$.";
        } else {
            this.error = " ";
        }
    }
}

// Création de chaque objet Fruit
const pêches = new Fruit("Sac(s) de pêches", 10);
const poires = new Fruit("Sac(s) de poires", 12);
const pommes = new Fruit("Sac(s) de pommes", 11);

// Création de l'objet Order
const commande = new Commander();

// Ajout des fruits à la commande
commande.addFruit(pêches);
commande.addFruit(poires);
commande.addFruit(pommes);




/*
class Panier {
    constructor(item ="Item", prix = 10, nombre = 1, sousTotal = 10.00, total = 20.00, peches = "Pêches", poires = "Poires", pommes = "Pommes") {
        this.item = item;
        this.prix = prix;
        this.nombre = nombre;
        this.sousTotal = sousTotal;
        this.total = total;
        this.peches = peches;
        this.poires = poires;
        this.pomme = pommes;
    }
    toString(){
        return this.item + " " + this.prix + " " + this.nombre + " " + this.sousTotal + " " + this.total + " " + this.peches + " " + this.poires + " " + this.pomme
    }
}

function validerPanier() {
    let

}
_____________________________________________________________________

function validerPanier() {
    // Calculer le total de chaque fruit
    const peches = Number(document.querySelector("#nbPeches").value) * 10;
    document.querySelector("#Peches .totalFruit").innerHTML = peches;
    const poires = Number(document.querySelector("#nbPoires").value) * 12;
    document.querySelector("#Poires .totalFruit").innerHTML = poires;
    const pommes = Number(document.querySelector("#nbPommes").value) * 11;
    document.querySelector("#Pommes .totalFruit").innerHTML = pommes;

    // Calculer le total global
    const total = peches + poires + pommes;
    document.querySelector("#total").innerHTML = total;

    // Afficher un message d'erreur si le total est inférieur à 20
    if (total < 20) {
        document.querySelector(".error").classList.remove("invisible");
    } else {
        document.querySelector(".error").classList.add("invisible");
    }

    // Activer ou désactiver le bouton de soumission en fonction du total et de l'état de la case à cocher
    if (total >= 20 && document.querySelector("#conditions").checked) {
        document.querySelector("#submit").removeAttribute("disabled");
    } else {
        document.querySelector("#submit").setAttribute("disabled", "disabled");
    }
}

// Exécuter la fonction validerPanier lorsque les valeurs du formulaire changent
document.querySelector("#nbPeches").addEventListener("input", validerPanier);
document.querySelector("#nbPoires").addEventListener("input", validerPanier);
document.querySelector("#nbPommes").addEventListener("input", validerPanier);
document.querySelector("#conditions").addEventListener("input", validerPanier);


_______________________________________________
function validerPanier() {
    // calcular o total de frutas
    var totalFrutas = 0;
    var inputs = document.querySelectorAll("input[id^='nb']");
    inputs.forEach(function(input) {
        var nbFrutas = input.value;
        if (nbFrutas === "") {
            nbFrutas = 0;
        } else if (nbFrutas > 24) {
            nbFrutas = 24;
        }
        var id = input.id.substring(2);
        var prix = parseInt(document.querySelector("#prix" + id).innerHTML);
        var totalFruit = nbFrutas * prix;
        document.querySelector("#" + id + " .totalFruit").innerHTML = totalFruit;
        totalFrutas += totalFruit;
    });
    document.querySelector("#total").innerHTML = totalFrutas;

    // verificar se a soma das frutas é maior que 20
    if (totalFrutas >= 20) {
        document.querySelector("#submit").disabled = false;
        document.querySelector(".error").classList.add("invisible");
    } else {
        document.querySelector("#submit").disabled = true;
        document.querySelector(".error").classList.remove("invisible");
    }
}


// Définir la classe Fruit
class Fruit {
    constructor(id, prix) {
        this.id = id;
        this.prix = prix;
    }
    getNb() {
        // Récupérer la valeur du nombre de fruits
        return parseInt(document.getElementById(this.id + "Nb").value) || 0;
    }
    setNb(nb) {
        // Mettre à jour la valeur du nombre de fruits
        document.getElementById(this.id + "Nb").value = nb;
    }
    getTotal() {
        // Calculer le sous-total pour ce type de fruits
        return this.prix * this.getNb();
    }
    setTotal(total) {
        // Mettre à jour le sous-total pour ce type de fruits
        document.getElementById(this.id).getElementsByClassName("totalFruit")[0].innerHTML = total;
    }
}

// Définir la classe Panier
class Panier {
    constructor() {
        this.peches = new Fruit("peches", 10);
        this.poires = new Fruit("poires", 12);
        this.pommes = new Fruit("pommes", 11);
    }
    getTotal() {
        // Calculer le total du panier
        return this.peches.getTotal() + this.poires.getTotal() + this.pommes.getTotal();
    }
    setTotal(total) {
        // Mettre à jour le total du panier
        document.getElementById("total").innerHTML = total;
    }
    valider() {
        // Valider les données entrées dans le formulaire selon les restrictions suivantes
        let nbTotal = this.peches.getNb() + this.poires.getNb() + this.pommes.getNb();
        if (nbTotal >= 0 && nbTotal <= 24 && this.getTotal() >= 20 && document.getElementById("conditions").checked) {
            return true;
        } else {
            document.getElementsByClassName("error")[0].style.
____________________________________________________________________

            class Fruit {
                constructor(name, price) {
                    this.name = name;
                    this.price = price;
                    this.quantity = 0;
                }

                setQuantity(quantity) {
                    if (quantity >= 0 && quantity <= 24) {
                        this.quantity = quantity;
                    } else {
                        alert(`Vous ne pouvez pas commander plus de 24 ${this.name}`);
                    }
                }

                getTotal() {
                    return this.quantity * this.price;
                }
            }

            class Basket {
                constructor(minValue = 20) {
                    this.fruits = [];
                    this.minValue = minValue;
                }

                addFruit(fruit) {
                    this.fruits.push(fruit);
                }

                getTotal() {
                    let total = 0;
                    for (const fruit of this.fruits) {
                        total += fruit.getTotal();
                    }
                    return total;
                }

                isValid() {
                    return this.getTotal() >= this.minValue;
                }
            }

            const basket = new Basket();

            basket.addFruit(new Fruit("peaches", 10));
            basket.addFruit(new Fruit("pears", 12));
            basket.addFruit(new Fruit("apples", 11));

            const submitButton = document.getElementById("submit");
            const resetButton = document.getElementById("reset");
            const conditionsCheckbox = document.getElementById("conditions");
            const errorMessage = document.querySelector(".error");

            for (const fruit of basket.fruits) {
                const input = document.getElementById(`nb${fruit.name}`);
                input.value = 0;
                input.addEventListener("change", function() {
                    fruit.setQuantity(this.value);
                    updateTotal();
                });
            }

            conditionsCheckbox.addEventListener("change", function() {
                submitButton.disabled = !this.checked;
            });

            submitButton.addEventListener("click", function() {
                if (!basket.isValid()) {
                    errorMessage.classList.remove("invisible");
                } else {
                    form.submit();
                }
            });

            resetButton.addEventListener("click", function() {
                errorMessage.classList.add("invisible");
            });

            function updateTotal() {
                const total = basket.getTotal();
                document.getElementById("total").innerHTML = total;
                if (total < 20) {
                    errorMessage.classList.remove("invisible");
                } else {
                    errorMessage.classList.add("invisible");
                }
            }

            updateTotal();

 */