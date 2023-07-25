import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Table as BaseTable } from 'antd';

import { selectWaypointsData } from '@store/waypoints';
import { useWaypoints } from '@components/waypoints-provider';

const Table = styled(BaseTable)`
  width: 300px;
  height: 100%;
`;

const columns = [
  {
    key: 'id',
    dataIndex: 'name',
    title: 'Название маршрута',
  },
];

const WaypointsList = () => {
  const { selectedWaypoint, handleSelectWaypoint } = useWaypoints();

  const waypoints = useSelector(selectWaypointsData);

  const rowSelection = React.useMemo(
    () => ({
      type: 'radio',
      selectedRowKeys: selectedWaypoint ? [selectedWaypoint.id] : null,
      onSelect: handleSelectWaypoint,
    }),
    [selectedWaypoint, handleSelectWaypoint]
  );

  const dataSource = waypoints.map(waypoint => ({ ...waypoint, key: waypoint.id }));

  return <Table pagination={false} columns={columns} dataSource={dataSource} rowSelection={rowSelection} />;
};

export { WaypointsList };
