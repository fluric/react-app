import { END_LOADING, START_LOADING } from 'main/webapp/store/constants/AppConstants';

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});
