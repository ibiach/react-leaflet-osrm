import { createSelector } from 'reselect';

import { STATUSES } from '@services/constants';

import { routesSlice } from './slice';

export const selectRoutes = state => state[routesSlice.name];

export const selectRoutesData = createSelector(selectRoutes, slice => slice.routes);
export const selectRoutesLoading = createSelector(selectRoutes, slice => slice.status === STATUSES.LOADING);
