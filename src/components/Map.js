import * as React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import MapStyles from "./map.module.scss";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  MapState
} from 'react-map-gl';

import ControlPanel from './control-panel';
import Pins from './pins';

const TOKEN = 'pk.eyJ1IjoiYWRhZ2lyaSIsImEiOiJja2VqM3kwbGExcGxoMnpveWxiMnJoMXdtIn0.j4C4jskgD_ivqYC_q-cg5A';

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
  zIndex: 30
};

const fullscreenControlStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px',
  zIndex: 30
};

const navStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px',
  zIndex: 30
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px',
  zIndex: 30
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 6.6193,
        longitude: 3.3007,
        zoom: 12,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
  }


  _updateViewport = viewport => {
    this.setState({viewport});
  };

  _onClickMarker = city => {
    this.setState({popupInfo: city});
  };

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={7}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={true}
          onClose={() => this.setState({popupInfo: null})}
        >
      
        <p style={{background: "#010f15", color: "#dcc384",  padding: "12px"}}>
        Aesthetics Marble World
        </p>
        
        </Popup>
      )
    );
  }

  render() {
    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        className={MapStyles.map}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Pins  onClick={this._onClickMarker} />

        {this._renderPopup()}

        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>

        <ControlPanel containerComponent={this.props.containerComponent} />
      </MapGL>
    );
  }
}

export function renderToDom(container) {
  render(<App />, container);
}