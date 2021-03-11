import React, { useEffect, useState } from 'react';
import { Container, Grid, GridColumn, Transition } from 'semantic-ui-react';
import { isNull } from 'lodash';

import { ButtonContainer, StyledButton } from 'main/webapp/components/rock-paper-scissors/RockPaperScissors.style';
import {
  Actions,
  Colors,
  defaultColors,
  getOutcome,
  OPPONENT_DELAY,
  OpponentColors,
} from 'main/webapp/utilities/RockPaperScissorsUtility';
import { Strategies } from 'main/webapp/components/rock-paper-scissors/RockPaperScissorsStrategies';

const ButtonWrapper = ({ id, color, onClick }) => (
  <StyledButton size={'large'} id={id} icon={`hand ${id}`} onClick={onClick} color={color} />
);

export const RockPaperScissors = ({ onOutcome, level }) => {
  const [colors, setColors] = useState(defaultColors);
  const [opponentAction, setOpponentAction] = useState(null);
  const [opponentColor, setOpponentColor] = useState(null);
  const [showOpponent, setShowOpponent] = useState(true);
  const [actionHistory, setActionHistory] = useState([]);

  const getOpponentAction = Strategies[level];

  useEffect(() => resetComponent(), [level]);

  const resetComponent = () => {
    setActionHistory([]);
    setColors(defaultColors);
    setOpponentAction(null);
    setOpponentColor(null);
    setShowOpponent(true);
  };

  const executeRound = nextAction => {
    const nextOpponentAction = getOpponentAction(actionHistory);
    const outcome = getOutcome(nextAction, nextOpponentAction);
    const nextColors = { ...defaultColors, [nextAction]: Colors[outcome] };

    // prepare transition
    setShowOpponent(false);
    setColors(defaultColors);

    // execute changes after transition
    setTimeout(() => {
      setActionHistory([...actionHistory, { action: nextAction, opponentAction: nextOpponentAction }]);
      setColors(nextColors);
      setOpponentColor(OpponentColors[outcome]);
      setOpponentAction(nextOpponentAction);
      onOutcome(outcome);
      setShowOpponent(true);
    }, OPPONENT_DELAY);
  };

  const onClick = ({ currentTarget: { id: action } }) => showOpponent && executeRound(action);

  return (
    <Container>
      <Grid columns={2} centered>
        <GridColumn mobile={3}>
          <ButtonContainer>
            <ButtonWrapper id={Actions.ROCK} color={colors[Actions.ROCK]} onClick={onClick} />
            <ButtonWrapper id={Actions.PAPER} color={colors[Actions.PAPER]} onClick={onClick} />
            <ButtonWrapper id={Actions.SCISSORS} color={colors[Actions.SCISSORS]} onClick={onClick} />
          </ButtonContainer>
        </GridColumn>
        <GridColumn mobile={3} verticalAlign={'middle'}>
          <Transition visible={showOpponent && !isNull(opponentAction)} transitionOnMount>
            <ButtonContainer>
              <StyledButton
                size={'large'}
                id={'opponent'}
                icon={opponentAction && `hand ${opponentAction}`}
                color={opponentColor}
              />
            </ButtonContainer>
          </Transition>
        </GridColumn>
      </Grid>
    </Container>
  );
};
