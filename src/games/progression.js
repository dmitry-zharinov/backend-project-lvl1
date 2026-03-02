import getRandomInt from '../random.js'

const RULES = 'What number is missing in the progression?'

const buildProgression = (start, step, length) => {
  const result = []
  for (let i = 0; i < length; i += 1) {
    result.push(start + step * i)
  }
  return result
}

const generateRound = () => {
  const length = 10
  const start = getRandomInt(1, 50)
  const step = getRandomInt(1, 10)

  const progression = buildProgression(start, step, length)

  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return [question, correctAnswer]
}

export default () => ({
  rules: RULES,
  generateRound,
})
