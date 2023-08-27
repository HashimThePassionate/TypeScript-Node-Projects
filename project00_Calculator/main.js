import { sum } from "./addition.js";
import { sub } from "./substraction.js";
import { mul } from "./multiplication.js";
import { div } from "./division.js";
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
async function main() {
    try {
        await showBanner('Calculator', 'A modular calculator program with Inquirer, chalk, and node-banner.');
        let answers = await inquirer.prompt([
            {
                name: "a",
                type: "number",
                message: chalk.bgMagenta.white("Please Enter First Number")
            },
            {
                name: "b",
                type: "number",
                message: chalk.bgMagenta.white("Please Enter Second Number")
            },
            {
                name: "operation",
                type: "list",
                message: chalk.bgMagenta("Choose an operation:"),
                choices: ['Addition', 'Substraction', 'Multiplication', 'Division']
            }
        ]);
        const { a, b, operation } = answers;
        switch (operation) {
            case 'Addition':
                console.log(chalk.bgGreen.black(`The Addition of ${a} + ${b} = `, sum(a, b)));
                break;
            case 'Substraction':
                console.log(chalk.bgGreen.black(`The Addition of ${a} - ${b} = `, sub(a, b)));
                break;
            case 'Multiplication':
                console.log(chalk.bgGreen.black(`The Addition of ${a} * ${b} = `, mul(a, b)));
                break;
            case 'Division':
                console.log(chalk.bgGreen.black(`The Addition of ${a} / ${b} = `, div(a, b)));
                break;
            default:
                console.error(chalk.bgRed.black('Invalid operation.'));
                break;
        }
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
main();
