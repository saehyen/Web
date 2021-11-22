# SAMPLEWEB4 : JdbcTemplate 

## main.java

###  egoframework.sample.service 패키지 
    - SampleService.java : 기능(삽입,갱신,삭제,선택,출력) 에 대한 인터페이스 생성
    - SampleDAO.java : 기능(삽입,갱신,삭제,선택,출력) 에 대한 인터페이스 생성

### egovframework.sample.service.common 패키지
    - JDBCUtil.java : 스태틱으로 커넥션 생성, 닫기1 , 닫기2 
    
###  egovframework.sample.service.impl 패키지 
    - SampleDAOlBatis.java : SampleDAO 상속받고 각각 기능 처리함수 작성 (lbatis)
    - SampleDAOJDBC.java : SampleDAO 상속받고 각각 기능 처리함수 작성 (JDBC)
    - SampleServicelmple.java : 변수선언 및 함수 불러와서 수행
---
## resources
    - context-common.xml
        - 기능 :  설계서로써 실제적인 기능 수행
        - property : 이름과 값을 가진 것
        - bean :  메모리에 올릴 것
---
## text.java
### SampleServiceClient
    컨테이너 생성 ( AbstractApplicationContext container==new GenericXmlApplicationContext("egovframework/spring/context-common.xml");
    - SampleService sampleService=(SampleService)container.getBean("sampleService"); : sampleService 빈 가져오기
    - sampleService객체에서 불러오기
---
### 기타
    - pom.xml : 드라이버 설정 및 라이브러리 설정