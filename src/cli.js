import readlineSync from 'readline-sync'

const runCli = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('Как вас зовут? ')
  console.log(`Привет, ${name}!`)
}

export default runCli
