//---------------------------
// Permet de changer une chaine de caractère en tableau (.split(, )) ensuite de le trier (avec .sort()) et de le remettre en chaine de caractère avec (.join(', ))
//---------------------------
/* // Ne changez pas cette ligne
let s = 'Jacques, Marie, Patrick, Serge, Anne, Pierre';
document.getElementById('title1').innerHTML = s;

// Écrivez votre code ci-dessous. Le résultat final doit être assign à la variable resultat.
let inOrder = s.split(', ').sort().join(', ');

// Vous pouvez bien entendu écrire plusieurs lignes de code (même si l'exercice peut être réalisé en une seule ligne)
let resultat = inOrder;
document.getElementById('title2').innerHTML = resultat;
// Ne touchez pas aux lignes ci-dessous
module.exports = {
  resultat: resultat,
};
 */

let s = 'Pierre, Paul, Jacques';
//console.log(s);
document.getElementById('title1').innerHTML = s;

let inOrder = s.split(', '); // Transforme la chaine de caractère en tableau [array]
//console.log(inOrder);
let inOrder2 = inOrder.sort(); // Range dans l'ordre alphabétique le tableau
//console.log(inOrder2);
let inOrder3 = inOrder2.join(', '); // Reviens sous forme de chaine de caractère dans l'ordre alphabétique, ne pas oublier l'espace après la virgule pour que les mots soient séparés
//console.log(inOrder3);
document.getElementById('title2').innerHTML = inOrder3;

//---------------------------
//        Exercice 9
//---------------------------

let rayon = 10.0;
let puissance = Math.pow(10.0, 3);
document.getElementById('calcule_rayon').innerHTML = 'Ceci est le résultat de <strong>10³</strong> qui est égal à : ' + puissance + `. Et qui s'écrit "<em>let puissance = Math.pow(10.0, 3)"</em>`;

let calc = (4 / 3) * 3.14159265359 * puissance; // Autre alernative au calcule : let calc = (4/3) * Math.PI * Math.pow(rayon, 3);
//console.log(calc);
document.getElementById('calcule').innerHTML = `Ceci est le résultat de l'opération <strong>let calc = (4 / 3) x 3.14159265359 x 10³</strong> = <em>${calc}</em>`;

let result = calc.toFixed(4);
//console.log(result);
document.getElementById(
  'result'
).innerHTML = `Résultat à 4 chiffres après la virgule et en chaîne de caractère grâce à la méthode <strong>Number.tofixed()</strong>, en faisant " <em>let result = calc.toFixed(4) = ${result}</em> "  `;
document.getElementById('result2').innerHTML = '' + result + ' / On obtient bien une chaine de caratère dans la console';

//---------------------------
let calc2 = (4 / 3) * Math.PI * Math.pow(rayon, 3);
//console.log(calc2);
document.getElementById(
  'alternative_result'
).innerHTML = `On peut également obtenir le même résultat avec une opération plus courte, exemple : " <em>let calc2 = (4 / 3) * Math.PI * Math.pow(rayon, 3)</em> " = ${calc2}`;
//---------------------------

//---------------------------
//        Exercice 10
//---------------------------

function test() {
  let a = 12;
  // Écrivez votre code après cette ligne
  if (a > 10) {
    // console.log('a est plus grand que 10');
  }
}

// Ne modifiez pas le code après cette ligne
test();

//---------------------------
//        Exercice 11
//---------------------------

// Ne modifiez pas cette ligne
let start = 1;
let end = 10;

let nombres = [];

// Écrivez votre code ci-dessous

do {
  nombres.push(start);
  start += 1;
} while (start <= end);

//console.log(nombres);
//-----------------
//Deuxième méthodes
//-----------------
let start2 = 1;
let end2 = 10;

let nombres2 = [];

for (let i = start2; i <= end2; i++) {
  nombres2.push(i);
}
//console.log(nombres2);

//---------------------------
//        Exercice 12
//---------------------------

// Ne modifiez pas les lignes ci-dessous
let nombres3 = [];

// Écrivez votre code ci-dessous

