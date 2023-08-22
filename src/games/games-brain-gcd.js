import {
  welkom,
  printQuestionAboutTheGame,
  quetionDataGeneration,
} from '../index.js';

const startBrainGCD = () => {
  welkom();
  const basicQuestionGCD = 'Find the greatest common divisor of given numbers.';
  printQuestionAboutTheGame(basicQuestionGCD);
  const questionAndResult = [];
  const generateGames = () => {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const expression = `${firstNumber} ${secondNumber}`;
    const minNum = Math.min(firstNumber, secondNumber);
    const maxNum = Math.max(firstNumber, secondNumber);
    let result = minNum;
    if (maxNum !== 0 && minNum !== 0) {
      let remainder = maxNum % minNum;
      let minForCycle = minNum;
      while (remainder !== 0) {
        result = remainder;
        remainder = minForCycle % remainder;
        minForCycle = result;
      }
    } else {
      result = minNum + maxNum;
    }
    questionAndResult[0] = expression;
    questionAndResult[1] = result;
    return questionAndResult;
  };
  quetionDataGeneration(generateGames);
};

export default startBrainGCD;
