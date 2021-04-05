import { countBy, last, nth, random, sample } from 'lodash';

import {
  ActionList,
  Actions,
  getOutcome,
  getWinningAction,
  Outcomes,
} from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsUtility';

export const getDummyAction = () => {
  return ActionList[0];
};

export const getGreedyAction = actionHistory => {
  if (actionHistory.length === 0) {
    return getRandomAction();
  }
  const lastAction = last(actionHistory).action;

  return getWinningAction(lastAction);
};

export const getLastWinAction = actionHistory => {
  for (const { action, opponentAction } of actionHistory.reverse()) {
    if (getOutcome(action, opponentAction) === Outcomes.DEFEAT) {
      return opponentAction;
    }
  }
  return getRandomAction();
};

export const getEverChangingAction = actionHistory => {
  const randomAction = getRandomAction();

  if (actionHistory.length === 0) {
    return randomAction;
  }

  const lastAction = last(actionHistory).opponentAction;
  if (randomAction === lastAction) {
    return getEverChangingAction(actionHistory);
  }
  return randomAction;
};

export const getTit42TatAction = actionHistory => {
  if (actionHistory.length < 2) {
    return getRandomAction();
  }
  return nth(actionHistory, -2).action;
};

export const getBalancedAction = actionHistory => {
  const initValues = { [Actions.ROCK]: 0, [Actions.SCISSORS]: 0, [Actions.PAPER]: 0 };
  const countedActions = { ...initValues, ...countBy(actionHistory, 'opponentAction') };
  const minimum = Math.min(...Object.values(countedActions));

  const minimumActions = Object.keys(countedActions).filter(key => countedActions[key] === minimum);
  return sample(minimumActions);
};

export const getNoScissorsAction = () => {
  const index = random(1);
  return ActionList[index];
};

export const getRandomAction = () => {
  const index = random(2);
  return ActionList[index];
};
