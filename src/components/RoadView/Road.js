import { React } from 'react';
import { useParams } from 'react-router';
import { Roadview } from 'react-kakao-maps-sdk';

const Road = () => {
  const { lat, lng } = useParams();
  return (
    <div>
      <Roadview // 로드뷰를 표시할 Container
        position={{
          // 지도의 중심좌표
          lat: lat,
          lng: lng,
          radius: 50,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100vh',
        }}
      />
    </div>
  );
};

export default Road;
