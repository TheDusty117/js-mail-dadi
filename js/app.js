console.log("funziono!")


//creo una lista di email fittizie con un ARRAY

const arrayMail = ['walterwhite@meth.com','gusfring@cartel.com','jessepinkman@science.com','saulgoodman@law.com']
console.log(arrayMail)

console.log(arrayMail.length)





//creo un PROMPT che chiede la mail all' UTENTE

const insertMail = prompt('enter your email pal')
console.log(insertMail)



// il risultato inserito dall'utente nel prompt deve essere CONTROLLATO rispetto alle mail dell'Array e andra' a finire
// negli ARRAY  in base al RISULTATO

let mailTrovata = false

for (i = 0; i < arrayMail.length; i++) {
  console.log(arrayMail[i])
  if (arrayMail[i] === insertMail) {
    mailTrovata = true
    console.log(mailTrovata, "ho trovato")
    
  } 
}
console.log(mailTrovata)





//il for qui sopra non ha bisogno di un'ulteriore else con mailtrovata = false, perche gia la condizione iniziale di mailTrovata
// che posso trovare a riga 25 (fuori dal for), possiede gia' la condizione di false di BASE, quindi riscriverla dentro il FOR
// creerebbe solamente un bug, ed anche una ripetizione inutile del suo valore gia' di base fuori dal FOR..!!!!!
