import React from 'react';
import leaflet from 'leaflet';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Location } from 'services/types';

interface MapProps {
  roomsInfo: {
    id: number;
    title: string;
    coordinate: [number, number];
  }[];
  activeRoomId: number;
  cityCoordinate?: Location;
}

const CustomMap = (props: MapProps) => {
  const {
    roomsInfo,
    activeRoomId,
    cityCoordinate = {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12,
    },
  } = props;

  const correctCityCoordinate = [cityCoordinate.latitude, cityCoordinate.longitude] as [
    number,
    number,
  ];

  const { zoom } = cityCoordinate;

  return (
    <Map
      style={{ height: '100%' }}
      zoom={zoom}
      zoomControl={false}
      center={correctCityCoordinate}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {roomsInfo.map((room) => {
        const { id, coordinate, title } = room;
        const icon = leaflet.icon({
          iconUrl: id === activeRoomId ? 'img/pin-active.svg' : 'img/pin.svg',
          iconSize: [30, 30],
        });

        return (
          <Marker key={id} position={coordinate} icon={icon}>
            <Tooltip>{title}</Tooltip>
          </Marker>
        );
      })}
    </Map>
  );
};

export default CustomMap;
