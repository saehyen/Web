# blog


### 기본
- nodejs -> npm 툴 이용 가능 ->create-react-app 라이브러리 사용 
- App.js는 메인페이지에 들어갈 HTML 짜는곳
- public/index.html : 메인페이지
- node_modules : 라이브러리 폴더
- npm start : 실시간 홈페이지 보기
- src : 소스코드 보관함
- packge.json : 설치한 라이브러리 목록
- app.js -> index.html. 따라서 app.js가 메인페이지
- warning x : eslint-disable
#### JSX
- 데이터 바인딩 : 서버에서 데이터를 가져와 프론트에 보여주는 것
- {변수명, 함수 등} -> 중괄호 !
- src,id,href 등의 속성에도 가능
- style={object 자료형으로 만든 스타일}

#### State
- 데이터 : 변수 or state
- import React,{useState} from 'react'; 선언
- 문자,숫자,array,object 다 저장가능
- 사용 이유 : 웹을 App처럼 동작하게 하기위해
- state는 변경되면 HTML이 자동으로 재랜더링됨
- 따라서 자주 바뀌는 중요한 데이터를 state로 사용
- [state,state변경함수] -> state변경함수를 통해 변경할 것.

#### onClick
- onclick={ 클릭될 때 실행할 함수}
- state 변경시 deep copy 후 수정

#### Component
- Modal 창을 간단하게 넣고싶을 때 구현
- HTML을 한단어로 축약해서 사용 가능
- 관리가 편해짐
- 반복출현하는 HTML을 주로 component로 사용
- 자주 변경되는 HTML UI
- 단점 : state를 사용할 시 복잡해짐