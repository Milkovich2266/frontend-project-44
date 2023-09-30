import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'What is the result of the expression?';

const calcExpression = (randomMathOperation, firstNumber, secondNumber) => {
  switch (randomMathOperation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown Operator: '${randomMathOperation}'!`);
  }
};

const getGameData = () => {
  const mathOperation = ['+', '-', '*'];
  const firstNumber = getRandomNumbers(0, 100);
  const secondNumber = getRandomNumbers(0, 100);
  const indexForMathOperation = getRandomNumbers(0, mathOperation.length - 1);
  const randomMathOperation = mathOperation[indexForMathOperation];
  const expression = `${firstNumber} ${randomMathOperation} ${secondNumber}`;
  const result = calcExpression(randomMathOperation, firstNumber, secondNumber);
  return [expression, String(result)];
};

const startBrainCalc = () => {
  runGeneralLogic(getGameData, basicQuestion);
};

export default startBrainCalc;
