import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'What number is missing in the progression?';

const generateGamesBrainProgression = () => {
  let expression = [];
  let randomNum = getRandomNumbers(0, 100);
  const stepProgression = getRandomNumbers(0, 10);
  const quanityNumbersInProgression = 10;
  while (expression.length < quanityNumbersInProgression) {
    expression.push(randomNum);
    randomNum += stepProgression;
  }
  const indexHiddenNum = getRandomNumbers(0, quanityNumbersInProgression - 1);
  const hiddenNum = '..';
  const result = expression[indexHiddenNum];
  expression[indexHiddenNum] = hiddenNum;
  expression = expression.join(' ');

  return [expression, String(result)];
};

const startBrainProgressiom = () => {
  generateGamesBrainProgression();
  runGeneralLogic(generateGamesBrainProgression, basicQuestion);
};

export default startBrainProgressiom;
