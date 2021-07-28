let target = document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript","Learn to Python"];

    // Math.random*n : n 이하의 랜덤수
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

//타겟 비우기
function resetTyping(){
    target.textContent="";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수    
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }
    else{
        setTimeout(resetTyping, 2000);
    }
}
dynamic(randomString());

// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}

// 0.5초마다 반복
setInterval(blink,500);