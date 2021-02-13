import React, { useState } from 'react';
import { Container, Grid, GridColumn, Transition } from 'semantic-ui-react';

import { ButtonContainer, StyledButton } from 'main/webapp/components/RockPaperScissors.style';
import {
  Actions,
  Colors,
  defaultColors,
  getOpponentAction,
  getOutcome,
  OpponentColors,
} from 'main/webapp/utilities/RockPaperScissorsUtility';

const OPPONENT_DELAY = 500; // ms

const ButtonWrapper = props => {
  const { id, color, onClick } = props;
  return <StyledButton size={'large'} id={id} icon={`hand ${id}`} onClick={onClick} color={color} />;
};

export const RockPaperScissors = ({ onOutcome }) => {
  const [, setAction] = useState(null);
  const [colors, setColors] = useState(defaultColors);
  const [opponentAction, setOpponentAction] = useState(null);
  const [opponentColor, setOpponentColor] = useState(null);
  const [showOpponent, setShowOpponent] = useState(false);
  const [actionHistory, setActionHistory] = useState([]);

  const executeRound = nextAction => {
    const nextOpponentAction = getOpponentAction();
    const outcome = getOutcome(nextAction, nextOpponentAction);
    const nextColors = { ...defaultColors, [nextAction]: Colors[outcome] };

    setShowOpponent(false);
    setColors(defaultColors);
    setAction(nextAction);
    setActionHistory([...actionHistory, { action: nextAction, opponentAction: nextOpponentAction }]);
    setTimeout(() => {
      setColors(nextColors);
      setOpponentColor(OpponentColors[outcome]);
      setOpponentAction(nextOpponentAction);
      onOutcome(outcome);
      setShowOpponent(true);
    }, OPPONENT_DELAY);
  };

  const onClick = ({ currentTarget: { id: action } }) => executeRound(action);

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
          <Transition visible={showOpponent} transitionOnMount>
            <StyledButton size={'large'} id={'opponent'} icon={`hand ${opponentAction}`} color={opponentColor} />
          </Transition>
        </GridColumn>
      </Grid>
    </Container>
  );
};
