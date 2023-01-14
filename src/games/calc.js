#!/usr/bin/env node
import { getRandomInRange } from '../utils.js';
import { engine } from '../index.js';

const runCalcGame = () => {
  const terms = 'What is the result of the expression?';

  const getAnswer = () => {
  const firstNumber = getRandomInRange(1, 100);
  const secondNumber = getRandomInRange(1, 100);
  const operators = ['+', '-', '*'];
  const operatorInd = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorInd];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let correctAnswer = 0;
  if (operatorInd === 0) {
    correctAnswer = firstNumber + secondNumber;
  } else if (operatorInd === 1) {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }
    return [question, correctAnswer.toString()];
  }
  engine(terms, getAnswer);
};
export default runCalcGame;
