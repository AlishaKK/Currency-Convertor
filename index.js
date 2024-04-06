#! /usr/bin/env node
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "list",
            name: "currencyInput",
            choices: ["Pakistan Rs", "Us Dollar", "Saudi Riyal"],
            message: "select your input currency",
        },
        {
            type: "number",
            name: "amountInput",
            message: "Enter the amount you want to convert ",
        },
        {
            type: "list",
            name: "currencyOutput",
            choices: ["Pakistan Rs", "Us Dollar", "Saudi Riyal"],
            message: "select your output currency",
        },
    ]);
    const input = userInput.currencyInput;
    const output = userInput.currencyOutput;
    const amount = userInput.amountInput;
    if (input === "Pakistan Rs") {
        if (output === "Us Dollar") {
            console.log(`The ${amount} Pakistan Rupees is equal to ${amount / 281} Us Dollar`);
        }
        else if (output === "Saudi Riyal") {
            console.log(`The ${amount} Pakistan Rupees is equal to ${amount / 75} Saudi Riyal`);
        }
    }
    else if (input === "Us Dollar") {
        if (output === "Pakistan Rs") {
            console.log(`The ${amount} Us Dollar is equal to ${amount * 281} Pakistan Rupees`);
        }
        else if (output === "Saudi Riyal") {
            console.log(`The ${amount} Us Dollar is equal to ${amount * 3.75} Saudi Riyal`);
        }
    }
    else if (input === "Saudi Riyal") {
        if (output === "Pakistan Rs") {
            console.log(`The ${amount} Saudi Riyal  is equal to ${amount * 75} Pakistan Rupees`);
        }
        else if (output === "Us Dollar") {
            console.log(`The ${amount} Saudi Riyal is equal to ${amount * 3.75} Us Dollar`);
        }
    }
    const calculateAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "calculateMore",
            message: "Do you want more conversion?",
        },
    ]);
    if (!calculateAgain.calculateMore) {
        loop = false;
    }
}
