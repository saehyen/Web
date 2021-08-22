# 터미널 용어 정리

0. man (manual)
: 메뉴얼 열기
1. clear
: 
2. pwd (Print Working Driectory)
:  현재 있는 곳의 전체 경로

3. ls(list) : 현재 폴더 안의 파일 확인 
    - 자세히 알고 싶으면 -l 옵션
    - 숨겨진 파일 확인 -a 옵션
    - 숨겨진파일까지 자세히 확인 - la 옵션

4. open . : 현재 경로 파일탐색기 열기
5. cd(change directory) : 현재 경로에 있는 파일로 이동
    - cd - : 이전 경로로 이동
    - cd .. : 이전 경로로 이동

6. find : 특정 파일이나 디렉토리 찾기
    - find . -type file -name "*.txt"
    - find . -type directory -name "*"
    - powershell : get-childitem -File -Filter

7. which : 실행하고자 하는 파일의 경로 확인
    -powershell :  gcm(get-command)

8. touch (파일) : 원하는 파일 만들기
    - 파일이 존재하지 않는다면 생성
    - powershell -> new-item

9. cat : 파일 내용 확인
    - cat A B : A,B 모두 확인

10. echo "문자열" : 문자열을 커맨드창에 띄우기
    - echo "문자" > file.txt : 문자를 file에 덮어씌움
    - echo "문자" >> file.txt : 문자를 file에 추가시킴
    
11. mkdir(make directory) : 디렉토리 만들기

12. cp(copy) 파일 경로 : 파일 복사
13. mv(move) 파일 경로 : 파일 이동
14. rm(remove) 파일 : 파일 삭제
    - rm -r dir : recursive하게 삭제
15. grep(Global regular expression print) : 
    - grep "키우드" 파일 : 
    - grep -n "키워드" 파일 : 몇번째 줄에 있는지 확인
    - grep -ni "키워드" 파일 : 모든 키워드에 한해 출력 
    - grep -nir "키워드" : 모든 하위경로에 있는 키워드 찾기
    - powershell -> select-string 파일 -pattern "키워드"
    - powershell > select-string *(현재경로),*/*(하위경로) -pattern "키워드"
    - powershell 에서는 기본적으로 대소문자구분 X , CaseSenstive 옵션 : 구분
---
### 환경 변수 설정

0. 환경변수 :  내 컴퓨터에서 특정 키워드가 어떤 일을 하거나 경로를 저장할 수 있도록 만듬
    - 환경변수는 $를 붙여서 이동
1. export MY_DIR="dir1" : 환경변수 설정

2. emv : 모든 환경변수 보기
    -powershell -> ls env:
3. cd $env:"환경변수" : 환경변수 사용
4. $env:"환경변수" = "" : 환경변수 삭제
---
### vim
- 텍스트 에디터
- vim "텍스트파일" : 에디터 모드 이동
- 수정 : i(insert)
- 명령어 작성모드 : ESC
    - :W (write change) : 저장
    - :q! (quit) : 저장안하고 강제로 나가기
    - :wq : 저장하고 나가기