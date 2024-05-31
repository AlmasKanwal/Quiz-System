#! /usr/bin/env node

import inquirer from "inquirer";

const quiz: {
question_1: string;
question_2: string;
question_3: string;
question_4: string;
question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. TypeScript is a ?",
        choices: ["strongly typed", "object oriented", "compiled language", "All of the above"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. Who developed TypeScript language?",
        choices: ["Apple", "IBM", "Microsoft", "Google"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. When was the first time TypeScript was made public?",
        choices: ["October 2011", "October 2012", "October 2013", "October 2014"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. Extension of typescript is?",
        choices: [".d.tp", ".d.td", ".d.ts", ".d.ty"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. How many components typescript has?",
        choices: ["3", "4", "5", "6"]
    },
]);

let score: number = 0;

switch(quiz.question_1){
    case "All of the above":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect!");
}

switch(quiz.question_2){
    case "Microsoft":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
}

switch(quiz.question_3){
    case "October 2012":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect!");
}

switch(quiz.question_4){
    case ".d.ts":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect!");
}

switch(quiz.question_5){
    case "3":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. Incorrect!");
}

console.log(`Score: ${score}`);