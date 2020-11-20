const { expect, test, describe } = require("@jest/globals");
const {
  Pokemon,
  GrassPokemon,
  FirePokemon,
  WaterPokemon,
} = require("../game-files/classes/pokemon-class.js");
const { Trainer } = require("../game-files/classes/trainer-class");
const pokedex = require("../game-files/pokedex.js");

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
  describe("METHODS", () => {
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
  describe("Pokemon TYPE constructors", () => {
    test('GrassPokemon should create an instance of a pokemon with type === "grass"', () => {
      const testGrass = new GrassPokemon("leaf", 10, 10, 10, 10, "leaa", [
        "fall",
      ]);
      expect(testGrass.type).toBe("grass");
    });
    test('FirePokemon should create an instance of a pokemon with type === "fire"', () => {
      const testFire = new FirePokemon("Coal", 10, 10, 10, 10, "burr", [
        "fall",
      ]);
      expect(testFire.type).toBe("fire");
    });
    test('WaterPokemon should create an instance of a pokemon with type === "water"', () => {
      const testWater = new WaterPokemon("pool", 10, 10, 10, 10, "splaa", [
        "fall",
      ]);
      expect(testWater.type).toBe("water");
    });
  });
});

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
    test("trainer object has a leadPokemon property", () => {
      const testTrainer = new Trainer();
      expect(testTrainer).toHaveProperty("leadPokemon");
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
      const bulbasaur = pokedex["bulbasaur"];
      testTrainer.catchPokemon(bulbasaur);
      expect(testTrainer.team[0]).toEqual(bulbasaur);
    });
    // test("trainer object has a releasePokemon method", () => {
    //   const testTrainer = new Trainer();
    //   expect("releasePokemon" in testTrainer).toBe(true);
    //   expect("free" in testTrainer).toBe(false);
    // });
  });
});
