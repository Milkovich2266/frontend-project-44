#!/usr/bin/env node
import {
  welkom,
  printQuestionAboutTheGame,
  quetionDataGeneration,
} from '../index.js';

const startBrainCalc = () => {
  welkom();

  const question = 'What is the result of the expression?';
  printQuestionAboutTheGame(question);

  const mathOperation = ['+', '-', '*'];
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const randomMathOperation = mathOperation[Math.floor(Math.random(0, 2) * 3)];
  const expression = `${firstNumber} ${randomMathOperation} ${secondNumber}`;

  let result;
  const answer = () => {
    switch (randomMathOperation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      default:
        result = firstNumber * secondNumber;
        break;
    }
  };
  answer(randomMathOperation);

  quetionDataGeneration(expression, result);
};

export default startBrainCalc;
