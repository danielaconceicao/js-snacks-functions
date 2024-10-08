/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

/** 
 * 
 * @param {string} str 
 * 
 */
// Dichiara la funzione qui.
function myFunction(str) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    let foundVowelArr = [];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsArr.includes(str[i])) {
            counter++;
            foundVowelArr.push(str[i]);
        }
    }
    return `${str} contiene ${counter} vocali (${foundVowelArr.join(', ')}) `;
    
}

// Invoca la funzione qui e stampa il risultato in console

console.log(myFunction(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