let start3 = 2;
let end3 = 100;
for (let i = start3; i <= end3; i += 2) {
  nombres3.push(i);
}
//console.log(nombres3);
//-----------------
//Deuxième méthodes
//-----------------
let nombres4 = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    nombres4.push(i);
  }
}
//console.log(nombres4);

//---------------------------
//        Exercice 13
//---------------------------
function getDiceInteger() {
  // Écris ton code ici
  return Math.floor(Math.random() * 6) + 1;
}

function rollTheDices() {
  // Écris ton code ici
  for (let i = 0; i < 6; i++) {
    //console.log(getDiceInteger()); // Grâce à la boucle for, ça nous permet de lancer 6 lancés de dés
  }
}

rollTheDices();

//---------------------------
//Pratique sur le site
//---------------------------

let button = document.getElementById('btn-dice');

button.addEventListener('click', function () {
  let rollDice = Math.ceil(Math.random() * 6);
  document.getElementById('result-dice').innerHTML = ` = ${rollDice}`;
});
let rollDice = Math.ceil(Math.random() * 6);
//console.log(rollDice);

//---------------------------
//        Exercice 14
//---------------------------

function countLetters(letter, word) {
  // Écrivez votre code ici
  return word.split('o').length - 1;
}

// Ne modifiez pas la ligne ci-dessous
let resultat = countLetters('o', 'Bonjour tout le monde !');

//---------------------------
//Autre méthode
//---------------------------

function countLetters2(letter, word) {
  // Écrivez votre code ici
  let counter = 0;
  for (each_letter of word) {
    if (each_letter === letter) {
      counter++;
    }
  }
  return counter;
}
let resultat2 = countLetters('o', 'Bonjour tout le monde !');
//console.log(resultat2);

//---------------------------
//        Exercice 16
//---------------------------
let prenoms = ['Pierre', 'Paul', 'Marie'];
let resultat3 = prenoms[0];
//console.log(resultat3);

//---------------------------
//        Exercice 17
//---------------------------

let prenoms2 = ['Pierre', 'Paul', 'Marie'];

let premier = prenoms2[0];
let dernier = prenoms2[2]; // ou [prenoms.length - 1];

let deux_premiers = prenoms2.slice(0, 2);
//console.log(deux_premiers);
let deux_derniers = prenoms2.slice(1, 3);
//console.log(deux_derniers);

//---------------------------
//        Exercice 18
//---------------------------

let counter = 0;
for (let i = 0; i < 10; i++) {
  counter++;
}
//console.log(counter);

//---------------------------
//        Exercice 19
//---------------------------
//Ymedu

function reverseWord(word) {
  let word2 = word.split('').reverse();
  word2.splice(0, 1, 'Y');
  word2.splice(4, 1, 'u');
  let word3 = word2.join('');
  return word3;
}

let resultat4 = reverseWord('Udemy');

//---------------------------
//Autre méthode
//---------------------------

function reverseWord(word1) {
  let reverse = word1.toLowerCase().split('').reverse().join('');
  return reverse.charAt(0).toUpperCase() + reverse.slice(1);
}

let resultat5 = reverseWord('Udemy');

//---------------------------
//        Exercice 20
//---------------------------

function getExtension(filePath) {
  let extension = filePath.split('.').pop();
  return extension;
}

// Ne touchez pas la ligne ci-dessous
let resultat6 = getExtension('C:/Users/thibh/application.exe');

//---------------------------
//        Exercice 21
//---------------------------

function shuffleWord(word) {
  let word4 = word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
    .toLowerCase();
  return word4.charAt().toUpperCase() + word4.slice(1);
}

// Ne modifiez pas la ligne ci-dessous
let resultat7 = shuffleWord('Bonjour');
//console.log(resultat7);

//---------------------------
//Autre méthode
//---------------------------

/* function capitalizeFirstLetter([first, ...rest]) {
  return [first.toUpperCase(), ...rest].join('');
}

let rezzd = capitalizeFirstLetter('hello');
console.log(rezzd);
 */

//---------------------------
//        Exercice 22
//---------------------------

function getTotalSalaries(employes) {
  let employes2 = employes.Pierre + employes.Marie + employes.Julien;
  return employes2;
}

