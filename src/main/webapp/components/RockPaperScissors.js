import React, { useState } from 'react';
import { Button, Container, Grid, GridColumn, Transition } from 'semantic-ui-react';
import { OpponentButton } from 'main/webapp/components/RockPaperScissors.style';
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
      <Grid>
        <GridColumn>
          <Button id={Moves.ROCK} icon='hand rock' onClick={onClick} primary={selected === Moves.ROCK} />
          <Button id={Moves.PAPER} icon='hand paper' onClick={onClick} primary={selected === Moves.PAPER} />
          <Button id={Moves.SCISSORS} icon='hand scissors' onClick={onClick} primary={selected === Moves.SCISSORS} />
        </GridColumn>
        <GridColumn>
          <Transition visible={!isNull(selected)}>
            <OpponentButton icon={`hand ${opponentMove}`} />
          </Transition>
        </GridColumn>
      </Grid>
    </Container>
  );
};
