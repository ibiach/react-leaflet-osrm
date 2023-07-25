import { call, put, takeLatest } from 'redux-saga/effects';

import { waypointsService } from '@services';
import { waypointsActions } from './slice';

function* fetchWaypoints(action) {
  try {
    const response = yield call(waypointsService.getWaypoints, action.payload);

    yield put(waypointsActions.fetchWaypointsSuccess(response));
  } catch (error) {
    yield put(waypointsActions.fetchWaypointsFailed(error.message));
  }
}

export function* waypointsWatcher() {
  yield takeLatest([waypointsActions.fetchWaypoints.type], fetchWaypoints);
}
