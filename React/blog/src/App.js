
import React,{useState} from 'react';
import './App.css';

function App() {
  
  let [글제목,글제목변경] = useState(['프로그래머스 1단계','프로그래머스 1단계','프로그래머스 1단계']);
  let [좋아요, 좋아요변경] = useState(0);
  
  let posts = '개발 Blog';
  function 제목변경(){
    var newArray = [...글제목];
    newArray[2] = '프로그래머스 2단계';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div >{posts}</div>
      </div>
      <Modal/>
      <button onClick={제목변경}>버튼</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ ()=>{좋아요변경(좋아요+1)}}>👍</span>{좋아요 } </h3>
        <p>2021.08.10</p>
        <hr/>
        <h3> {글제목[1]}</h3>
        <p>2021.08.10</p>
        <hr/>
        <h3> {글제목[2]}</h3>
        <p>2021.08.10</p>
        <hr/>
      </div>
      

    </div>
  );
}
function Modal(){
  return(
    <div className="model">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;
