import readlineSync from 'readline-sync';

const numberOfRounds = 3;
// eslint-disable-next-line consistent-return
const runGeneralLogic = (generateExpression, basicQuestion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(basicQuestion);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = generateExpression();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'. 
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGeneralLogic;
