import runGeneralLogic from '../index.js';
import getRandomNumbers from '../utils.js';

const basicQuestion = 'What number is missing in the progression?';

// eslint-disable-next-line max-len
const generateProgression = (randomNum, stepProgression, quaNumInProgression, indexHiddenNum, hiddenNum) => {
  let expression = [];
  while (expression.length < quaNumInProgression) {
    expression.push(randomNum);
    // eslint-disable-next-line no-param-reassign
    randomNum += stepProgression;
  }
  const result = expression[indexHiddenNum];
  expression[indexHiddenNum] = hiddenNum;
  expression = expression.join(' ');
  return [expression, String(result)];
};

const getDataGame = () => {
  const randomNum = getRandomNumbers(0, 100);
  const stepProgression = getRandomNumbers(0, 10);
  const quaNumInProgression = 10;
  const indexHiddenNum = getRandomNumbers(0, quaNumInProgression - 1);
  const hiddenNum = '..';
  // eslint-disable-next-line max-len
  const [expression, result] = generateProgression(randomNum, stepProgression, quaNumInProgression, indexHiddenNum, hiddenNum);
  return [expression, result];
};

const startBrainProgressiom = () => {
  runGeneralLogic(getDataGame, basicQuestion);
};

export default startBrainProgressiom;
