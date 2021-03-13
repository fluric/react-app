import { get } from 'lodash';

export const getCategories = state => get(state, 'jokes.categories');
