import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncApartmentsDetail } from '../../features/apartments/apartmentSlice';
import { getApartmentsDetail } from '../../features/apartments/apartmentSlice';

import './ApartmentInfo.css';
import Contract from '../Contract/Contract';

const ApartmentInfo = (props) => {
  const param = props.data;
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
                <a href="#">{apartmentsDetail.apartmentsName}</a>
              </h1>
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
                    <li className="css-149atbn">590세대</li>
                    <li className="css-149atbn">{apartmentsDetail.createAt}</li>
                    <li className="css-149atbn">용적률 190%</li>
                    <li className="css-149atbn">건폐율 14%</li>
                  </ul>
                  <a href="#" className="css-70gr6e">
                    거리뷰
                  </a>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ApartmentInfo;
