#!/usr/bin/env node
import {
    sayHello, rndNum, getAnswer, wrongAnswer,
  } from '../index.js';
  
  export const game = () => {
    const name = sayHello();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
      const number = rndNum(1, 100);
      const answer = getAnswer(number);
      let corrAnswer = '';
      let wrongAnsw = '';
      if (number % 2 === 0) {
        corrAnswer = 'yes';
        wrongAnsw = 'no';
      } else {
        corrAnswer = 'no';
        wrongAnsw = 'yes';
      }
      if (answer === corrAnswer) {
        console.log('Correct!');
      } else {
        wrongAnswer(name, answer, corrAnswer);
        break;
      }
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    }
  };