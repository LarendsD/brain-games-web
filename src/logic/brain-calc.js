import randomNumber from "./helpers/randomNumber.js"

const operators = [ '+', '-', '*' ]

const calculate = (firstOperand, operator, secondOperand) => {
  switch(operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw 'Not supported operand!'
  }
}

export default () => {
  const firstOperand = randomNumber(0, 99);
  const secondOperand = randomNumber(0, 99);
  const operator = operators[randomNumber(0, operators.length - 1)]
  const answer = calculate(firstOperand, operator, secondOperand);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  return { answer, question };
}