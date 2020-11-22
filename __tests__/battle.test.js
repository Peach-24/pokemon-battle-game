const { Pokemon, starterPokemon } = require("../game-files/pokemon");
const { Trainer } = require("../game-files/trainer");
const { Battle } = require("../game-files/battle");
const { effectivenessRef } = require("../game-files/types");

const bulbasaur = starterPokemon[0];
const charmander = starterPokemon[1];
const squirtle = starterPokemon[2];

beforeEach(() => {
  ash = new Trainer("Ash");
  ash.catchPokemon(charmander);
  ash.team[0].hp = 39;
  gary = new Trainer("Gary");
  gary.catchPokemon(bulbasaur);
  gary.team[0].hp = 40;
  testBattle = new Battle(ash, gary, ash.team, gary.team);
});

test("Battle should have trainer1, trainer 2, team1 and team2 properties", () => {
  expect(testBattle).toHaveProperty("trainer1");
  expect(testBattle).toHaveProperty("trainer2");
  expect(testBattle).toHaveProperty("pokemon1");
  expect(testBattle).toHaveProperty("pokemon2");
  expect(testBattle).toHaveProperty("turn");
});
test("Has a fight method", () => {
  expect("fight" in testBattle).toBe(true);
});
test("Battle's currentTurn prop should initialize to 1", () => {
  expect(testBattle.turn).toBe(1);
});
test("Each time the fight method is called, turn increments", () => {
  testBattle.fight();
  expect(testBattle.turn).toBe(2);
  testBattle.fight();
  expect(testBattle.turn).toBe(3);
});

test("When a fire type goes against a grass type, the effectivenessRef works correctly", () => {
  testBattle.fight();
  expect(effectivenessRef[charmander.type][bulbasaur.type]).toBe(1.5);
  testBattle.fight();
  expect(effectivenessRef[bulbasaur.type][charmander.type]).toBe(0.5);
});
test("When a pokemon attacks, the opposing pokemon's health is reduced accordingly,", () => {
  testBattle.fight();
  expect(gary.team[0].hp).toBe(20.5);

  testBattle.fight();

  console.log(testBattle.pokemon1, testBattle.pokemon2);
  testBattle.fight();
  testBattle.fight();
  expect(ash.team[0].hp).toBe(29);
});

test("If a pokemon's hp reaches 0 or below, the is winner is declared", () => {
  const consoleSpy = jest.spyOn(console, "log");

  testBattle.fight();
  testBattle.fight();
  testBattle.fight();
  testBattle.fight();
  //the below attack should reduce gary's bulbasaur's health to below zero
  testBattle.fight();
  expect(consoleSpy).toHaveBeenCalledWith(
    "Bulbasaur fainted. Ash has won the battle!"
  );
});
test("fight method is only invoked if pokemon1 and pokemon2 hp are both above 0", () => {
  const consoleSpy = jest.spyOn(console, "log");
  ash.team[0].hp = 0;
  testBattle.fight();
  expect(consoleSpy).toHaveBeenCalledWith(
    "There aren't enough usable Pokémon for this battle!"
  );
});
