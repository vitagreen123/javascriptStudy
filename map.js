// map 메소드는 요소를 일괄적으로 변경하는 데에 효과적이다.
// map은 콜백 함수의 리턴을 모아서 새로운 배열을 만드는 것이 목적이다.
// str은 arr 배열의 요소 하나하나를 의미한다.

const arr = [ 'foo', 'hello', 'diamond', 'A' ];
const arr2 = arr.map(function(str) {
  return str.length
});
console.log(arr2);

const list = [ 1, 2, 3, 4 ];
const new_list = list.map(function(n) {
  return n + 3;
});
console.log(new_list);

users =[
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
]

// age가 30 미만인 user
const users_under_30 = users.filter(function (n){
  return n.age < 30;
});
// age가 30 이상인 user
const users_above_30 = users.filter(function (n){
  return n.age >= 30;
});

//나이만 다시 모아서 출력
const ages = users_under_30.map(function(n) {
  return n.age;
});
console.log(ages);

//이름만 다시 모아서 출력
const names = users_above_30.map(function(n) {
  return n.name;
});
console.log(names);














// http://bblog.tistory.com/300