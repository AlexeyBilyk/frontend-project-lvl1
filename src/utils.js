const getRandomInRange = (min, max) => {
  const number = Math.round(Math.random() * (max - min)) + min;
  return number;
};

export default getRandomInRange;
