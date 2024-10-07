/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

/**
 * 
 * @param {Array}  array of names
 */ 
// Dichiara la funzione qui.
function newArrOfNames(arr) {
    let newName = [];
    for (let i = 0; i < arr.length; i++) {
        let modifiedName = arr[i].split('');
        newName.push(modifiedName[0]);
    }

   return newName; 
} 

// Invoca la funzione qui e stampa il risultato in console

console.log(newArrOfNames(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

/* let novoNome = [];
for (let i = 0; i < names.length; i++) {
    let nomeModificado = names[i].split('');
    novoNome.push(nomeModificado[0]);
    console.log(novoNome);
} */

