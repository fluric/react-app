import React, { useEffect, useState } from 'react';
import { Button, Dropdown, GridRow } from 'semantic-ui-react';
import { loadJokeCategories } from 'main/webapp/api/JokesAPI';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'main/webapp/store/selectors/JokesSelectors';

const Jokes = () => {
  const categories = useSelector(getCategories);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dropdownOptions = categories.map(category => ({ key: category, text: category, value: category }));

  useEffect(() => {
    dispatch(loadJokeCategories);
  }, []);

  return (
    <GridRow>
      <Button onClick={() => console.log('click')}>Get Joke</Button>
      <Dropdown
        placeholder='Type'
        fluid
        selection
        options={dropdownOptions}
        onChange={(event, { value }) => setSelectedCategory(value)}
        value={selectedCategory}
      />
    </GridRow>
  );
};

export default Jokes;
