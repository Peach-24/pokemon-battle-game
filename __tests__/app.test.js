const { expect, test, describe } = require("@jest/globals");
const { Pokemon } = require("../app.js");
const pokedex = require("../game-files/pokedex");

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
    test("has a defence (def) property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("def");
    });
    test("has a speed property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("speed");
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
    test("has an effectiveness property", () => {
      const testPokemon = new Pokemon();
      expect(testPokemon).toHaveProperty("type");
      expect(testPokemon.effectiveness).toBe(1);
    });
  });
  describe.only("METHODS", () => {
    test("has a talk method", () => {
      const testPokemon = new Pokemon();
      expect("talk" in testPokemon).toBe(true);
      expect("scream" in testPokemon).toBe(false);
    });
    test("talk method returns the pokemon sound", () => {
      const testPokemon = new Pokemon(
        "bulbasaur",
        45,
        49,
        49,
        45,
        "Bulbaa!",
        ["tackle"],
        "grass"
      );
      expect(testPokemon.talk()).toBe("Bulbaa!");
    });
    test("has a showMoves method", () => {
      const testPokemon = new Pokemon();
      expect("showMoves" in testPokemon).toBe(true);
      expect("useMoves" in testPokemon).toBe(false);
    });
    test("showMoves method returns the pokemon's moves", () => {
      const testPokemon = new Pokemon(
        "bulbasaur",
        45,
        49,
        49,
        45,
        "Bulbaa!",
        ["tackle", "growl"],
        "grass"
      );
      expect(testPokemon.showMoves()).toEqual(["tackle", "growl"]);
    });
  });
});
