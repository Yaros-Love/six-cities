import React, {ReactElement, useEffect, useRef, useState} from "react";
import leaflet, {LatLngTuple, MapOptions} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from "../../mocks/offers";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const mainIcon = leaflet.icon({
  iconUrl: `img/pin-activ.svg`,
  iconSize: [30, 30]
});

const ZOOM = 12;
const CITY_COORDS: LatLngTuple = [52.38333, 4.9];
const MAP_OPTIONS: MapOptions = {
  center: CITY_COORDS,
  zoom: ZOOM,
  zoomControl: false,
  marker: true
} as MapOptions;

interface MapProps {
  offers: Offer[],
  className: string,
  mainMarker?: LatLngTuple,
}

const Map = ({offers, className, mainMarker = undefined}: MapProps): ReactElement => {
  const mapRef = useRef();
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    setMap(leaflet.map(mapRef.current, MAP_OPTIONS));

    return () => {
      if (map) {
        map.remove();
        setMap(null);
      }
    };
  }, []);

  useEffect(() => {
    if (map) {
      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

      map.setView(CITY_COORDS, ZOOM);
    }
  }, [map]);

  useEffect(() => {
    if (map && mainMarker) {
      leaflet
        .marker(mainMarker, {icon: mainIcon})
        .addTo(map);

      map.setView(mainMarker, ZOOM);
    }
  }, [mainMarker, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const coords: LatLngTuple = [offer.coords.latitude, offer.coords.longitude];
        leaflet
          .marker(coords, {icon})
          .addTo(map);
      });
    }
  }, [offers, map]);

  return (
    <section className={className} ref={mapRef}/>
  );
};

export default Map;

