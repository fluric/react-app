import React, { useState } from 'react';
import { Container, Grid, GridColumn, Transition } from 'semantic-ui-react';
import { ButtonContainer, StyledButton } from 'main/webapp/components/RockPaperScissors.style';
import { isNull } from 'lodash';

const Moves = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

const MovesList = [Moves.ROCK, Moves.PAPER, Moves.SCISSORS];

export const RockPaperScissors = () => {
  const [selected, setSelected] = useState(null);
  const [opponentMove, setOpponentMove] = useState('');

  const onClick = ({ target: { id } }) => {
    setSelected(id);
    const index = Math.floor(Math.random() * 3);
    setOpponentMove(MovesList[index]);
  };

  return (
    <Container>
      <Grid columns={2} centered>
        <GridColumn mobile={3}>
          <ButtonContainer>
            <StyledButton
              size={'large'}
              id={Moves.ROCK}
              icon='hand rock'
              onClick={onClick}
              primary={selected === Moves.ROCK}
            />
            <StyledButton
              size={'large'}
              id={Moves.PAPER}
              icon='hand paper'
              onClick={onClick}
              primary={selected === Moves.PAPER}
            />
            <StyledButton
              size={'large'}
              id={Moves.SCISSORS}
              icon='hand scissors'
              onClick={onClick}
              primary={selected === Moves.SCISSORS}
            />
          </ButtonContainer>
        </GridColumn>
        <GridColumn mobile={3} verticalAlign={'middle'}>
          <Transition visible={!isNull(selected)}>
            <StyledButton icon={`hand ${opponentMove}`} size={'large'} />
          </Transition>
        </GridColumn>
      </Grid>
    </Container>
  );
};
