import React, { useState } from 'react';
import { Container, Grid, GridColumn, Transition } from 'semantic-ui-react';
import { isNull } from 'lodash';

import { ButtonContainer, StyledButton } from 'main/webapp/components/RockPaperScissors.style';
import {
  Actions,
  Colors,
  defaultColors,
  getOpponentAction,
  getOppositeOutcome,
  getOutcome,
} from 'main/webapp/utilities/RockPaperScissorsUtility';

export const RockPaperScissors = () => {
  const [, setAction] = useState(null);
  const [colors, setColors] = useState({ [Actions.PAPER]: null, [Actions.ROCK]: null, [Actions.SCISSORS]: null });
  const [opponentAction, setOpponentAction] = useState(null);
  const [opponentColor, setOpponentColor] = useState(null);

  const executeRound = nextAction => {
    const nextOpponentAction = getOpponentAction();
    const outcome = getOutcome(nextAction, nextOpponentAction);
    const oppositeOutcome = getOppositeOutcome(outcome);

    setAction(nextAction);
    const nextColors = { ...defaultColors, [nextAction]: Colors[outcome] };
    setColors(nextColors);
    setOpponentColor(Colors[oppositeOutcome]);
    setOpponentAction(nextOpponentAction);
  };

  const onClick = ({ currentTarget: { id: action } }) => executeRound(action);

  return (
    <Container>
      <Grid columns={2} centered>
        <GridColumn mobile={3}>
          <ButtonContainer>
            <StyledButton
              size={'large'}
              id={Actions.ROCK}
              icon='hand rock'
              onClick={onClick}
              color={colors[Actions.ROCK]}
            />
            <StyledButton
              size={'large'}
              id={Actions.PAPER}
              icon='hand paper'
              onClick={onClick}
              color={colors[Actions.PAPER]}
            />
            <StyledButton
              size={'large'}
              id={Actions.SCISSORS}
              icon='hand scissors'
              onClick={onClick}
              color={colors[Actions.SCISSORS]}
            />
          </ButtonContainer>
        </GridColumn>
        <GridColumn mobile={3} verticalAlign={'middle'}>
          <Transition visible={!isNull(opponentAction)}>
            <StyledButton icon={`hand ${opponentAction}`} size={'large'} color={opponentColor} />
          </Transition>
        </GridColumn>
      </Grid>
    </Container>
  );
};
