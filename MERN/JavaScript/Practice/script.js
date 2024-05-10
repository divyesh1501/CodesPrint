// console.log("hello")
// "use strict"

// 30/04/2024-----------

// variables======

// var name ="Divyesh"
// var name ="patel"
// console.log(name);

// let b = 5;
// console.log(a);

// const c = 5;
// console.log(a);

// datatypes=====

// 1)Primitive Datatype
// -Number
// let num = 50;
// console.log(typeof num);

// -String
// let str = "divyesh";
// console.log(typeof str);

// -Boolean
// let bool = true;
// console.log(typeof bool);

// -null
// let a = null;
// console.log(typeof a)

// -undefined
// let b;
// console.log(typeof b)

// 2)Non Premitive Datatype
// -object
// -array
// -function



// Type conversion==========

// result='3'
// result=Number(result)
// console.log(result);
// console.log(typeof result)



// Operators ===============

// Airthmatic Operator

// console.log(2 + 5)   // Addition Operator
// console.log(5 - 2)   // Subtraction Operator
// console.log(5 * 2)   // Multiplication Operator
// console.log(5 / 2)   // Division Operator
// console.log(5 % 2)   // Modulus Operator
// console.log(5 ** 2)  // Exponentiation Operator


// Increment Operator

// let a = 1
// console.log(a++) // => postfix
// console.log(a)
// console.log(++a) // => prefix

// Decrement Operator

// let a = 5
// console.log(a--) // => postfix
// console.log(a)
// console.log(--a) // => prefix


// Comparison Oprators

// a = "6";
// b = 6;
// console.log(a === b)
// console.log(a !== b)
// console.log(a > b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a <= b)

// Logical operators

// logical OR
// console.log(5 > 3 || 3 > 4);

// logical AND
// console.log(5 > 3 && 3 > 4);

// logical NOT
// console.log(!true);


// Conditional Statment============

// if else statmente
// let age = 10;

// if (age >= 18) {
//     console.log("you are eligible")
// }
// else{
//     console.log("you are not eligible")
// }

// nested if else statmente
// let age = 19;
// let name = "divyesh";

// if (age >= 18) {
//     if (name == "patel") {
//         console.log("you are eligible")
//     } else {
//         console.log("name is not same")
//     }
// }
// else {
//     console.log("you are not eligible")
// }


// else if statement

// let a = 10;
// let b = 10;

// if (a > b) {
//     console.log("a is greater");
// } else if (b > a) {
//     console.log("b is greater");
// } else {
//     console.log("a and b are equal")
// }


// switch statement================

// let ch = 2;

// switch (ch) {
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break;
//     default:
//         console.log("you slected worng option")
//         break;
// }

// Loop=============
// For Loop
// for (var i = 0; i < 10; i++) {
//     console.log("hello");
// }
// for (var i = 1; i <= 10; i++) {
//     // console.log("2 x " +i+ " = " +2*i);
//     console.log(`2 x ${i} = ${2*i}`);
// }

// while Loop

// var i = 1;
// while (i <= 10) {
//     console.log(`2 x ${i} = ${2 * i}`);
//     i++;
// }


// do while Loop

// var i = 1;
// do{
//     console.log(`2 x ${i} = ${2 * i}`);
//     i++;
// } while (i <= 10)


// Functions================

// function add(a, b) {
//     console.log(a + b);
// }
// let x = 10;
// let y = 5;
// add(x, y)

// return function

// function add(a, b) {
//     return a + b
// }
// let x = 10;
// let y = 8;
// let addition = add(x, y);
// console.log(addition)


// local function

// let a = 5; //global
// function local() {
//     let b = 6; //local

//     console.log(b)
//     console.log(a)

// }

// local()
// console.log(a)

// anonymouse function

// let fun = function(){
//     console.log("hello");
// }
// fun();

// (function(){
//     console.log("hello");
// })()

// arrow function

// let a = (a, b) => {
//     return a + b;
// }
// console.log(a(2, 3))

// let a = (a, b) => console.log(a+b);

// a(2, 4)


// 01/05/2024---------------

