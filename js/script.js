// inizializzazione delle variabili
const btnStart = document.getElementById("start_game");
const arraySimonSaysFiveNum = createArrayNumRandom ();
// Visualizzare in pagina 5 numeri casuali.

let elSimonSays = document.getElementById("simon_says");

elSimonSays.innerHTML = arraySimonSaysFiveNum;





// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONI
// funzione per creare un array di 5 numeri casuali da 1 a 100
function createArrayNumRandom () {
    const arrayNumRandom = [];
    for ( let i = 0; i < 5; i++ )  {
        

        let numRandom = Math.floor((Math.random() * 100 ) + 1);
        arrayNumRandom.push(numRandom);
    
    }
    
    return arrayNumRandom
}