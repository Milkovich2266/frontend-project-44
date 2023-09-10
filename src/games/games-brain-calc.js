import questionDataGeneration from '../index.js';
import { randomNumbers } from '../utils.js';

const startBrainCalc = () => {
  const basicQuestion = 'What is the result of the expression?';
  let result;
  const generateExpression = () => {
    const mathOperation = ['+', '-', '*'];
    const [firstNumber, secondNumber] = randomNumbers();
    const randomMathOperation = mathOperation[Math.floor(Math.random(0, 2) * 3)];
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

    return [expression, result];
  };
  questionDataGeneration(generateExpression, basicQuestion);
};

export default startBrainCalc;
