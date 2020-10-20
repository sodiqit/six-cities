/* eslint-disable unicorn/no-fn-reference-in-iterator */
import React, { PureComponent } from 'react';
import leaflet from 'leaflet';
import { CITY_COORDINATES } from 'mocks/offers';

interface MapProps {
  roomsInfo: {
    id: string;
    coordinate: [number, number];
  }[];
  city: 'amsterdam';
}

interface MapState {
  zoom: number;
}

class Map extends PureComponent<MapProps, MapState> {
  private mapRef: React.RefObject<HTMLDivElement>;

  private map: leaflet.Map | null;

  constructor(props: MapProps) {
    super(props);

    this.mapRef = React.createRef();

    this.state = {
      zoom: 12,
    };

    this.map = null;
  }

  componentDidMount() {
    const container = this.mapRef.current as HTMLElement | null;
    if (container) {
      this.createMap(container);
    }
  }

  private createMap(container: HTMLElement): void {
    const { roomsInfo, city } = this.props;
    const { zoom } = this.state;
    // const activeOfferCoordinates = roomsInfo.find((room) => {
    //   return room.id === activeOfferId;
    // });

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });

    if (!this.map) {
      const map = leaflet.map(container, {
        zoom,
        center: CITY_COORDINATES[city],
        zoomControl: false,
      });

      this.map = map;

      leaflet
        .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(this.map);
    }

    this.map.setView(CITY_COORDINATES[city], zoom);

    roomsInfo.forEach((room) => {
      const { coordinate } = room;
      leaflet.marker(coordinate, { icon }).addTo(this.map as leaflet.Map);
    });
  }

  render() {
    return <div id="map" style={{ height: '100%' }} ref={this.mapRef} />;
  }
}

export { Map };
