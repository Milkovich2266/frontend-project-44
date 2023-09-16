import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'What is the result of the expression?';

const getResultAndExpression = () => {
  let result;
  const mathOperation = ['+', '-', '*'];
  const firstNumber = getRandomNumbers(0, 100);
  const secondNumber = getRandomNumbers(0, 100);
  const indexForMathOperation = getRandomNumbers(0, mathOperation.length);
  const randomMathOperation = mathOperation[indexForMathOperation];
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
  return [expression, String(result)];
};

const startBrainCalc = () => {
  getResultAndExpression();
  runGeneralLogic(getResultAndExpression, basicQuestion);
};

export default startBrainCalc;
