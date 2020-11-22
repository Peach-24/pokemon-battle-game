const inquirer = require("inquirer");
const { Battle } = require("./game-files/battle");
const { starterPokemon } = require("./game-files/pokemon");
const { Trainer } = require("./game-files/trainer");

// const terminalImage = require("terminal-image");
// (async () => {
//   console.log(
//     await terminalImage.file("media/pokemon-title.jpeg", {
//       width: 100,
//       height: 80,
//     })
//   );
// })();

console.log(".");
console.log("..");
console.log("...");
console.log(
  "Hello there! Welcome to the world of Pokémon! My name is OAK! People call me the Pokémon Prof!"
);
console.log("_________");
console.log(
  "This world is inhabited by creatures. I think it's time you started your Pokémon journey!"
);
console.log("_________");

const questions = [
  {
    type: "input",
    name: "playerName",
    message: "First, what is your name?",
    default: "Ash",
  },
  {
    type: "input",
    name: "rivalName",
    message:
      "... This is my grandson. He's been your rival since you were a baby... Erm, what is his name again?",
    default: "Gary",
  },
  {
    type: "list",
    name: "starter",
    message:
      "... Now comes the all important decision - which Pokémon will you choose?",
    choices: ["Bulbasaur", "Charmander", "Squirtle"],
  },
];

const options = {
  type: "list",
  name: "decision",
  message: `What will you do?`,
  choices: ["Attack", "Run"],
};

inquirer.prompt(questions).then((answers) => {
  const player1 = new Trainer(answers.playerName);
  const player2 = new Trainer(answers.rivalName);

  if (answers.starter === "Bulbasaur") {
    player1.catchPokemon(starterPokemon[0]);
    player2.catchPokemon(starterPokemon[1]);
    console.log("       ");
    console.log(`...Excellent choice ${player1.name}!`);
    console.log("       ");
    console.log(
      `Here's some more info on the ${player1.team[0].type}-type pokemon:`,
      player1.team
    );
    console.log("       ");
    console.log(
      `${player2.name}:... hmmmm. Ok then, I guess I'll choose ${player2.team[0].name}!`
    );
  } else if (answers.starter === "Charmander") {
    player1.catchPokemon(starterPokemon[1]);
    player2.catchPokemon(starterPokemon[2]);
    console.log("       ");
    console.log(`...Excellent choice ${player1.name}!`);
    console.log("       ");
    console.log(
      `Here's some more info on the ${player1.team[0].type}-type pokemon:`,
      player1.team
    );
    console.log("       ");
    console.log(
      `${player2.name}:... hmmmm. Ok then, I guess I'll choose ${player2.team[0].name}!`
    );
  } else if (answers.starter === "Squirtle") {
    player1.catchPokemon(starterPokemon[2]);
    player2.catchPokemon(starterPokemon[0]);
    console.log("       ");
    console.log(`...Excellent choice ${player1.name}!`);
    console.log("       ");
    console.log(
      `Here's some more info on the ${player1.team[0].type}-type pokemon:`,
      player1.team
    );
    console.log("       ");
    console.log(
      `${player2.name}:... hmmmm. Ok then, I guess I'll choose ${player2.team[0].name}!`
    );
  }

  newBattle = new Battle(player1, player2, player1.team, player2.team);
  console.log("_________");
  console.log(
    `OAK: Alright then ${answers.playerName}, let's see how good you are in a Pokémon battle against ${answers.rivalName}!`
  );
  console.log("_________");
  console.log("*** Pokémon Battle music plays***");
  console.log("_________");
  takeTurn();
});

const takeTurn = () => {
  inquirer.prompt(options).then((answers) => {
    if (answers.decision === "Attack") {
      newBattle.fight();
      newBattle.fight();
      if (newBattle.winnerDecided === false) {
        takeTurn();
      }
    } else if (answers === "Run") {
      console.log("Haha... Fight me again when you're ready.");
    }
  });
};
