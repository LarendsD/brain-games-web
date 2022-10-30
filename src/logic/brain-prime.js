import randomNumber from "./helpers/randomNumber.js"

const isPrime = (number) => {
  for(let del = 2; del < number/2; del++) {
    if (number % del === 0) {
      return false;
    };
  };
  return true;
};

export default () => {
  const question = randomNumber(0, 99);
  const answer = isPrime(question) ? 'Yes' : 'No';
  return { answer, question };
}