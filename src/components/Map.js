import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Pin from './Pin'

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            api_url: 'https://data.edmonton.ca/resource/87ck-293k.json',
            viewport: {
                width: 1100,
                height: 600,
                zoom: 11,
                latitude:47.608013, 
                longitude: -122.335167,
            },
            coords: [
                { latitude: 47.609657, longitude: -122.342148 },
                { latitude: 38.8894628780114, longitude: -77.1276390552521 },
                { latitude: 47.6236555, longitude: -122.3602975 },
            ],
            data: null,
        };
    }

    componentDidMount() {
        const { data, api_url } = this.state;

        if(!data) {
            fetch(api_url, { method: 'GET' })
            .then(response => response.json())
            .then(response => this.setState({ data: response }));
        }
    }

    render() {
    const { coords, data } = this.state;

        return (
            <MapGL
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}>

        {data && data.map((coord, i) => (
            <Marker key={`Marker-${i * (Math.random() * 200 + 1)}`} latitude={coord.location.latitude} longitude={coord.location.longitude}>
                <Pin />
            </Marker>
        ))}
            </MapGL>
        );
    }
}
