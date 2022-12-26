#!/usr/bin/env node
import readlineSync from 'readline-sync';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

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
    let wrongAnsw = '';
    if (answer === 'yes') {
      wrongAnsw = 'no';
    } else {
      wrongAnsw = 'yes';
    }
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      wrongAnswer(name, answer, wrongAnsw);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
game();
