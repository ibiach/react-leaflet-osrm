import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';

import { waypointsSlice, waypointsWatcher } from './waypoints';
import { routesSlice, routesWatcher } from './routes';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  [waypointsSlice.name]: waypointsSlice.reducer,
  [routesSlice.name]: routesSlice.reducer,
});

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
  reducer: rootReducer,
});

function* rootSaga() {
  yield all([waypointsWatcher(), routesWatcher()]);
}

sagaMiddleware.run(rootSaga);

export { store };
