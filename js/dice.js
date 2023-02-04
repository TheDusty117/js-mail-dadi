//ESERCIZIO DADI ---------------------------------


//creo due generatori di numeri randomici da 0 a 6

// si usa math floor che arrotonda, altrimenti uscirebbero tantissimi numeri decimali!!!
const numeriDaGenerarePc = Math.floor(Math.random() * 6)
console.log(numeriDaGenerarePc)

const numeriDaGenerarePlayer = Math.floor(Math.random() * 6)
console.log(numeriDaGenerarePlayer)



//decretare il vincitore in base a chi fa il punteggio piu' alto

let risultato = true
// console.log(risultato, "pc vince")
for (i = 0; i < 6; i++) {
  if (numeriDaGenerarePc < numeriDaGenerarePlayer) {
    risultato = false
    console.log(risultato, "player vince")
  } else if (numeriDaGenerarePc === numeriDaGenerarePlayer) {
    console.log(risultato, "pareggio")
  } else {
    console.log(risultato, "pc vince")
  }
  
}


// GIOCO RIUSCITO, ho creato una variabile let risultato che di base e' true,
// dentro un ciclo for ho creato invece 3 casistiche dove vince O IL PLAYER, O SI PAREGGIA OPPURE PC VINCE *VEDI CODICE PER CAPIRE*
