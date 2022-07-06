import { React, useEffect } from 'react';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncApartmentsRank } from '../../features/apartments/apartmentSlice';
import { getApartmentsRank } from '../../features/apartments/apartmentSlice';

const moveApply = () => {
  document.location.href = '/apply';
};
const moveHome = () => {
  document.location.href = '/map';
};

const Nav = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncApartmentsRank());
  }, [dispatch]);
  const apartmentsRank = useSelector(getApartmentsRank);
  let renderPages = '';
  renderPages =
    apartmentsRank.length === undefined ? (
      <div className="rolling-item">
        <span className="rank">랭킹데이터가 없습니다.</span>
      </div>
    ) : (
      apartmentsRank.map((res, key) => (
        <div key={res.apartmentsNo} className="rolling-item">
          <span className="rank">{key + 1}</span>
          <span className="name">{res.apartmentsName}</span>
          <span className="rank-price">{res.strPrice}</span>
        </div>
      ))
    );

  let renderHeader = '';
  renderHeader =
    window.location.pathname === '/map' ? (
      <div className="labs-header">
        <div className="labs-button on" onClick={moveHome}>
          매매
        </div>
        <div className="labs-button" onClick={moveApply}>
          청약
        </div>
      </div>
    ) : (
      <div className="labs-header">
        <div className="labs-button" onClick={moveHome}>
          매매
        </div>
        <div className="labs-button on" onClick={moveApply}>
          청약
        </div>
      </div>
    );

  return (
    <div>
      <div className="nav">
        <div className="search-group">
          <div className="keyword-group">
            <div className="realtime-top-visitors">
              <div className="single-mode">
                <div className="rolling-container trans">{renderPages}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hot-content">
          <div className="labs">{renderHeader}</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
