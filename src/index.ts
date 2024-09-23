// 문자열 (string)
const a: string = '';
const b: string = '';
const c: string = ``;
let myName: string = 'Steve';
let message: string = `Hello, ${myName}`;
myName.toLocaleUpperCase();

// 숫자타입 (number)
let n: number = 100;
let count: number = 10;
let price: number = 9.99;
let tempreture: number = -15;
let distance: number = 3.4e-5;
let total: number = count * price;
let average: number = total / 2;
let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

// 불리언 (boolean)
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log('hello we are open');
}

if (!isCompleted) {
  console.log('job not complete');
}

let isAvailable: boolean = isOpen && !isCompleted;

// 널 타입(null)
let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login('Joey');
logout();

// 애니 타입 (any)
let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
