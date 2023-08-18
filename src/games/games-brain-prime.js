import {
  welkom,
  printQuestionAboutTheGame,
  quetionDataGeneration,
} from '../index.js';

const startBrainPrime = () => {
  welkom();

  const basicQuestion =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  printQuestionAboutTheGame(basicQuestion);

  const generateData = () => {
    const questionAndResult = [];
    const randomNum = Math.floor(Math.random() * 1000);
    let count = 1;
    let result = 'yes';
    let i = 1;
    while (i < randomNum - 1) {
      i += 1;
      if (randomNum % i === 0) {
        count += 1;
        result = 'no';
        break;
      }
    }
    questionAndResult[0] = randomNum;
    questionAndResult[1] = result;
    return questionAndResult;
  };
  quetionDataGeneration(generateData);
};

export default startBrainPrime;
