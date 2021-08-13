// 1. Use Strict
// added in ES5
// use this for Valina Javascript.
'use Strict';

// 2. Variable (r,w)
// let (added in ES6) :  자바스크립트에서 쓸 수 있는 변수 선언
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
{
    age = 4;
    var age;
}
console.log(age);
// 3. Contants (read only)
// favor immutable data type always for a few reasons: ( 한동안 바뀌지 않는 데이터 타입을 사용해야 하는 이유)
// Immutable data types : premitive types, frozen objects(i.e. object.freeze()) (변경불가능)
// mutable data types : all objects by default are mutable in JS (변경가능)
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol object, box container
// function, first-class function

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

// BigInt(fairly new, don't use it yet)
const bigInt = 123456789313246549879n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // templeate literals( string)
console.log(`value:${helloBob}, type: ${typeof helloBob}`);
console.log('value:' + helloBob + ' type: ' + typeof helloBob);

//boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3<1; //false
console.log(`value:${canRead}, type: ${typeof canRead}`);
console.log(`value:${test}, type: ${typeof test}`);

// mull
let nothing = null;
console.log(`value:${nothing},type:${typeof nothing}`);

// undefined ( 선언은 되었지만 아무것도 정해지지 않음.)
let x; // let x = undefined
console.log(`value:${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`);
text = '8' / '2' ;
console.log(`value: ${text}, type:${typeof text}`);