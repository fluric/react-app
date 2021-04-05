import {
  getDummyAction,
  getGreedyAction,
  getLastWinAction,
  getNoScissorsAction,
  getTit42TatAction,
} from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsStrategies';
import bargrak from 'main/webapp/images/bargrakIronFist.jpg';
import gothmog from 'main/webapp/images/gothmogTheDetermined.jpg';
import golum from 'main/webapp/images/greedyGolum.jpg';
import saruman from 'main/webapp/images/cunningSaruman.jpg';
import shokk from 'main/webapp/images/shokkTheReluctant.jpg';

export const opponents = {
  1: {
    strategy: getDummyAction,
    image: bargrak,
    name: 'Bargrak Iron Fist',
  },
  2: {
    strategy: getLastWinAction,
    image: shokk,
    name: 'Shokk the Reluctant',
  },
  // 3: {
  //   strategy:, //TODO: always changing
  //   image: denethor,
  //   name: 'Denethor the Unstable'
  // }
  3: {
    strategy: getNoScissorsAction,
    image: gothmog,
    name: 'Gothmog the Determined',
  },
  4: {
    strategy: getGreedyAction,
    image: golum,
    name: 'Greedy Golum',
  },
  5: {
    strategy: getTit42TatAction,
    image: saruman,
    name: 'Cunning Saruman',
  },
  // 7: {
  //   strategy: , //TODO: balanced play, always play what was chosen the least often, otherwise random
  //   image: smaug,
  //   name: 'Smaug Master of Skies',
  // },
  // 8: {
  //   strategy: , //TODO: play the move that it lost the longest ago
  //   image: shelob,
  //   name: 'Careful Shelob',
  // },
  // 9: {
  //   strategy: ,//TODO: statistical most likely win -> what was played the most -> take winning move
  //   image: sauron,
  //   name: 'All knowing Sauron',
  // },
};
