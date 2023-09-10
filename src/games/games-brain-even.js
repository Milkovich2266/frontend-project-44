import questionDataGeneration from '../index.js';
import { randomNumbers } from '../utils.js';

const startBrainEven = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getDataGame = () => {
    let result;
    const [randomNumber] = randomNumbers();
    if (randomNumber % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [randomNumber, result];
  };
  questionDataGeneration(getDataGame, question);
};

export default startBrainEven;
