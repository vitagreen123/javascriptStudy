function addMaker(a) {
  return function(b) {
    return a + b;
  }
}

console.log(addMaker(10)(5));   // 10 + 5 = 10

/* addMaker(10)의 결과는 function(b) { return 10 + b; } 와 같고 함수다.
   ( function(b) { return 10 + b; })(5)와 같으므로 15가 된다. */

var add5 = addMaker(5);
console.log(add5(3)); // 5 + 3 = 8

// v1과 f1처럼 함수는 값을 리턴할 수 있고 v2와 f2처럼 함수는 값으로도 다루어질 수 있다.
var v1 = 100;
var v2 = function() {};
function f1() { return 100 };
function f2() { return function() {}; }

