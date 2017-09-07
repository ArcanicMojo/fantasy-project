
$(function(){
    var melangerPaquet = function(paquet){
        for (var i = paquet.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = paquet[i];
            paquet[i] = paquet[j];
            paquet[j] = temp;
        }
        return paquet;
    }


    var deplacerCartes = function(paquetDepart, paquetArrivee, cartes){
        for(var i in cartes){
            var carte = cartes[i];
            var carteTrouvee = false;
            var cpt = 0;
            while(carteTrouvee){
                if(paquetDepart[cpt] === carte.id){
                    carteTrouvee = true;
                    paquetDepart.splice(cpt, 1);
                    paquetArrivee.push(carte);
                }
                cpt++;
            }
        }
        return {
            paquetDepart : paquetDepart,
            paquetArrivee : paquetArrivee
        }
    }

    // Construction du deck
    const deck = {
        paquet : [],
        initialisationPaquet: function(deckInit){
            for(var i in deckInit) {
                var carteJson = deckInit[i];
                var nouvelleCarte = {
                    "clan": carteJson.clan,
                    "effet": carteJson.effet,
                    "id" : carteJson.id,
                    "isHidden": true
                };
                this.paquet.push(nouvelleCarte);
            }
            melangerPaquet(this.paquet);
        },
        piocherCartes : function(nombreCartes) {
            var cartesPiochees = [];
            if (nombreCartes < this.paquet.length) {
                for (var i = 0; i < nombreCartes; i++) {
                    cartesPiochees.push(this.paquet.pop());
                }
            } else {
                cartesPiochees.push(this.paquet);
                this.paquet = [];
            }
            return cartesPiochees;
        }
    };

    deck.initialisationPaquet(deckInit);

    // Initialisation du plateau

    var plateau = {
        deck: deck
    }


    // Initialisation des joueurs
    const joueur1 = {
        id : "joueur1",
        village: [],
        main: deck.piocherCartes(5)
    }

    const joueur2 = {
        id : "joueur2",
        village: [],
        main: deck.piocherCartes(5)
    }

    const joueur3 = {
        id : "joueur3",
        village: [],
        main: deck.piocherCartes(5)
    }

    const joueur4 = {
        id : "joueur4",
        village: [],
        main: deck.piocherCartes(5)
    }


    for(var i in deck.paquet) {
        $("#zoneDeck").append(
            '<span class="">'
            + deck.paquet[i].id
            + ' </span>'
        );
    }

    for(var i in joueur1.main) {
        $("#mainJoueur1").append(
            '<span class="">'
            + joueur1.main[i].id
            + ' </span>'
        );
    }
    for(var i in joueur2.main) {
        $("#mainJoueur2").append(
            '<span class="">'
            + joueur2.main[i].id
            + ' </span>'
        );
    }
    for(var i in joueur3.main) {
        $("#mainJoueur3").append(
            '<span class="">'
            + joueur3.main[i].id
            + ' </span>'
        );
    }
    for(var i in joueur4.main) {
        $("#mainJoueur4").append(
            '<span class="">'
            + joueur4.main[i].id
            + ' </span>'
        );
    }



})



