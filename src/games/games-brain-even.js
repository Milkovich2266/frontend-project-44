import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const getDataGame = () => {
  let result;
  const randomNumber = getRandomNumbers(0, 100);
  if (randomNumber % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [randomNumber, result];
};

const startBrainEven = () => {
  getDataGame();
  runGeneralLogic(getDataGame, question);
};

export default startBrainEven;
