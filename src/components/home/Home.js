import { React, useEffect, useState, useRef } from 'react';
import { Map, MarkerClusterer, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { clusterPositionsData } from '../../common/data';
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo';

const Home = () => {
  const mapRef = useRef();
  const [positions, setPositions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPositions(clusterPositionsData.positions);
  }, []);

  const styles = [
    {
      width: '65px',
      height: '50px',
      background: '#4e73df',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '20px',
      textAlign: 'center',
      lineHeight: '50px',
    },
  ];

  return (
    <div className="map-container">
      <Map
        center={{ lat: 36.2683, lng: 127.6358 }}
        style={{ width: '100%', height: '100vh' }}
        level={12}
        ref={mapRef}
      >
        <MarkerClusterer
          averageCenter={true}
          minLevel={5}
          disableClickZoom={true}
          calculator={[10, 30, 50]}
          texts={getTexts}
          styles={styles}
        >
          {positions.map((pos) => (
            <MapMarker
              key={`${pos.lat}-${pos.lng}`}
              position={{
                lat: pos.lat,
                lng: pos.lng,
              }}
              onClick={() => setIsOpen(true)}
            ></MapMarker>
          ))}
          {isOpen && <ApartmentInfo />}
        </MarkerClusterer>
      </Map>
    </div>
  );
};
//size는 마커 수
const getTexts = (size) => {
  if (size < 5) return '동구';
  if (size > 5 && size < 10) return '대전';
  if (size > 10 && size < 20) return '충청도';
  if (size > 20) return '치멘';
};

export default Home;
