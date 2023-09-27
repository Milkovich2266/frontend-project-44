import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'What is the result of the expression?';

const getResultAndExpression = (randomMathOperation, firstNumber, secondNumber) => {
  let result;
  switch (randomMathOperation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      throw new Error(`Unknown Operator: '${randomMathOperation}'!`);
  }
  return result;
};

const getDataGame = () => {
  const mathOperation = ['+', '-', '*'];
  const firstNumber = getRandomNumbers(0, 100);
  const secondNumber = getRandomNumbers(0, 100);
  const indexForMathOperation = getRandomNumbers(0, mathOperation.length - 1);
  const randomMathOperation = mathOperation[indexForMathOperation];
  const expression = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
  const result = getResultAndExpression(randomMathOperation, firstNumber, secondNumber);
  return [expression, String(result)];
};

const startBrainCalc = () => {
  runGeneralLogic(getDataGame, basicQuestion);
};

export default startBrainCalc;
