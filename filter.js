// filter 메소드는 이름 그대로 요소들을 걸러내는 것이 목적이다.
// forEach 처럼 자동으로 반복문을 실행한다.
// n의 경우 arr1 배열의 요소들이 된다.
const arr1 = [ 4, 15, 377, 395, 400, 1024, 3000 ];
const arr2 = arr1.filter(function(n) {
  return n % 5 == 0;
});
console.log(arr2);

users =[
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
]

const users_under_30 = users.filter(function (n){
  return n.age < 30;
});
console.log(users_under_30.length); // 4

const users_above_30 = users.filter(function (n){
  return n.age >= 30;
});
console.log(users_above_30.length); // 3



/* filter 함수에는 for도 있고 if도 있다.
   function은 true인지 false인지를 filter의 if에게 전달하는 일만 한다. */




// 도서 "함수형 자바스크립트 프로그래밍"
// http://bblog.tistory.com/300