import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const isPrime = (question) => {
  for (let y = 2; y < question; y += 1) {
    if (question % y === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = () => {
  const terms = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateRound = () => {
    const question = getRandomInRange(2, 100).toString();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return [question, correctAnswer];
  };

  engine(terms, generateRound);
};
export default runPrimeGame;
