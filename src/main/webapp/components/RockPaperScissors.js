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

export const ButtonWrapper = props => {
  const { id, color, onClick } = props;
  return <StyledButton size={'large'} id={id} icon={`hand ${id}`} onClick={onClick} color={color} />;
};

export const RockPaperScissors = () => {
  const [, setAction] = useState(null);
  const [colors, setColors] = useState(defaultColors);
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
            <ButtonWrapper id={Actions.ROCK} color={colors[Actions.ROCK]} onClick={onClick} />
            <ButtonWrapper id={Actions.PAPER} color={colors[Actions.PAPER]} onClick={onClick} />
            <ButtonWrapper id={Actions.SCISSORS} color={colors[Actions.SCISSORS]} onClick={onClick} />
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
