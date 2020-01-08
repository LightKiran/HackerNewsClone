 // helper function to build middleware and chain out
import { applyMiddleware, compose } from 'redux';

// middleware allow us to manage side-effect
import thunk from 'redux-thunk'; 

// allows us to inspect in our app life cycle
import { createLogger } from 'redux-logger';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [];

middlewareList.push(thunk);

if (!isProd) {
  middlewareList.push(createLogger());
}

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;