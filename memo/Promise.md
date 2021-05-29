# Promise

## 非同期と同期の違い
- 同期は処理を待って、処理が終わるまで続きが実行できない
- 非同期は、処理を待っている間に、別の処理を新たにずらして動かす(callbackとか)

## Promiseとは

[![Image from Gyazo](https://i.gyazo.com/9daeee87d1a80fb49d99fe10127abdee.png)](https://gyazo.com/9daeee87d1a80fb49d99fe10127abdee)
オブジェクトと非同期処理、例外処理をくっつけたもの
- 状態は処理がうまくいったかどうか

```js
// 関数
function test1(){
  return '関数1';
}

console.log(test1());

// promise
// ①状態(ok/ng)と値
// ②Promiseチェーン

function promiseTest1(){
  // new Promiseでpromiseを返せる
  // promiseの中にcallback関数を返す
  // 引数が状態になる ok, ng
  return new Promise((ok) => {
    ok('プロミス1です');
  });
}

console.log(promiseTest1());

const promiseTest2 = new Promise( ok => {
  ok('プロミス1です');
});
console.log(promiseTest2);

function testPromise3(input){
  return new Promise((ok)=> {
    ok(`プロミス${input}です`);
  });
}

console.log(testPromise3('たろう'));
```

## Promiseチェーン
[![Image from Gyazo](https://i.gyazo.com/acd732769aeb43294f7006911b3b2667.png)](https://gyazo.com/acd732769aeb43294f7006911b3b2667)
結果をつなげていく
- resolveがOK
- rejectがダメ
- `.then`で段階的に処理をつなげていく


