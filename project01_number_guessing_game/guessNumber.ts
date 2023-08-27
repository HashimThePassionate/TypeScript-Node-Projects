import readline from 'readline'
import chalk from 'chalk'
import inquirer from 'inquirer'
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function getRandomNumber(min:number, max:number):number
{
    return Math.floor(Math.random()*(max-min+1))+min;
}
async function playGame()
{
    const min = 1;
    const max = 100;
    const secretNumber = getRandomNumber(min,max)
    let attempts = 0;
    console.log(chalk.blue.bold('Welcome to the Guess the Number Game!'));
    console.log(`I'm thinking of a number between ${min} and ${max}.`);
    async function askForGuess()
    {
        const input = await inquirer.prompt([
            {
                type:'number',
                name:'guess',
                message:'Take a guess',
                validate:(value)=>{
                    if(isNaN(value)|| value < min || value > max)
                    {
                        return 'Please enter a valid number between 1 and 100 ';
                    }
                    return true;
                },
            },
        ]);
        const guess = input.guess;
        attempts++;
        if(guess === secretNumber)
        {
            console.log(chalk.green.bold(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`));
        }
        else if(guess < secretNumber)
        {
            console.log(chalk.red('Too low. Try again.'));
            askForGuess();
        }
        else 
        {
            console.log(chalk.red('Too high. Try again.'));
            askForGuess();
        }
    }
    askForGuess();
}
// Display a banner
console.log(chalk.yellow.bold('--------------------------------------'));
console.log(chalk.yellow.bold('      Welcome to Guess the Number     '));
console.log(chalk.yellow.bold('--------------------------------------'));
playGame();