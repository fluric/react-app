import { END_LOADING, START_LOADING } from 'main/webapp/store/constants/AppConstants';
import { getLoadingStack } from 'main/webapp/store/selectors/AppSelectors';

const AppReducer = (draft, action) => {
  switch (action.type) {
    case START_LOADING: {
      draft.app.loadingStack = getLoadingStack(draft) + 1;
      draft.app.isLoading = true;
      break;
    }
    case END_LOADING: {
      const nextLoadingStack = getLoadingStack(draft) - 1;
      draft.app.loadingStack = nextLoadingStack;

      if (nextLoadingStack === 0) {
        draft.app.isLoading = false;
      }
      break;
    }
  }
};

export default AppReducer;
