import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';

// middleware
//--thunk
import thunk from 'redux-thunk';

//--redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
const sagaMiddleware = createSagaMiddleware();


const history = createBrowserHistory();
// const routeMiddleware = routerMiddleware(history);
const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const routeMiddleware = routerMiddleware(history);
  const middlewares = [thunk, sagaMiddleware]; // thunk, sagaMiddleware

  const store = createStore(reducers(history), initialState, bindMiddleware([routeMiddleware,...middlewares]));

  // comment out if use thunk
  sagaMiddleware.run(rootSaga);

  return store;
}
export default configureStore;
export { history };
