import React, { useState } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { RockPaperScissors } from 'main/webapp/components/RockPaperScissors';
import { Outcomes } from 'main/webapp/utilities/RockPaperScissorsUtility';

const ScoreBoard = ({ score, opponentScore }) => <Segment compact>{`${score} : ${opponentScore}`}</Segment>;

export const RockPaperScissorsBoard = () => {
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  const onOutcome = outcome => {
    outcome === Outcomes.WIN && setScore(score + 1);
    outcome === Outcomes.DEFEAT && setOpponentScore(opponentScore + 1);
  };

  return (
    <Grid centered>
      <ScoreBoard score={score} opponentScore={opponentScore} />
      <RockPaperScissors onOutcome={onOutcome} />
    </Grid>
  );
};
