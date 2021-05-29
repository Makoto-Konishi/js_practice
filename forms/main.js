// 現在の文書のformを全て含んだ配列で返す
const formTest = document.forms;
console.log(formTest);

// form_test1の中身だけ返す
const formTest1 = document.forms.form_test1;
console.log(formTest1);

const formTestYourName = document.forms.form_test1.your_name;
console.log(formTestYourName);
// => <input id="" class="" type="text" name="your_name" value="あああ">

const formTestYourNameValue = document.forms.form_test1.your_name.value;
console.log(formTestYourNameValue);
// => あああ

// <input id="" class="" type="text" name="your_name" value="あああ">に入力した文字数を、<div id="your_name_value"></div>に表示する
formTestYourName.addEventListener('input',()=>{
  let yourNameValue = document.getElementById('your_name_value');
  yourNameValue.textContent = formTestYourName.value.length;
})

const preview = document.forms.form_test1.preview;
// ファイルアップロード
const img = document.forms.form_test1.image_file;
// ファイルオブジェクトをイベントオブジェクトで受け取る
img.addEventListener('change', (e)=> {
  // targetの中のfilesの中にオブジェクト形式で格納されている
  // console.log(e.target.files[0]);
  const uploadFile = e.target.files[0];

  // ファイルを表示させる
  const reader =  new FileReader();
  reader.addEventListener('load', ()=> {
    // ファイルを読み込んだ結果 result
    // Base64をimgのsrcに入れる
    preview.src = reader.result; 
  })
  reader.readAsDataURL(uploadFile);
})

