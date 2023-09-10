import questionDataGeneration from '../index.js';
import { randomNumbers } from '../utils.js';

const startBrainGCD = () => {
  const basicQuestion = 'Find the greatest common divisor of given numbers.';
  const generateGames = () => {
    const [firstNumber, secondNumber] = randomNumbers();
    const expression = `${firstNumber} ${secondNumber}`;
    const minNum = Math.min(firstNumber, secondNumber);
    const maxNum = Math.max(firstNumber, secondNumber);
    let result = minNum;
    if (maxNum !== 0 && minNum !== 0) {
      let remainder = maxNum % minNum;
      let minForCycle = minNum;
      while (remainder !== 0) {
        result = remainder;
        remainder = minForCycle % remainder;
        minForCycle = result;
      }
    } else {
      result = minNum + maxNum;
    }
    return [expression, result];
  };
  questionDataGeneration(generateGames, basicQuestion);
};

export default startBrainGCD;
