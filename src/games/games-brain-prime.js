import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const randomNum = getRandomNumbers(0, 1000);
  let result = 'yes';
  let i = 1;
  while (i < randomNum - 1) {
    i += 1;
    if (randomNum % i === 0) {
      result = 'no';
      break;
    }
  }
  return [randomNum, result];
};

const startBrainPrime = () => {
  generateData();
  runGeneralLogic(generateData, basicQuestion);
};

export default startBrainPrime;
