const pokedex = require("../pokedex");

class Trainer {
  constructor(name = "Ash") {
    this.name = name;
    this.team = [];
    this.chosenPokemon = this.team[0];
  }
  catchPokemon(pokemon) {
    return this.team.push(pokemon);
  }
}

module.exports = { Trainer };
