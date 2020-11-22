class Trainer {
  constructor(name = "Ash") {
    this.name = name;
    this.team = [];
    this.maxSize = 6;
  }
  catchPokemon(pokemon) {
    return this.team.push(pokemon);
  }
}

module.exports = { Trainer };
