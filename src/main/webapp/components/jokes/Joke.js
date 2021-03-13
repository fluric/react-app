import React from 'react';
import { jokeTypes } from 'main/webapp/components/jokes/Constants';
import { Divider, GridRow, Segment } from 'semantic-ui-react';

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
      <Segment>{singlePartJoke ? <SinglePartJoke /> : <TwoPartJoke />}</Segment>
    </GridRow>
  );
};
export default JokesBoard;
