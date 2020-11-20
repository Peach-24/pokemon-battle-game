// Pokemon Generation 1 types

exports.types = ["normal", "fire", "water", "grass"];

// effectiveness refObj against each other basic type

exports.effectiveness = {
  normal: {
    normal: 1,
    fire: 1,
    water: 1,
    grass: 1,
  },
  fire: {
    normal: 1,
    fire: 1,
    water: 0.5,
    grass: 1.5,
  },
  water: {
    normal: 1,
    fire: 1.5,
    water: 1,
    grass: 0.5,
  },
  grass: {
    normal: 1,
    fire: 0.5,
    water: 1.5,
    grass: 1,
  },
};
