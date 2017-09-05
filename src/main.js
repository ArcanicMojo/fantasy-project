
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

    // Construction du deck
    var deck = [];

    for(var i in deckInit) {
        var carteJson = deckInit[i];
        var nouvelleCarte = {
            "clan": carteJson.clan,
            "effet": carteJson.effet,
            "id" : carteJson.id,
            "isHidden": true
        };
        deck.push(nouvelleCarte);
    }
    melangerPaquet(deck);

    // Initialisation du plateau

    var plateau = {
        deck: deck
    }

    for(var i in deckInit) {
        $("#zoneDeck").append(
            '<span class="">'
            + plateau.deck[i].id
            + ' </span>'
        );
    }

     var piocherCartes = function(nombreCartes) {
        var cartesPiochees = [];
        if (nombreCartes > this.deck.size) {
            for (var i = 0; i < nombreCartes; i++) {
                cartesPiochees.push(this.deck.pop);
            }
        } else {
            cartesPiochees.push(this.deck);
            this.deck = [];
        }
        return cartesPiochees;
    }



})



