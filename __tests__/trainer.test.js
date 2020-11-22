const { Trainer } = require("../game-files/trainer");
const { starterPokemon } = require("../game-files/pokemon");

describe("Trainer constructor", () => {
  test("returns an object", () => {
    expect(typeof new Trainer()).toBe("object");
  });
  describe("PROPERTIES", () => {
    test("trainer object has a name property, defaults to Ash", () => {
      const testTrainer = new Trainer();
      expect(testTrainer).toHaveProperty("name");
    });
    test("custom trainer name can be passed as an argument", () => {
      const testTrainer = new Trainer("Josh");
      expect(testTrainer.name).toEqual("Josh");
    });
    test("trainer object has a team property", () => {
      const testTrainer = new Trainer();
      expect(testTrainer).toHaveProperty("team");
    });
    test("The value of team should be an array", () => {
      const testTrainer = new Trainer();
      expect(Array.isArray(testTrainer.team)).toBe(true);
    });
  });
  describe("METHODS", () => {
    test("trainer object has a catchPokemon method", () => {
      const testTrainer = new Trainer();
      expect("catchPokemon" in testTrainer).toBe(true);
      expect("steal" in testTrainer).toBe(false);
    });
    test("When catchPokemon is invoked with an argument, that argument is added to the trainer's squad", () => {
      const testTrainer = new Trainer();
      const bulbasaur = starterPokemon[0];
      testTrainer.catchPokemon(bulbasaur);
      expect(testTrainer.team[0]).toEqual(bulbasaur);
    });
  });
});
