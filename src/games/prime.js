#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const isPrime = (question) => {
  let correctAnswer = '';
  if (question <= 2) {
    correctAnswer = 'yes';
  }
  for (let y = 2; y < question; y += 1) {
    if (question % y === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
  return correctAnswer;
};

const runPrimeGame = () => {
  const terms = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateRound = () => {
    const question = getRandomInRange(2, 100);

    return [question, isPrime(question)];
  };

  engine(terms, generateRound);
};
export default runPrimeGame;
