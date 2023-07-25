import React from 'react';

import { useEvent } from '@hooks';

const WaypointsContext = React.createContext(null);

const INITIAL_WAYPOINTS = {
  id: -1,
  name: '',
  points: [],
};

const WaypointsProvider = props => {
  const { onSelect, children } = props;

  const [selectedWaypoint, setSelectedWaypoint] = React.useState(INITIAL_WAYPOINTS);

  const handleSelect = useEvent(onSelect);

  const handleSelectWaypoint = React.useCallback(
    waypoint => {
      setSelectedWaypoint(waypoint);
      handleSelect(waypoint);
    },
    [handleSelect]
  );

  const ctx = React.useMemo(
    () => ({
      selectedWaypoint,
      handleSelectWaypoint,
    }),
    [selectedWaypoint, handleSelectWaypoint]
  );

  return <WaypointsContext.Provider value={ctx}>{children}</WaypointsContext.Provider>;
};

const useWaypoints = () => {
  const context = React.useContext(WaypointsContext);

  if (!context) {
    throw new Error('waypoints context is not init');
  }

  return context;
};

export { useWaypoints, WaypointsContext, WaypointsProvider };
