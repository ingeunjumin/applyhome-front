import React from 'react';
import './Apartment.css';
import Graph from '../Graph/Graph';

const Apartment = () => {
  return (
    <div className="scene-apt">
      <div className="search-group">
        <div className="header-info">
          <h1>
            <a href="#">가양동 대주파크빌</a>
          </h1>
        </div>
        <div className="address-info">
          <h2 className="address">대전광역시 동구 자양동 86-2</h2>
        </div>
      </div>
      <div className="tiny-scroll">
        <div className="result">
          <div className="card">
            <div className="css-oiiy04">
              <ul className="css-1nak9uh">
                <li className="css-149atbn">590세대</li>
                <li className="css-149atbn">1990년 10월(33년차)</li>
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
                <h3 className="title">최근 실거래 기준 11개월 평균</h3>
                <div className="price">2억 800</div>
              </div>
              <div className="chart">
                <div className="chart-container">
                  <div className="chart-type">
                    <div className="chart-menu-type on">
                      <a
                        href="#"
                        className="btn-chart-type"
                        data-ga-event="apt,chartShortPeriodBtn"
                      >
                        최근 6개월
                      </a>
                    </div>
                    <div className="chart-menu-type ">
                      <a href="#" className="btn-chart-type" data-ga-event="apt,chartLongPeriodBtn">
                        최근 3년
                      </a>
                    </div>
                    <div className="chart-menu-type ">
                      <a href="#" className="btn-chart-type" data-ga-event="apt,chartCompPrice">
                        전체 기간
                      </a>
                    </div>
                  </div>
                  {/* 그래프 */}
                  <div className="chart-wrap">
                    <Graph></Graph>
                  </div>
                </div>
              </div>
              {/* 거래내역 테이블 */}
              <div className="css-q3by2j">
                <table className="css-lwlhki">
                  <thead>
                    <tr className="css-1skvx7a">
                      <td className="css-1qyfbk">계약일</td>
                      <td className="css-1qyfbk">가격</td>
                      <td className="css-1qyfbk">타입</td>
                      <td className="css-1qyfbk">층</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="css-a7448w">
                      <td className="css-1f5shc1">22.05.28</td>
                      <td className="css-1a7uf1n">
                        <div className="css-zl1inp">2억 800</div>
                      </td>
                      <td data-tooltip="102타입" className="css-x23z8k">
                        102타입
                      </td>
                      <td className="css-ygyrr4">2층</td>
                    </tr>
                    <tr className="css-a7448w">
                      <td className="css-1f5shc1">22.05.28</td>
                      <td className="css-1a7uf1n">
                        <div className="css-zl1inp">2억 800</div>
                      </td>
                      <td data-tooltip="102타입" className="css-x23z8k">
                        102타입
                      </td>
                      <td className="css-ygyrr4">2층</td>
                    </tr>
                    <tr className="css-a7448w">
                      <td className="css-1f5shc1">22.05.28</td>
                      <td className="css-1a7uf1n">
                        <div className="css-zl1inp">2억 800</div>
                      </td>
                      <td data-tooltip="102타입" className="css-x23z8k">
                        102타입
                      </td>
                      <td className="css-ygyrr4">2층</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* 거래세 */}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
