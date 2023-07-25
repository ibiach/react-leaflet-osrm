import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';

import { waypointsActions, selectWaypointsLoading, routesActions } from '@store';
import { Loader } from '@components/loader';
import { RoutesMap } from '@components/routes-map';
import { WaypointsProvider } from '@components/waypoints-provider';
import { WaypointsList } from '@components/waypoints-list';

const Content = styled(Layout.Content)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const dispatch = useDispatch();

  const waypointsLoading = useSelector(selectWaypointsLoading);

  React.useEffect(() => {
    dispatch(waypointsActions.fetchWaypoints());
  }, []);

  const handleSelect = waypoint => {
    const payload = {
      profile: 'driver',
      points: waypoint.points,
    };

    dispatch(routesActions.fetchRoutes(payload));
  };

  if (waypointsLoading) {
    return (
      <Layout>
        <Content>
          <Loader />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout>
      <Content>
        <WaypointsProvider onSelect={handleSelect}>
          <WaypointsList />
          <RoutesMap />
        </WaypointsProvider>
      </Content>
    </Layout>
  );
};

export { App };
