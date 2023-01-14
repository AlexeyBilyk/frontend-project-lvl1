#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import {
  engine,
} from '../index.js';

const runEvenGame = () => {
  const terms = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getAnswer = () => {
    const number = getRandomInRange(1, 100);
    let correctAnswer = '';
    if (number % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const question = number;

    return [question, correctAnswer];
  };
  engine(terms, getAnswer);
};
export default runEvenGame;
