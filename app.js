class Pokemon {
  constructor(name, hp, att, def, speed, sound, moves) {
    this.name = name;
    this.hp = hp;
    this.isConscious = true;
    this.att = att;
    this.def = def;
    this.speed = speed;
    this.sound = sound;
    this.moves = moves;
    this.type = "normal";
    this.effectiveness = 1;

    if (
      this.type === "fire" ||
      this.type === "water" ||
      this.type === "grass"
    ) {
      this.type = this.type;
    } else {
      this.type = "normal";
    }
  }
  talk() {
    return this.sound;
  }
  showMoves() {
    return this.moves;
  }
}

module.exports = { Pokemon };
