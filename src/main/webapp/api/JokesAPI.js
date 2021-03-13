import axios from 'axios';
import { setCategories } from 'main/webapp/store/action-creators/JokesActionCreator';
import { withLoading } from 'main/webapp/store/LoadingUtility';

const INSTANCE = axios.create({
  baseURL: 'https://jokeapi-v2.p.rapidapi.com',
  timeout: 1000,
  headers: { 'x-rapidapi-key': process.env.RAPID_API_KEY },
});

export const loadJokeCategories = dispatch =>
  withLoading(INSTANCE.get('/categories').then(({ data: { categories } }) => dispatch(setCategories(categories))));

export const loadJoke = category => withLoading(INSTANCE.get(`joke/${category}`));
