import getRandomInt from '../random.js'

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = n => n % 2 === 0

const generateRound = () => {
  const number = getRandomInt(1, 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

export default () => ({
  rules: RULES,
  generateRound,
})
