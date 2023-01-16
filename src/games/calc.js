#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error(`Operator '${operator}' - doesn't supported`);
  }
};

const runCalcGame = () => {
  const terms = 'What is the result of the expression?';

  const generateRound = () => {
    const firstNumber = getRandomInRange(1, 100);
    const secondNumber = getRandomInRange(1, 100);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomInRange(0, operators.length - 1)];
    const question = `${firstNumber} ${randomOperator} ${secondNumber}`;

    const correctAnswer = calculation(firstNumber, secondNumber, randomOperator).toString();
    return [question, correctAnswer];
  };
  engine(terms, generateRound);
};
export default runCalcGame;
