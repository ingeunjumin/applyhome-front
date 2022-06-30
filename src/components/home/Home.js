import { React, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Map, MarkerClusterer, MapMarker } from 'react-kakao-maps-sdk';
import ApartmentInfo from '../ApartmentInfo/ApartmentInfo';

import { fetchAsyncApartments } from '../../features/apartments/apartmentSlice';
import { getAllApartments } from '../../features/apartments/apartmentSlice';

//마커 이미지
const images = {
  src: 'https://s3.ap-northeast-2.amazonaws.com/hyunsangwon.pro/home.png',
  size: {
    width: 44,
    height: 49,
  },
};
//클러스터 아이콘 스타일
const styles = [
  {
    width: '50px',
    height: '50px',
    lineHeight: '48px',
    fontSize: '17px',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    background:
      'url(https://s3.ap-northeast-2.amazonaws.com/hyunsangwon.pro/cluster-marker.png) 0% 0% / contain',
  },
];
//카카오맵 중앙 위치 (대전 시청)
const center = {
  lat: 36.3504567,
  lng: 127.3848187,
};

const Home = () => {
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
          {isOpen && idx > 0 && <ApartmentInfo data={idx} />}
        </MarkerClusterer>
      </Map>
    </div>
  );
};

export default Home;
