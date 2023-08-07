import {
  welkom,
  printQuestionAboutTheGame,
  quetionDataGeneration,
} from '../index.js';

const startBrainCalc = () => {
  welkom();

  const basicQuestion = 'What is the result of the expression?';
  printQuestionAboutTheGame(basicQuestion);

  let result;
  const questionAndResult = [];
  const generateExpression = () => {
    const mathOperation = ['+', '-', '*'];
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const randomMathOperation =
      mathOperation[Math.floor(Math.random(0, 2) * 3)];
    const expression = `${firstNumber} ${randomMathOperation} ${secondNumber}`;

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
    questionAndResult[0] = expression;
    questionAndResult[1] = result;
    return questionAndResult;
  };

  quetionDataGeneration(generateExpression);
};

export default startBrainCalc;