// Arrays====================

// let name = ["divyesh", "yagnik", "pavan"]
// console.log(name)
// console.log(name[1]) //print index wise
// console.log(name.length) //check the length of array

// let name = ["john", 1, true, null] // all data types in one array
// console.log(name)

// let name = ["john"]
// name.push("cena") // push method- add data from last index of array(end of array)
// console.log(name)

// let name = ["john"]
// name.unshift("cena") // unshift method- add data to starting(0th) index of array(staring of array)
// console.log(name)

// let name = ["john", 1, true, null]
// name.splice(1,0,"cena") // splice method- nothing delete(splice) and add "cena" at 1st index
// console.log(name)

// let name = ["john", 1, true, null]
// name.splice(1,1,"cena") // splice method- 1 data delete(splice) after 1st index and add "cena" at 1st index
// console.log(name)

// let num = [10, 30, 20, 40, 30, 50]
// let num1 = [11, 21, 31, 41, 51]
// console.log(num)

// for loop
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// forEach loop
// (value,index,array) element is fixed postion
// num.forEach((e, i, num) => {
//     console.log(e + " " + i + " " + num)
// });

// let a = num.map((e, i, num) => {
//     return e+50
// })
// console.log(num)
// console.log(a)

// console.log(num.concat(num1)) //concat method- join two arrays

// console.log(num.indexOf(20)) //indexof method- find index of data of array

// console.log(num.reverse()) //reverse method- for revrse the array(array start from last index and end with starting(0th) index)

// console.log(num.sort()) //sort method- sorting the array

// let a = num.slice(1,4) // slice method - to slice array to index to some index
// console.log(a)

// console.log(typeof num.toString()) // toString method - for convert array to string


// filtermethod - to filter particular data from condtions
// let a = num.filter((e, i, num) => {
//     if (e >= 10 && e <= 35) {
//         return e;
//     }
// });
// console.log(a)


// find method - to find data in array
// let a = num.find((e) => {
//     return e == 30
// });
// console.log(a)

// find method - to findindex of data in array
// let a = num.findIndex((e) => {
//     return e == 30
// });
// console.log(a)

// find method - to findLastindex of same two or more data in array
// let a = num.findLastIndex((e) => {
//     return e == 30
// });
// console.log(a)


//split method- to split array
// let num2 = "10,20,30"

// let arr = num2.split(',');
// arr.forEach(element => {
//     console.log(element)
// });

// console.log(arr)

//join method - to join array
// let b = arr.join("-")
// console.log(b)

// for in
// let arr = [10, 20, 30, 40]

// for (let ar in arr){
//     // console.log(ar) //print index of array
//     console.log(arr[ar]) //print dat of array
// }


// for of
// let arr = [10, 20, 30, 40]

// for (let ar of arr){
//     console.log(ar) //print data of array
// }


// Multidimensional array

// let arr = [
//     ["john", 30],
//     ["thomas", 20],
//     ["robrt", 25]
// ]

//print through foreach
// arr.forEach(data => {
//     data.forEach(e => {
//         console.log(e)
//     })
// })

//print through forOF
// for (ar of arr) {
//     for (i of ar) {
//         console.log(i)
//     }
// }


// copy and spread operator

// let arr1 = ["john", 222, true]
// // let arr2 = arr1.slice(0) //copy through slice
// let arr2 = [...arr1] //copy through spread operator

// arr2.push("cena")

// console.log(arr1)
// console.log(arr2)


// Array destructuring

// let array1 = ["thomas", "john", "hitachi", "neo"]
// let [item1, item2, ...item3] = array1

// console.log(item1)
// console.log(item2)
// console.log(item3)

// Objects==============

// let obj = {
//     name: "john",
//     age: 20,
//     "last name": "cena",
//     fun: function () {
//         console.log("first")
//     },
//     arr: [10, 20, 30]
// }

// obj.key="item"
// let a ="key2"
// obj[a]="item2"
// console.log(obj)
// console.log(obj["last name"])
// obj.fun()
// console.log(obj.arr)


