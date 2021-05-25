// for 繰り返しの回数を指定
//  for in あまり使われない
// for of (ES6) 使いやすい

const scores = [10, 20, 30];

// one of them
for(score of scores){
  console.log(score);
};
//=> 10
//=> 20
//=> 30

// for(初期値;繰り返し条件;増減 ++ --)
for (let i = 0; i < 10; i++){
  console.log(i)
}
// => 1
// => 2
// ...
// => 9
