import questionDataGeneration from '../index.js';
import { randomNumbers, randomThens } from '../utils.js';

const startBrainProgressiom = () => {
  const basicQuestion = 'What number is missing in the progression?';
  const generateGamesBrainProgression = () => {
    let expression = [];
    let [, randomNum] = randomNumbers();
    const [stepProgression] = randomThens();

    while (expression.length < 10) {
      expression.push(randomNum);
      randomNum += stepProgression;
    }
    const [indexHiddenNum] = randomThens();
    const hiddenNum = '..';
    const result = expression[indexHiddenNum];
    expression[indexHiddenNum] = hiddenNum;
    expression = expression.join(' ');

    return [expression, result];
  };
  questionDataGeneration(generateGamesBrainProgression, basicQuestion);
};

export default startBrainProgressiom;
