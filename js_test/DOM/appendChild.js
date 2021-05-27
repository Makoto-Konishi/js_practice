const target = document.getElementById('target');
const newDiv = document.createElement('div');
newDiv.id = 'test';
newDiv.classList.add('red');
newDiv.textContent = 'テスト';

// つけたい場所を指定してその場所につける
// target.appendChild(newDiv);

// 同じ階層に作るにはparentNodeを挟む
target.parentNode.appendChild(newDiv);


// 同じ階層にある要素の間に作る方法

const targetList = document.getElementById('divlist');
// 間に挟みたい箇所を指定する
const reference = document.querySelector('.div2');

// 新しくdivタグを作る
const newElement = document.createElement('div');
// クラス名を追加
newElement.classList.add('div4');
// テキストを追加
newElement.textContent = '追加しました';
// div2の前にnewElementを追加する
targetList.insertBefore(newElement, reference);

