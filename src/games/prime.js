import getRandomInt from '../random.js'

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  const limit = Math.floor(Math.sqrt(n))
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = getRandomInt(1, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return [String(number), correctAnswer]
}

export default () => ({
  rules: RULES,
  generateRound,
})
