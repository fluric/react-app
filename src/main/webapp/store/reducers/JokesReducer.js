import { SET_CATEGORIES } from 'main/webapp/store/constants/JokesConstants';

const JokesReducer = (draft, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      draft.jokes.categories = action.payload;
      break;
  }
};

export default JokesReducer;
