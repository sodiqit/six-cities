/* eslint-disable unicorn/no-fn-reference-in-iterator */
import React from 'react';
import leaflet from 'leaflet';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { CITY_COORDINATES } from 'mocks/offers';

interface MapProps {
  roomsInfo: {
    id: string;
    title: string;
    coordinate: [number, number];
  }[];
  city: 'amsterdam';
  activeRoomId: string;
}

const CustomMap = (props: MapProps) => {
  const { city, roomsInfo, activeRoomId } = props;

  return (
    <Map
      style={{ height: '100%' }}
      zoom={12}
      zoomControl={false}
      center={CITY_COORDINATES[city]}
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

export { CustomMap };
