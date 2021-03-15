import { last, nth, random } from 'lodash';

import { ActionList, Actions } from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsUtility';

export const getDummyAction = () => {
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

export const getTit4TatAction = actionHistory => {
  if (actionHistory.length === 0) {
    return getRandomAction();
  }
  return last(actionHistory).action;
};

export const getTit42TatAction = actionHistory => {
  if (actionHistory.length < 2) {
    return getRandomAction();
  }
  return nth(actionHistory, -2).action;
};

export const getNoScissorsAction = () => {
  const index = random(1);
  return ActionList[index];
};

export const getRandomAction = () => {
  const index = random(2);
  return ActionList[index];
};