// forIN
// for (let i in obj) {
//     console.log(obj[i])
// }


// forOf
// for (let i of Object.keys(obj)) {
//     console.log(obj[i])
// }


// object inside array

// let arr = [
//     { user: 1, name: "neo" },
//     { user: 2, name: "hitachi" },
//     { user: 3, name: "goku" }
// ]

// for (let i in arr) {
//     console.log(arr[i])
// }

// for (let i of arr) {
//     console.log(i)
// }

// let [{ name }, { user }, { name: name3 }] = arr
// console.log(name)
// console.log(user)
// console.log(name3)


// functions inside function

// function fun() {
//     console.log("first");
//     function fun2() {
//         console.log("second")
//     }
//     fun2()
// }
// fun()

// lexical scope

// var a = 1
// function fun() {
//     // var a = 2
//     console.log("first", a);
//     function fun2() {
//         // var a = 3
//         console.log("second", a)
//     }
//     fun2()
// }
// fun()

// Debugger

// function fun() {
//     debugger;
//     for (let i = 1; i <= 5; i++) {
//         console.log(i)
//     }
// }
// fun()


// sets

// const arr = [10, 20, 30, 40, 50]
// console.log(arr)
// console.log("length", arr.length)

// const s = new Set([10, 20, 30, 40, 50,])
// s.add(60)
// s.add("hello")
// console.log(s)s


// length = 0 // by default length will be 0
// for (const element of s) {
//     length++;
// }
// console.log("length", length)


// Map

// var map1 = new Map([[1, "one"],
// ["fName", "John"],
// ["numbers", [0, 1, 2, 3, 4, 5]]])

// console.log(map1);
// console.log(map1.get("fName"));

// var k =map1.keys();
// for(var key of k){
//     console.log(key)
// }

// var map2 = new Map();
// map2.set("lName","cena")
// console.log(map2)

// This keyWord====

// var obj={
//     fName:"john",
//     age:10,
//     fun: function () {
//         console.log(this.fName)
//     }
// }
// obj.fun()

// function fun() {
//     console.log(this)
// }
// fun()

// New keyWord==

// function fun() {
//     let fName = "john";
//     this.fName = fName
// }
// var obj = new fun()
// console.log(obj.fName)

// Constructor Function====

// function User(name) {
//     this.name = name
// }
// let person = new User ("jack")
// console.log(person.name)


// function User(name) {
//     if(!new.target){
//         return new User(name)
//     }
//     this.name = name
// }
// let person = User ("jack")
// console.log(person.name)


// Symbol======

// A Symbol respresents a unique identifier.

// let sym = Symbol("id");
// console.log(sym)
// console.log(sym.toString())
// console.log(sym.description)

// let id = Symbol("id");
// let obj = {
//     name: "goku",
//     age: 20,
//     // [id]: 1
// }

// obj[id]=1

// console.log(obj)

// for (let key in obj) {
//     console.log(key)
// }

// Recursion=============


// function printNumRecursive(n) {
//     if(n<=10){
//         console.log(n)
//         printNumRecursive(n+1)
//     }
// }
// printNumRecursive(1)

// factorial
// 5 = 5*4*3*2*1 = 120
// 4 = 4*3*2*1 = 24

// function fact(n) {
//     if (n == 0) {
//         return 1;
//     }else{
//         return n*fact(n-1)
//     }
// }

// console.log(fact(5))
// console.log(fact(4))


// Syncronous Asynchronous Javascript

// JS is Syncronous
// console.log("This")

// console.log("Synchronous")

// console.log("Is")


// Asynchronous Javascript=
// console.log("This")

// setTimeout(() => {
//     console.log("Asynchronous")
// }, 1000);

// console.log("Is")

// setTimeout(fun, 5000)

// setTimeout(() => {
// console.log("Is")

// }, 3000);

// console.log("This")

// function fun() {
//     console.log("Asynchronous")
// }

// Callback======
// one function is pass as a argument in another function

// function callback(e) {
//     console.log(e)
// }

// function add(a, b, cb) {
//     let sum = a + b
//     cb(sum)
// }
// add(5, 10, callback)


