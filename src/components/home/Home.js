import { React, useEffect, useState, useRef } from 'react';
import { Map, MarkerClusterer, MapMarker } from 'react-kakao-maps-sdk';
import { clusterPositionsData } from '../../common/data';
const Home = () => {
  const mapRef = useRef();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setPositions(clusterPositionsData.positions);
  }, []);

  return (
    <div className='map-container'>
      <Map
        center={{ lat: 36.2683, lng: 127.6358 }}
        style={{ width: '100%', height: '100vh' }}
        level={12}
        ref={mapRef}
      >
        <MarkerClusterer
          averageCenter={true}
          minLevel={10}
          disableClickZoom={true}
          calculator={[10, 30, 50]}
          texts={getTexts}
        >
          {positions.map((pos) => (
            <MapMarker
              key={`${pos.lat}-${pos.lng}`}
              position={{
                lat: pos.lat,
                lng: pos.lng,
              }}
            ></MapMarker>
          ))}
        </MarkerClusterer>
      </Map>
    </div>
  );
};

const getTexts = (size) => {
  if (size < 10) return '삐약';
  if (size > 10 && size < 30) return '꼬꼬';
  if (size > 30 && size < 50) return '꼬끼오';
  if (size > 50) return '치멘';
};

export default Home;
