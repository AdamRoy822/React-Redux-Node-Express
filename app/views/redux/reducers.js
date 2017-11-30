import { combineReducers } from 'redux-immutable';
import userReducer from '../Components/Tables/redux/reducers';

const appReducer = combineReducers({
  user: userReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
