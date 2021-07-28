# 움직이는 글자를 가진 페이지
### 사용한 함수 및 메소드

- 타겟 비우기 : function resetTyping()
- 한글자씩 텍스트 출력 함수 : function dynamic(randomArr)
- 커서 깜빡임 효과 : function blink()
- 0.5초마다 반복 : setInterval(blink,500);

### 새로알게 된 것
- Google-icon을 통해 무료로 아이콘을 사용할 수 있음
- 랜덤,정수화,문자열길이 : Math.floor(Math.random()*stringArr.length)

* let과 var의 차이점 : immutable의 여부
- let : 변수가 선언된 블록
- var : 변수 선언 ( 재선언도 유연한 처리 )

* let과 const의 차이점 : 재할당 가능여부
- const : 변수 재선언, 재할당 불가
- let : 변수 재선언불가, 재할당 가능
- 따라서 재할당 여부에 따라 const, let 사용
