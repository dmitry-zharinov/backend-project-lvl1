import getRandomInt from '../random.js'

const RULES = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
  let x = Math.abs(a)
  let y = Math.abs(b)

  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }

  return x
}

const generateRound = () => {
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)

  const question = `${a} ${b}`
  const correctAnswer = String(gcd(a, b))

  return [question, correctAnswer]
}

export default () => ({
  rules: RULES,
  generateRound,
})