#!/usr/bin/env node
import {
  sayHello, rndNum, getAnswer, wrongAnswer,
} from '../src/index.js';

const getCorrectGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getCorrectGCD(secondNumber, firstNumber % secondNumber);
};
const game = () => {
  const name = sayHello();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = rndNum();
    const secondNumber = rndNum();
    const question = `${firstNumber} ${secondNumber}`;
    const answer = getAnswer(question);
    const correctAnswer = getCorrectGCD(firstNumber, secondNumber);

    if (correctAnswer == answer) {
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
game();
