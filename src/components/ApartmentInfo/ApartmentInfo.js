import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncApartmentsDetail } from '../../features/apartments/apartmentSlice';
import { getApartmentsDetail } from '../../features/apartments/apartmentSlice';

import './ApartmentInfo.css';
import Contract from '../Contract/Contract';
//부모컴포넌트에서 데이터를 2개이상 받을 때
const ApartmentInfo = ({ aptno, setIsOpen }) => {
  const param = aptno;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncApartmentsDetail(param));
  }, [dispatch]);
  const apartmentsDetail = useSelector(getApartmentsDetail);

  return (
    <div className="scene-apt">
      {apartmentsDetail.apartmentsNo === undefined ? (
        console.log('info init...')
      ) : (
        <>
          <div className="info-group">
            <div className="header-info">
              <h1>
                <div className="apartments-name">{apartmentsDetail.apartmentsName}</div>
              </h1>
              <div className="btn-close">
                <span
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  닫기
                </span>
              </div>
            </div>
            <div className="address-info">
              <h2 className="address">{apartmentsDetail.addr}</h2>
            </div>
          </div>
          <div className="tiny-scroll">
            <div className="result">
              <div className="card">
                <div className="css-oiiy04">
                  <ul className="css-1nak9uh">
                    <li className="css-149atbn">난방방식 : {apartmentsDetail.heatType}</li>
                    <li className="css-149atbn">관리방식 : {apartmentsDetail.manageType}</li>
                    <li className="css-149atbn">세대수 : {apartmentsDetail.sedeCnt}세대</li>
                    <li className="css-149atbn">동수 : {apartmentsDetail.dongCnt}동</li>
                    <li className="css-149atbn">건립일 : {apartmentsDetail.createAt}</li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="realPrice">
                  <div className="price-group">
                    <h3 className="title">최근 실거래 기준 평균</h3>
                    <div className="price">{apartmentsDetail.strPrice}</div>
                  </div>
                  <Contract data={apartmentsDetail.apartmentsNo}></Contract>
                </div>
              </div>
              <div className="card">
                <div className="business">
                  <h3 className="business-info">주변 상권 정보</h3>
                  <div className="business-table">
                    {apartmentsDetail.businessList.length === 0 ? (
                      <div className="business-item">
                        <h5 className="business-item-name">1.5km안에 상권이 없습니다.</h5>
                      </div>
                    ) : (
                      apartmentsDetail.businessList.map((res, key) => (
                        <div key={key} className="business-item">
                          <h5 className="business-item-name">{res.businessName}</h5>
                          <span className="business-distance">{res.distance}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ApartmentInfo;
