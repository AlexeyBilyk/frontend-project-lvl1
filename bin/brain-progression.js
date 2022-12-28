#!/usr/bin/env node
import {
  sayHello, rndNum, getAnswer, wrongAnswer,
} from '../src/index.js';

const game = () => {
  const name = sayHello();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arrayLength = rndNum(5, 10);
    // const array = Array.from({length: arrayLength});
    const array = Array(arrayLength).map((_, i) => i);

    array[0] = rndNum(1, 100);
    const progression = rndNum(1, 5);
    for (let i = 1; i < arrayLength; i += 1) {
      array[i] = array[i - 1] + progression;
    }

    const correctAnswerIndex = rndNum(1, arrayLength);
    const correctAnswer = array[correctAnswerIndex];
    array[correctAnswerIndex] = '..';
    const question = array.join(' ');
    const answer = getAnswer(question);
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
