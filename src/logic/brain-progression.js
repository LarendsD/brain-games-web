import randomNumber from "./helpers/randomNumber.js"

const generateProgression = (firstNumber, step, length) => {
  const progression = [];
  let number = 0;
  for(let i = 0; i < length; i++) {
    number = firstNumber + (step * i);
    progression.push(number);
  }
  return progression;
}

const hideNumber = (progression, index) => {
  const result = progression.slice();;
  result[index] = '..';
  return result.join(', ');
}

export default () => {
  const length = randomNumber(5, 10);
  const firstNumber = randomNumber(0, 99);
  const step = randomNumber(1, 15);
  const hiddenIndex = randomNumber(0, length - 1);
  const progression = generateProgression(firstNumber, step, length);
  const answer = progression[hiddenIndex];
  const question = hideNumber(progression, hiddenIndex);
  return { answer, question };
}