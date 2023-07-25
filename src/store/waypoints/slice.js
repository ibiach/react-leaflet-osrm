import { createSlice } from '@reduxjs/toolkit';

import { STATUSES } from '@services/constants';

const initialState = {
  waypoints: [],
  status: STATUSES.IDLE,
  error: '',
};

export const waypointsSlice = createSlice({
  initialState,
  name: 'waypointsSlice',
  reducers: {
    fetchWaypoints() {
      const newState = {
        ...initialState,
        status: STATUSES.LOADING,
      };

      return newState;
    },

    fetchWaypointsSuccess(state, action) {
      state.waypoints = action.payload;
      state.status = STATUSES.SUCCESS;
    },

    fetchWaypointsFailed(state, action) {
      state.waypoints = [];
      state.error = action.payload;
      state.status = STATUSES.ERROR;
    },
  },
});

export const waypointsActions = waypointsSlice.actions;
