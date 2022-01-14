//---------------------------
//        Exercice 31
//---------------------------
/* function sumNumber(number) {
  let result = number.toString().split('');
  let result2 = result.map(Number);
  console.log(result2);

  let reducer = (previousValue, currentValue) => previousValue + currentValue;
  return result2.reduce(reducer);
}

// Ne modifiez pas la ligne ci-dessous
let sum = sumNumber(31245);
console.log(sum); */

function sumNumber(number) {
  let digitsAsList = number.toString().split('');
  let digits = digitsAsList.map(Number);
  let sum = 0;
  for (let digit of digits) {
    sum += digit;
  }
  return sum;
}

let sum = sumNumber(31245);

//---------------------------
//        Exercice 32
//---------------------------

// Ne modifiez pas la ligne ci-dessous
let names = ['Pierre', 'Marie', 'Julie', 'Adrien', 'Julie'];

// Écrivez votre code ci-dessous

let names_replaced;
names_replaced = names.map((x) => x.replace('Julie', 'Julien'));

//console.log(names_replaced);

//---------------------------
//Solution alternative sans map()
//---------------------------

/* let names = ['Pierre', 'Marie', 'Julie', 'Adrien', 'Julie'];

let names_replaced = [];

for (let name of names) {
  names_replaced.push(name.replace('Julie', 'Julien'));
}
console.log(names_replaced); */

//---------------------------
//        Exercice 33
//---------------------------

//Ma solution
let numbers = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10];
let numbersWithoutDuplicates = [];
numbersWithoutDuplicates.push(...new Set(numbers));

//console.log(numbersWithoutDuplicates);

//Solution sur Udemy
/* let numbers = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10];
let numbersWithoutDuplicates = [];

for (let number of numbers) {
  if (numbersWithoutDuplicates.indexOf(number) === -1) {
    numbersWithoutDuplicates.push(number);
  }
} 
console.log(numbersWithoutDuplicates);*/

//---------------------------
//        Exercice 34
//---------------------------

function length(item) {
  let total = 0;
  for (let char of item) {
    total++;
  }
  return total;
}

// Ne modifiez pas la ligne ci-dessous
let longueurChaine = length('JavaScript');
console.log(longueurChaine);
