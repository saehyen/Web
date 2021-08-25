'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled(성공) or rejected(실패)
// Producer(생산자) vs Consumer(소비자)

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 네트워크 통신을 하는 promise 작성시 바로 네트워크 통신 작동.
// 따라서 callback함수가 바로 실행된다는 사실을 기억해야 함.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)

  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then(성공시), catch(실패시), finally(성공하든 실패하든 마지막에 실행)
promise //
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining ( 재귀함수느낌 )
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);