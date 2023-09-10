import questionDataGeneration from '../index.js';
import { randomNumThousand } from '../utils.js';

const startBrainPrime = () => {
  const basicQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateData = () => {
    const [randomNum] = randomNumThousand();
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
  questionDataGeneration(generateData, basicQuestion);
};

export default startBrainPrime;
