const { Pokemon, starterPokemon } = require("../game-files/pokemon");

describe("Pokemon constructor", () => {
  test("returns an object", () => {
    expect(typeof new Pokemon()).toBe("object");
  });
  describe("PROPERTIES", () => {
    test("has a name property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("name");
    });
    test("has a health points (hp) property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("hp");
    });
    test("has a isConscious property that is true by default", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("isConscious");
    });
    test("has an attack damage (att) property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("att");
    });
    test("has a sound property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("sound");
    });
    test("has an moves property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("moves");
    });
    test("has a type property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("type");
      expect(testPokemon.type).toBe("normal");
    });
    // test("has an effectiveness property", () => {
    //   const testPokemon = new Pokemon();
    //   expect(testPokemon).toHaveProperty("type");
    //   expect(testPokemon.effectiveness).toBe(1);
    // });
  });
  describe("METHODS", () => {
    test("has a talk method", () => {
      const testPokemon = new Pokemon();
      expect("talk" in testPokemon).toBe(true);
      expect("scream" in testPokemon).toBe(false);
    });
    test("talk method returns the pokemon sound", () => {
      const testBulbasaur = starterPokemon[0];
      expect(testBulbasaur.talk()).toBe("Bulbaa!");
    });
    test("has a showMoves method", () => {
      const testPokemon = new Pokemon();
      expect("showMoves" in testPokemon).toBe(true);
      expect("useMoves" in testPokemon).toBe(false);
    });
    test("showMoves method returns the pokemon's moves", () => {
      const testBulbasaur = starterPokemon[0];

      expect(testBulbasaur.showMoves()).toEqual(["tackle"]);
    });
  });
});
