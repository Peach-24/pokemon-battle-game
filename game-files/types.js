// Pokemon Generation 1 types

const basicTypes = ["normal", "fire", "water", "grass"];

// Matrix for effectiveness against each other basic type

const matrix = [
  [1, 1, 1, 1],
  [1, 1, 0.5, 1.5],
  [1, 1.5, 1, 0.5],
  [1, 0.5, 1, 1.5],
];

const basicTypeLibrary = { basicTypes, matrix };
module.exports = basicTypeLibrary;

/*
Normal  [1, 1, 1, 1]
Fire    [1, 1, 0.5, 1.5]
Water   [1, 1.5, 1, 0.5]
Grass   [1, 0.5, 1, 1.5]
*/
