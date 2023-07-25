import { call, put, takeLatest } from 'redux-saga/effects';
import { routesService } from '@services';

import { routesActions } from './slice';

function* fetchRoutes(action) {
  try {
    const { profile, points } = action.payload;

    const response = yield call(routesService.getRoutes, profile, points);

    yield put(routesActions.fetchRoutesSuccess(response));
  } catch (error) {
    yield put(routesActions.fetchRoutesFailed(error.message));
  }
}

export function* routesWatcher() {
  yield takeLatest([routesActions.fetchRoutes.type], fetchRoutes);
}
