const { Pokemon, starterPokemon } = require("../game-files/pokemon");
const { Trainer } = require("../game-files/trainer");
const { Battle } = require("../game-files/battle");
const { effectivenessRef } = require("../game-files/types");

const bulbasaur = starterPokemon[0];
const charmander = starterPokemon[1];
const squirtle = starterPokemon[2];

beforeEach(() => {
  ash = new Trainer("Ash");
  charmander.hp = 39;
  ash.catchPokemon(charmander);

  gary = new Trainer("Gary");
  bulbasaur.hp = 40;
  gary.catchPokemon(bulbasaur);

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
  console.log(testBattle);
  expect(effectivenessRef[charmander.type][bulbasaur.type]).toBe(1.5);
  testBattle.fight();
  expect(effectivenessRef[bulbasaur.type][charmander.type]).toBe(0.5);
});

test("When a pokemon attacks, the opposing pokemon's health is reduced accordingly,", () => {
  //   expect(charmander.hp).toBe(39);
  //   expect(bulbasaur.hp).toBe(40);

  testBattle.fight();
  expect(bulbasaur.hp).toBe(20.5);

  testBattle.fight();
  expect(charmander.hp).toBe(34);
});

test("If defender's health reaches 0 or below, the attacker is declared the winner", () => {
  const consoleSpy = jest.spyOn(console, "log");

  testBattle.fight();
  testBattle.fight();
  testBattle.fight();
  testBattle.fight();
  expect(consoleSpy).toHaveBeenCalledWith(
    "charizard fainted... rattata has won the battle!"
  );
});
test("fight method is only invoked if both the attacker & defender's health is above 0", () => {
  testBattle.fight();
  testBattle.fight();
  testBattle.fight();
  testBattle.fight();
  expect(testBattle.attacker.health).toBe(0);
  testBattle.fight();
  expect(testBattle.defender.health).toBe(0);
});

test("A trainer is announced winner when the opponent runs out of alive pokemon (1 pokemon each)", () => {
  const consoleSpy = jest.spyOn(console, "log");

  const testBattle = new Battle(testTrainerAsh, testTrainerGary);
  testBattle.fight();
  testBattle.fight();
  expect(consoleSpy).toHaveBeenCalledWith(
    "charizard fainted... rattata has won the battle!"
  );
  expect(consoleSpy).toHaveBeenCalledWith(
    "josh is out of usable pokemon... james wins!"
  );
});