// Callbeck Hell=====

// function loadingData(callback) {
//     setTimeout(() => {
//         console.log("1) Loading Data...")
//         callback()
//     }, 2000);
// }
// function collectingData(callback) {
//     setTimeout(() => {
//         console.log("2) Collecting Data...")
//         callback()
//     }, 2000);
// }
// function approvingData(callback) {
//     setTimeout(() => {
//         console.log("3) Approving Data...")
//         callback()
//     }, 2000);
// }
// function approvedData() {
//     console.log("4) Approved Data")
// }


// callback hell
// loadingData(function () {
//     collectingData(function () {
//         approvingData(function () {
//             approvedData()
//         })
//     })
// })


// Promise======


// function loadingData() {
//     return new Promise((resolve, reject) => {
//         console.log("Processing...")
//         setTimeout(() => {
//             console.log("1) Loading Data...")
//             resolve()
//         }, 2000);
//     })

// }
// function collectingData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2) Collecting Data...")
//             reject("error: not full filled")
//         }, 2000);
//     })
// }
// function approvingData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("3) Approving Data...")
//             resolve()
//         }, 2000);
//     })
// }
// function approvedData() {
//     console.log("4) Approved Data")
// }


// promise then.catch

// loadingData().then(collectingData).then
// (approvingData).then(approvedData).catch((err)=>{
//     console.log(err)
// })

// asycn await

// async function aw() {
//     await loadingData();
//     await collectingData();
//     await approvingData();
//     await approvedData();
// }

// aw().catch((err)=>{
//     console.log(err)
// })

// Setinterval========

// let n = 0
// var interval = setInterval(fun, 1000)
// function fun() {
//     n = n + 1
//     // console.log(n)
// }

// function fun() {
//     let date = new Date().toLocaleTimeString();
//     console.log(date)
// }

// setTimeout(() => {
//     clearInterval(interval)
// }, 3000);


// Call Bind or apply====

// function fun(age, gender) {
//     console.log(this.fName, age, gender)
// }

// var obj1 = {
//     fName: "john",
// }
// var obj2 = {
//     fName: "kenny",
// }

// fun.call(obj1, 15, "male")
// fun.apply(obj1, [15, "male"])
// var a = fun.bind(obj1, [15, "male"])
// console.log(a)

// Property Flags and Descriptor===========

// let emp = {}

// emp.name = "john"

// console.log(Object.getOwnPropertyDescriptor(emp, "name"))

// Object.defineProperty(emp, "age", {
//     value: 20,
//     writable: true,
//     configurable: true,
//     enumerable: true
// })


// emp.age="25" //writable
// delete emp.age //configurable

//enumerable
// for (let k in emp) {
//     console.log(k)
// }

// console.log(Object.getOwnPropertyDescriptor(emp, "age"))


// Proto=====

// var obj={
//     fName:"john",
// };

// var obj2={
//     lName:"smith",
// };

// obj2.__proto__=obj
// console.log(obj2.fName)

// var obj = {
//     fName: "john"
// }

// var obj2 = Object.create(obj)
// obj2.lname="smith"

// console.log(obj2)

// Prototype=============

// function Person(name, age) {
//     // let person = Object.create(Person.prototype)
//     this.name = name
//     this.age = age
//     // return person
// }

// Person.prototype.greet = function () {
//     console.log(`hello ${this.name}`)
// }

// let user = new Person("Kenny", 15)
// user.greet()
// console.log(user)

// console.log(Person.prototype)

// 02/05/2024---------

// Class======


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`hello ${this.name}`)
//     }
// }
// let user = new Person("Kenny", 15)
// user.greet()
// console.log(user)

// Inheritance===========

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} make a noise`)
//     }
//     sing() {
//         console.log(`${this.name} sing a song`)
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name);
//     }
// }

// class Cat extends Animal {
//     constructor(name){
//         super(name);
//     }
// }

// let d = new Dog('Tommy');
// d.speak()

// let c = new Cat('Rozy');
// c.sing()


// Static========

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a noise`)
//     }
//     static sing(name) {
//         console.log(`${name} sing a song`)
//     }
// }
// let c = "huskey"
// Animal.sing(c)

