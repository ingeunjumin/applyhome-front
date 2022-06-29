import { React, useEffect, useState, useRef } from 'react';
import { Map, MarkerClusterer, MapMarker } from 'react-kakao-maps-sdk';
import { clusterPositionsData } from '../../common/data';
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo';

const Home = () => {
  const mapRef = useRef();
  const [positions, setPositions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPositions(clusterPositionsData.positions);
  }, []);
  //마커 이미지
  const images = {
    src: "https://s3.ap-northeast-2.amazonaws.com/hyunsangwon.pro/home.png",
    size: {
      width: 44,
      height: 49,
    },
  }
  //클러스터 아이콘 스타일
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
  //카카오맵 중앙 위치 (대전 시청)
  const center = {
    lat: 36.3504567, lng: 127.3848187
  };
  return (
    <div className="map-container">
      <Map
        center={center}
        style={{ width: '100%', height: '100vh' }}
        level={8}
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
              image = {images}
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
