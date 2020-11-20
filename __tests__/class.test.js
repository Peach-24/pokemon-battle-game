const { expect, test, describe } = require("@jest/globals");
const {
  Pokemon,
  GrassPokemon,
  FirePokemon,
  WaterPokemon,
} = require("../game-files/classes/pokemon-class.js");
const { Trainer } = require("../game-files/classes/trainer-class");
const { Battle } = require("../game-files/classes/battle-class");
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
    test("trainer object has a chosenPokemon property", () => {
      const testTrainer = new Trainer();
      expect(testTrainer).toHaveProperty("chosenPokemon");
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

describe("Battle constructor", () => {
  //Declaring pokemon for repeated use

  const charizard = new FirePokemon("charizard", 100, 30, 20, 40, "woof", [
    "tackle",
  ]);
  const blastoise = new WaterPokemon("blastoise", 100, 30, 20, 40, "gurgle", [
    "tackle",
  ]);
  const bulbasaur = new GrassPokemon("bulbasaur", 45, 49, 49, 45, "woof", [
    "tackle",
  ]);
  const growlithe = new FirePokemon("growlithe", 30, 20, 20, 20, "woof", [
    "scratch",
  ]);
  const lapras = new WaterPokemon("lapras", 100, 10, 40, 20, "gurgle", [
    "scratch",
  ]);

  const testTrainerAsh = new Trainer("Ash");
  const testTrainerGary = new Trainer("Gary");

  test("Battle should have trainer1, trainer 2, attacker and defender props", () => {
    const testBattle = new Battle(testTrainerAsh, testTrainerGary);
    expect(testBattle).toHaveProperty("trainer1");
    expect(testBattle).toHaveProperty("trainer2");
    expect(testBattle).toHaveProperty("attacker");
    expect(testBattle).toHaveProperty("defender");
    expect(testBattle).toHaveProperty("currentTurn");
  });
  test("Battle's currentTurn prop should initialize to 1", () => {
    const testBattle = new Battle(testTrainerAsh, testTrainerGary);
    expect(testBattle.currentTurn).toBe(1);
  });
  describe.only("METHODS", () => {
    test("Battle constructor has selectPokemon method", () => {
      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      expect("selectPokemon" in testBattle).toBe(true);
    });
    xtest("the selectPokemon method only allows selection of alive pokemon", () => {
      const testTrainerAsh = new Trainer("Ash");
      const testTrainerGary = new Trainer("Gary");
      testTrainerAsh.catchPokemon(bulbasaur);
      testTrainerGary.catchPokemon(lapras);
      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
    });
    test("Assigns chosen pokemon from the selected trainer's squad", () => {
      const testTrainerAsh = new Trainer("Ash");
      const testTrainerGary = new Trainer("Gary");
      testTrainerAsh.catchPokemon(charizard);
      testTrainerAsh.catchPokemon(blastoise);
      testTrainerGary.catchPokemon(lapras);
      testTrainerGary.catchPokemon(bulbasaur);
      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      testBattle.selectPokemon(testTrainerAsh, 1);
      testBattle.selectPokemon(testTrainerGary, 1);
      expect(testTrainerAsh.chosenPokemon).toBe(blastoise);
      expect(testTrainerGary.chosenPokemon).toBe(bulbasaur);
    });
    test("Has a fight method", () => {
      const testTrainerAsh = new Trainer("Ash");
      const testTrainerGary = new Trainer("Gary");
      const testBattle = new Battle(testTrainerGary, testTrainerAsh);
      expect("fight" in testBattle).toBe(true);
    });
    test("Each time the fight method is called, currentTurn increments", () => {
      testTrainerAsh.catchPokemon(charizard);
      testTrainerGary.catchPokemon(blastoise);
      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      testBattle.fight();
      expect(testBattle.currentTurn).toBe(2);
      testBattle.fight();
      expect(testBattle.currentTurn).toBe(3);
    });
    describe("EFFECTIVENESS", () => {
      test("When a fire type goes against a grass type, each pokemon's effectiveness should be updated", () => {
        testTrainerAsh.catchPokemon(charizard);
        testTrainerGary.catchPokemon(bulbasaur);
        const testBattle = new Battle(testTrainerAsh, testTrainerGary);
        testBattle.fight();
        expect(testTrainerAsh.chosenPokemon.effectiveness).toBe(1.25);
        testBattle.fight();
        expect(testTrainerGary.chosenPokemon.effectiveness).toBe(0.75);
      });
      test("When a fire type goes against a water type, each pokemon's effectiveness should be updated", () => {
        testTrainerAsh.catchPokemon(charizard);
        testTrainerGary.catchPokemon(blastoise);
        const testBattle = new Battle(testTrainerAsh, testTrainerGary);
        testBattle.fight();
        expect(testTrainerAsh.chosenPokemon.effectiveness).toBe(0.75);
        testBattle.fight();
        expect(testTrainerGary.chosenPokemon.effectiveness).toBe(1.25);
      });
      test("When a water type goes against a grass type, each pokemon's effectiveness should be updated", () => {
        testTrainerAsh.catchPokemon(blastoise);
        testTrainerGary.catchPokemon(bulbasaur);
        const testBattle = new Battle(testTrainerAsh, testTrainerGary);
        testBattle.fight();
        expect(testTrainerAsh.chosenPokemon.effectiveness).toBe(0.75);
        testBattle.fight();
        expect(testTrainerGary.chosenPokemon.effectiveness).toBe(1.25);
      });
      test("When a normal type goes against another type, each pokemon's effectiveness should be updated", () => {
        const testBattle = new Battle(testTrainerAsh, testTrainerGary);
        testBattle.fight();
        expect(testTrainerAsh.chosenPokemon.effectiveness).toBe(1);
        testBattle.fight();
        expect(testTrainerGary.chosenPokemon.effectiveness).toBe(1);
      });
    });
    test("When a pokemon attacks, the opposing pokemon's health is reduced accordingly, including changing pokemon <---- :O", () => {
      testTrainerAsh.catchPokemon(charizard);
      testTrainerAsh.catchPokemon(bulbasaur);

      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      testBattle.fight();
      expect(testTrainerGary.chosenPokemon.health).toBe(85);
      testBattle.fight();
      expect(testTrainerAsh.chosenPokemon.health).toBe(87.5);
      testBattle.pickPokemon(testTrainerAsh, 1);
      testBattle.pickPokemon(testTrainerGary, 1);
      testBattle.fight();
      expect(testTrainerGary.chosenPokemon.health).toBe(80);
      testBattle.fight();
      expect(testTrainerAsh.chosenPokemon.health).toBe(90);
    });

    test("when fight is called, attacker and defender are correctly assigned, and change each time fight() is invoked", () => {
      testTrainerAsh.catchPokemon(charizard);
      testTrainerGary.catchPokemon(blastoise);
      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      expect(testBattle.attacker).toBe(charizard);
      expect(testBattle.defender).toBe(blastoise);
      testBattle.fight();
      expect(testBattle.attacker).toBe(blastoise);
      expect(testBattle.defender).toBe(charizard);
    });

    test("Attacks should be followed by a message depending on the defender's weakness/strength.", () => {
      const consoleSpy = jest.spyOn(console, "log");

      testTrainerAsh.catchPokemon(charizard);
      testTrainerGary.catchPokemon(blastoise);
      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      testBattle.fight();
      expect(consoleSpy).toHaveBeenCalledWith("Pahahaha... weak attack.");
      testBattle.fight();
      expect(consoleSpy).toHaveBeenCalledWith("Woah! Nice moves bro.");
    });
    test("There is an attack message for a neutral attack", () => {
      const consoleSpy = jest.spyOn(console, "log");

      testTrainerAsh.catchPokemon(charizard);

      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      testBattle.fight();
      expect(consoleSpy).toHaveBeenCalledWith("... grr!");
    });
    test("If defender's health reaches 0 or below, the attacker is declared the winner", () => {
      const consoleSpy = jest.spyOn(console, "log");

      testTrainerAsh.catchPokemon(charizard);

      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      testBattle.fight();
      testBattle.fight();
      testBattle.fight();
      testBattle.fight();
      expect(consoleSpy).toHaveBeenCalledWith(
        "charizard fainted... rattata has won the battle!"
      );
    });
    test("fight method is only invoked if both the attacker & defender's health is above 0", () => {
      testTrainerAsh.catchPokemon(charizard);

      const testBattle = new Battle(testTrainerAsh, testTrainerGary);
      testBattle.fight();
      testBattle.fight();
      testBattle.fight();
      testBattle.fight();
      expect(testBattle.attacker.health).toBe(0);
      testBattle.fight();
      expect(testBattle.defender.health).toBe(0);
    });

    describe("declaring a winner", () => {
      test("A trainer is announced winner when the opponent runs out of alive pokemon (1 pokemon each)", () => {
        const consoleSpy = jest.spyOn(console, "log");

        testTrainerAsh.catchPokemon(charizard);

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
    });
  });
});
