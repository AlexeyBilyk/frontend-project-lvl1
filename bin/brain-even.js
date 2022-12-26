#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/index.js';

export const num = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};

export const getAnswer = (number) => {
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  return answer;
};

export const wrongAnswer = (name, answerWr, answerCor) => {
  console.log(`'${answerWr}' is wrong answer ;(. Correct answer was '${answerCor}'. Let's try again, ${name}!`);
};

export const game = () => {
  const name = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = num();
    const answer = getAnswer(number);
    let corrAnswer = '';
    let wrongAnsw = '';
    if (number % 2 === 0){
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
game();
