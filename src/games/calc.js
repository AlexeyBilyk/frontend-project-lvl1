#!/usr/bin/env node
import {
  sayHello, rndNum, getAnswer, wrongAnswer,
} from '../index.js';

export const game = () => {
  const name = sayHello();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = rndNum(1, 100);
    const secondNumber = rndNum(1, 100);
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
    const answer = getAnswer(question);
    if (correctAnswer.toString() === answer.toString()) {
      console.log('Correct!');
    } else {
      wrongAnswer(name, answer, correctAnswer);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
