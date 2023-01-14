import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getCorrectGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return getCorrectGCD(secondNumber, firstNumber % secondNumber);
};

export const engine = (terms, getAnswer) => {
  const name = welcome();
  console.log(terms);

  let round = 1;
  const roundsCount = 3;
  while (round <= roundsCount) {
    const [question, expectedAnswer] = getAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;( Correct answer was '${expectedAnswer}'. Let's try again, ${name}!`);
      return;
    }
    round += 1;
  }
  console.log(`Congratulations, ${name}!`);
};