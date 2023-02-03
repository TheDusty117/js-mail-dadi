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

let yourMail = insertMail
console.log(yourMail)

//utilizzare la Mail inserita per CONTROLLARE se e' nella lista dell'ARRAY

let mailCaseNotExisting = []
console.log(mailCaseNotExisting)

let mailCaseExisting = []
console.log(mailCaseExisting)

for (i = 0; i < arrayMail.length; i++) {

  if (mailCaseNotExisting !== arrayMail) {
    mailCaseNotExisting.push('questa mail NON esiste')
  } else {
    (mailCaseExisting === arrayMail)
    mailCaseExisting.push('questa mail esiste!')
  }
  
  console.log(mailCaseNotExisting, mailCaseExisting)

}