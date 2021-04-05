import { last, nth, random } from 'lodash';

import {
  ActionList,
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
