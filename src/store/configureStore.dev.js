import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import api from '../middleware/api';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const configureStore = preloadedState => {
  compose(
    applyMiddleware(thunk, api, createLogger()),
    DevTools.instrument()
  );
  const store = createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configureStore;
