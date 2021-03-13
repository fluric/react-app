import React from 'react';
import { jokeType } from 'main/webapp/components/jokes/Constants';

const JokesBoard = props => {
  const { type, joke, setup, delivery } = props.joke;

  return type === jokeType.SINGLE_PART ? <>{joke}</> : <>{`${setup}${delivery}`}</>;
};
export default JokesBoard;
