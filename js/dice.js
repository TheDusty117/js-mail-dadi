//ESERCIZIO DADI ---------------------------------


//creo due generatori di numeri randomici da 0 a 6


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

// PS CREARE DUE ARRAY, UNO PER PC E UNO PER IL PLAYER, e confrontare i numeri?