// class Game {
//     static score = 0;

//     constructor(game) {
//         this.game = false;
//     }
//     start() {
//         this.game = true;
//         console.log('this game has started')
//     }
//     end() {
//         this.game = false;
//         console.log('this game has over')
//         Game.updatedScore()
//     }

//     static updatedScore() {
//         Game.score++;
//         console.log(`Score: ${Game.score}`)
//     }
// }

// const g = new Game();

// g.start()
// g.end()
// g.end()
// g.end()
// g.end()
// g.end()


// Public and Private===========

// class BankAccount {
//     #balance = 0;

//     deposite(amount) {
//         this.#balance += amount;
//         console.log(`Your account is credit INR ${amount} ,new balance is INR ${this.#balance}`)
//     }
//     withdraw(amount) {
//         if (amount > this.#balance) {
//             console.log('insuficient fund')
//         } else {
//             this.#balance -= amount;
//             console.log(`Rs. ${amount} debited from your A/C ,new balance is INR ${this.#balance}`)
//         }
//     }

//     balance(){
//         console.log(this.#balance)
//     }
// }

// const account = new BankAccount()
// account.deposite(10000);
// account.withdraw(2200);
// account.balance()


// Fetch API================
// GET-Methd==========

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Network is not responding')
//         }
//         return res.json();
//     })
//     .then(data => data.forEach((e) => {
//         console.log((e.id))
//         console.log((e.title))
//     }))
//     .catch(error => console.log("error"))


// Post-Method=======
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'hello',
//         body: 'ok',
//         userId: 1,
//     }),
//     headers: {
//         'content-type': 'application/json;charsetaUTF-8',
//     },
// })
//     .then((res) => res.json())
//     .then((json) => console.log(json));


// PUT-Method==========

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: 'hello',
//         body: 'ok',
//         userId: 1,
//     }),
//     headers: {
//         'content-type': 'application/json;charsetaUTF-8',
//     },
// })
//     .then((res) => res.json())
//     .then((json) => console.log(json));

// DELET-Method===============

// fetch('https://jsonplaceholder.typicode.com/posts/101', {
//     method: "DELETE"
// })


// DOM=====

// Selectors in DOM=====

// getElementByTagName()========
// var a = document.getElementsByTagName('li');
// console.log(a)

// getElementByClassName()========
// var a = document.getElementsByClassName('hero');
// console.log(a)

// getElementById()=========
// var a = document.getElementById('name');
// console.log(a)

// querySelector()=======
// var a = document.querySelector('.hero');
// console.log(a)

// querySelectorAll()
// var a = document.querySelectorAll('.hero');
// console.log(a)

// DOM travesrsal======


// append child======

// const ul = document.querySelector('ul');
// const newE =document.createElement('li');
// newE.textContent="hitachi"
// ul.appendChild(newE)

//remove==========

// const ul = document.querySelector('li')
// ul.remove();

// replace child============

// const list = document.querySelector('ul');
// const childToChange = list.children[1];
// const newLi = document.createElement('li');
// newLi.textContent = "hitachi";
// list.replaceChild(newLi, childToChange)

//Parent node===========
// var parent = document.querySelector('li');
// var p = parent.parentNode;
// console.log(p)


// PreviousElementSibling=============

// var a = document.querySelectorAll('.hero');
// if (a.previousElementSibling == null) {
//     console.log("sbiling are not there")
// } else {
//     console.log(a.previousElementSibling)
// }
// a.forEach((e)=>{console.log(e.previousElementSibling)}) //ALL

// PreviousSibling============
// var a = document.querySelector('.hero');
// console.log(a.previousSibling)

// nextSibling===========
// var a = document.querySelector('.hero');
// console.log(a.nextSibling)

// NextElementSibling============

// var a = document.querySelectorAll('.hero');
// if (a.nextElementSibling == null) {
//     console.log("sbiling are not there")
// } else {
//     console.log(a.nextElementSibling)
// }
// a.forEach((e)=>{console.log(e.nextElementSibling)}) //ALL


