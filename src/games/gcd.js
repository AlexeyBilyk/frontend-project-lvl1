#!/usr/bin/env node
import {
  sayHello, rndNum, getAnswer, wrongAnswer, getCorrectGCD,
} from '../index.js';

export const game = () => {
  const name = sayHello();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = rndNum(1, 100);
    const secondNumber = rndNum(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = getAnswer(question);
    const correctAnswer = getCorrectGCD(firstNumber, secondNumber);

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
