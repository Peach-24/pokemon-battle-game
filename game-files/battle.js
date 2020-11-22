const { effectivenessRef } = require("../game-files/types");

class Battle {
  constructor(trainer1, trainer2, team1, team2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = team1[0];
    this.pokemon2 = team2[0];
    this.turn = 1;
  }

  fight() {
    if (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      ///////////////////////////// POKEMON 1's TURN ///////////////////////////////////////
      if (this.turn % 2 === 1) {
        console.log(`What will ${this.pokemon1.name} do?`);
        console.log(
          `"${this.pokemon1.sound}" ${this.pokemon1.name} used ${this.pokemon1.moves[0]}.`
        );
        // Determines and deals damage based on effectiveness against other pokemon's type
        if (
          effectivenessRef[`${this.pokemon1.type}`][`${this.pokemon2.type}`] ===
          1.5
        ) {
          const damage = this.pokemon1.att * 1.5;
          this.pokemon2.hp -= damage;
          console.log(
            `${this.pokemon1.name} is super effective against ${this.pokemon2.type}-types and caused ${damage} damage.`
          );
          if (this.pokemon2.hp <= 0) {
            console.log(
              `${this.pokemon2.name} fainted. ${this.trainer1.name} has won the battle!`
            );
          }
        } else if (
          effectivenessRef[`${this.pokemon1.type}`][`${this.pokemon2.type}`] ===
          1
        ) {
          const damage = this.pokemon1.att * 1;
          this.pokemon2.hp -= damage;
          console.log(`${this.pokemon2.name} lost ${damage} health points.`);
          if (this.pokemon2.hp <= 0) {
            console.log(
              `${this.pokemon2.name} fainted. ${this.trainer1.name} has won the battle!`
            );
          }
        } else if (
          effectivenessRef[`${this.pokemon1.type}`][`${this.pokemon2.type}`] ===
          0.5
        ) {
          const damage = this.pokemon1.att * 0.5;
          this.pokemon2.hp -= damage;
          console.log(
            `${this.pokemon1.name} is not very effective against ${this.pokemon2.type}-types and only caused ${damage} damage.`
          );
          if (this.pokemon2.hp <= 0) {
            console.log(
              `${this.pokemon2.name} fainted. ${this.trainer1.name} has won the battle!`
            );
          }
        }
      }
      ///////////////////////////// POKEMON 2's TURN ///////////////////////////////////////
      else {
        console.log(`What will ${this.pokemon2.name} do?`);
        console.log(
          `"${this.pokemon2.sound}" ${this.pokemon2.name} used ${this.pokemon2.moves[0]}. `
        );
        // Determines and deals damage based on effectiveness against other pokemon's type
        if (
          effectivenessRef[`${this.pokemon2.type}`][`${this.pokemon1.type}`] ===
          1.5
        ) {
          const damage = this.pokemon2.att * 1.5;
          this.pokemon1.hp -= damage;
          console.log(
            `${this.pokemon2.name} is super effective against ${this.pokemon1.type}-types and caused ${damage} damage.`
          );
          if (this.pokemon1.hp <= 0) {
            console.log(
              `${this.pokemon1.name} fainted. ${this.trainer2.name} has won the battle!`
            );
          }
        } else if (
          effectivenessRef[`${this.pokemon2.type}`][`${this.pokemon1.type}`] ===
          1
        ) {
          const damage = this.pokemon2.att * 1;
          this.pokemon1.hp -= damage;
          console.log(`${this.pokemon1.name} lost ${damage} health points.`);
          if (this.pokemon1.hp <= 0) {
            console.log(
              `${this.pokemon1.name} fainted. ${this.trainer2.name} has won the battle!`
            );
          }
        } else if (
          effectivenessRef[`${this.pokemon2.type}`][`${this.pokemon1.type}`] ===
          0.5
        ) {
          const damage = this.pokemon2.att * 0.5;
          this.pokemon1.hp -= damage;
          console.log(
            `${this.pokemon2.name} is not very effective against ${this.pokemon1.type}-types and only caused ${damage} damage.`
          );
          if (this.pokemon1.hp <= 0) {
            console.log(
              `${this.pokemon1.name} fainted. ${this.trainer2.name} has won the battle!`
            );
          }
        }
      }

      this.turn++;
    } else {
      console.log("There aren't enough usable Pokémon for this battle!");
    }
  }
}
module.exports = { Battle };
