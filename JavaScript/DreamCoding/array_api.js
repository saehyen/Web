// Q1. make a string out of an array
// 배열을 문자열로 합쳐주는것 -> join('구분자?')
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  // ,를 기준으로 배열로 변경
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // 순서를 거꾸로 바꿔줌
  {
    const array = [1, 2, 3, 5, 4];
    const result = array.reverse();
    console.log(result);
    const result2 = result.sort();
    console.log(result2);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  // slice : 구간지정
  {
    const array = [1, 2, 3, 4, 5];
    // slice(2,5)라면 2,3,4까지. 5는 배제됨.
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
  }
  // 이름,나이,등록,점수
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // find라는 API 이용할 것
  // callback 함수를 제작하여 True면 첫번재 찾은 요소 return
  {
    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  // 원형 API
  {
      const result2 = students.find(function(student,index){
          return student.score === 88;
      });
      console.log(result2);
  }
  
  // Q6. make an array of enrolled students
  // filter : true인 것들을 내보냄
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map : score만 받아와서 새로운 배열로 만듬 
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  // some :~인 요소가 존재하면 True
  // every :  전체가 ~의 조건을 만족하면 True
  {
    const result = students.some((student) => student.score < 50);
    console.log(result);
  
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
  }
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => prev.score + curr.score);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // map -> join()
  {
    const result = students
      .map((student) => student.score)
      .filter((score) => score >= 50)
      .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  // map -> sort -> join
  {
    const result = students
      .map((student) => student.score)
      .sort((a, b) => b - a)
      .join();
    console.log(result);
  }