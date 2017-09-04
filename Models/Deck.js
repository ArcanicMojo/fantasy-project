
class Deck{
    constructor(){
        this.deck = [];
        var initFromJson = JSON.parse("../data/InitDeck.json");

        initFromJson.forEach(function(carteJson) {
            var nouvelleCarte = new Carte(carteJson.clan, carteJson.effet);
            this.deck.push(nouvelleCarte);
        })
    }

    static piocherCartes(nombreCartes) {
        var cartesPiochees = [];
        if(nombreCartes > this.deck.size) {
            for (var i = 0; i < nombreCartes; i++) {
                cartesPiochees.push(this.deck.pop);
            }
        }else{
            cartesPiochees.push(this.deck);
        }
        return cartesPiochees;
    }
}

