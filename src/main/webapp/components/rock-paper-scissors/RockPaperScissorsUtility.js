export const OPPONENT_DELAY = 500; // ms

export const Actions = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

export const ActionList = [Actions.ROCK, Actions.PAPER, Actions.SCISSORS];

export const Outcomes = {
  WIN: 'win',
  DRAW: 'draw',
  DEFEAT: 'defeat',
};

export const Colors = {
  DEFAULT: null,
  [Outcomes.WIN]: 'green',
  [Outcomes.DRAW]: 'blue',
  [Outcomes.DEFEAT]: 'red',
};

export const OpponentColors = {
  DEFAULT: null,
  [Outcomes.DEFEAT]: 'green',
  [Outcomes.DRAW]: 'blue',
  [Outcomes.WIN]: 'red',
};

export const defaultColors = {
  [Actions.PAPER]: Colors.DEFAULT,
  [Actions.ROCK]: Colors.DEFAULT,
  [Actions.SCISSORS]: Colors.DEFAULT,
};

export const getOutcome = (action, opponentAction) => {
  if (action === opponentAction) {
    return Outcomes.DRAW;
  }
  if (action === Actions.PAPER) {
    return opponentAction === Actions.SCISSORS ? Outcomes.DEFEAT : Outcomes.WIN;
  }
  if (action === Actions.SCISSORS) {
    return opponentAction === Actions.ROCK ? Outcomes.DEFEAT : Outcomes.WIN;
  }
  if (action === Actions.ROCK) {
    return opponentAction === Actions.PAPER ? Outcomes.DEFEAT : Outcomes.WIN;
  }
};

export const getWinningAction = action => {
  switch (action) {
    case Actions.SCISSORS:
      return Actions.ROCK;
    case Actions.ROCK:
      return Actions.PAPER;
    case Actions.PAPER:
      return Actions.SCISSORS;
  }
};
