import { last, random } from 'lodash';

import { ActionList, Actions } from 'main/webapp/utilities/RockPaperScissorsUtility';

const getDummyAction = () => {
  return ActionList[0];
};

export const getGreedyAction = actionHistory => {
  if (actionHistory.length === 0) {
    return getRandomAction();
  }
  const lastAction = last(actionHistory).action;

  switch (lastAction) {
    case Actions.SCISSORS:
      return Actions.ROCK;
    case Actions.ROCK:
      return Actions.PAPER;
    case Actions.PAPER:
      return Actions.SCISSORS;
  }
};

export const getRandomAction = () => {
  const index = random(2);
  return ActionList[index];
};

export const Strategies = { 1: getDummyAction, 2: getGreedyAction, 3: getRandomAction };
