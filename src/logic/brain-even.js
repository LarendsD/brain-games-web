import randomNumber from "./helpers/randomNumber.js"

const isEven = (number) => number % 2 === 0 ? 'Yes' : 'No';

export default () => {
  const question = randomNumber(0, 99);
  const answer = isEven(question);
  return { question, answer };
}