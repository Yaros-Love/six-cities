import React, {ReactElement, useEffect, useRef} from "react";
import leaflet, {LatLngTuple, MapOptions} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from "../../mocks/offers";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
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
  offers: Offer[]
}

const Map = ({offers}: MapProps): ReactElement => {
  const mapRef: React.MutableRefObject<leaflet.Map | undefined> = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, MAP_OPTIONS);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    mapRef.current.setView(CITY_COORDS, ZOOM);
  }, []);

  useEffect(() => {
    offers.forEach((offer) => {
      const coords: LatLngTuple = [offer.coords.latitude, offer.coords.longitude];
      leaflet
        .marker(coords, {icon})
        .addTo(mapRef.current);
    });
  }, [offers]);

  return (
    <section className="cities__map map" id="map"/>
  );
};

export default Map;

