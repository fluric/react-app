import React, { useState } from 'react';
import { Grid, GridRow, Segment } from 'semantic-ui-react';
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
    <Grid centered columns={1}>
      <GridRow>
        <ScoreBoard score={score} opponentScore={opponentScore} />
      </GridRow>
      <GridRow>
        <RockPaperScissors onOutcome={onOutcome} />
      </GridRow>
    </Grid>
  );
};
