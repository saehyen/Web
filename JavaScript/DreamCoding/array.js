'use strict';

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // μλ λ°°μ΄
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of ( νμ΄μ¬κ³Ό μ μ¬ν λ°©μ)
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));
// μνμΌλ‘ ννν  μ
fruits.forEach(function(fruit,index,array){
    console.log(fruit,index,array);
})
// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
// μμμλΆν° λ£λκ²
fruits.unshift('π', 'π');
console.log(fruits);
console.clear()
// shift: remove an item from the benigging
// μμμλΆν° λΉΌλκ²
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
// λ²μ μ§μ  μ­μ  splice(μμμ§μ , μ§μΈκ°μ, μ­μ νκ³³μλ£μλ¬Έμμ΄)
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, 'π', 'π');
console.log(fruits);

// combine two arrays
// concat = λ°°μ΄ ν©μΉκΈ°
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// μΈλ±μ€ μ°Ύμμ€κΈ°
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯'));

// includes
// μλμ§ νμΈμ©
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯'));

// lastIndexOf
// λ§μ§λ§μ λμ¨ λ¬Έμμ΄μ μΈλ±μ€ μΆλ ₯
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π')); // -1 μΆλ ₯