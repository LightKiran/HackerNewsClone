import { combineReducers } from 'redux';

import app from './app/reducer';
import story from './story/reducer';


// combine reducer take all sepeater object for store 
// then combine with larger object with name as a key

const rootReducer = combineReducers({
  app,
  story,
});

export default rootReducer;