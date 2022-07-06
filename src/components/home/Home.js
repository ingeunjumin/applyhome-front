import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';
import ryu from '../../images/ryu.jpg';
import kang from '../../images/kang.JPG';
import hyun from '../../images/hyun.jpg';
import TypeWriter from 'typewriter-effect';

const moveMap = () => {
  document.location.href = '/map';
};

const Home = () => {
  return (
    <div className="intro-container">
      <div className="navbar">
        <img src={logo} />
      </div>
      <div className="intro">
        <div className="content">
          <h1>
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ['대전 부동산 플랫폼.', 'The 인근주민'],
              }}
            />
          </h1>
          <p>042 8282 대전 부동산 시세와 청약정보를 8282!</p>
          <p>안녕하세요, 인근주민 개발팀입니다. 아래 버튼을 눌러 플랫폼을 이용해보세요.</p>
          <a className="btn" onClick={moveMap}>
            Getting Started
          </a>
        </div>
        <div className="feature-img">
          <div className="card bounceIn">
            <div className="content-team">
              <div className="img">
                <img src={hyun} />
              </div>
              <div className="details">
                <div className="name">현상원</div>
                <div className="job">Front Developer</div>
              </div>
              <div className="media-icons">
                <a href="https://github.com/hyunsangwon">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card bounceIn">
            <div className="content-team">
              <div className="img">
                <img src={kang} />
              </div>
              <div className="details">
                <div className="name">강인석</div>
                <div className="job">Backend Developer</div>
              </div>
              <div className="media-icons">
                <a href="https://github.com/dkdmlk">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card bounceIn">
            <div className="content-team">
              <div className="img">
                <img src={ryu} />
              </div>
              <div className="details">
                <div className="name">류근환</div>
                <div className="job">Backend Developer</div>
              </div>
              <div className="media-icons">
                <a href="https://github.com/RyuGeunHwan">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
