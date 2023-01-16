#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const getCorrectGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getCorrectGCD(secondNumber, firstNumber % secondNumber);
};

const runGCDgame = () => {
  const terms = 'Find the greatest common divisor of given numbers.';
  const generateRound = () => {
    const firstNumber = getRandomInRange(1, 100);
    const secondNumber = getRandomInRange(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = getCorrectGCD(firstNumber, secondNumber).toString();

    return [question, correctAnswer];
  };
  engine(terms, generateRound);
};
export default runGCDgame;
