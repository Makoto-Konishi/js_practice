// const test = new Object();

// 簡単な書き方
const test = {
  test1:10,
  test2:20,
  test3:30
};

console.log(test);

// {
//   "test1": 10,
//   "test2": 20,
//   "test3": 30
// }

// Object.values
// 指定されたオブジェクトが持つ列挙可能なプロパティの値を、 for...in ループで提供される場合と同じ順序で配列にして返す

console.log(Object.values(test));
// => [10, 20, 30]

for(value of Object.values(test)){
  console.log(value);
};
// 10
// 20
// 30
