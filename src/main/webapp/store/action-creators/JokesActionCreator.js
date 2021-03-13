import { SET_CATEGORIES } from 'main/webapp/store/constants/JokesConstants';

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});
