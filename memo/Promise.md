# Promise

## 非同期と同期の違い
- 同期は処理を待って、処理が終わるまで続きが実行できない
- 非同期は、処理を待っている間に、別の処理を新たにずらして動かす(callbackとか)

## Promiseとは

[![Image from Gyazo](https://i.gyazo.com/9daeee87d1a80fb49d99fe10127abdee.png)](https://gyazo.com/9daeee87d1a80fb49d99fe10127abdee)
オブジェクトと非同期処理、例外処理をくっつけたもの
- 処理がうまくいったかどうかの状態
- OKの場合の値と、NGの場合の値をそれぞれ持つ

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
```js
// Promiseチェーン
// Promise.then(ok_callback, ng_callback)
// Promise.then((ok_value) => {}, (ng_reason) => {})

function promiseTest4(pay){
  return new Promise(ok => {
    let change = pay - 100;
    ok(change);
  });
}

promiseTest4(300).then(change1 => {
  console.log(change1);
  // => 200
  return promiseTest4(change1);// Promiseとして再び返して繋げていく(値を受け渡す)
}).then(change2 => {
  console.log(change2);
  // => 100
});
```

## Promise.catch
```js
// Promise.catch(ng_callback) // NGはcatch  
// Promise.catch((ng_reason) => {}) // NGはcatch  
// 一番最後をcatchとしておけばどこでエラーが出てもエラーを捕まえられる

// ng も追加

function promiseTest5(pay){
  return new Promise((ok, ng) => {
    if(pay > 100){
    let change = pay - 100;
    ok(change);
    }
    ng('お金がたりません');
  });
}
console.log(promiseTest5(80).catch( e =>{console.log(e)}));

promiseTest5(180).then(change3 => {
  console.log(change3);
  // => 80
  return promiseTest5(change3);
}).then(change4 => {
  console.log(change4);
}).catch(e => console.log(e));
    // => お金が足りません

```


