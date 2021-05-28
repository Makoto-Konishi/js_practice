'use strict';

// // DOMContentLoaded
// document.addEventListener('DOMContentLoaded',() => {
//   // setInterval 何秒おきにずっと実行する
//   setInterval(() => {
//     let target = currentIndex + 1;
//     if (target === images.length) {
//       target = 0;
//     }
//     document.querySelectorAll('.carousel__thumbnails > li')[target].click();
//     console.log(currentIndex);
//   }, 2000);
// });

// window.onload = 関数
// load
window.addEventListener('load',() => {
  //setInterval(() => {}, 1000 * 60 * 60 * 24 ); //1000=1秒 10秒 1分
  setInterval(() => {
   let target = currentIndex + 1;
  //let target = Math.floor(Math.random() * images.length);
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();
  }, 2000);
});

//即時関数 設定と同時に実行する, 以前はvar,現在はlet const 
(function immediate(){
  console.log('即時関数です');
})();

const images = [
  'images/image000.jpg',
  'images/image001.jpg',
  'images/image002.jpg',
  'images/image003.jpg',
  'images/image004.jpg',
  'images/image005.jpg',
  'images/image006.jpg',
];

// 画像の順番を把握する変数(中身が変わるため変数)
let currentIndex = 0;

const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];

// 配列を扱う forEach, for of

for( let [index, image] of images.entries()){

  // listタグとimageタグを作る
  const img = document.createElement('img');
  img.src = image;

  const li = document.createElement('li');
  if (index === currentIndex) {
    li.classList.add('current');
  }

  // clickの挙動をeventListenerで作る
  li.addEventListener('click', () => {
    mainImage.src = image;
    mainImage.classList.add('active');

    setTimeout(() => {
      mainImage.classList.remove('active');
    }, 800); // ミリ秒数 1000=1秒(0.8秒)
    
    const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
    thumbnails[currentIndex].classList.remove('current');
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');
  });
  
  // タグを作った状態だけでは、画面に表示されていないのでタグをくっつける
  li.appendChild(img);
  document.querySelector('.carousel__thumbnails').appendChild(li);
}

const next = document.getElementById('carousel__next');
next.addEventListener('click', () => {
  let target = currentIndex + 1;
  if (target === images.length) {
    target = 0;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});

const prev = document.getElementById('carousel__prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if (target < 0) {
    target = images.length - 1;
  }
  document.querySelectorAll('.carousel__thumbnails > li')[target].click();
});


