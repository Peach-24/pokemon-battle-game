class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.attacker = trainer1.team.chosenPokemon;
    this.defender = trainer2.team.chosenPokemon;
    this.currentTurn = 1;
  }
  selectPokemon(trainer, index) {
    if (trainer == this.trainer1 && this.trainer1.team[index].hp > 0) {
      this.trainer1.chosenPokemon = trainer.team[index];
    }
    if (trainer == this.trainer2 && this.trainer2.team[index].hp > 0) {
      this.trainer2.chosenPokemon = trainer.team[index];
    }
  }
  fight() {
    let message = "";

    if (this.currentTurn % 2 === 1) {
      this.attacker = this.trainer1.chosenPokemon;
      this.defender = this.trainer2.chosenPokemon;
    } else {
      this.attacker = this.trainer2.chosenPokemon;
      this.defender = this.trainer1.chosenPokemon;
    }

    this.currentTurn++;
    if (this.currentTurn % 2 === 1) {
      this.attacker = this.trainer1.chosenPokemon;
      this.defender = this.trainer2.chosenPokemon;
    } else {
      this.attacker = this.trainer2.chosenPokemon;
      this.defender = this.trainer1.chosenPokemon;
    }
  }
}

module.exports = { Battle };
