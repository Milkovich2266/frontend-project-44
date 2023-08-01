#!/usr/bin/env node
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
const quetionDataGeneration = (expression, result) => {
  let i = 0;
  while (i < 3) {
    console.log(`'Question:' ${expression}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === result) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(
        `${yourAnswer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`
      );
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export default { welkom, printQuestionAboutTheGame, quetionDataGeneration };
