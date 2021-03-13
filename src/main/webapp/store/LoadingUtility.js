import { endLoading, startLoading } from 'main/webapp/store/action-creators/AppActionCreator';
import store from 'main/webapp/store/index';

export const withLoading = action => {
  store.dispatch(startLoading());

  return action.then(response => {
    store.dispatch(endLoading());
    return response;
  });
};
