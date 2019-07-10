import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewport: {
                width: 1100,
                height: 600,
                zoom: 11,
                latitude:47.608013, 
                longitude: -122.335167,
            },
        }
    }

    render() {
        return (
            <ReactMapGL
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
        );
    }
}
