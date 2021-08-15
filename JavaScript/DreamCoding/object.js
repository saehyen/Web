'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const KSH = { name: 'KSH', age: 4 };
print(KSH);

// with JavaScript magic (dynamically typed language)
// can add properties later
KSH.hasJob = true;
console.log(KSH.hasJob);

// can delete properties later
delete KSH.hasJob;
console.log(KSH.hasJob);

// 2. Computed properties
// key should be always string
// 두개가 같음 배열(스트링타입) , 점
console.log(KSH.name);
console.log(KSH['name']);
// KSH 오브젝트의 hasJab 의 값을 추가시키는 것
KSH['hasJob'] = true;
console.log(KSH.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
// console.log(obj.key) -> undefined로 출력됨.  
// console.log[obj[key]] -> 정상적으로 출력
printValue(KSH, 'name');
printValue(KSH, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('KSH', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당하는 오브젝트에 키값이 있는지 확인하는 것
console.log('name' in KSH);
console.log('age' in KSH);
console.log('random' in KSH);
console.log(KSH.random); // undefined 출력
// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 이전 콘솔들 제거
// 파이썬식
for (let key in KSH) {
  console.log(key);
}
// 파이썬식
// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'KSH', age: '20' };
const user2 = user;
console.log(user);

// 예전 복사 방법
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//최신 복사 방법
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);

// 뒤쪽에 있는 아이가 앞쪽의 키값을 덮어씀.
console.log(mixed.color);
console.log(mixed.size);