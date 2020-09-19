// 템플릿 문자열
// var num1 = 1;
// var num2 = 2;
// var result = 3;
// var string1 = num1 + " 더하기 " + num2 + "는 '" + result + "'";
// console.log(string1);

// var num3 = 1;
// var num4 = 2;
// const result2 = 3;
// const string2 = `${num3} + ${num4}는 '${result2}'`;
// console.log(string2);

// var sayNode = function () {
//   console.log("Node");
// };
// var es = "ES";
// var oldObject = {
//   sayJS: function () {
//     console.log("JS");
//   },
//   sayNode: sayNode,
// };
// oldObject[es + 6] = "Fantastic";
// oldObject.sayNode(); // Node
// oldObject.sayJS(); // JS
// console.log(oldObject.ES6);

// const newObject = {
//   sayJS() {
//     console.log("JS");
//   },
//   sayNode,
//   [es + 6]: "Fantastic",
// };
// newObject.sayNode();
// newObject.sayJS();
// console.log(newObject.ES6);

//page 70

// function add1(x, y) {
//   return x + y;
// }

// const add2 = (x, y) => {
//   return x + y;
// };

// const add3 = (x, y) => x + y;

// const add4 = (x, y) => x + y;

// function not1(x) {
//   return !x;
// }

// const not2 = (x) => !x;

// console.log(add1(1, 2));
// console.log(add2(2, 3));
// console.log(add3(2, 3));
// console.log(not1(1));
// console.log(not2(0));

// var relationship1 = {
//   name: "zero",
//   friends: ["nero", "hero", "xero"],
//   logFriends: function () {
//     var that = this; // relationship1을 가리키는 this를 that에 저장
//     this.friends.forEach(function (friend) {
//       console.log(this.name, friend);
//     });
//   },
// };
// relationship1.logFriends();

// const relationship2 = {
//   name: "zero",
//   friends: ["nero", "hero", "xero"],
//   logFriends() {
//     this.friends.forEach((friend) => {
//       console.log(this.name, friend);
//     });
//   },
// };
// relationship2.logFriends();

//page 72
// var candyMachine = {
//   status: {
//     name: "node",
//     count: 5,
//   },
//   getCandy: function () {
//     this.status.count--;
//     return this.status.count;
//   },
// };
// // console.log(candyMachine.getCandy());
// var getCandy = candyMachine.getCandy;
// var bidedgetCandy = getCandy.bind(candyMachine);;

// console.log(bidedgetCandy());
// console.log(bidedgetCandy());

// const candyMachine = {
//   status: {
//     name: "node",
//     count: 5,
//   },
//   getCandy() {
//     this.status.count--;
//     return this.status.count;
//   },
// };
// const {
//   getCandy,
//   status: { count },
// } = candyMachine;

// var bidedgetCandy = getCandy.bind(candyMachine);;
// console.log(bidedgetCandy());

// var array = ['nodejs', {}, 10, true]
// // var node = array[0];
// // var obj = array[1];
// // var number = array[2];

// const [node, obj, ,bool] = array;
// console.log(node, obj, bool);

//2.1.6 클래스

// var Human = function (type) {
//   this.type = type || "human";
// };

// Human.isHuman = function (human) {
//   return human instanceof Human;
// };

// Human.prototype.breathe = function () {
//   alert("h-a-a-a-m");
// };

// var Zero = function (type, firstName, lastName) {
//   Human.apply(this, arguments);
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;
// Zero.prototype.sayName = function () {
//   console.log(this.firstName + ' ' + this.lastName);
// }

// var oldZero = new Zero('human', 'Zero', 'Cho');
// console.log(Human.isHuman(oldZero)); // true

// class Human {
//   constructor(type = 'human') {
//     this.type = type;
//   }

//   static isHuman(human)
//   {
//     return human instanceof Human;
//   }

//   breathe () {
//     console.log('h-a-a-a-m');
//   }
// }

// class Zero extends Human {
//   constructor(type, firstName, lastName)
//   {
//     super (type);
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   sayName() {
//     super.breathe();
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// }

// const newZero = new Zero('human', 'Zero', 'Cho');
// console.log(Human.isHuman(newZero));
// console.log(newZero.sayName());
