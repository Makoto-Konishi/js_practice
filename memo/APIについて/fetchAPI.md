# fetch API

## fetchとは
- Promiseがベースになっている
- options fetchとしてAPIサーバーにリクエストを送り、データとしてレスポンスが返ってくる
```js
const url = 'https://dog.ceo/api/breeds/image/random';
// 短期間に集中的にアクセスするのはNG 1~2秒は間隔を開けて使うようにする

const options = {
  method: 'GET'
}

const fetchTest1 = fetch(url, options);

console.log(fetchTest1);
// => Promise {<pending>}
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response

// 返り値はPromise
// この状態では中身が確認できない

// APIがJSONで取得できるなら  response.json()でパースする
const fetchTest2 = fetch(url, options)
.then( response =>  response.json() );

console.log(fetchTest2);
// Promise {<pending>}
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
```

### パース
[![Image from Gyazo](https://i.gyazo.com/bd29d0b7ab300b9a02172da59c4d197f.png)](https://gyazo.com/bd29d0b7ab300b9a02172da59c4d197f)
- `resoponse.json()は、resoponse.json.parseとなっており、json→objectになる`
