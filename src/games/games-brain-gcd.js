import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'Find the greatest common divisor of given numbers.';

const getDate = () => {
  const firstNumber = getRandomNumbers(0, 100);
  const secondNumber = getRandomNumbers(0, 100);
  const expression = `${firstNumber} ${secondNumber}`;
  const minNum = Math.min(firstNumber, secondNumber);
  const maxNum = Math.max(firstNumber, secondNumber);
  return [minNum, maxNum, expression];
};

const generateGames = (minNum, maxNum, expression) => {
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
  return [expression, String(result)];
};

const startBrainGCD = () => {
  runGeneralLogic(generateGames, basicQuestion);
};

export default startBrainGCD;
