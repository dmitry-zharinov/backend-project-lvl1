import getRandomInt from '../random.js'

const RULES = 'What is the result of the expression?'
const OPERATORS = ['+', '-', '*']

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${op}`)
  }
}

const generateRound = () => {
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)
  const op = OPERATORS[getRandomInt(0, OPERATORS.length - 1)]

  const question = `${a} ${op} ${b}`
  const correctAnswer = String(calculate(a, b, op))

  return [question, correctAnswer]
}

export default () => ({
  rules: RULES,
  generateRound,
})
