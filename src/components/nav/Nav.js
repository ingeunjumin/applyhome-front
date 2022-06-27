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
          <div className="sub-filter">
            <div className="sub-filter-layer">
              <div className="scroll-menu-container sub-filter-container">
                <ul className="ul-container use-right-arrow">
                  <li className="scroll-li" data-value="trade">
                    <a href="#" data-value="trade" data-ga-event="" className="applied">
                      <span className="scroll-link applied">매매</span>
                    </a>
                  </li>
                  <li className="scroll-li" data-value="type">
                    <a href="#" data-value="type" data-ga-event="" className="">
                      <span className="scroll-link">유형</span>
                    </a>
                  </li>
                  <li className="scroll-li" data-value="area">
                    <a href="#" data-value="area" data-ga-event="" className="">
                      <span className="scroll-link">평형</span>
                    </a>
                  </li>
                  <li className="scroll-li" data-value="price">
                    <a href="#" data-value="price" data-ga-event="" className="">
                      <span className="scroll-link">가격</span>
                    </a>
                  </li>
                  <li className="scroll-li" data-value="household">
                    <a href="#" data-value="household" data-ga-event="" className="">
                      <span className="scroll-link">세대수</span>
                    </a>
                  </li>
                  <li className="scroll-li" data-value="since">
                    <a href="#" data-value="since" data-ga-event="" className="">
                      <span className="scroll-link">입주년차</span>
                    </a>
                  </li>
                  <li className="scroll-li" data-value="parking">
                    <a href="#" data-value="parking" data-ga-event="" className="">
                      <span className="scroll-link">주차</span>
                    </a>
                  </li>
                </ul>
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
              출근
            </a>
            <a href="#" className="labs-button btn-new-high">
              청약
            </a>
            <a href="#" className="labs-button btn-new-high">
              인구
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
