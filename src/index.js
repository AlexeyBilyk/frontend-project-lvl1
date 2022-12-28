import readlineSync from 'readline-sync';

export const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const rndNum = (min, max) => {
  const number = Math.round(Math.random() * (max - min)) + min;
  return number;
};

export const getAnswer = (number) => {
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  return answer;
};

export const wrongAnswer = (name, answerWr, answerCor) => {
  console.log(`'${answerWr}' is wrong answer ;(. Correct answer was '${answerCor}'. Let's try again, ${name}!`);
};
