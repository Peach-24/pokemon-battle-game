const { effectiveness } = require("../game-files/types");

it("Returns the correct multipliers from the(effectiveness", () => {
  expect(effectiveness["normal"]["fire"]).toBe(1);
  expect(effectiveness["normal"]["water"]).toBe(1);
  expect(effectiveness["normal"]["grass"]).toBe(1);
  expect(effectiveness["normal"]["normal"]).toBe(1);
  expect(effectiveness["fire"]["water"]).toBe(0.5);
  expect(effectiveness["fire"]["grass"]).toBe(1.5);
  expect(effectiveness["fire"]["fire"]).toBe(1);
  expect(effectiveness["fire"]["normal"]).toBe(1);
  expect(effectiveness["water"]["fire"]).toBe(1.5);
  expect(effectiveness["water"]["water"]).toBe(1);
  expect(effectiveness["water"]["grass"]).toBe(0.5);
  expect(effectiveness["water"]["normal"]).toBe(1);
  expect(effectiveness["grass"]["fire"]).toBe(0.5);
  expect(effectiveness["grass"]["water"]).toBe(1.5);
  expect(effectiveness["grass"]["grass"]).toBe(1);
  expect(effectiveness["grass"]["normal"]).toBe(1);
});
