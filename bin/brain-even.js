#!/usr/bin/env node
/* eslint-disable no-restricted-globals */

// Приветствие скопировано из cli.js и brain-games.js
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

// Реализация логики Игры: "Проверка на чётность"
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// eslint-disable-next-line consistent-return
const getEvenNumber = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    // eslint-disable-next-line no-alert
    const yourAnswer = readlineSync.question('Your answer: ');
    // const yourAnswer = prompt('Your answer:');
    if (randomNumber % 2 === 0 && yourAnswer === 'yes') {
      i += 1;
      console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && yourAnswer === 'no') {
      console.log('Correct!');
      i += 1;
    } else if (yourAnswer === 'yes') {
      return console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'. 
<<<<<<< HEAD
Let's try again, ${name}!`
=======
Let's try again, ${name}`
>>>>>>> 2d5c713e803aefea3c93bfc2dd6b6b5c0ed98648
      );
    } else if (yourAnswer === 'no') {
      return console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'. 
<<<<<<< HEAD
  Let's try again, ${name}!`
=======
  Let's try again, ${name}`
>>>>>>> 2d5c713e803aefea3c93bfc2dd6b6b5c0ed98648
      );
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(.`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

getEvenNumber();
