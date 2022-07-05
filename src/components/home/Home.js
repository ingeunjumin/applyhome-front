import React from 'react';
import './Home.css';
import logo from '../../images/logo.png';
import img from '../../images/img.png';
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
      <div className="content">
        <h1>
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ['대전 부동산 플랫폼!', 'The 인근주민'],
            }}
          />
        </h1>
        <p>안녕하세요, 인근주민 개발팀입니다. 아래 버튼을 눌러 플랫폼을 이용해보세요.</p>
        <a className="btn" onClick={moveMap}>
          Getting Started
        </a>
      </div>
      <img src={img} className="feature-img bounceIn" />
    </div>
  );
};

export default Home;
