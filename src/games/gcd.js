#!/usr/bin/env node
import { getRandomInRange } from '../utils.js';
import {
  getCorrectGCD, engine,
} from '../index.js';

const runGCDgame = () => {
  const terms = 'Find the greatest common divisor of given numbers.';
  const getAnswer = () => {
    const firstNumber = getRandomInRange(1, 100);
    const secondNumber = getRandomInRange(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getCorrectGCD(firstNumber, secondNumber);

    
    return [question, correctAnswer.toString()];

  }
  engine(terms, getAnswer);
};
export default runGCDgame;
