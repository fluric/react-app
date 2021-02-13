import { random } from 'lodash';

import { ActionList } from 'main/webapp/utilities/RockPaperScissorsUtility';

const getDummyAction = () => {
  return ActionList[0];
};

export const getOpponentAction = () => {
  const index = random(2);
  return ActionList[index];
};

export const Strategies = { 1: getDummyAction, 2: getOpponentAction };
