import readlineSync from 'readline-sync';

// Общее приветствие
let name = 'user';
const welkom = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// Главный вопрос в игре
const printQuestionAboutTheGame = (questionGame) => {
  console.log(questionGame);
};

// Главный цикл в игре
// eslint-disable-next-line consistent-return
const quetionDataGeneration = (generateExpression, questionAndResult) => {
  let i = 0;
  while (i < 3) {
    console.log(`'Question:' ${questionAndResult[0]}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === String(questionAndResult[1])) {
      console.log('Correct!');
      i += 1;
      generateExpression();
    } else {
      return console.log(
        `${yourAnswer} is wrong answer ;(. Correct answer was ${questionAndResult[1]}. 
Let's try again, ${name}!`
      );
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { welkom, printQuestionAboutTheGame, quetionDataGeneration };
