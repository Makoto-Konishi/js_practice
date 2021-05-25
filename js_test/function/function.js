// ①
/// インプット引数なし
/// アウトプットなし

function test(){
  console.log('テスト')
}

test();
// => テスト


// ②
/// インプット引数あり
/// アウトプット戻り値なし

const comment = 'コメント';
function getComment(string){
  console.log(string);
}

getComment(comment);
// => コメント


// ③
/// インプット引数なし
/// アウトプット戻り値あり

function getNumberOfComment(){
  return 5; // 画面を表示する処理はないのでこれだけでは表示しない
}

console.log(getNumberOfComment());
// => 5

const NumberOfComment = getNumberOfComment(); // 関数を代入

console.log(NumberOfComment);
// => 5


// ④
/// インプット 2つ
/// アウトプットもあり
 
function sumPrice(int1, int2){
  let int3 = int1 + int2;
  return int3;
}

const total = sumPrice(3,5);

console.log(tatal);

