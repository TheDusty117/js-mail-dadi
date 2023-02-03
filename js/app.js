console.log("funziono!")


//creo una lista di email fittizie con un ARRAY

const arrayMail = ['walterwhite@meth.com','gusfring@cartel.com','jessepinkman@science.com','saulgoodman@law.com']
console.log(arrayMail)

console.log(arrayMail.length)

let mailWalter = arrayMail[0]
console.log(mailWalter)

let mailGus = arrayMail[1]
console.log(mailGus)

let mailJesse = arrayMail[2]
console.log(mailJesse)

let mailSaul = arrayMail[3]
console.log(mailSaul)


//creo un PROMPT che chiede la mail all' UTENTE

const insertMail = prompt('enter your email pal')
console.log(insertMail)


//controllo della mail inserita rispetto a quelle dell'ARRAY precedente

if (insertMail === arrayMail) {
  alert("la mail esiste!")
} else {
  alert("la mail non esiste!")
  console.log(insertMail)
}


