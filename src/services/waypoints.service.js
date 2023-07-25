import { API_URL } from '@config/environment';

import { HttpService } from './http.service';

const waypoints = {
  getWaypoints: '/waypoints',
};

class WaypointsService extends HttpService {
  getWaypoints = async () => {
    return this.get(waypoints.getWaypoints);
  };
}

const waypointsService = new WaypointsService(API_URL);

export { waypointsService };
