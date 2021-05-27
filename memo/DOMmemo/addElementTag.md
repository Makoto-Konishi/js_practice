# 要素タグ/属性の追加

[![Image from Gyazo](https://i.gyazo.com/c1f8c48ef1f3153ae248793804b1b3c7.png)](https://gyazo.com/c1f8c48ef1f3153ae248793804b1b3c7)

## 属性の追加
- 取得した要素に「.」で繋げて属性を追加できる
- setAttributeよりもこっちのほうがベスト
- `要素.属性`で追加
- `要素.setAttribute`でも追加でできる
```js
const input = document.getElementById('test');
// elementはタグによって色々ある

// 取得した要素に「.」で繋げて属性を追加できる
// こっちでつけた方が推奨されている
input.placeholder = "あああ";
input.name = 'test';
//=> <input id="test" placeholder = "あああ" name = 'test'>

// setAttributeでも属性を追加できる
input.setAttribute('type', 'text');
//=> <input id="test" type="text" placeholder = "あああ" name = 'test'>
console.log(input);
```

## タグの中の文字の追加
- `要素.textContent`で追加
```js

input.textContent = 'テストです';
//=> <input id="test" type="text" placeholder = "あああ" name = 'test'>テストです</input>

console.log(input);
```

## タグの追加
- `document.createElement('a')`で追加
```js
const anchor = document.createElement('a');
anchor.href = 'https://google.com';
anchor.target = '_blank';
//=> <a href = 'https://google.com' target = '_blank'></a> 

console.log(anchor);

```
