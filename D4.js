/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const base = 12;
  const altezza = 7;
  const a = base * altezza;
  return a;
};
console.log(area());

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (num1, num2) {
  const a = 5;
  const b = 5;
  const per = a * b;
  const somma = a + b;
  if (a === b) {
    return per;
  } else {
    return somma;
  }
};
console.log(crazySum());
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  const num4 = 19;
  const diffAss = n1 - num4;
  const diffAss2 = diffAss * 3;
  if (diffAss > num4) {
    return diffAss2;
  }
  if (diffAss < 0) {
    return -diffAss;
  }
  return diffAss;
};
console.log(crazyDiff(5));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n === 400 || (n >= 20 && n <= 100)) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (X) {
  const parola = "EPICODE";
  if (X.slice(0, 7) === parola) {
    return X;
  } else {
    return parola + " " + X;
  }
};
console.log(epify("ciao"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num6) {
  if (num6 % 3 === 0 || num6 % 7 === 0) {
    return "multiplo di 3 o 7";
  } else {
    return "non multipli di 3 o 7";
  }
};
console.log(check3and7(14));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (s) {
  const splitString = s.split("");
  ["E", "P", "I", "C", "O", "D", "E"];
  const splitString2 = splitString.reverse();
  return splitString;
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (p) {
  const maiusc = p.toUpperCase(0, 1);
  return maiusc;
};
console.log(upperFirst("ciao a tutti"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
