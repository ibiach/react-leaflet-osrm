import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useWaypoints } from '@components/waypoints-provider';
import { selectRoutesData } from '@store/routes';
import { AutoFitBounds } from './autofit-bounds';

const CENTER = [59.82761295, 30.41705607];

const StyledMapContainer = styled(MapContainer)`
  width: calc(100% - 300px);
  height: 100vh;
`;

const RoutesMap = () => {
  const { selectedWaypoint } = useWaypoints();

  const routes = useSelector(selectRoutesData);

  const bounds = selectedWaypoint.points;
  const polyline = routes.map(([lng, lat]) => [lat, lng]);

  return (
    <StyledMapContainer center={CENTER} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <Polyline color='red' opacity={0.65} weight={8} positions={polyline} />

      {bounds.map((points, idx) => (
        <Marker key={idx} position={points} />
      ))}

      <AutoFitBounds bounds={bounds} />
    </StyledMapContainer>
  );
};

export { RoutesMap };
