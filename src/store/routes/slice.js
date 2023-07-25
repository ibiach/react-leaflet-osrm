import { createSlice } from '@reduxjs/toolkit';

import { STATUSES } from '@services/constants';

const initialState = {
  routes: [],
  status: STATUSES.IDLE,
  error: '',
};

export const routesSlice = createSlice({
  initialState,
  name: 'routesSlice',
  reducers: {
    fetchRoutes() {
      const newState = {
        ...initialState,
        status: STATUSES.LOADING,
      };

      return newState;
    },

    fetchRoutesSuccess(state, action) {
      state.routes = action.payload;
      state.status = STATUSES.SUCCESS;
    },

    fetchRoutesFailed(state, action) {
      state.routes = [];
      state.error = action.payload;
      state.status = STATUSES.ERROR;
    },
  },
});

export const routesActions = routesSlice.actions;
