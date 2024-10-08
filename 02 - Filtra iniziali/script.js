/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

/** 
*
*@param {Array} an array of names
*@param {string} a letter of the alphabet
*
 */
// Dichiara la funzione qui.
function newNameArr(arr, latter) {
    let newNames = [];

    for (let i = 0; i < arr.length; i++) {
        let nameElement = arr[i];
        if (nameElement[0] === latter) {
            newNames.push(arr[i]);
        }
    }

    return newNames;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(newNameArr(names, 'L'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

/* let latter = 'L'
let newArrNames = [];

for (let i = 0; i < names.length; i++) {
    let name = names[i].split('').join('');
    if (name[0] === latter) {
        newArrNames.push(name);
    }
}

console.log(newArrNames);  */