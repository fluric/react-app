import React, { useState } from 'react';
import { Grid, GridRow, Header, Segment } from 'semantic-ui-react';
import { RockPaperScissors } from 'main/webapp/components/RockPaperScissors';
import { Outcomes } from 'main/webapp/utilities/RockPaperScissorsUtility';
import { FormattedMessage } from 'react-intl';

const ScoreBoard = ({ score, opponentScore }) => (
  <Segment compact>
    <FormattedMessage id={'app.scoreBoard.result'} values={{ score, opponentScore }} />
  </Segment>
);

const LevelDisplay = () => (
  <Header size={'medium'} textAlign={'center'}>
    <FormattedMessage id={'app.scoreBoard.level'} values={{ level: '1' }} />
  </Header>
);

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
        <LevelDisplay />
      </GridRow>
      <GridRow>
        <ScoreBoard score={score} opponentScore={opponentScore} />
      </GridRow>
      <GridRow>
        <RockPaperScissors onOutcome={onOutcome} />
      </GridRow>
    </Grid>
  );
};
