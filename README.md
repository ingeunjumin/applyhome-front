# 인근주민 React App

인근주민 부동산 플랫폼 프론트

## 시작하는 방법 (로컬)

1. node 설치 (https://nodejs.org/ko/download/)
2. react 설치
   cmd명령어 열고, 아래 명령어 입력

```bash
npm install -g create-react-app
```

3. git clone

```bash
git clone https://github.com/ingeunjumin/applyhome-front
```

4. 패키지 설치

```bash
npm install
```

5. 리액트 시작

```bash
npm start
```

### 자주 사용하는 명령어

- rafce

### Notes

- react kakao map 사용시 버전 주의
  "react": "^17.0.2",
  "react-dom": "^17.0.2"

### 폴더 구조

```
src
│
└───common (공통 폴더)
    └───api
│
└───components (컴포넌트 모음)
│
└───features (redux)
```

### Ubuntu에서 react 시작하기

- root 로그인 후 아래 명령어 입력

1. curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
2. bash nodesource_setup.sh
3. apt-get install nodejs -y
4. npm install -g create-react-app
5. cd /home/ubunut
6. git clone https://github.com/ingeunjumin/applyhome-front.git
7. cd applyhome-front/
8. npm install
9. nohup npm start &
