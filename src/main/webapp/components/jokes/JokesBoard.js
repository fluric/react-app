import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Button, Dropdown, Grid, GridRow } from 'semantic-ui-react';
import { isEmpty, isNull } from 'lodash';

import { getCategories } from 'main/webapp/store/selectors/JokesSelectors';
import { loadJoke, loadJokeCategories } from 'main/webapp/api/JokesAPI';
import Joke from 'main/webapp/components/jokes/Joke';

const JokesBoard = () => {
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [joke, setJoke] = useState({});

  const dropdownOptions = categories.map(category => ({ key: category, text: category, value: category }));

  useEffect(() => {
    dispatch(loadJokeCategories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = () => loadJoke(selectedCategory).then(({ data }) => setJoke(data));

  return (
    <Grid centered columns={1}>
      <GridRow>
        <Dropdown
          placeholder='Type'
          selection
          options={dropdownOptions}
          onChange={(event, { value }) => setSelectedCategory(value)}
          value={selectedCategory}
        />
        <Button onClick={onClick} primary disabled={isNull(selectedCategory)}>
          <FormattedMessage id={'app.jokes.button.text'} />
        </Button>
      </GridRow>
      {!isEmpty(joke) && <Joke joke={joke} />}
    </Grid>
  );
};
export default JokesBoard;
