const randomNumbers = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  return [firstNumber, secondNumber];
};

const randomThens = () => {
  const thens = Math.floor(Math.random() * 10);
  return [thens];
};

const randomNumThousand = () => {
  const thousand = Math.floor(Math.random() * 1000);
  return [thousand];
};

export { randomNumbers, randomThens, randomNumThousand };