// Ne modifiez pas les lignes ci-dessous
let employes = {
  Pierre: 2500,
  Marie: 5000,
  Julien: 1200,
};

let resultat8 = getTotalSalaries(employes);
//console.log(resultat8);

//---------------------------
//Autre méthode
//---------------------------

function getTotalSalaries2(employes2) {
  let total = 0;
  for (let key in employes2) {
    let value = employes2[key];
    total += value;
  }
  return total;
}

let employes2 = {
  Pierre: 2500,
  Marie: 5000,
  Julien: 1200,
  Alexandra: 6000,
  Arnaud: 5000,
  Jean_miche_muche: 10000,
  Denis: 3456,
};

let resultat9 = getTotalSalaries2(employes2);
//console.log(resultat9);

// Mise en page HTMl de l'exercice 22

let tab = employes2;
let tableau = (document.getElementById('tab').innerHTML = `
<table>
<tr>
<td id="nom">Nom</td>
<td id="salaire">Salaire</td>
</tr>
<tr>
<td>Pierre</td>
<td>2500</td>
</tr>
<tr>
<td>Marie</td>
<td>5000</td>
</tr>
<tr>
<td>Julien</td>
<td>1200</td>
</tr>
<tr>
<td>Alexandra</td>
<td>6000</td>
</tr>
<tr>
<td>Arnaud</td>
<td>5000</td>
</tr>
<tr>
<td>Jean_michel_caméra</td>
<td>2</td>
</tr>
<tr>
<td>Denis</td>
<td>3456</td>
</tr>
<tr>
<td>Total</td>
<td>${resultat9}</td>
</tr>
</table>`);

let click = document.querySelectorAll('tr');

for (let td of click) {
  td.addEventListener('click', function () {
    this.classList.toggle('gris');
  });
}
//---------------------------
//        Exercice 23
//---------------------------
const animaux = ['Perroquet', 'Cheval', 'Coq', 'Poule', 'Mouflon', 'Baleine', 'Lièvre', 'Baleine', 'Requin', 'Tigre'];

const result_animaux = animaux.filter((animaux) => animaux.length > 5).join(', ');
//console.log(result_animaux);

document.getElementById('animaux').innerHTML = `${result_animaux}`;

//---------------------------
//        Exercice 24
//---------------------------

/* function filter2() {
  let filter3 = prenoms10.join(' ').replace(/[0-9]/g, '').split(' ');
  console.log(filter3);
  resultat10.push(filter3);
  return filter3;
}
filter2(); solution maison */

// Ne modifiez pas ces lignes
const prenoms10 = ['Jul2ien', 'P1ierre', 'Pau23line', 'Patrick88', 'Arn456aud'];
let resultat10 = [];

for (let prenom of prenoms10) {
  let fix = prenom.replace(/[0-9]/g, '');
  resultat10.push(fix);
}

document.getElementById('result24').innerHTML = `<br> Voici le résultat de ce bout de code : ${resultat10.join(', ')} <br> <br>
 "Arnaud" n'apparaît pas sur le tableau initiale, j'ai juste testé mon code en rajoutant   
 'Arn456aud' à la "const prenoms" <br>
On s'appercoit que le prénom Arnaud est bien en entier et non avec des chiffres. <br><br>
L'instruction "for...of" permet de créer une boucle [Array], qui parcourt un objet itérable (répéter la même action). `;

//---------------------------
//        Exercice 25
//---------------------------

const prenom3 = 'Patrick';
const age = '53';
const moneyAccount01 = '10293';
const moneyAccount02 = '392011';

let account = parseInt(moneyAccount01);
let account2 = parseInt(moneyAccount02);

let presentation = `Bonjour, je m'appelle ${prenom3} et j'ai ${age} ans. J'ai actuellement ${account + account2}$ dans mes comptes en banque.`;
document.getElementById('result25').innerHTML = `${presentation}`;

/* let presentation = "Bonjour, je m'appelle " + prenom3 + " et j'ai " + age + " ans. J'ai actuellement " + (account + account2) + '$ dans mes comptes en banque.';

console.log(presentation); */
