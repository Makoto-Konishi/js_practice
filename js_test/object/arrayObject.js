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
