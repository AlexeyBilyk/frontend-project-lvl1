#!/usr/bin/env node
import {
  Welcome, rndNum, getAnswer, wrongAnswer,
} from '../index.js';

const runProgressionGame = () => {
  const name = Welcome();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arrayLength = rndNum(5, 10);
    const array = Array(arrayLength).map((_, y) => y);

    array[0] = rndNum(1, 100);
    const progression = rndNum(1, 8);
    for (let u = 1; u < arrayLength + 1; u += 1) {
      array[u] = array[u - 1] + progression;
    }

    const correctAnswerIndex = rndNum(1, arrayLength - 1);
    const correctAnswer = array[correctAnswerIndex];
    array[correctAnswerIndex] = '..';
    const question = array.join(' ');
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
export default runProgressionGame;
