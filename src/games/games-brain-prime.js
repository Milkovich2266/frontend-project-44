import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = (randomNum) => {
  let result = 'yes';
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < randomNum; i++) {
    if (randomNum % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};

const getDataGame = () => {
  const randomNum = getRandomNumbers(0, 1000);
  const result = generateData(randomNum);
  return [randomNum, result];
};

const startBrainPrime = () => {
  runGeneralLogic(getDataGame, basicQuestion);
};

export default startBrainPrime;
