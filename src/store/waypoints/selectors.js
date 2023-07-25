import { createSelector } from 'reselect';

import { STATUSES } from '@services/constants';

import { waypointsSlice } from './slice';

export const selectWaypoints = state => state[waypointsSlice.name];

export const selectWaypointsData = createSelector(selectWaypoints, slice => slice.waypoints);
export const selectWaypointsLoading = createSelector(selectWaypoints, slice => slice.status === STATUSES.LOADING);
