import React, { useEffect, useState } from 'react';
import { jokeTypes } from 'main/webapp/components/jokes/Constants';
import { Divider, GridRow } from 'semantic-ui-react';
import { StyledSegment } from 'main/webapp/components/jokes/Jokes.style';

const DELIVERY_DELAY = 3000; // ms

const JokesBoard = props => {
  const { type, joke, setup, delivery } = props.joke;
  const [showDelivery, setShowDelivery] = useState(false);

  useEffect(() => {
    setShowDelivery(false);
    setTimeout(() => setShowDelivery(true), DELIVERY_DELAY);
  }, [delivery]);

  const singlePartJoke = type === jokeTypes.SINGLE_PART;

  const SinglePartJoke = () => <>{joke}</>;

  const TwoPartJoke = () => (
    <>
      {setup}
      <Divider section />
      {showDelivery && <>{delivery}</>}
    </>
  );

  return (
    <GridRow>
      <StyledSegment>{singlePartJoke ? <SinglePartJoke /> : <TwoPartJoke />}</StyledSegment>
    </GridRow>
  );
};
export default JokesBoard;
