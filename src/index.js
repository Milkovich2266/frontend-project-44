import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
const questionDataGeneration = (generateExpression, basicQuestion) => {
  let name = 'user';
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(basicQuestion);

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i++) {
    const [question, answer] = generateExpression();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'. 
Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default questionDataGeneration;
