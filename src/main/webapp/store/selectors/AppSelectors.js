import { get } from 'lodash';

export const getIsLoading = state => get(state, 'app.isLoading');

export const getLoadingStack = state => get(state, 'app.loadingStack');
