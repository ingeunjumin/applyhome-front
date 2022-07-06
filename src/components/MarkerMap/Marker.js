import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Nav from '../Nav/Nav';
import { getApartmentsSubscription } from '../../features/apartments/apartmentSlice';
import { fetchAsyncApartmentsSubscription } from '../../features/apartments/apartmentSlice';
import { center } from '../../common/map-setting';

// 청약 데이터 마커 맵
const Marker = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncApartmentsSubscription());
  }, [dispatch]);

  const data = useSelector(getApartmentsSubscription);

  return (
    <div>
      <Nav />
      <Map // 지도를 표시할 Container
        center={center}
        style={{ width: '100%', height: '100vh' }}
        level={7} // 지도의 확대 레벨
      >
        {data.length === undefined
          ? console.log('map init...')
          : data.map((res) => (
              <MapMarker
                key={res.subscriptionNo}
                position={{
                  lat: res.latitude,
                  lng: res.longitude,
                }}
                image={{
                  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                  size: {
                    width: 30,
                    height: 40,
                  },
                }}
                title={res.apartmentsName + ' (' + res.apartmentsSubscriptionDate + ')'}
              />
            ))}
      </Map>
    </div>
  );
};

export default Marker;
