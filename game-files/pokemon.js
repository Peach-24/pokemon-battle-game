class Pokemon {
  constructor(name, hp, att, sound, moves, type = "normal") {
    this.name = name;
    this.hp = hp;
    this.isConscious = true;
    this.att = att;

    this.sound = sound;
    this.moves = moves;
    this.type = type;

    if (
      this.type === "fire" ||
      this.type === "water" ||
      this.type === "grass"
    ) {
      this.type = this.type;
    } else {
      this.type = "normal";
    }

    if (this.hp === 0) {
      this.isConscious = false;
    }
  }
  talk() {
    return this.sound;
  }
  showMoves() {
    return this.moves;
  }
}

const bulbasaur = new Pokemon(
  "Bulbasaur",
  40,
  10,
  "Bulbaa!",
  ["tackle"],
  "grass"
);
const charmander = new Pokemon(
  "Charmander",
  39,
  13,
  "Charr!",
  ["scratch"],
  "fire"
);
const squirtle = new Pokemon(
  "Squirtle",
  44,
  12,
  "Squirr!",
  ["tackle"],
  "water"
);
const starterPokemon = [bulbasaur, charmander, squirtle];
module.exports = { Pokemon, starterPokemon };
