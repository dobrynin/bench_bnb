import { values, merge } from 'lodash';

export default class MarkerManager {
  constructor(map) {
      this.map = map;
      this.markers = {};
  }

  updateMarkers(benches) {
    values(benches).forEach ((bench) => {
      if (!Object.keys(this.markers).includes(bench.id)) {
        this.createMarkerFromBench(bench);
      }
    });
  }

  createMarkerFromBench(bench) {
    this.markers[bench.id] = bench;
    const marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
    });
  }

}
