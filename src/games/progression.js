#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import {
  engine,
} from '../index.js';

const runProgressionGame = () => {
  const terms = 'What number is missing in the progression?';
  const getAnswer = () => {
    const arrayLength = getRandomInRange(5, 10);
    const array = Array(arrayLength).map((_, y) => y);

    array[0] = getRandomInRange(1, 100);
    const progression = getRandomInRange(1, 8);
    for (let u = 1; u < arrayLength + 1; u += 1) {
      array[u] = array[u - 1] + progression;
    }
    const correctAnswerIndex = getRandomInRange(1, arrayLength - 1);
    const correctAnswer = array[correctAnswerIndex];
    array[correctAnswerIndex] = '..';
    const question = array.join(' ');
    // const answer = getAnswer(question);

    return [question, correctAnswer.toString()];
  };
  engine(terms, getAnswer);
};
export default runProgressionGame;
