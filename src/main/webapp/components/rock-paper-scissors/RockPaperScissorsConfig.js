import {
  getBalancedAction,
  getDummyAction,
  getEverChangingAction,
  getGreedyAction,
  getLastWinAction,
  getLongestLossAction,
  getNoScissorsAction,
  getTit42TatAction,
} from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsStrategies';
import bargrak from 'main/webapp/images/bargrakIronFist.jpg';
import gothmog from 'main/webapp/images/gothmogTheUnbalanced.jpg';
import golum from 'main/webapp/images/greedyGolum.jpg';
import saruman from 'main/webapp/images/cunningSaruman.jpg';
import denethor from 'main/webapp/images/denethorTheUnstable.png';
import shokk from 'main/webapp/images/shokkTheDetermined.jpg';
import smaug from 'main/webapp/images/smaugMasterOfSkies.jpeg';
import shelob from 'main/webapp/images/carefulShelob.jpg';

export const opponents = {
  1: {
    strategy: getDummyAction,
    image: bargrak,
    name: 'Bargrak Iron Fist',
  },
  2: {
    strategy: getLastWinAction,
    image: shokk,
    name: 'Shokk the Determined',
  },
  3: {
    strategy: getEverChangingAction,
    image: denethor,
    name: 'Denethor the Unstable',
  },
  4: {
    strategy: getNoScissorsAction,
    image: gothmog,
    name: 'Gothmog the Unbalanced',
  },
  5: {
    strategy: getGreedyAction,
    image: golum,
    name: 'Greedy Golum',
  },
  6: {
    strategy: getTit42TatAction,
    image: saruman,
    name: 'Cunning Saruman',
  },
  7: {
    strategy: getBalancedAction,
    image: smaug,
    name: 'Smaug Master of the Skies',
  },
  8: {
    strategy: getLongestLossAction,
    image: shelob,
    name: 'Careful Shelob',
  },
  // 9: {
  //   strategy: ,//TODO: statistical most likely win -> what was played the most -> take winning move
  //   image: sauron,
  //   name: 'All knowing Sauron',
  // },
};
