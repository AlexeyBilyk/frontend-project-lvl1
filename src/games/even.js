import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const runEvenGame = () => {
  const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRound = () => {
    const number = getRandomInRange(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const question = String(number);

    return [question, correctAnswer];
  };
  engine(terms, generateRound);
};
export default runEvenGame;