// first-child========

// var fChild = document.querySelector('ul')
// console.log(fChild.firstChild)

// var fChild = document.querySelector('ul')
// console.log(fChild.firstElementChild)

// last-child=======

// var lChild = document.querySelector('ul')
// console.log(lChild.lastChild)

// var lChild = document.querySelector('ul')
// console.log(lChild.lastElementChild)

// innertext & textconten=======

// var a = document.querySelector('h1').innerText;
// console.log(a) //text-hidden

// var b = document.querySelector('h1').textContent;
// console.log(b)

// var target = document.querySelector('.para');

// var newE = '<b> ONE5 </b>'

// target.insertAdjacentHTML('afterbegin', newE)

// inner & outer HTML===========

// innerHTML==========
// let a = document.querySelector('.hero');
// a.innerHTML = '<b>hitachi</b>'
// console.log(a.innerHTML)


// outerHTML=========
// let a = document.querySelector('.hero');
// a.outerHTML = '<li><b>hitachi</b></li>'
// console.log(a.outerHTML)

// Styling========

// document.body.style.backgroundColor = "aqua"
// let a = document.querySelector('h1')
// a.style.color = "orange"

// get & set attributes=========

// let hero = document.querySelector('#hero');
// console.log(hero.getAttribute('about'))

// hero.setAttribute('example',123)
// console.log(hero.outerHTML)

// for (const attr of hero.attributes) {
//     console.log(`${attr.name} : ${attr.value}`)
// }

// Animation=======

// function myMove() {
//     let pos = 0;
//     const e = document.getElementById('inside');
//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 348) {
//             clearInterval(id)
//         }
//         pos++;
//         e.style.top = pos + 'px';
//         e.style.left = pos++ + 'px';
//     }
// }


// onclick==========

// function changeColor() {
//     var div = document.getElementById('myDiv')
//     div.style.backgroundColor="yellow"
// }
// onMouseOver==========
// function onMouseOver() {
//     var div = document.getElementById('myDiv')
//     div.style.backgroundColor="purple"
// }

// onMouseOut===============
// function onMouseOut() {
//     var div = document.getElementById('myDiv')
//     div.style.backgroundColor="pink"
// }

// onMouseDown===============

// function changeColorDown() {
//     var div = document.getElementById('myDiv')
//     div.style.backgroundColor="green"
// }

// onMouseUp===============
// function changeColorUp() {
//     var div = document.getElementById('myDiv')
//     div.style.backgroundColor="gray"
// }

// add event listner======

// document.getElementById('btn').addEventListener('mouseover', fun)

// function fun() {
//     let div = document.getElementById('myDiv')
//     div.style.backgroundColor = "yellow"
// }

// bubbling==============
// const body = document.getElementsByTagName('body')[0];
// const div = document.getElementsByTagName('div')[0];
// const span = document.getElementsByTagName('span')[0];
// const button = document.getElementsByTagName('button')[0];

// body.addEventListener('click',(event)=>{
//     event.stopPropagation()
//     console.log("body was clicked")
// })
// div.addEventListener('click',(event)=>{
//     event.stopPropagation()
//     console.log("div was clicked")
// })
// span.addEventListener('click',(event)=>{
//     event.stopPropagation()
//     console.log("span was clicked")
// })
// button.addEventListener('click',(event)=>{
//     event.stopPropagation()
//     console.log("button was clicked")
// })


// Event Delegation===========

// const div = document.getElementsByTagName('div')[0];

// div.addEventListener('click',(event)=>{
//     if(event.target.tagName == 'BUTTON'){
//         console.log('btn was clicked')
//     }
//     else if(event.target.tagName == 'SPAN'){
//         console.log('span was clicked')
//     }else{
//         console.log('div was clicked')
//     }
// })

// pop ups=====

// alert('hello');
// prompt('hello, how are you?');
// confirm('are you 18+?');

/*alert('hello');
prompt('hello, how are you?');
confirm('are you 18+?');*/
