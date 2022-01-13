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

//Solution alternative sans map()

/* let names_replaced = [];
for (let name of names) {
    names_replaced.push(name.replace('Julie', 'Julien'));
}
console.log(names_replaced); */

//Solution alternative sans map()

let names = ['Pierre', 'Marie', 'Julie', 'Adrien', 'Julie'];

let names_replaced = [];

for (let name of names) {
  names_replaced.push(name.replace('Julie', 'Julien'));
}
console.log(names_replaced);
