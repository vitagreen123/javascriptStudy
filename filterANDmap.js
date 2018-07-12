// 함수의 리턴값을 바로 다른 함수의 인자로 사용하면 변수 할당을 줄일 수 있다.
// filter 함수의 결과가 배열이므로 map의 첫 번째 인자로 바로 사용 가능하다.
// map(배열, 콜백함수)
// filter는 간추리고, map은 뽑아낸다.
// 배열.length => 배열의 길이

const users =[
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
]

//////함수 중첩 (원래 있던 .filter 사용)
//age가 30미만인 유저의 나이만 모아서 출력하시오.
const ages = users.filter(function(n){
  return n.age < 30;
}).map(function(m){
  return m.age;
});
console.log(ages);
//age가 30이상인 유저의 이름만 모아서 출력하시오.
const names = users.filter(function(n){
  return n.age >= 30;
}).map(function(m){
  return m.name;
})
console.log(names);


//////함수 중첩 (만들어진 filter, map 함수 사용)
/*****************/
function filter(list, predicate) {
  const new_list = [];
  for (let i = 0, len = list.length; i < len; i++) {
    if (predicate(list[i])) new_list.push(list[i]);
  }
  return new_list;
}
function map(list, iteratee) {
  const new_list = [];
  for (let i = 0, len = list.length; i < len; i++) {
    new_list.push(iteratee(list[i]));
  }
  return new_list;
}
/*****************/
//// 중첩 1단계
//age가 30미만인 유저의 나이만 모아서 출력하시오.
const ages_2 = map(
  filter(users, function(n){ return n.age < 30; }),
  function(m) { return m.age; }
)
console.log(ages_2);

//age가 30이상인 유저의 이름만 모아서 출력하시오.
const names_2 = map(filter(users, function(n){
  return n.age >= 30;
}), function(m){
  return m.name;
});
console.log(names_2);



//// 중첩 2단계 (변수 하나도 없이 만들기)
//age가 30미만인 유저의 나이만 모아서 출력하시오.
function consoleLog(value){
  console.log(value.length);
  return value;
}

consoleLog(
  map(filter(users, function(n){
    return n.age < 30;
  }), function(m){
    return m.age;
  })
);

console.log(
  consoleLog(
    map(filter(users, function(n){
      return n.age >= 30;
    }), function(m){
      return m.name;
    })
  )
);
