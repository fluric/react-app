import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, GridRow, Header, Image, Segment } from 'semantic-ui-react';
import { RockPaperScissors } from 'main/webapp/components/rock-paper-scissors/RockPaperScissors';
import { OPPONENT_DELAY, Outcomes } from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsUtility';
import {
  FailureModal,
  LevelsCompleteModal,
  SuccessModal,
} from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsModals';
import { opponents } from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsConfig';

const SCORE_LIMIT = 5;

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

const RockPaperScissorsBoard = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showLevelsCompleteModal, setShowLevelsCompleteModal] = useState(false);

  useEffect(() => {
    if (score === SCORE_LIMIT && level < Object.keys(opponents).length) {
      setTimeout(() => setShowSuccessModal(true), OPPONENT_DELAY);
    }
  }, [score, level]);

  useEffect(() => {
    if (score === SCORE_LIMIT && level === Object.keys(opponents).length) {
      setTimeout(() => setShowLevelsCompleteModal(true), OPPONENT_DELAY);
    }
  }, [score, level]);

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

  const onConfirmLevelsComplete = () => {
    setShowLevelsCompleteModal(false);
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
      <GridRow>
        <Image src={opponents[level].image} size={'small'} />
      </GridRow>
      <GridRow>
        <strong>{opponents[level].name}</strong>
      </GridRow>
      <SuccessModal open={showSuccessModal} onConfirm={onConfirmSuccess} onDeny={onDenySuccess} />
      <FailureModal open={showFailureModal} onConfirm={onConfirmFailure} />
      <LevelsCompleteModal open={showLevelsCompleteModal} onConfirm={onConfirmLevelsComplete} />
    </Grid>
  );
};

export default RockPaperScissorsBoard;
