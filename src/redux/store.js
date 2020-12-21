import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { language } from './reducers/language';
import { theme } from './reducers/theme';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';
import { sagas } from './saga';

const combinedReducers = combineReducers({ language, theme });

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(logger, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(sagas);
export const persistor = persistStore(store);
