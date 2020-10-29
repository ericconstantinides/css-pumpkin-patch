export const getRandomInt = (min: number, max: number): number => {
  const range = max - min + 1
  const randomNum = Math.floor(Math.random() * Math.floor(range));
  return min + randomNum
}