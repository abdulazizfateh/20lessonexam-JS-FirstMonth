// IMTIXON 
// TASK 1 |||||||||||||||||||||||||||||||||||||||||||||||||||

// let arr = [1, -5, 2, 3, -7];

// const sumPositive = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumPositive(arr));









// TASK 2 |||||||||||||||||||||||||||||||||||||||||||||||||||

// function User(name, age, university, nationality) {
//     this.name = name;
//     this.age = age;
//     this.university = university;
//     this.nationality = nationality;
//     this.show = function () {
//         return `My name is ${this.name}, ${age} years old ${university} student from ${nationality}`;
//     }
// }

// const user = new User('Abdulaziz', 18, 'Swarthmore College', 'Uzbekistan');
// console.log(user.show());









// TASK 3 |||||||||||||||||||||||||||||||||||||||||||||||||||

// let num = 24;

// const reverseTwoDigitNum = (num) => {
//     let last = num % 10;
//     let first = (num - last) / 10;
//     return last * 10 + first;
// }

// console.log(reverseTwoDigitNum(num));









// TASK 1 |||||||||||||||||||||||||||||||||||||||||||||||||||

// let arr = [
//     {
//         name: 'Abdulaziz',
//         balance: 100
//     }, 
//     {
//         name: 'Muhammadjon',
//         balance: 100
//     }
// ];

// const sumBalance = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i].balance;
//     }
//     return sum;
// }
// console.log(sumBalance(arr));









// TASK 2 |||||||||||||||||||||||||||||||||||||||||||||||||||

// let str = 'Salom Dunyo';

// const reverseString = (str) => {
//     let newStr = str.split('').reverse().join('');
//     return newStr;
// }
// console.log(reverseString(str));









// TASK 3 |||||||||||||||||||||||||||||||||||||||||||||||||||

// let str = '1java2script3 5deve6lo4per';

// const seperateStringsNums = (str) => {
//     let arrNum = [];
//     let string = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] != ' ') {
//             arrNum.push(str[i])
//         } else if (str[i] != ' ') {
//             string += str[i];
//         }
//     }
//     return { arrNum, string }
// }
// console.log(seperateStringsNums(str));









// TASK 4 |||||||||||||||||||||||||||||||||||||||||||||||||||

// let num = 20;

// const isPrime = (num) => {
//     if (num <= 1) {
//         return 'Bu son tub yoki tub emaslikka ajralmaydi';
//     }
//     if (num == 2) {
//         return 'Tub';
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return 'Tub emas';
//         } else {
//             return 'Tub';
//         }
//     }
// }
// console.log(isPrime(num));