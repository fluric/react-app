import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Container, Grid, GridRow, Header, Icon, Segment } from 'semantic-ui-react';

import { ModalWrapper } from 'main/webapp/components/wrappers/ModalWrapper';
import { RockPaperScissors } from 'main/webapp/components/RockPaperScissors';
import { OPPONENT_DELAY, Outcomes } from 'main/webapp/utilities/RockPaperScissorsUtility';

const SCORE_LIMIT = 2;

const ScoreBoard = ({ score, opponentScore }) => (
  <Segment compact>
    <FormattedMessage id={'app.rockPaperScissors.scoreBoard.result'} values={{ score, opponentScore }} />
  </Segment>
);

const LevelDisplay = ({ level }) => (
  <Header size={'medium'} textAlign={'center'}>
    <FormattedMessage id={'app.rockPaperScissors.scoreBoard.level'} values={{ level }} />
  </Header>
);

const SuccessModal = ({ open, onConfirm, onDeny }) => {
  return (
    <ModalWrapper
      open={open}
      header={<FormattedMessage id={'app.rockPaperScissors.levelSuccess.header'} />}
      content={<FormattedMessage id={'app.rockPaperScissors.levelSuccess.content'} />}
      actions={
        <Container>
          <Button basic color='red' inverted onClick={onDeny}>
            <Icon name='remove' />
            <FormattedMessage id={'app.rockPaperScissors.levelSuccess.deny'} />
          </Button>
          <Button color='green' inverted onClick={onConfirm}>
            <Icon name='checkmark' />
            <FormattedMessage id={'app.rockPaperScissors.levelSuccess.confirm'} />
          </Button>
        </Container>
      }
    />
  );
};

const FailureModal = ({ open, onConfirm }) => {
  return (
    <ModalWrapper
      open={open}
      header={<FormattedMessage id={'app.rockPaperScissors.levelFailure.header'} />}
      content={<FormattedMessage id={'app.rockPaperScissors.levelFailure.content'} />}
      actions={
        <Container>
          <Button inverted onClick={onConfirm}>
            <Icon name='checkmark' />
            <FormattedMessage id={'app.rockPaperScissors.levelFailure.confirm'} />
          </Button>
        </Container>
      }
    />
  );
};

export const RockPaperScissorsBoard = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);

  useEffect(() => {
    if (score === SCORE_LIMIT) {
      setTimeout(() => setShowSuccessModal(true), OPPONENT_DELAY);
    }
  }, [score]);

  useEffect(() => {
    if (opponentScore === SCORE_LIMIT) {
      setTimeout(() => setShowFailureModal(true), OPPONENT_DELAY);
    }
  }, [opponentScore]);

  const onOutcome = outcome => {
    outcome === Outcomes.WIN && setScore(score + 1);
    outcome === Outcomes.DEFEAT && setOpponentScore(opponentScore + 1);
  };

  const onConfirmSuccess = () => {
    setShowSuccessModal(false);
    setLevel(level + 1);
    resetScore();
  };

  const onDenySuccess = () => {
    setShowSuccessModal(false);
    resetScore();
  };

  const onConfirmFailure = () => {
    setShowFailureModal(false);
    setLevel(1);
    resetScore();
  };

  const resetScore = () => {
    setScore(0);
    setOpponentScore(0);
  };

  return (
    <Grid centered columns={1}>
      <GridRow>
        <LevelDisplay level={level} />
      </GridRow>
      <GridRow>
        <ScoreBoard score={score} opponentScore={opponentScore} />
      </GridRow>
      <GridRow>
        <RockPaperScissors onOutcome={onOutcome} level={level} />
      </GridRow>
      <SuccessModal open={showSuccessModal} onConfirm={onConfirmSuccess} onDeny={onDenySuccess} />
      <FailureModal open={showFailureModal} onConfirm={onConfirmFailure} />
    </Grid>
  );
};
