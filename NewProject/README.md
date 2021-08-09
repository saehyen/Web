# 자바스크립트 
1. Selector
- document = 웹문서
- getElementByID = ID가 ''인 요소 가져와 바꾸기 -> 바꿀거 구글 검색해보고 양식맞춰서 할것.
- innerHTML = 내용물을 ~로 바꾸기
- style.color = 색상을 ~로 바꾸기
- style.fontSize = 폰트 사이즈 변경


* textContent와 innerHTML와 innerText의 차이
- textContent : 스크립트나 스타일 테그와 상관없이 해당 노드가 가지고 있는 텍스트 값을 그대로 읽음
- innerHTML : 해당 요소의 HTML, XML을 읽어오거나 설정 가능
- innerText : 사용자에게 보여지는 텍스트 값을 읽어옴

2. UI 만드는 법
- 미리 디자인해놓고 숨김
- 버튼 누르면 보여줌
- css 연결 : head <link rel="stylesheet" href = "main.css"> 추가
- display : none = 숨기기 
- display : block = 나타내기
- <button onclick="자바스크립트~~">버튼</button> : 버튼을 클릭하면 자바스크립트를 실행하라

3. Function
- 사용 이유 : 간결함, 재사용성
- script 함수를 밑에 작성할 것( 위에 작성시 에러 )

4. EventListener
- 사용 이유 : HTML 간결하게 작성 가능
- click, keydown, scroll, mouseover ...