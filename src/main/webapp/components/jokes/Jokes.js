import React, { useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jokeapi-v2.p.rapidapi.com',
  timeout: 1000,
  headers: { 'x-rapidapi-key': process.env.RAPID_API_KEY },
});

const Jokes = () => {
  useEffect(() => {
    instance.get('/categories').then(response => console.log(response));
  }, []);

  return <Button onClick={() => console.log('click')}>Get Joke</Button>;
};

export default Jokes;
