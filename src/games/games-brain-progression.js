import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'What number is missing in the progression?';
const lengthProgression = 10;

// eslint-disable-next-line max-len
const generateProgression = (randomNum, stepProgression) => {
  const expression = [];
  while (expression.length < lengthProgression) {
    expression.push(randomNum);
    // eslint-disable-next-line no-param-reassign
    randomNum += stepProgression;
  }
  return expression;
};

const getGameData = () => {
  const randomNum = getRandomNumbers(0, 100);
  const stepProgression = getRandomNumbers(0, 10);
  const indexHiddenNum = getRandomNumbers(0, lengthProgression - 1);
  const hiddenNum = '..';
  // eslint-disable-next-line max-len
  const expression = generateProgression(randomNum, stepProgression);
  const result = expression[indexHiddenNum];
  expression[indexHiddenNum] = hiddenNum;
  const strExpression = expression.join(' ');
  return [strExpression, String(result)];
};

const startBrainProgressiom = () => {
  runGeneralLogic(getGameData, basicQuestion);
};

export default startBrainProgressiom;
