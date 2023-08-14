import {
  welkom,
  printQuestionAboutTheGame,
  quetionDataGeneration,
  // eslint-disable-next-line import/no-unresolved
} from '../index.js';

const startBrainProgressiom = () => {
  welkom();

  const basicQuestionProgression = 'What number is missing in the progression?';
  printQuestionAboutTheGame(basicQuestionProgression);

  const generateGamesBrainProgression = () => {
    const questionAndResult = [];
    let expression = [];
    let randomNum = Math.floor(Math.random() * 100);
    const stepProgression = Math.floor(Math.random() * 10);

    while (expression.length < 10) {
      expression.push(randomNum);
      randomNum += stepProgression;
    }

    const indexHiddenNum = Math.floor(Math.random() * 10);
    const hiddenNum = '..';
    const result = expression[indexHiddenNum];
    expression[indexHiddenNum] = hiddenNum;
    expression = expression.join(' ');

    questionAndResult[0] = expression;
    questionAndResult[1] = result;
    return questionAndResult;
  };
  quetionDataGeneration(generateGamesBrainProgression);
};

export default startBrainProgressiom;
