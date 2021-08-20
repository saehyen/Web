'use strict';

// JSON
// JavaScript Object Notation
// stringify : JSON -> 
// parse : -> JSON 
// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};
// 함수는 json으로 변형되지 않음.
json = JSON.stringify(rabbit);
// 함수는 제외하고 출력됨.
console.log(json);
// 해당하는 요소만 json으로 변경
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);
//callback함수를 이용한 것
//이름은 모두 ellie로 변형, 나머지는 보통값으로 냅둠
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // string -> Date 오브젝트로 변경
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();
// obj.birthDate = string  
// rabbit.birthDate = date 오브젝트 
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());