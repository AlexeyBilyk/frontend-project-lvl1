#!/usr/bin/env node
import {
    sayHello, rndNum, getAnswer, wrongAnswer,
  } from '../index.js';
  
  export const game = () => {
    const name = sayHello();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
      const number = rndNum(1, 100);
      const answer = getAnswer(number);
      let corrAnswer = '';
      let wrongAnsw = '';
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          corrAnswer = 'no';
          wrongAnsw = 'yes';
          break;
        } else {
          corrAnswer = 'yes';
          wrongAnsw = 'no';
        }
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