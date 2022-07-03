import { React, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Map, MarkerClusterer, MapMarker } from 'react-kakao-maps-sdk';
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo';

import { fetchAsyncApartments } from '../../features/apartments/apartmentSlice';
import { getAllApartments } from '../../features/apartments/apartmentSlice';
import { images, styles, center } from '../../common/map-setting';

const Clusterer = () => {
  const mapRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const param = 'apartments';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncApartments(param));
  }, [dispatch]);

  const apartments = useSelector(getAllApartments);

  return (
    <div className="map-container">
      <Map center={center} style={{ width: '100%', height: '100vh' }} level={8} ref={mapRef}>
        <MarkerClusterer averageCenter={true} minLevel={5} disableClickZoom={true} styles={styles}>
          {apartments.length === undefined
            ? console.log('map init...')
            : apartments.map((res) => (
                <MapMarker
                  key={res.apartmentsNo}
                  position={{
                    lat: res.latitude,
                    lng: res.longitude,
                  }}
                  image={images}
                  onClick={() => {
                    setIdx(res.apartmentsNo);
                    setIsOpen(true);
                  }}
                />
              ))}
          {isOpen && <ApartmentInfo aptno={idx} setIsOpen={setIsOpen} />}
        </MarkerClusterer>
      </Map>
    </div>
  );
};

export default Clusterer;
