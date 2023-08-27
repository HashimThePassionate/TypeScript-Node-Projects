#!/usr/bin/node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { quizQuestions } from "./quiz.js";
async function main() {
    try {
        await showBanner('Quiz Application', 'A simple quiz application with Inquirer, chalk, and node-banner.');
        const userAnswers = await inquirer.prompt(quizQuestions.map((question) => ({
            name: question.question,
            type: 'list',
            message: question.question,
            choices: question.choices
        })));
        let score = 0;
        // Check user answers
        for (const question of quizQuestions) {
            const userAnswer = userAnswers[question.question];
            if (userAnswer && userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                score++;
            }
        }
        console.log(chalk.green('Quiz Completed!'));
        console.log(chalk.green(`Your Score: ${((score / quizQuestions.length) * 100).toFixed(2)}%`));
        console.log(chalk.green('Correct Answers:'));
        for (const question of quizQuestions) {
            if (userAnswers[question.question]?.toLowerCase() === question.answer.toLowerCase()) {
                console.log(chalk.green(question.question));
            }
            else {
                console.log(chalk.red(question.question));
            }
        }
    }
    catch (error) {
        console.error(chalk.red('An error occurred:', error));
    }
}
main();
