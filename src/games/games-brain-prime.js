import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNum) => {
  if (randomNum < 2) {
    return false;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < Math.sqrt(randomNum); i++) {
    if (randomNum % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const randomNum = getRandomNumbers(0, 1000);
  const result = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, result];
};

const startBrainPrime = () => {
  runGeneralLogic(getGameData, basicQuestion);
};

export default startBrainPrime;
