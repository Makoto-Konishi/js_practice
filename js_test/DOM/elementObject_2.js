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

// タグの中の文字を追加する
input.textContent = 'テストです';
//=> <input id="test" type="text" placeholder = "あああ" name = 'test'>テストです</input>

console.log(input);

// タグも作れる
const anchor = document.createElement('a');
anchor.href = 'https://google.com';
anchor.target = '_blank';
//=> <a href = 'https://google.com' target = '_blank'></a> 

// document.createElementでも作れる
console.log(anchor);
