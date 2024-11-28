import figlet from "figlet";
import inquirer from "inquirer";

const a = Math.trunc(Math.random() * 100);

const dict = {
  1: 10,
  2: 5,
  3: 3,
};

console.log(
  "Welcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100. \n"
);

console.log(
  "Please select the difficulty level: \n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances) \n"
);

const { chances } = await inquirer.prompt({
  type: "input",
  name: "chances",
  message: "Enter the option number",
});

console.log()

for(let i = 0; i < dict[chances]; i++) {
    const {guess} = await inquirer.prompt({
      type: "input",
      name: "guess",
      message: `Enter your guess (${i + 1} of ${dict[chances]})`,
    });

    if(guess == a){
        console.log(`Congratulations! You guessed the correct number in ${i + 1} attempts.`)
        break;
    }
    else if(guess < a) console.log(`Incorrect! The number is greater than ${guess}.`);
    else console.log(`Incorrect! The number is less than ${guess}`);
}

