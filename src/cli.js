import readlineSync from 'readline-sync';

export function printGreeting(params) {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}
