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
  for (let i = 0; i < 9; i++) {
    console.log(i + mot.match(/[a-z A-Z]/g).slice(0, 1));
  }
}
showIndividualLetters('JavaScript');
