const inquirer = require('inquirer');
const { Battle } = require('./game-files/battle');
const { starterPokemon } = require('./game-files/pokemon');
const { Trainer } = require('./game-files/trainer');

// const terminalImage = require("terminal-image");
// (async () => {
//   console.log(
//     await terminalImage.file("media/pokemon-title.jpeg", {
//       width: 100,
//       height: 80,
//     })
//   );
// })();

console.log('.');
console.log('..');
console.log('...');
console.log(
  '\nHello there! Welcome to the world of Pokémon! My name is OAK! People call me the Pokémon Prof!'
);
console.log(
  "\nThis world is inhabited by amazing creatures... \n\nI think it's time you started your Pokémon journey!\n"
);

const questions = [
  {
    type: 'input',
    name: 'playerName',
    message: 'First, what is your name?\n',
    default: 'Ash',
  },

  {
    type: 'input',
    name: 'rivalName',
    message:
      "... This is my grandson. He's been your rival since you were a baby... Erm, what is his name again?\n",
    default: 'Gary',
  },
  {
    type: 'list',
    name: 'starter',
    message:
      '... Now comes the all important decision - which Pokémon will you choose?\n',
    choices: ['Bulbasaur', 'Charmander', 'Squirtle'],
  },
];

const options = {
  type: 'list',
  name: 'decision',
  message: `What will you do?`,
  choices: ['Attack', 'Run'],
};

inquirer.prompt(questions).then((answers) => {
  const player1 = new Trainer(answers.playerName);
  const player2 = new Trainer(answers.rivalName);

  if (answers.starter === 'Bulbasaur') {
    player1.catchPokemon(starterPokemon[0]);
    player2.catchPokemon(starterPokemon[1]);
    console.log(`\n...Excellent choice ${player1.name}!`);
    console.log(
      `\nHere's some more info on the ${player1.team[0].type}-type pokemon:`,
      player1.team
    );
    console.log(
      `\n${player2.name.toUpperCase()}:...hmph! Ok then, I guess I'll choose ${
        player2.team[0].name
      }!`
    );
  } else if (answers.starter === 'Charmander') {
    player1.catchPokemon(starterPokemon[1]);
    player2.catchPokemon(starterPokemon[2]);
    console.log(`\n...Excellent choice ${player1.name}!`);
    console.log(
      `\nHere's some more info on your ${player1.team[0].type}-type pokemon:`,
      player1.team
    );
    console.log('       ');
    console.log(
      `\n${player2.name.toUpperCase()}:...hmph! Ok then, I guess I'll choose ${
        player2.team[0].name
      }!`
    );
  } else if (answers.starter === 'Squirtle') {
    player1.catchPokemon(starterPokemon[2]);
    player2.catchPokemon(starterPokemon[0]);
    console.log(`\n... Excellent choice ${player1.name}!`);
    console.log(
      `\nHere's some more info on your ${player1.team[0].type}-type pokemon:`,
      player1.team
    );
    console.log(
      `\n${player2.name.toUpperCase()}...hmph! Ok then, I guess I'll choose ${
        player2.team[0].name
      }!`
    );
  }

  newBattle = new Battle(player1, player2, player1.team, player2.team);
  console.log(
    `\nOAK: Alright then ${answers.playerName}, let's see how good you are in a Pokémon battle against ${answers.rivalName}!\n`
  );
  console.log('_________');
  console.log('\n*** Pokémon Battle music plays ***');
  console.log('_________\n');
  takeTurn();
});

const takeTurn = () => {
  inquirer.prompt(options).then((answers) => {
    if (answers.decision === 'Attack') {
      newBattle.fight();
      newBattle.fight();
      if (newBattle.winnerDecided === false) {
        takeTurn();
      }
    } else if (answers === 'Run') {
      console.log("\nHaha... Fight me again when you're ready.");
    }
  });
};
