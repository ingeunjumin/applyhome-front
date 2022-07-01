import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="search-group">
        <div className="keyword-group">
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
          </div>
          <div className="realtime-top-visitors">
            <div className="single-mode">
              <div className="rolling-container trans">
                <a href="#" className="rolling-item">
                  <span className="rank">1</span>
                  <span className="name">인천 연수구 송도동</span>
                </a>
                <a href="#" className="rolling-item">
                  <span className="rank">2</span>
                  <span className="name">경기 수원시 영통구 망포동</span>
                </a>
                <a href="#" className="rolling-item">
                  <span className="rank">3</span>
                  <span className="name">e편한세상에코델타센터포인트</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hot-content">
        <div className="labs">
          <div className="labs-header">
            <a href="#" className="labs-button btn-new-high">
              상권
            </a>
            <a href="#" className="labs-button btn-new-high">
              청약
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
