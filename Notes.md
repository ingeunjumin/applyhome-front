### useEffect

```javascript
useEffect(() => {
    ..코드 작성
}, []);
// 두번째 인자값이[]면 컴포넌트가 처음 나타날 때 useEffect에 등록한 함수가 호출.
// 두번째 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출.
// 두번째 파라미터에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출 되고, 지정한 값이 바뀔 때에도 호출.
```

### useState

Hooks기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있음.
useState는 Hooks 중 하나.

### useSelector

useSelector는 리덕스의 상태값을 조회하기 위한 hook 함수
