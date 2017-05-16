import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentWillReceiveProps(newProps) {
    this.MarkerManager.updateMarkers(newProps.benches);
  }

  render() {
    return <div id='map-container' ref="map"></div>;
  }
}

export default BenchMap;
