export const RED_COLOR = {
  trueTone: "#cc0000",
  firstColor: "#bd2f2f",
  secondColor: "#9c2b2b",
};

export const BLUE_COLOR = {
  trueTone: "#00aac0",
  firstColor: "#1c93b8",
  secondColor: "#1654a5",
};

export const YELLOW_COLOR = {
  trueTone: "#ceca00",
  firstColor: "#e9e655",
  secondColor: "#b6970f",
};

export const GREEN_COLOR = {
  trueTone: "#2ec500",
  firstColor: "#66ac5f",
  secondColor: "#15680e",
};

export const WHITE_COLOR = {
  trueTone: "#d8d8d8",
  firstColor: "#b4b4b4",
  secondColor: "#777777",
};

export const USER_TYPES = {
  CURRENT_USER: 0,
  BOT: 1,
};

export const COLORS = [
  RED_COLOR,
  BLUE_COLOR,
  YELLOW_COLOR,
  GREEN_COLOR,
  WHITE_COLOR,
];

//Assumindo que o player da sessão é sempre id=0
export const OPPONENTS = [
  {
    id: 1,
    name: "Pedrinho da Silva Ferreira",
    color: RED_COLOR,
    cash: 2000,
    type: USER_TYPES.BOT,
    houseNumber: 0,
    houses: [],
  },
  {
    id: 2,
    name: "Robervaldo da Cunha Borges",
    color: BLUE_COLOR,
    cash: 2000,
    type: USER_TYPES.BOT,
    houseNumber: 0,
    houses: [],
  },
  {
    id: 3,
    name: "Jossonaro Farias",
    color: YELLOW_COLOR,
    cash: 2000,
    type: USER_TYPES.BOT,
    houseNumber: 0,
    houses: [],
  },
];
