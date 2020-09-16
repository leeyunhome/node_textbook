// 템플릿 문자열
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + " 더하기 " + num2 + "는 '" + result + "'";
console.log(string1);

var num3 = 1;
var num4 = 2;
const result2 = 3;
const string2 = `${num3} + ${num4}는 '${result2}'`;
console.log(string2);

var sayNode = function () {
  console.log("Node");
};
var es = "ES";
var oldObject = {
  sayJS: function () {
    console.log("JS");
  },
  sayNode: sayNode,
};
oldObject[es + 6] = "Fantastic";
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6);

const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode,
  [es + 6]: "Fantastic",
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    var that = this; // relationship1을 가리키는 this를 that에 저장
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();
