#!/usr/bin/env node
import getRandomInRange from '../utils.js';
import { engine } from '../index.js';

const progression = (arrayLength, progressionStep) => {
  const array = Array(arrayLength).map((_, y) => y);
  array[0] = getRandomInRange(1, 100);
  for (let u = 1; u < arrayLength + 1; u += 1) {
    array[u] = array[u - 1] + progressionStep;
  }
  const correctAnswerIndex = getRandomInRange(1, arrayLength - 1);
  const correctAnswer = array[correctAnswerIndex].toString();
  array[correctAnswerIndex] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => {
  const terms = 'What number is missing in the progression?';
  const generateRound = () => {
    const arrayLength = getRandomInRange(5, 10);
    const progressionStep = getRandomInRange(1, 8);

    return progression(arrayLength, progressionStep);
  };

  engine(terms, generateRound);
};
export default runProgressionGame;
