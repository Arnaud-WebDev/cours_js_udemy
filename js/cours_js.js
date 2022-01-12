//---------------------------
//        Exercice 26
//---------------------------

// Ne modifiez pas ces lignes
const a = 4;
const b = 6;
const c = 2;

// Début de l'exercice
const r1 = Math.min(a, b, c);
const r3 = Math.max(a, b, c);
const r2 = a + b + c - r1 - r3;

//---------------------------
//        Exercice 27
//---------------------------

let i = 50;

while (i > 10) {
  i--;
}

const exercice_reussi = true;

//console.log(i);

//---------------------------
//        Exercice 28
//---------------------------

function showIndividualLetters(mot) {
  for (let i = 0; i < mot.length; i++) {
    //console.log(mot[i]);
  }
}
showIndividualLetters('JavaScript');

//---------------------------
//        Exercice 29
//---------------------------

/* function compareStrings(s1, s2) {
  if (s1 === s2) {
    return true;
  } else {
    return false;
  }
}                                                     // Solution trouvé par moi même !

// Ne modifiez pas les lignes ci-dessous
let firstCheck = compareStrings('Hello world', 'Hello world');
let secondCheck = compareStrings('Hello world', 'Goodbye world');

console.log(firstCheck);
console.log(secondCheck);
 */

function compareStrings(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  for (let i = 0; i < s1.length; i++) {
    let char1 = s1[i];
    let char2 = s2[i];
    if (char1 !== char2) {
      return false;
    }
  }
  return true;
}

// Ne modifiez pas les lignes ci-dessous
let firstCheck = compareStrings('Hello world', 'Hello world');
let secondCheck = compareStrings('Hello world', 'Goodbye world');
/* console.log(firstCheck);
console.log(secondCheck); */

//---------------------------
//        Exercice 30
//---------------------------
function multiplicationTable(number) {
  for (i = 0; i <= 10; i++) {
    let result = i * number;
    console.log(`${i} x ${number} = ${result}`);
  }
}

// Ne modifiez pas le code ci-dessous
multiplicationTable(4);
