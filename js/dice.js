//ESERCIZIO DADI ---------------------------------


//creo due generatori di numeri randomici da 0 a 6

// si usa math floor che arrotonda, altrimenti uscirebbero tantissimi numeri decimali!!!

//generatore numeri del PC
const numeriDaGenerarePc = Math.floor(Math.random() * 6)
console.log(numeriDaGenerarePc)

//generatore numeri del PLAYER
const numeriDaGenerarePlayer = Math.floor(Math.random() * 6)
console.log(numeriDaGenerarePlayer)



//decretare il vincitore in base a chi fa il punteggio piu' alto

// TRE VARIABILI CON CONDIZIONE TRUE, CHE SE VERRANNO SODDISFATTE NEL FOR PRODURRANO UN 
// CONSOLE LOG CHE DECRETERA' IL VINCITORE

let pcVince = true
let playerVince = true
let pareggio = true


// console.log(risultato, "pc vince")
for (i = 0; i < 6; i++) {
  if (numeriDaGenerarePc < numeriDaGenerarePlayer) {
    console.log(playerVince, "player vince")
  } else if (numeriDaGenerarePc === numeriDaGenerarePlayer) {
    console.log(pareggio, "pareggio")
  } else {
    console.log(pcVince, "pc vince")
  }
  
}


// GIOCO RIUSCITO, ho creato una variabile let risultato che di base e' true,
// dentro un ciclo for ho creato invece 3 casistiche dove vince O IL PLAYER, O SI PAREGGIA OPPURE PC VINCE *VEDI CODICE PER CAPIRE*
