console.log("funziono!")


//creo una lista di email fittizie con un ARRAY

const arrayMail = ['walterwhite@meth.com','gusfring@cartel.com','jessepinkman@science.com','saulgoodman@law.com']
console.log(arrayMail)

console.log(arrayMail.length)





//creo un PROMPT che chiede la mail all' UTENTE

const insertMail = prompt('enter your email pal')
console.log(insertMail)



// il risultato inserito dall'utente nel prompt deve essere CONTROLLATO rispetto alle mail dell'Array

mailExisting = []

mailNotExisting = []

for (i = 0; i < arrayMail.length; i++) {
  console.log(arrayMail[i])
  if (arrayMail[i] === insertMail) {
    mailExisting.push("ESISTE!")
  } else {
    mailNotExisting.push("NON ESISTE!")
  }
  
}

console.log(mailExisting, mailNotExisting)

// for (let i = 0; i < arrayMail.length; i++) {

// if (insertMail === arrayMail) {
//   arrayExisting.push("esiste!")
// }

// else if (insertMail !== arrayMail) {
//   arrayNotExisting.push("non esiste!")
// }
  
// console.log(arrayExisting, arrayNotExisting)
// }


