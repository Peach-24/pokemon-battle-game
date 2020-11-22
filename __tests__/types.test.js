const { effectivenessRef } = require("../game-files/types");

test("Returns the correct multipliers from the effectivenessRef", () => {
  expect(effectivenessRef["normal"]["fire"]).toBe(1);
  expect(effectivenessRef["normal"]["water"]).toBe(1);
  expect(effectivenessRef["normal"]["grass"]).toBe(1);
  expect(effectivenessRef["normal"]["normal"]).toBe(1);
  expect(effectivenessRef["fire"]["water"]).toBe(0.5);
  expect(effectivenessRef["fire"]["grass"]).toBe(1.5);
  expect(effectivenessRef["fire"]["fire"]).toBe(1);
  expect(effectivenessRef["fire"]["normal"]).toBe(1);
  expect(effectivenessRef["water"]["fire"]).toBe(1.5);
  expect(effectivenessRef["water"]["water"]).toBe(1);
  expect(effectivenessRef["water"]["grass"]).toBe(0.5);
  expect(effectivenessRef["water"]["normal"]).toBe(1);
  expect(effectivenessRef["grass"]["fire"]).toBe(0.5);
  expect(effectivenessRef["grass"]["water"]).toBe(1.5);
  expect(effectivenessRef["grass"]["grass"]).toBe(1);
  expect(effectivenessRef["grass"]["normal"]).toBe(1);
});
