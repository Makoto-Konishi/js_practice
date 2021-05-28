'use strict';

{
const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

// forEach 複数の値を処理する

tabLabels.forEach( clickedLabel => {
  clickedLabel.addEventListener('click', (e) => {
    e.preventDefault();

    // aタグの全てのactiveを外す
    tabLabels.forEach(label => {
      label.classList.remove('active');
    });
    // clickされたラベルにだけactiveをつける
    clickedLabel.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
    });

    document.getElementById(clickedLabel.dataset.id).classList.add('active');

  })
});
}
