function sumNumber(number) {
  let result = number.toString().split('');
  result.forEach((e) => console.log(e));

  /* let reducer = (previousValue, currentVallue) => previousValue + currentVallue;
  console.log(result.reduce(reducer)); */
}

// Ne modifiez pas la ligne ci-dessous
let sum = sumNumber(31245);

/* for (i = 0; i < result.length; i++) {
    console.log([i]);
  }
  console.log(result); */
