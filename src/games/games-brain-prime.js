import questionDataGeneration from '../index.js';
import { randomNumThousand } from '../utils.js';

const startBrainPrime = () => {
  const basicQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateData = () => {
    const [randomNum] = randomNumThousand();
    let result = 'yes';
    for (let i = 1; i < randomNum - 1; i++) {
      if (randomNum % i === 0) {
        result = 'no';
        break;
      }
    }
    return [randomNum, result];
  };
  questionDataGeneration(generateData, basicQuestion);
};

export default startBrainPrime;
