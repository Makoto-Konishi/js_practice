// const fruits = new Array();
const fruits = [ // シンタックスシュガー（こっちで使うことが多い）
 'りんご','バナナ'
]; 

console.log(fruits);
// =>  [ "りんご", "バナナ"]

// 配列の末尾に要素を追加する

fruits.push('みかん');
console.log(fruits);
// =>  [ "りんご", "バナナ", "みかん"]

// callback 引数が関数
// 与えられた関数を配列の各要素に対して一度ずつ実行する
fruits.forEach(function(input){
  console.log(input);
});

// Array.filter
const scores = [10, 20, 30, 40];

const newScores = scores.filter((value) => {
  return value >= 30
});

console.log(newScores);
// => [30, 40]


// Array.find
const members = ['本田', '香川', '長友'];

const member = members.find((value) => value === '長友' );

console.log(member);
// => 長友


// Array.map 配列を元に新しい配列をつくる

const userList = [10, 20, 30, 40];

const userIdList = userList.map((value) => {
  return `user_${value}`;
});

console.log(userIdList);
// => ["user_10", "user_20", "user_30", "user_40"]
