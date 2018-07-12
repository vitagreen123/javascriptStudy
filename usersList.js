
users =[
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 }
]

// users 중에 age가 30 미만인 users[i]만 모아서 몇명인지를 출력하라.
const under30 = [];
for(let i=0, len = users.length; i < len; i++){
  if(users[i].age < 30){
    under30.push(users[i]);
  }
}
console.log(under30.length);    // 4

// 그들의 나이만 다시 모아 출력하라.
var ages = [];
for(let i=0, len = under30.length; i < len; i++){
  ages.push(under30[i].age);
}
console.log(ages);  // [ 25, 28, 27, 24 ]

// 나이가 30 이상인 users[i]만 모아서 몇명인지를 출력하라
const above30 = [];
for(let i=0, len=users.length; i<len; i++){
  if(users[i].age > 30){
    above30.push(users[i]);
  }
}
console.log(above30.length);  // 3

// 그들의 이름만 다시 모아 출력하라
const names =[];
for(let i=0, len=above30.length; i<len; i++){
  names.push(above30[i].name);
}
console.log(names); // [ 'ID', 'BJ', 'JM' ]






