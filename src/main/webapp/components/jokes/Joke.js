import React from 'react';
import { jokeTypes } from 'main/webapp/components/jokes/Constants';
import { Divider, GridRow } from 'semantic-ui-react';
import { StyledSegment } from 'main/webapp/components/jokes/Jokes.style';

const JokesBoard = props => {
  const { type, joke, setup, delivery } = props.joke;

  const singlePartJoke = type === jokeTypes.SINGLE_PART;

  const SinglePartJoke = () => <>{joke}</>;

  const TwoPartJoke = () => (
    <>
      {setup}
      <Divider section />
      {delivery}
    </>
  );

  return (
    <GridRow>
      <StyledSegment>{singlePartJoke ? <SinglePartJoke /> : <TwoPartJoke />}</StyledSegment>
    </GridRow>
  );
};
export default JokesBoard;
