import randomNumber from "./helpers/randomNumber.js"

const getGcd = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
}

export default () => {
  const firstNumber = randomNumber(1, 99);
  const secondNumber = randomNumber(1, 99);
  const answer = getGcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`
  return { answer, question };
}