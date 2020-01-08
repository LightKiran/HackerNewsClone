 import { createStore } from 'redux'; // use to intitalize the store
import reducer from './reducer';
import middleware from './middleware';

const configureStore = initialState => {
  const store = createStore(reducer, initialState, middleware);
  return store;
};

export default configureStore;