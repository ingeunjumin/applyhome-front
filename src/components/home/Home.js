import { React, useEffect } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncApartmentsRank } from '../../features/apartments/apartmentSlice';
import { getApartmentsRank } from '../../features/apartments/apartmentSlice';

const moveApply = () => {
  document.location.href = '/apply';
};
const moveHome = () => {
  document.location.href = '/';
};

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncApartmentsRank());
  }, [dispatch]);
  const apartmentsRank = useSelector(getApartmentsRank);
  let renderPages = '';
  renderPages =
    apartmentsRank.length === undefined
      ? console.log('rank init...')
      : apartmentsRank.map((res, key) => (
          <div key={res.apartmentsNo} className="rolling-item">
            <span className="rank">{key + 1}</span>
            <span className="name">{res.apartmentsName}</span>
            <span className="rank-price">{res.strPrice}</span>
          </div>
        ));

  return (
    <div>
      <div className="nav">
        <div className="search-group">
          <div className="keyword-group">
            {/* 
          22.07.03 검색키워드는 시간상 생략 (현상원)
          <div>
            <input
              type="text"
              className="keyword"
              placeholder="아파트명으로 검색"
              data-ga-event="search,input"
            />
            <button
              type="button"
              className="btn-search disabled"
              data-ga-event="search,searchBtn"
            ></button>
          </div> */}
            <div className="realtime-top-visitors">
              <div className="single-mode">
                <div className="rolling-container trans">{renderPages}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hot-content">
          <div className="labs">
            <div className="labs-header">
              <div
                className="labs-button on"
                onClick={() => {
                  moveHome();
                }}
              >
                매매
              </div>
              <div
                className="labs-button"
                onClick={() => {
                  moveApply();
                }}
              >
                청약
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
