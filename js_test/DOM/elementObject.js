// Element.classList
// add()やremove()を用いてオブジェクトを変更する

// addで足したいクラス名を記述する

// const test = document.getElementById('test');

//  idがテストのものを取得(返り値はelement)→classListで取得可能
const test = document.getElementById('test').classList.add('red');
// 返り値 Element.classList.add, remove, toggle
// test.classList.add('red');
// console.log(test);

// const testLists = document.querySelectorAll('.test_list');
// console.log(testLists);

// // removeでクラスを取り除く
// const testList = document.querySelector('.test_list');
// testList.classList.remove('blue')
// console.log(testList);
