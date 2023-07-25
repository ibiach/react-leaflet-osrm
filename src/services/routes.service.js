import qs from 'query-string';
import { OSRM_API_URL } from '@config/environment';

import { HttpService } from './http.service';

const routes = {
  getRoutes: '/route/v1/:profile/:coordinates',
};

class Routes extends HttpService {
  getRoutes = async (profile, points, params = { geometries: 'geojson', overview: 'full', steps: true }) => {
    const stringifyParams = qs.stringify(params);

    const url = this.createUrl(routes.getRoutes, {
      profile,
      coordinates: this.shapeCoordinates(points),
    });

    const response = await this.get(url + '?' + stringifyParams);

    return response.routes[0].geometry.coordinates;
  };

  shapeCoordinates(points) {
    const result = points.map(([lat, lng]) => [lng, lat].join(',')).join(';');

    return result;
  }
}

export const routesService = new Routes(OSRM_API_URL);
