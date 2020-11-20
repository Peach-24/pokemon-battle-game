const { expect, test } = require("@jest/globals");
const { Pokemon } = require("../app.js");

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
});
