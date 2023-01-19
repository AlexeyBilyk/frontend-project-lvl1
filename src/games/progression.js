import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const progression = (firstNumber, progressionStep, arrayLength) => {
  const array = Array(arrayLength).map((_, y) => y);
  array[0] = firstNumber;
  for (let u = 1; u < arrayLength + 1; u += 1) {
    array[u] = array[u - 1] + progressionStep;
  }

  return array;
};

const runProgressionGame = () => {
  const terms = 'What number is missing in the progression?';
  const generateRound = () => {
    const arrayLength = getRandomInRange(5, 10);
    const firstNumber = getRandomInRange(1, 100);
    const progressionStep = getRandomInRange(1, 8);
    const array = progression(firstNumber, progressionStep, arrayLength);

    const correctAnswerIndex = getRandomInRange(1, arrayLength - 1);
    const correctAnswer = array[correctAnswerIndex].toString();
    array[correctAnswerIndex] = '..';
    const question = array.join(' ');

    return [question, correctAnswer];
  };

  engine(terms, generateRound);
};
export default runProgressionGame;
