// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: : 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1+1); //add
console.log(1-1); // substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter - counter + 1;
// preIncrement - counter;
console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);
const postIncrement = counter ++;
console.log(`preIncrement : ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *- y;
x /= y;

// 5. Comparison operators
console.log(10<6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10>=6);

// 6. Logical operators : || (or) , &&(and), !(not)
const value1 = false;
const value2 = 4<2;

// ||(or)
// 코딩팁 : 앞쪽부터 true값이 나오면 stop
// 따라서 간단한 것은 앞쪽에 복잡한 건 뒤쪽에
console.log(`or: ${value1 || value2 || check()}`);

// &&(and)
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check(){
    for(let i=0; i<10; i++){
        console.log('?');
    }
    return true;
}

//! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equlity, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equlity by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1=== ellie3);

// equality - puzzler
console.log( 0 == false);// T
console.log( 0 === false); // F
console.log('' == false); // T
console.log('' === false); // F
console.log(null == undefined); // T
console.log(null === undefined); // F

// 8. Conditional operators : if
// if, else if, else

const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
// 조건 ? 참일경우 : 거짓일경우
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case  'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firebox':
        console.log('love you!');
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

// for loop, for( begin; conditionl step)
for (i=3; i>0; i--){
    console.log(`do while: ${i}`);
}

for (let i=3; i>0; i= i-2){
    console.log(`inline variable for : ${i}`);
}