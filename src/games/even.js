#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const isEven = (randomNumber) => {
  let correctAnswer = '';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const runEvenGame = () => {
  const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRound = () => {
    const number = getRandomInRange(1, 100);
    const correctAnswer = isEven(number);
    const question = number;

    return [question, correctAnswer];
  };
  engine(terms, generateRound);
};
export default runEvenGame;
