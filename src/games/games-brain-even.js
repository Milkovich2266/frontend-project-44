import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const getDataGame = () => {
  const randomNumber = getRandomNumbers(0, 100);
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, result];
};

const startBrainEven = () => {
  runGeneralLogic(getDataGame, question);
};

export default startBrainEven;
